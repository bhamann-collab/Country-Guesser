<?php

namespace App\Repository;

use App\Entity\Highscore;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @method Highscore|null find($id, $lockMode = null, $lockVersion = null)
 * @method Highscore|null findOneBy(array $criteria, array $orderBy = null)
 * @method Highscore[]    findAll()
 * @method Highscore[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HighscoreRepository extends ServiceEntityRepository
{
    private $manager;
    public function __construct(ManagerRegistry $registry, EntityManagerInterface $manager)
    {
        parent::__construct($registry, Highscore::class);
        $this->manager = $manager;
    }

    public function transform(Name $name) 
    {
        return [
            'id' => (int) $name->getId(),
            'title' => (string) $name->getNickname(),
            'count' => (int) $name->getStreak()
        ];
    }

    public function transformAll()
    {
        $names = $this->findAll();
        $namesArray = [];
    

        foreach ($names as $name) {
            $namesArray[] = $this->rtransform($name);
        }

        return $namesArray;
    }

    public function saveScore($nickname, $streak)
    {
        $newScore = new HighScore();

        $newScore->setNickname($nickname)->setStreak($streak);
        $this->manager->persist($newScore);
        $this->manager->flush();
    }

    public function findTopTen()
    {
        //Gets the top ten entries from the database
        $scores = $this->createQueryBuilder('h')
                    ->orderBy('h.streak', 'DESC')
                    ->setMaxResults(10)
                    ->getQuery()
                    ->getResult();
        return $scores;
    }

    // /**
    //  * @return Highscore[] Returns an array of Highscore objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Highscore
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
