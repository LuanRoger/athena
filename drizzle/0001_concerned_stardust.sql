CREATE TABLE "favorites" (
	"id" serial PRIMARY KEY NOT NULL,
	"file_metadata_id" serial NOT NULL,
	"user_id" text NOT NULL,
	"created_at" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "files_metadata_to_tags" (
	"file_metadata_id" serial NOT NULL,
	"tag_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "files_metadata" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"author" text NOT NULL,
	"upload_id" serial NOT NULL,
	"favorites_count" integer DEFAULT 0 NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "tags_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "uploads" (
	"id" serial PRIMARY KEY NOT NULL,
	"mime_type" text NOT NULL,
	"file_name" text NOT NULL,
	"file_size" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "favorites_count_idx" ON "files_metadata" USING btree ("favorites_count");--> statement-breakpoint
CREATE INDEX "slug_idx" ON "tags" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "mime_type_idx" ON "uploads" USING btree ("mime_type");