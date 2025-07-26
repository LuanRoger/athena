import GeneralFilesFilter from "@/components/general-files-filter";
import GeneralFilesGrid from "@/components/general-files-grid";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    tag?: number;
    titleTerm?: string;
    authorTerm?: string;
  }>;
}) {
  const { tag, titleTerm, authorTerm } = await searchParams;

  return (
    <main className="flex flex-col gap-4 p-4">
      <GeneralFilesFilter />
      <GeneralFilesGrid
        tag={tag}
        titleTerm={titleTerm}
        authorTerm={authorTerm}
      />
    </main>
  );
}
