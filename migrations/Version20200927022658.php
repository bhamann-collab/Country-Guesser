<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200927022658 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE books_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE highscore_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE person_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE test_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE person (id INT NOT NULL, name VARCHAR(255) NOT NULL, streak INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE test (id INT NOT NULL, test INT NOT NULL, integer VARCHAR(12) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('DROP TABLE books');
        $this->addSql('DROP TABLE highscore');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE person_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE test_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE books_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE highscore_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE books (id SERIAL NOT NULL, nickname VARCHAR(100) NOT NULL, streak INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE highscore (id SERIAL NOT NULL, nickname VARCHAR(100) DEFAULT NULL, streak INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('DROP TABLE person');
        $this->addSql('DROP TABLE test');
    }
}
