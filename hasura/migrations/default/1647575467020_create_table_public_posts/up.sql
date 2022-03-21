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
