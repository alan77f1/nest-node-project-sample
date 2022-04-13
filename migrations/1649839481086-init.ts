import {MigrationInterface, QueryRunner} from "typeorm";

export class init1649839481086 implements MigrationInterface {
    name = 'init1649839481086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "like" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "photoId" integer NOT NULL, CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "information" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "photoId" integer NOT NULL, CONSTRAINT "REL_28f63be1b51f39203653eb9a85" UNIQUE ("photoId"), CONSTRAINT "PK_091c910b61c3170a50eaf22e0c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_aefa4549a69b45ad61275ac439b" FOREIGN KEY ("photoId") REFERENCES "photo"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "information" ADD CONSTRAINT "FK_28f63be1b51f39203653eb9a85f" FOREIGN KEY ("photoId") REFERENCES "photo"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "information" DROP CONSTRAINT "FK_28f63be1b51f39203653eb9a85f"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_aefa4549a69b45ad61275ac439b"`);
        await queryRunner.query(`DROP TABLE "information"`);
        await queryRunner.query(`DROP TABLE "photo"`);
        await queryRunner.query(`DROP TABLE "like"`);
    }

}
