<?php
namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;

class CountryController extends ApiController {
    /**
     * @Route("/countries")
     */
    public function countriesOceana() {
        return $this->respond([
            [
                'name' => 'Australia',
                'count' => 0
            ]
        ]);
    }
}
?>