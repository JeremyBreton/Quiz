-- Verify quiz:init on pg

BEGIN;

SELECT "id", "quiz_name", "created_at", "updated_at"
FROM "quiz"
WHERE false;

SELECT "id","question_text", "quiz_id", "created_at", "updated_at"
FROM "question"
WHERE false;

SELECT "id", "response_text", "is_correct", "question_id", "created_at", "updated_at"
FROM "response" 
WHERE false;

SELECT "id", "theme_name", "created_at", "updated_at"
FROM "theme"
WHERE false;

SELECT "id", "username", "password", "email", "created_at", "updated_at"
FROM "user"
WHERE false;

SELECT "id", "user_id", "score", "quiz_id", "created_at", "updated_at"
FROM "user_score"
WHERE false;

ROLLBACK;
