"use client";

import { uploadFileFromForm } from "@/app/actions/storage";
import SubmitButton from "./submit-button";
import { useActionState } from "react";
import { showToastByActionResult } from "@/utils/toast";

export default function NewFileForm() {
  async function uploadActions(prevState: unknown, formData: FormData) {
    const result = await uploadFileFromForm(prevState, formData);
    showToastByActionResult(result, true);

    return result;
  }

  const [, formAction] = useActionState(uploadActions, {
    success: false,
    data: null,
  });

  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <input type="file" name="file" className="file-input" />
      <SubmitButton>Enviar</SubmitButton>
    </form>
  );
}
