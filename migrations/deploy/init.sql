-- Deploy quiz:init to pg

BEGIN;

CREATE TABLE "quiz" (
    "quiz_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "quiz_name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "question" (
    "question_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "question_text" TEXT NOT NULL UNIQUE,
    "quiz_id" INT NOT NULL REFERENCES "quiz"("quiz_id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);
CREATE TABLE "response" (
    "response_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "response_text" TEXT NOT NULL,
    "is_correct" BOOLEAN,
    "question_id" INT NOT NULL REFERENCES "question"("question_id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "theme" (
    "theme_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "theme_name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);


CREATE TABLE "user" (
    "user_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_score" (
    "score_id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"("user_id"),
    "score" INT NOT NULL,
    "quiz_id" INT NOT NULL REFERENCES "quiz"("quiz_id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

ALTER TABLE "quiz" ADD COLUMN "theme_id" INT REFERENCES "theme"("theme_id");

COMMIT;
