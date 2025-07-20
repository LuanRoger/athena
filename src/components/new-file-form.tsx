"use client";

import SubmitButton from "./submit-button";
import { useMemo, useOptimistic, useState, useTransition } from "react";
import { showToastByActionResult } from "@/utils/toast";
import { useDropzone } from "react-dropzone";
import { FileIcon } from "lucide-react";
import { MAX_FILE_SIZE } from "@/constants";
import { createFileMetadataFromForm } from "@/app/actions/files-metadata";
import TagsInput from "./tags-input";
import { createIfNotExist } from "@/app/actions/tags";
import { Tag } from "@/models";

export default function NewFileForm() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "text/*": [".txt", ".md", ".csv", ".pdf"],
    },
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
  });
  const currentFile = useMemo(() => acceptedFiles[0], [acceptedFiles]);
  const [, startAction] = useTransition();
  const [tags, addTags] = useState<Tag[]>([]);
  const [optimisticTags, addOptimisticTags] = useOptimistic<Tag[], string>(
    tags,
    (state, newTag) => [
      ...state,
      {
        id: -1,
        name: newTag,
        slug: "optimistic-temp-slug",
      },
    ],
  );

  async function uploadActions(formData: FormData) {
    const tagsId = tags.map((tag) => tag.id);
    const result = await createFileMetadataFromForm(formData, tagsId);
    showToastByActionResult(result, true);
  }

  async function handleAddTag(tag: string) {
    if (!tag) return;

    addOptimisticTags(tag);

    const newTagResult = await createIfNotExist(tag);
    showToastByActionResult(newTagResult, false, true);

    const { success, data } = newTagResult;
    if (!success || !data) {
      return;
    }

    addTags((prev) => [...prev, data]);
  }

  return (
    <form className="flex flex-col gap-2" action={uploadActions}>
      <fieldset className="fieldset">
        <div
          {...getRootProps()}
          className="card card-lg card-dash bg-primary text-primary-content"
        >
          <div className="card-body">
            <input name="file" {...getInputProps()} />
            <span className="inline-flex items-center gap-2">
              <FileIcon />
              {currentFile ? (
                <span className="text-sm">{currentFile.name}</span>
              ) : (
                <span className="text-sm">Arraste e solte um arquivo aqui</span>
              )}
            </span>
          </div>
        </div>

        <label className="fieldset-label">Titulo</label>
        <input type="text" name="title" className="input" />

        <label className="fieldset-label">Autor</label>
        <input type="text" name="author" className="input" />

        <TagsInput
          tags={optimisticTags}
          onAddTag={(tag) => startAction(() => handleAddTag(tag))}
        />
      </fieldset>
      <SubmitButton>Enviar</SubmitButton>
    </form>
  );
}
