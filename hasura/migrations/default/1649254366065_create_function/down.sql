-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE FUNCTION check_update_at()
--     RETURNS trigger AS
-- $$
-- DECLARE
--     current_update_at TIMESTAMP;
-- BEGIN
--     SELECT updated_at
--     FROM "public"."bookings"
--     WHERE (("public"."bookings"."id") = ((NEW.id) :: integer))
--     INTO current_update_at;
--
--     -- throw an error if article content is too long
--     IF NEW.updated_at != current_update_at THEN
--         RAISE EXCEPTION 'すでに更新されている';
--     END IF;
--
--     -- return the article row if no error
--     RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;
--
-- CREATE TRIGGER check_content_length_trigger
--     BEFORE INSERT OR UPDATE
--     ON "bookings"
--     FOR EACH ROW
-- EXECUTE PROCEDURE check_update_at();
