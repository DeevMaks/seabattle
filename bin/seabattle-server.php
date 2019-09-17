<?php
use Ratchet\Server\IoServer;
use SeaBattle\SeaBattle;

require dirname(__DIR__) . '/vendor/autoload.php';


$app = new Ratchet\App('localhost', 8082);
$app->route('/chat', new SeaBattle(), array('*'));
$app->route('/echo', new Ratchet\Server\EchoServer, array('*'));
$app->run();
