<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/books', function (Request $request) {
    $response = Http::get('https://www.googleapis.com/books/v1/volumes?q='.$request->query('key'));
    return $response->body();
});

Route::get('shippingCost', function () {
    $month = date('m');
    if ($month == 9) {
        return response()->json([
            "motobike" => calculateShippingCost(5, 1.5),
            "train" => calculateShippingCost(10, 1.8),
            "aircraft" => calculateShippingCost(20, 2)
        ]);
    } else if ($month > 6 && $month < 9) {
        return response()->json([
            "motobike" => calculateShippingCost(5, 0.5),
            "train" => calculateShippingCost(10, 0.8),
            "aircraft" => calculateShippingCost(20, 0.8)
        ]);
    }
    return response()->json([
        "motobike" => calculateShippingCost(5, 1),
        "train" => calculateShippingCost(10, 1),
        "aircraft" => calculateShippingCost(20, 1)
    ]);
});

Route::post('/buyBook', function(Request $request) {

    $date = date('d-m-Y');

    $delvInfo = generateDeliveryInfo($request->input('service'), $request->input('shippingCost'), $date);

    return response()->json($delvInfo);
});

function calculateShippingCost($baseCost, $factor) {
    return $baseCost * $factor;
}

function generateDeliveryInfo($service, $cost, $date) {
    switch ($service) {
        case 'motorbike':
            return [
                'driverName' => 'Tupack',
                'mobile' => '0826237238',
                'deliveryDate' => $date,
                "cost" => $cost
            ];

        case 'train':
            return [
                'trainNo' => 'TR0091',
                'stationOfArrival' => 'Gate B2',
                'dateOfArrival' => $date,
                "cost" => $cost
            ];
        case 'aircraft':
            return [
                'flightNo' => 'FL09181',
                'gateOfArrival' => 'Gate K3',
                'dateOfArrival' => $date,
                "cost" => $cost
            ];
    }
}
