<?php
namespace App\Controller;

use App\Entity\Country;
use App\Repository\HighscoreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class CountryController extends ApiController {
    /**
     * @Route("/countries", methods="GET")
     */
    public function index(HighscoreRepository $highscoreRepository)
    {
        $countries = $highscoreRepository->transformAll();

        return $this->respond($countries);
    }

    /**
     * @Route("/country", methods="POST")
     */
    public function create(Request $request, HighscoreRepository $highscoreRepository, EntityManagerInterface $em)
    {
        $request = $this->transformJsonBody($request);
        if (! $request) {
            return $this->respondValidationError('Please provide a valid request!');
        }

        // validate the nickname
        if (! $request->get('nickname')) {
            //return $this->respondValidationError('Please provide a nickname!');
        }

        // persist the net nickname
        // $nickname = new Nickname;
        // $nickname->setNickname($request->get('nickname'));
        // $movie->setStreak(0);
        // $em->persist($nickname);
        // $em->flush();

        $nickname = new Nickname;
        $nickname->setNickname("test");
        $movie->setStreak(3);
        $em->persist($nickname);
        $em->flush();

        return $this->respondCreated($nicknameRepository->transform($nickname));

    }
}
?>