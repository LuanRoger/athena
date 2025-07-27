"use client";

import { UploadCloud } from "lucide-react";
import { useState } from "react";
import Modal from "../modal";
import NewFileForm from "../new-file-form";

export default function UploadButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="btn bg-secondary hover:bg-secondary-focus rounded-4xl border-none px-4 text-white sm:w-auto sm:px-10"
      >
        <UploadCloud className="h-6 w-6" />
      </button>

      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <NewFileForm />
      </Modal>
    </>
  );
}
