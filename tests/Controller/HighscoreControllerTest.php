<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class HighscoreControllerTest extends WebTestCase
{
    //Testing the GET request with the url extension: /showHighScore
    public function testShowPost()
    {
        $client = static::createClient();

        $client->request('GET', '/showHighScore');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    //Testing the POST request with the url extension: /createHighscore with test parameters
    public function testPostRequest()
    {
        $client = static::createClient();

        $client->request('POST', 
        '/createHighscore',
        array(),
        array(),
        array('CONTENT_TYPE' => 'application/json'),
        '{
            
            "nickname": "php testing",
            "streak": 5
            
        }'
    );

        $this->assertEquals(201, $client->getResponse()->getStatusCode());
    }
}