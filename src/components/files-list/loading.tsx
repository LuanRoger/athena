export default function FilesListLoading() {
  return (
    <div className="flex w-full flex-col gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="skeleton h-28 w-full" />
      ))}
    </div>
  );
}
