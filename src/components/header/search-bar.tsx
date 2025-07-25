import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-96">
      <input
        type="text"
        placeholder="Buscar por um documento..."
        className="w-full rounded-2xl bg-gray-100 py-1.5 pr-10 pl-4 text-black placeholder-gray-400 focus:outline-none"
      />
      <Search
        size={24}
        className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}
