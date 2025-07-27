"use client";

import TagDropdownSelectorClient from "./tag-dropdown-selector/client";
import { useSearchParams, useRouter } from "next/navigation";
import { createQueryString } from "@/utils/query";
import { useMemo, useState } from "react";
import { Tag } from "@/models";

interface GeneralFilesFilterProps {
  baseRoute?: string;
}

export default function GeneralFilesFilter({
  baseRoute,
}: GeneralFilesFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

  const currentSelectedTagId = useMemo(() => {
    const paramsTagId = searchParams.get("tag");
    const stateTagId = selectedTag?.id;
    return stateTagId ? stateTagId : paramsTagId ? parseInt(paramsTagId) : null;
  }, [searchParams, selectedTag]);

  const currentBasePath = useMemo(
    () => baseRoute ?? "/dashboard/all",
    [baseRoute],
  );

  function updateSearchParams() {
    const tagsToSearch = currentSelectedTagId?.toString();
    const titleTerm = searchParams.get("titleTerm");
    const authorTerm = searchParams.get("authorTerm");

    const params: Record<string, string | undefined | null> = {
      tag: tagsToSearch,
      titleTerm: titleTerm || undefined,
      authorTerm: authorTerm || undefined,
    };

    const queryString = createQueryString(params);

    router.replace(`${currentBasePath}?${queryString}`);
  }

  function handleResetFilters() {
    setSelectedTag(null);
    router.replace(currentBasePath);
  }

  return (
    <form className="flex flex-col gap-4 md:flex-row md:items-center">
      <TagDropdownSelectorClient
        selectedTagId={currentSelectedTagId}
        onSelect={setSelectedTag}
        className="w-full md:w-auto"
      />
      <div className="flex items-center gap-2 self-end">
        <button
          className="btn btn-primary"
          type="button"
          onClick={updateSearchParams}
        >
          Filtrar
        </button>
        <button
          className="btn btn-secondary"
          type="reset"
          onClick={handleResetFilters}
        >
          Limpar filtros
        </button>
      </div>
    </form>
  );
}
