import { UploadCloud } from "lucide-react";

export default function UploadButton() {
  return (
    <button className="btn bg-secondary hover:bg-secondary-focus rounded-4xl border-none px-4 text-white sm:w-auto sm:px-10">
      <UploadCloud className="h-6 w-6" />
    </button>
  );
}
