
CREATE TABLE "public"."posts" ("id" serial NOT NULL, "title" text NOT NULL, "content" text NOT NULL, "createdAt" Timestamp NOT NULL DEFAULT now(), "updatedAt" Timestamp NOT NULL DEFAULT now(), "userId" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updatedAt"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updatedAt" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_posts_updatedAt"
BEFORE UPDATE ON "public"."posts"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_posts_updatedAt" ON "public"."posts" 
IS 'trigger to set value of column "updatedAt" to current timestamp on row update';

alter table "public"."users" rename column "created_at" to "createdAt";

alter table "public"."users" rename column "updated_at" to "updatedAt";

alter table "public"."posts" drop column "created_at" cascade;

alter table "public"."posts" drop column "updated_at" cascade;

alter table "public"."posts" add column "created_at" timestamptz
 null default now();

alter table "public"."posts" add column "updated_at" timestamptz
 null default now();

alter table "public"."users" drop column "created_at" cascade;

alter table "public"."users" drop column "updated_at" cascade;

alter table "public"."users" add column "created_at" timestamptz
 null default now();

alter table "public"."users" add column "updated_at" timestamptz
 null default now();
