-- Revert quiz:init from pg

BEGIN;

DROP TABLE "quiz", "question", "response", "theme", "user", "user_score";

COMMIT;
