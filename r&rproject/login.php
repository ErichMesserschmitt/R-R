<?php 
//echo(json_encode($_POST));
$param = json_decode($_REQUEST["param"]);
$act = $param->action;


switch($act) {
    case "register": {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $msg = "";
        $db = "pdatabase1";
        $conn = new mysqli($servername, $username, $password, $db);
        // Check connection
        if ($conn->connect_error) {
            $msg.=("Connection failed: " . $conn->connect_error."\n");
        } 
        $msg.= "Connected successfully"."\n";       

        $obj = $param->obj;
        $login = $obj->username;
        $pass = $obj->pass;
        $email = $obj->email;
       
        $query = "SELECT nickname FROM test2 WHERE ( nickname = '$login' )";
        $res = $conn->query($query);
        $query = "SELECT pass FROM test2 WHERE ( pass = '$login' )";
        $res_pass = $conn->query($query);
        
        if(mysqli_num_rows($res) == 0 && mysqli_num_rows($res_pass) == 0){
            $query = "INSERT INTO test2 (nickname, pass, emai) VALUES ('$login', '$pass', '$email')";
            if($conn->query($query)){
                echo("[{\"register\": \"200\"}]");
            } else {
                echo("[{\"register\": \"13\"}]");
            }
        } else {
            echo("[{\"register\": \"13\"}]");
        }
        break;
    }
    case "counter": {
        $data = file_get_contents("database/guestcount.json");
        $arr = json_decode($data, true);
        $counter = 0;
        $arr[0]["count"] +=1;
        $json = json_encode($arr);
        file_put_contents("database/guestcount.json", $json);
        echo($arr[0]["count"]);
    break;
    }
}

?>