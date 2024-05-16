-- Deploy quiz:init to pg

BEGIN;

CREATE TABLE "quiz" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "quiz_name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "question" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "question_text" TEXT NOT NULL UNIQUE,
    "quiz_id" INT NOT NULL REFERENCES "quiz"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);
CREATE TABLE "response" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "response_text" TEXT NOT NULL,
    "is_correct" BOOLEAN,
    "question_id" INT NOT NULL REFERENCES "question"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "theme" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "theme_name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);


CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_score" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "score" INT NOT NULL,
    "quiz_id" INT NOT NULL REFERENCES "quiz"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

ALTER TABLE "quiz" ADD COLUMN "theme_id" INT REFERENCES "theme"("id");

COMMIT;
