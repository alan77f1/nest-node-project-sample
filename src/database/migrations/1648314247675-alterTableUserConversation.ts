import {MigrationInterface, QueryRunner} from "typeorm";

export class alterTableUserConversation1648314247675 implements MigrationInterface {
    name = 'alterTableUserConversation1648314247675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "messages" ("id" SERIAL NOT NULL, "conversation_id" integer, "user_id" integer, "status" boolean NOT NULL DEFAULT false, "message" character varying(255) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profiles" ("id" SERIAL NOT NULL, "user_id" integer, "avatar" character varying, "address" character varying, "phone" character varying, "description" character varying, "gender" character varying, "position" character varying, "birthday" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "REL_9e432b7df0d182f8d292902d1a" UNIQUE ("user_id"), CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "information" ("id" SERIAL NOT NULL, "user_id" integer, "status" boolean NOT NULL DEFAULT false, "type" character varying NOT NULL, "value" character varying(255) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_091c910b61c3170a50eaf22e0c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_conversation" ("id" SERIAL NOT NULL, "user_id" integer, "conversation_id" integer, "last_message_id" integer, "mute" boolean NOT NULL DEFAULT false, "block" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_3dad130078898b9325da36ab3db" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(25), "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "conversations" ("id" SERIAL NOT NULL, "title" character varying, "description" character varying(5000), "background" character varying DEFAULT 'white', "emoji" character varying DEFAULT 'white', "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_ee34f4f7ced4ec8681f26bf04ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_3dad130078898b9325da36ab3db"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "last_message_id"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "mute"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "block"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_3dad130078898b9325da36ab3db" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "last_message_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "mute" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "block" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "created_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_3dad130078898b9325da36ab3db"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_acef608a6572976e3c040360b58" PRIMARY KEY ("user_id", "conversation_id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_71fd694397fae30a296a537b0e4"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_acef608a6572976e3c040360b58" PRIMARY KEY ("conversation_id", "user_id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_71fd694397fae30a296a537b0e4"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_3de3a7e9a57d063dde91e51fbf4" PRIMARY KEY ("conversation_id", "id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_3de3a7e9a57d063dde91e51fbf4"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_3dad130078898b9325da36ab3db" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_3dad130078898b9325da36ab3db"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_c0c3640ddb153e4a168983336d0" PRIMARY KEY ("id", "user_id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ALTER COLUMN "conversation_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_c0c3640ddb153e4a168983336d0"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_71fd694397fae30a296a537b0e4" PRIMARY KEY ("user_id", "id", "conversation_id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ALTER COLUMN "conversation_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_2b97367ea8ccd8e415681f8b0d" ON "user_conversation" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b312a0529c18723a53f7e90cd9" ON "user_conversation" ("conversation_id") `);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_830a3c1d92614d1495418c46736" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_3bc55a7c3f9ed54b520bb5cfe23" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "information" ADD CONSTRAINT "FK_562e04265642e67cc09f4d8b2d0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "FK_2b97367ea8ccd8e415681f8b0d7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "FK_b312a0529c18723a53f7e90cd9d" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "FK_b312a0529c18723a53f7e90cd9d"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "FK_2b97367ea8ccd8e415681f8b0d7"`);
        await queryRunner.query(`ALTER TABLE "information" DROP CONSTRAINT "FK_562e04265642e67cc09f4d8b2d0"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "FK_9e432b7df0d182f8d292902d1a2"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_3bc55a7c3f9ed54b520bb5cfe23"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_830a3c1d92614d1495418c46736"`);
        await queryRunner.query(`DROP INDEX "IDX_b312a0529c18723a53f7e90cd9"`);
        await queryRunner.query(`DROP INDEX "IDX_2b97367ea8ccd8e415681f8b0d"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ALTER COLUMN "conversation_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_71fd694397fae30a296a537b0e4"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_c0c3640ddb153e4a168983336d0" PRIMARY KEY ("user_id", "id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ALTER COLUMN "conversation_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_c0c3640ddb153e4a168983336d0"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_3dad130078898b9325da36ab3db" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_3dad130078898b9325da36ab3db"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_3de3a7e9a57d063dde91e51fbf4" PRIMARY KEY ("conversation_id", "id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_3de3a7e9a57d063dde91e51fbf4"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_71fd694397fae30a296a537b0e4" PRIMARY KEY ("user_id", "conversation_id", "id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_acef608a6572976e3c040360b58"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_71fd694397fae30a296a537b0e4" PRIMARY KEY ("user_id", "conversation_id", "id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_acef608a6572976e3c040360b58"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_3dad130078898b9325da36ab3db" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "block"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "mute"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "last_message_id"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP CONSTRAINT "PK_3dad130078898b9325da36ab3db"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "updated_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "created_at" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "block" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "mute" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "last_message_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_conversation" ADD CONSTRAINT "PK_3dad130078898b9325da36ab3db" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "conversations"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_conversation"`);
        await queryRunner.query(`DROP TABLE "information"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`DROP TABLE "messages"`);
    }

}
