"use client";

import SubmitButton from "./submit-button";
import { useActionState, useMemo } from "react";
import { showToastByActionResult } from "@/utils/toast";
import { useDropzone } from "react-dropzone";
import { FileIcon } from "lucide-react";
import { MAX_FILE_SIZE } from "@/constants";
import { createFileMetadataFromForm } from "@/app/actions/files-metadata";

export default function NewFileForm() {
  async function uploadActions(prevState: unknown, formData: FormData) {
    const result = await createFileMetadataFromForm(prevState, formData);
    showToastByActionResult(result, true);

    return result;
  }

  const [, formAction] = useActionState(uploadActions, {
    success: false,
    data: null,
  });
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "text/*": [".txt", ".md", ".csv", ".pdf"],
    },
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
  });
  const currentFile = useMemo(() => acceptedFiles[0], [acceptedFiles]);

  return (
    <form className="flex flex-col gap-2" action={formAction}>
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

        <label className="label">Titulo</label>
        <input type="text" name="title" className="input" />

        <label className="label">Autor</label>
        <input type="text" name="author" className="input" />
      </fieldset>
      <SubmitButton>Enviar</SubmitButton>
    </form>
  );
}
