<?php
use Ratchet\Server\IoServer;
use SeaBattle\SeaBattle;

require dirname(__DIR__) . '/vendor/autoload.php';

$server = IoServer::factory(
  new SeaBattle(),
  8083
);
$server->run();
