"use client";

import { Tag } from "@/models";
import { useState } from "react";

type TagsInputProps = {
  tags: Tag[];
  onAddTag: (tag: string) => void;
  id?: string;
};

export default function TagsInput({ tags, onAddTag, id }: TagsInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault();
      onAddTag(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        id={id}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-black focus:border-blue-500 focus:outline-none"
        placeholder="Adicionar tags (separadas por vírgula ou espaço)"
      />
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
