"use client";

import { uploadFileFromForm } from "@/app/actions/storage";
import { useActionState } from "react";

export default function NewFileForm() {
  const [, formAction, isPending] = useActionState(uploadFileFromForm, {
    success: false,
    data: null,
  });

  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <input type="file" name="file" className="file-input" />
      <button type="submit" disabled={isPending} className="btn btn-secondary">
        Enviar
      </button>
    </form>
  );
}
