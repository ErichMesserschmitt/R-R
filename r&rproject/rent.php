<?php 


$param = json_decode($_REQUEST["param"]);
$action = $param->action;
$response = array();
switch($action) {
    case "getAll":{ 
        $data = file_get_contents('pdatabase/cars.json');
        echo($data);
        break;
    }
    case "city":{
        $data = file_get_contents('pdatabase/cars.json');
        $arr = json_decode($data, true);
        
        foreach($arr as $val){
            if($val["type"] == "city"){
               array_push($response, $val);
            }
        }
        echo(json_encode($response));
    break;
    }
    case "truck":{
        $data = file_get_contents('pdatabase/cars.json');
        $arr = json_decode($data, true);
        
        foreach($arr as $val){
            if($val["type"] == "truck"){
                array_push($response, $val);
            }
        }
        echo(json_encode($response));
    break;
    }
    case "classic":{
        $data = file_get_contents('pdatabase/cars.json');
        $arr = json_decode($data, true);
        
        foreach($arr as $val){
            if($val["type"] == "classic"){
                array_push($response, $val);
            }
        }
        echo(json_encode($response));
    break;
    }
    case "race":{
        $data = file_get_contents('pdatabase/cars.json');
        $arr = json_decode($data, true);
        
        foreach($arr as $val){
            if($val["type"] == "race"){
                array_push($response, $val);
            }
        }
        echo(json_encode($response));
    break;
    }
    case "rent":{
        $data = file_get_contents('pdatabase/cars.json');
        $car = $param->car;
        $arr = json_decode($data, true);
        
        foreach($arr as $val){
            if($val["name"] == $car){
                array_push($response, $val);
            }
        }
        setcookie("rent", json_encode($response));
        echo(json_encode($response));
    break;
    }
    case "deal":{
        echo($_COOKIE["rent"]);
    break;
    }
    case "view":{
        $car = $param->car;
        setcookie("view", json_encode($car));
        echo(json_encode($car));
    break;
    }
    case "view_rent": {
        echo($_COOKIE["view"]);
    break;
    }
    
}

?>