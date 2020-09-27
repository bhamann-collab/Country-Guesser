<?php

namespace App\Controller;

use App\Entity\Highscore;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HighscoreController extends ApiController
{
    /**
     * @Route("/highscore", name="highscore")
     */
    public function createHighscore(EntityManagerInterface $entityManager): Response
    {
        //$entityManager = $this->getDoctrine()->getManager();

        $highscore = new Highscore();
        $highscore->setNickname('test');
        $highscore->setStreak(3);

        // We are telling Doctrine we want to (eventually) save the Highscore (no queries yet)
        $entityManager->persist($highscore);

        //actally executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new highscore with id '.$highscore->getId());
    }
}
