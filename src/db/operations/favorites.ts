import { db } from "..";
import {
  CreateFavorite,
  DeleteFavorite,
} from "@/models/db-operations/favorites";
import { favorites } from "../schemas/favorites";
import { filesMetadata } from "../schemas/files-metadata";
import { and, eq, sql } from "drizzle-orm";

export async function getFavoritesByUserId(userId: string) {
  const result = await db.query.favorites.findMany({
    where: eq(favorites.userId, userId),
  });

  return result;
}

export async function getFavoritedFilesByUserId(userId: string) {
  const result = await db.query.favorites.findMany({
    where: eq(favorites.userId, userId),
    with: {
      fileMetadata: {
        with: {
          tags: {
            with: {
              tag: true,
            },
          },
        },
      },
    },
  });

  return result.map((fav) => fav.fileMetadata);
}

export async function isFavoritedByUser(fileId: number, userId: string) {
  const result = await db.query.favorites.findFirst({
    where: and(
      eq(favorites.fileMetadataId, fileId),
      eq(favorites.userId, userId),
    ),
  });

  return !!result;
}

export async function favoriteFile(model: CreateFavorite) {
  const result = db.transaction(async (tx) => {
    const { fileMetadataId, userId } = model;
    const newFavorite = await tx
      .insert(favorites)
      .values({ fileMetadataId, userId });

    await tx
      .update(filesMetadata)
      .set({
        favoritesCount: sql`${filesMetadata.favoritesCount} + 1`,
      })
      .where(eq(filesMetadata.id, fileMetadataId));

    return newFavorite;
  });

  return result;
}

export async function unfavoriteFile(model: DeleteFavorite) {
  const result = db.transaction(async (tx) => {
    const { fileMetadataId, userId } = model;
    const deletedFavorite = await tx
      .delete(favorites)
      .where(
        and(
          eq(favorites.fileMetadataId, fileMetadataId),
          eq(favorites.userId, userId),
        ),
      );

    await tx
      .update(filesMetadata)
      .set({
        favoritesCount: sql`${filesMetadata.favoritesCount} - 1`,
      })
      .where(eq(filesMetadata.id, fileMetadataId));

    return deletedFavorite;
  });

  return result;
}
