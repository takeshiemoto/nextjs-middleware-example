
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."users" add column "updated_at" timestamptz
--  null default now();

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."users" add column "created_at" timestamptz
--  null default now();

alter table "public"."users" alter column "updated_at" set default now();
alter table "public"."users" alter column "updated_at" drop not null;
alter table "public"."users" add column "updated_at" timestamptz;

alter table "public"."users" alter column "created_at" set default now();
alter table "public"."users" alter column "created_at" drop not null;
alter table "public"."users" add column "created_at" timestamptz;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."posts" add column "updated_at" timestamptz
--  null default now();

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."posts" add column "created_at" timestamptz
--  null default now();

alter table "public"."posts" alter column "updated_at" set default now();
alter table "public"."posts" alter column "updated_at" drop not null;
alter table "public"."posts" add column "updated_at" timestamp;

alter table "public"."posts" alter column "created_at" set default now();
alter table "public"."posts" alter column "created_at" drop not null;
alter table "public"."posts" add column "created_at" timestamp;

alter table "public"."users" rename column "updatedAt" to "updated_at";

alter table "public"."users" rename column "createdAt" to "created_at";

DROP TABLE "public"."posts";
