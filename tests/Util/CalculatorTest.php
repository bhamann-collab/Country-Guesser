<?php
namespace App\Tests\Util;

use App\Util\Calculator;
use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase
{
    public function testAdd()
    {
        $calculator = new Calculator();
        $test1 = $calculator->add(30, 12);
        $test2 = $calculator->add(1, 2);

        $this->assertEquals(42, $test1);
        $this->assertEquals(3, $test2);
    }
}

