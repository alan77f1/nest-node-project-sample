import {MigrationInterface, QueryRunner} from "typeorm";

export class init1648291028743 implements MigrationInterface {
    name = 'init1648291028743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "messages" ("id" SERIAL NOT NULL, "conversation_id" integer, "user_id" integer, "status" boolean NOT NULL DEFAULT false, "message" character varying(255) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "messages"`);
    }

}
