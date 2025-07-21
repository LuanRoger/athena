export default function FilesGridLoading() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="skeleton h-48"></div>
      ))}
    </div>
  );
}
