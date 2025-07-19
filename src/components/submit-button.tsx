"use client";

import { cn } from "@/utils/tailwind";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function SubmitButton({
  children,
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={cn("btn btn-primary", className)}
      disabled={pending}
    >
      {children}
    </button>
  );
}
