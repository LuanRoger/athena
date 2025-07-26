"use client";

import { useEffect, useMemo, useState } from "react";
import TagDropdown from "../tag-dropdown";
import { getAllTags } from "@/app/actions/tags";
import { Tag } from "@/models";
import TagDropdownSelectorLoading from "./loading";

interface ClientTagDropdownSelectorProps {
  selectedTagId: number | null;
  className?: string;
  onSelect?: (tag: Tag) => void;
}

export default function TagDropdownSelectorClient({
  selectedTagId: selectedTag,
  className,
  onSelect,
}: ClientTagDropdownSelectorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const selectedTagObject = useMemo(() => {
    return tags.find((tag) => tag.id === selectedTag) || null;
  }, [selectedTag, tags]);

  async function fetchTags() {
    setIsLoading(true);
    const { success, data } = await getAllTags();
    if (!success || !data) {
      return;
    }

    setTags(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTags();
  }, []);

  return isLoading ? (
    <TagDropdownSelectorLoading />
  ) : (
    <TagDropdown
      tags={tags}
      selectedTag={selectedTagObject}
      className={className}
      onSelect={onSelect}
    />
  );
}
