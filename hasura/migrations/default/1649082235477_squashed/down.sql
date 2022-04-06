
alter table "public"."bookings" drop constraint "bookings_status_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."bookings" add column "status" integer
--  not null;

DELETE FROM "public"."bookingStatuses" WHERE "id" = 3;

DELETE FROM "public"."bookingStatuses" WHERE "id" = 2;

DELETE FROM "public"."bookingStatuses" WHERE "id" = 1;

DROP TABLE "public"."bookingStatuses";

DROP TABLE "public"."bookings";
