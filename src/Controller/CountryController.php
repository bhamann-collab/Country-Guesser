<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CountryController {
    /**
     * @Route("/countries")
     */
    public function countriesOceana() {
        return new JsonResponse([
            [
                'name' => 'Australia',
                'count' => 0
            ]
        ]);
    }
}
?>