import CategoryGridItem from "./category-grid-item";

interface CategoriesGridProps {
  categories: {
    id: number;
    title: string;
    icon: React.ReactNode;
  }[];
}

export default function CategoriesGrid({ categories }: CategoriesGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
      {categories.map((category) => (
        <CategoryGridItem
          key={`category-grid-item-${category.id}`}
          category={category}
        />
      ))}
    </div>
  );
}
