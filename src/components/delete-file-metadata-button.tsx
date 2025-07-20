"use client";

import { deleteFileMetadata } from "@/app/actions/files-metadata";
import { cn } from "@/utils/tailwind";
import { showToastByActionResult } from "@/utils/toast";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

interface DeleteFileMetadataButtonProps {
  id: number;
  className?: string;
}

export default function DeleteFileMetadataButton({
  id,
  className,
}: DeleteFileMetadataButtonProps) {
  const [isPending, startAction] = useTransition();

  function handleDelete() {
    startAction(async () => {
      const result = await deleteFileMetadata(id);
      showToastByActionResult(result);
    });
  }

  return (
    <button
      className={cn("btn btn-error btn-circle", className)}
      onClick={handleDelete}
      disabled={isPending}
    >
      <Trash2Icon className="stroke-error-content" />
    </button>
  );
}
