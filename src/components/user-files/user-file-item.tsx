import { formatDate } from "@/utils/format";

interface UserFileItemProps {
  title: string;
  author: string;
  createdAt: Date;
}

export default function UserFileItems({
  title,
  author,
  createdAt,
}: UserFileItemProps) {
  const formattedDate = formatDate(createdAt);

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Autor: {author}</p>
        <p>Criado em: {formattedDate}</p>
      </div>
    </div>
  );
}
