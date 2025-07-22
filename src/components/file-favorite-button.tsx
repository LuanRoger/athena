"use client";

import { addToFavorites, removeFromFavorites } from "@/app/actions/favorites";
import { showToastByActionResult } from "@/utils/toast";
import { SparkleIcon, SparklesIcon } from "lucide-react";
import { useOptimistic, useTransition } from "react";

interface FileFavoriteButtonProps {
  fileId: number;
  isFavorited: boolean;
}

export default function FileFavoriteButton({
  fileId,
  isFavorited,
}: FileFavoriteButtonProps) {
  const [, startAction] = useTransition();
  const [isFavoritedOptimistic, setIsFavoritedOptimistic] = useOptimistic<
    boolean,
    boolean
  >(isFavorited, (_, newState) => newState);

  async function handleFavoriteToggle() {
    const newValue = !isFavorited;
    setIsFavoritedOptimistic(newValue);

    const result = await (newValue
      ? addToFavorites(fileId)
      : removeFromFavorites(fileId));

    showToastByActionResult(result);
  }

  return (
    <button
      className="btn btn-circle"
      onClick={() => startAction(handleFavoriteToggle)}
    >
      {isFavoritedOptimistic ? <SparklesIcon /> : <SparkleIcon />}
    </button>
  );
}
