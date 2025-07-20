"use client";

import { PlusIcon } from "lucide-react";
import { useRef } from "react";
import { Tag } from "@/models";
import TagsList from "./tags-list";

interface TagsInputProps {
  tags: Tag[];
  onAddTag: (tag: string) => void;
}

export default function TagsInput({ tags, onAddTag }: TagsInputProps) {
  const inputTagRef = useRef<HTMLInputElement>(null);

  function handleAddTag() {
    if (!inputTagRef.current) return;

    const tag = inputTagRef.current.value.trim();
    if (!tag) return;

    onAddTag(tag);
    inputTagRef.current.value = "";
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="fieldset-label">Tags</label>
      <div className="inline-flex gap-2">
        <input
          type="text"
          placeholder="Add a tag"
          className="input"
          ref={inputTagRef}
        />
        <button type="button" className="btn btn-circle" onClick={handleAddTag}>
          <PlusIcon />
        </button>
      </div>
      <TagsList tags={tags} />
    </div>
  );
}
