import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1701933183646 implements MigrationInterface {
    name = 'Init1701933183646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "recipes_patient_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "recipes_doctor_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "patients" DROP CONSTRAINT "patients_doctor_id_fkey"`);
        await queryRunner.query(`CREATE TABLE "history_diseases" ("patient_id" integer NOT NULL, "doctor_id" integer NOT NULL, "address" character varying NOT NULL, "data_found" TIMESTAMP NOT NULL, CONSTRAINT "PK_16fda025346cac3a8f0b844ce43" PRIMARY KEY ("patient_id", "doctor_id"))`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "PK_6652e263456a3fb563ea223f8b4" PRIMARY KEY ("patient_id", "doctor_id")`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "patient_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "doctor_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "medicine" SET NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "patients_patient_id_seq" OWNED BY "patients"."patient_id"`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "patient_id" SET DEFAULT nextval('"patients_patient_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "surname" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "patients" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "doctor_id" SET NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "doctors_doctor_id_seq" OWNED BY "doctors"."doctor_id"`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "doctor_id" SET DEFAULT nextval('"doctors_doctor_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "surname" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "address" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "doctors" ADD "phone" character varying`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "surname" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctors" ALTER COLUMN "doctor_id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "doctors_doctor_id_seq"`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "doctor_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "patients" ADD "phone" character varying`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "surname" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ALTER COLUMN "patient_id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "patients_patient_id_seq"`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "medicine" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "doctor_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" ALTER COLUMN "patient_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP CONSTRAINT "PK_6652e263456a3fb563ea223f8b4"`);
        await queryRunner.query(`DROP TABLE "history_diseases"`);
        await queryRunner.query(`ALTER TABLE "patients" ADD CONSTRAINT "patients_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("doctor_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "recipes_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("doctor_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD CONSTRAINT "recipes_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("patient_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
