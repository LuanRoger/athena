import { Tag } from "@/models";
import TagBadge from "./tag-badge";
import { cn } from "@/utils/tailwind";

interface TagsListProps {
  tags: Tag[];
  className?: string;
}

export default function TagsList({ tags, className }: TagsListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags?.map((tag, index) => (
        <TagBadge key={`tags-input-tag-${index}`} data={tag} />
      ))}
    </div>
  );
}
