
CREATE TABLE "public"."bookings" ("id" serial NOT NULL, "userId" integer NOT NULL, "checkin" timestamptz NOT NULL, "checkout" timestamptz NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_bookings_updated_at"
BEFORE UPDATE ON "public"."bookings"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_bookings_updated_at" ON "public"."bookings" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."bookingStatuses" ("id" serial NOT NULL, "value" text NOT NULL, "description" text NOT NULL, "isEnable" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_bookingStatuses_updated_at"
BEFORE UPDATE ON "public"."bookingStatuses"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_bookingStatuses_updated_at" ON "public"."bookingStatuses" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

INSERT INTO "public"."bookingStatuses"("id", "value", "description", "isEnable", "created_at", "updated_at") VALUES (1, E'request', E'申請', true, E'2022-04-04T14:17:47.337786+00:00', E'2022-04-04T14:17:47.337786+00:00');

INSERT INTO "public"."bookingStatuses"("id", "value", "description", "isEnable", "created_at", "updated_at") VALUES (2, E'confirmed', E'確定', true, E'2022-04-04T14:19:43.26377+00:00', E'2022-04-04T14:19:43.26377+00:00');

INSERT INTO "public"."bookingStatuses"("id", "value", "description", "isEnable", "created_at", "updated_at") VALUES (3, E'cancel', E'キャンセル', true, E'2022-04-04T14:20:26.285172+00:00', E'2022-04-04T14:20:26.285172+00:00');

alter table "public"."bookings" add column "status" integer
 not null;

alter table "public"."bookings"
  add constraint "bookings_status_fkey"
  foreign key ("status")
  references "public"."bookingStatuses"
  ("id") on update restrict on delete restrict;
