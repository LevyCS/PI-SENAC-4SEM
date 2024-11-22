/*
  Warnings:

  - Added the required column `type` to the `Consultation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Consultation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Consultation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Consultation" ("date", "description", "doctor", "id", "local", "userId") SELECT "date", "description", "doctor", "id", "local", "userId" FROM "Consultation";
DROP TABLE "Consultation";
ALTER TABLE "new_Consultation" RENAME TO "Consultation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
