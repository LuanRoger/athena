"use server";

import { ActionResult, EmptyResult } from "@/models";
import { UnauthorizedActionResult } from "@/models/common-action-results";
import { getUser } from "./auth";
import * as DbOperations from "@/db/operations";
import {
  CreateFavorite,
  DeleteFavorite,
} from "@/models/db-operations/favorites";
import { createActionResultFromError } from "@/utils/error";
import { ActionsMessage } from "@/constants";
import { revalidatePath } from "next/cache";

export async function isFavoritedByUser(
  fileId: number,
): Promise<ActionResult<boolean | null>> {
  const user = await getUser();
  if (!user) {
    return UnauthorizedActionResult;
  }

  const result = await DbOperations.isFavoritedByUser(fileId, user.id);

  return {
    success: true,
    data: result,
  };
}

export async function addToFavorites(fileId: number): Promise<EmptyResult> {
  const user = await getUser();
  if (!user) {
    return UnauthorizedActionResult;
  }

  try {
    const newFavorite: CreateFavorite = {
      fileMetadataId: fileId,
      userId: user.id,
    };
    await DbOperations.favoriteFile(newFavorite);
  } catch (error) {
    return createActionResultFromError(error);
  }

  revalidatePath("/dashboard");
  return {
    success: true,
    data: null,
    successMessage: ActionsMessage.FAVORITE_ADDED_SUCCESS,
  };
}

export async function removeFromFavorites(
  fileId: number,
): Promise<EmptyResult> {
  const user = await getUser();
  if (!user) {
    return UnauthorizedActionResult;
  }

  try {
    const favoriteToDelete: DeleteFavorite = {
      fileMetadataId: fileId,
      userId: user.id,
    };
    await DbOperations.unfavoriteFile(favoriteToDelete);
  } catch (error) {
    return createActionResultFromError(error);
  }

  revalidatePath("/dashboard");
  return {
    success: true,
    data: null,
    successMessage: ActionsMessage.FAVORITE_REMOVED_SUCCESS,
  };
}
