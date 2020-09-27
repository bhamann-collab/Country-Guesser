<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\HighscoreRepository;
use App\Entity\Highscore;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class HighscoreController extends AbstractController
{
    private $highscoreRepository;

    public function __construct(HighscoreRepository $highscoreRepository)
    {
        $this->highscoreRepository = $highscoreRepository;
    }

    /**
     * @Route("/createHighscore", name="highscore", methods={"POST"})
     */
    public function createHighscore(Request $request, EntityManagerInterface $entityManager, ValidatorInterface $validator): JsonResponse
    {

        $data = json_decode($request->getContent(), true);

        //gets Doctrine's entity manager object, which is the most important object in Doctrine. It's responsible for saving objects to, and fetching objects from, the database.
        //$entityManager = $this->getDoctrine()->getManager();


        $nickname = $data['nickname'];
        $streak = $data['streak'];

        if (empty($nickname) || empty($streak)) {
            throw new NotFoundHttpException('Expection mandatory parameters!');
        }

        $this->highscoreRepository->saveScore($nickname, $streak);

        return new JsonResponse(['status' => 'Customer created!'], Response::HTTP_CREATED);

    }

    /**
     * @Route("/showHighScore", name="product_show", methods={"GET"})
     */
    public function show()
    {
        $highscore = $this->getDoctrine()
            ->getRepository(Highscore::class)
            ->findAll();

        if (!$highscore) {
            throw $this->createNotFoundException(
                'There are no entries in the database'
            );
        }

        //Getting the name of every highscore entry and bundeling then into an array
        $data = [];
        foreach ($highscore as $entry) {
            $data[] = [
                'name' => $entry->getNickname(),
                'streak' => $entry->getStreak()
            ];
        }


        return new JsonResponse($data, Response::HTTP_OK);
    }
}
