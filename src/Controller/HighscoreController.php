<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Highscore;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class HighscoreController extends AbstractController
{
    /**
     * @Route("/highscore", name="highscore")
     */
    public function createHighscore(EntityManagerInterface $entityManager, ValidatorInterface $validator): Response
    {
        //gets Doctrine's entity manager object, which is the most important object in Doctrine. It's responsible for saving objects to, and fetching objects from, the database.
        //$entityManager = $this->getDoctrine()->getManager();

        $highscore = new Highscore();
        $highscore->setNickname('test');
        $highscore->setStreak(3);

        // We are telling Doctrine we want to (eventually) save the Highscore (no queries yet)
        $entityManager->persist($highscore);

        //actally executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        $errors = $validator->validate($highscore);
        if (count($errors) > 0) {
            return new Response((string) $errors, 400);
        }

        return new Response('Saved new highscore with id '.$highscore->getId());
    }

    /**
     * @Route("/highscore/{id}", name="product_show")
     */
    public function show($id)
    {
        $highscore = $this->getDoctrine()
            ->getRepository(Highscore::class)
            ->find($id);

        if (!$highscore) {
            throw $this->createNotFoundException(
                'No entry found for id '.$id
            );
        }

        return new Response('This is the entry you were looking for: '.$highscore->getNickname());
    }
}
