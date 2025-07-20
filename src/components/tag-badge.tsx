import { Tag } from "@/models";

interface TagBadgeProps {
  data: Tag;
}

export default function TagBadge({ data }: TagBadgeProps) {
  return <span className="badge badge-soft badge-primary">{data.name}</span>;
}
