import Link from "next/link";
import { useMemo } from "react";
import { createQueryString } from "@/utils/query";

interface CategoryGridItemProps {
  category: { id: number; title: string; icon: React.ReactNode };
}

export default function CategoryGridItem({ category }: CategoryGridItemProps) {
  const queryString = useMemo(() => {
    return createQueryString({ titleTerm: category.title });
  }, [category.title]);

  return (
    <Link href={`/dashboard/all?${queryString}`}>
      <div className="bg-base-100 hover:bg-base-200 cursor-pointer shadow-xl transition-colors">
        <div className="card-body flex flex-col items-center justify-center gap-4 py-12">
          <div className="text-black">{category.icon}</div>
          <h3 className="card-title text-center text-sm">{category.title}</h3>
        </div>
      </div>
    </Link>
  );
}
