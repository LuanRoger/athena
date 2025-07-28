"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/utils/query";
import { cn } from "@/utils/tailwind";

interface SearchBarProps {
  isLoggedIn?: boolean;
}

export default function SearchBar({ isLoggedIn }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("titleTerm") || "",
  );

  function handleSearch() {
    const params: Record<string, string | undefined | null> = {
      titleTerm: searchTerm || undefined,
      authorTerm: searchTerm || undefined,
    };
    const queryString = createQueryString(params);
    router.replace(`/dashboard/all?${queryString}`);
  }

  return (
    <>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "btn btn-ghost lg:hidden",
          isLoggedIn ? "text-slate-400" : "text-primary",
        )}
      >
        <Search
          size={24}
          className={isLoggedIn ? "text-slate-400" : "text-primary"}
        />
      </button>

      <div className="relative hidden w-96 lg:block">
        <input
          type="text"
          placeholder="Buscar por um documento..."
          className={cn(
            "w-full rounded-2xl bg-gray-100 py-1.5 pr-10 pl-4 text-black focus:outline-none",
            isLoggedIn
              ? "border-none placeholder-slate-400"
              : "border-primary placeholder-primary border-2",
          )}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          onClick={handleSearch}
          className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-gray-400"
        >
          <Search
            size={24}
            className={isLoggedIn ? "text-slate-400" : "text-primary"}
          />
        </button>
      </div>

      {isExpanded && (
        <div className="absolute top-18 right-0 left-0 z-10 lg:hidden">
          <div className="card-body bg-base-100 relative shadow-md">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                placeholder="Buscar por um documento..."
                className={cn(
                  "grow text-black focus:outline-none",
                  isLoggedIn
                    ? "placeholder-slate-400"
                    : "placeholder-primary border-2",
                )}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <button
                onClick={handleSearch}
                className="cursor-pointer text-gray-400"
              >
                <Search
                  size={24}
                  className={isLoggedIn ? "text-slate-400" : "text-primary"}
                />
              </button>
            </label>
          </div>
        </div>
      )}
    </>
  );
}
