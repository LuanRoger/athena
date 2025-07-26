import { Tag } from "@/models";
import { cn } from "@/utils/tailwind";

interface TagDropdownProps {
  tags: Tag[];
  selectedTag: Tag | null;
  className?: string;
  onSelect?: (tag: Tag) => void;
}

export default function TagDropdown({
  tags,
  selectedTag,
  className,
  onSelect,
}: TagDropdownProps) {
  return (
    <details className={cn("dropdown", className)}>
      <summary role="button" className="btn m-1">
        <div>{selectedTag ? selectedTag.name : "Selecionar tags"}</div>
      </summary>
      <ul className="menu dropdown-content bg-base-100 text-base-content rounded-box z-10 w-52 p-2 shadow">
        {tags.map((tag) => (
          <li key={`tag-dropdown-item-${tag.id}`}>
            <a onClick={() => onSelect?.(tag)}>{tag.name}</a>
          </li>
        ))}
      </ul>
    </details>
  );
}
