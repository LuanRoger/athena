"use client";

import SubmitButton from "./upload-form/submit-button";
import { useMemo, useOptimistic, useState, useTransition } from "react";
import { showToastByActionResult } from "@/utils/toast";
import { useDropzone } from "react-dropzone";
import { FileIcon } from "lucide-react";
import { MAX_FILE_SIZE } from "@/constants";
import { createFileMetadataFromForm } from "@/app/actions/files-metadata";
import TagsInput from "./upload-form/tags-input";
import { createIfNotExist } from "@/app/actions/tags";
import { Tag } from "@/models";
import CancelButton from "./upload-form/cancel-button";

type NewFileFormProps = {
  onClose?: () => void;
};

export default function NewFileForm({ onClose }: NewFileFormProps) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "text/*": [".txt", ".md", ".csv", ".pdf"],
    },
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
  });
  const currentFile = useMemo(() => acceptedFiles[0], [acceptedFiles]);
  const [, startAction] = useTransition();
  const [tags, setTags] = useState<Tag[]>([]);
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
    setTags([]);

    if (onClose) {
      onClose();
    }
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

    setTags((prev) => [...prev, data]);
  }

  return (
    <div className="rounded-lg p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Novo upload</h2>
      <form className="flex flex-col gap-4" action={uploadActions}>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700">Nome do arquivo</label>
          <div
            {...getRootProps()}
            className="flex h-24 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-4 text-center transition-colors hover:border-blue-400"
          >
            <input name="file" {...getInputProps()} />
            {currentFile ? (
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <FileIcon size={20} />
                {currentFile.name}
              </span>
            ) : (
              <span className="text-sm text-gray-500">
                Arraste um arquivo ou clique para enviar
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-gray-700">
            Título
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="h-12 rounded-lg border border-gray-300 bg-white px-4 py-2 text-black focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="author" className="text-gray-700">
            Autor
          </label>
          <input
            id="author"
            type="text"
            name="author"
            className="h-12 rounded-lg border border-gray-300 bg-white px-4 py-2 text-black focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tags" className="text-gray-700">
            Tags
          </label>
          <TagsInput
            id="tags"
            tags={optimisticTags}
            onAddTag={(tag) => startAction(() => handleAddTag(tag))}
          />
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <SubmitButton>Enviar</SubmitButton>
        </div>
      </form>
    </div>
  );
}
