-- Deploy quiz:seeding to pg

BEGIN;

INSERT INTO "quiz"("quiz_name")
VALUES
('Quiz 1'),
('Quiz 2'),
('Quiz 3');

INSERT INTO "question"("question_text", "quiz_id")
VALUES
('Combien font 1+1 ?', 1),
('Combien font 2+2 ?', 1),
('Combien font 3+3 ?', 1),
('Quel est la 1ère lettre de l''alphabet', 2),
('Quel est la 2ème lettre de l''alphabet', 2),
('Quel est la 3ème lettre de l''alphabet', 2),
('Quel est la couleur du soleil ?', 3),
('Quel est la couleur de l''herbe ?', 3),
('Quel est la couleur des pompiers ?', 3);

INSERT INTO "response"("response_text", "is_correct", "question_id")
VALUES
('1', false, 1),
('2', true, 1),
('3', false, 1),
('4', false, 1),
('0', false, 2),
('2', false, 2),
('4', true, 2),
('6', false, 2),
('0', false, 3),
('3', false, 3),
('6', true, 3),
('9', false, 3),
('a', true, 4),
('b', false, 4),
('c', false, 4),
('d', false, 4),
('a', false, 5),
('b', true, 5),
('c', false, 5),
('d', false, 5),
('a', false, 6),
('b', false, 6),
('c', true, 6),
('d', false, 6),
('Bleu', false, 7),
('Vert', false, 7),
('Jaune', true, 7),
('Rouge', false, 7),
('Bleu', false, 8),
('Vert', true, 8),
('Jaune', false, 8),
('Rouge', false, 8),
('Bleu', false, 9),
('Vert', false, 9),
('Jaune', false, 9),
('Rouge', true, 9);

INSERT INTO "theme"("theme_name")
VALUES
('Maths'),
('Orthographe'),
('Couleurs');

-- Ajout de la colonne theme_id à la table question
ALTER TABLE "question" ADD COLUMN "theme_id" INTEGER;

-- Mise à jour de la colonne theme_id pour chaque question
UPDATE "question" SET "theme_id" = 1 WHERE "question_text" IN ('Combien font 1+1 ?', 'Combien font 2+2 ?', 'Combien font 3+3 ?');
UPDATE "question" SET "theme_id" = 2 WHERE "question_text" IN ('Quel est la 1ère lettre de l''alphabet', 'Quel est la 2ème lettre de l''alphabet', 'Quel est la 3ème lettre de l''alphabet');
UPDATE "question" SET "theme_id" = 3 WHERE "question_text" IN ('Quel est la couleur du soleil ?', 'Quel est la couleur de l''herbe ?', 'Quel est la couleur des pompiers ?');

-- Ajout de la contrainte de clé étrangère
ALTER TABLE "question" ADD CONSTRAINT "fk_question_theme" FOREIGN KEY ("theme_id") REFERENCES "theme"("theme_id");


COMMIT;
