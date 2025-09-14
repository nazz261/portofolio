<?php

// Vercel PHP handler for Laravel
require_once __DIR__ . '/../vendor/autoload.php';

// Get the request URI and method
$requestUri = $_SERVER['REQUEST_URI'] ?? '/';
$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';

// Remove query string from URI
$requestUri = parse_url($requestUri, PHP_URL_PATH);

// Set up Laravel environment
$app = require_once __DIR__ . '/../bootstrap/app.php';

// Create a new request instance
$request = \Illuminate\Http\Request::create(
    $requestUri,
    $requestMethod,
    $_GET,
    $_POST,
    $_FILES,
    $_SERVER,
    file_get_contents('php://input')
);

// Handle the request
$kernel = $app->make(\Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle($request);

// Send the response
$response->send();

// Terminate the request
$kernel->terminate($request, $response);

