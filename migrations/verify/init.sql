-- Verify quiz:init on pg

BEGIN;

SELECT "quiz_id", "quiz_name", "created_at", "updated_at"
FROM "quiz"
WHERE false;

SELECT "question_id","question_text", "quiz_id", "created_at", "updated_at"
FROM "question"
WHERE false;

SELECT "response_id", "response_text", "is_correct", "question_id", "created_at", "updated_at"
FROM "response" 
WHERE false;

SELECT "theme_id", "theme_name", "created_at", "updated_at"
FROM "theme"
WHERE false;

SELECT "user_id", "username", "password", "email", "created_at", "updated_at"
FROM "user"
WHERE false;

SELECT "score_id", "user_id", "score", "quiz_id", "created_at", "updated_at"
FROM "user_score"
WHERE false;

ROLLBACK;
