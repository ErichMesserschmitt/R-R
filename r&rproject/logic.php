<?php 


$param = json_decode($_REQUEST["param"]);
$type = $param->action;


switch($type) {
    case 'counter': {
        $data = file_get_contents('pdatabase/counter.json');
        $arr = json_decode($data, true);
        $counter = 0;
        $arr[0]["count"] +=1;
        $json = json_encode($arr);
        file_put_contents('pdatabase/counter.json', $json);
        echo($arr[0]["count"]);
        break;
    }
    case 'content': {
        $data = file_get_contents('pdatabase/footage.json');
        echo($data);
        break;
    }
    case 'check': {
        $obj = $param->obj;
        $data = file_get_contents('pdatabase/accounts.json');
        $arr = json_decode($data, true);
        $n = 0;
        $e = 0;
        foreach($arr as $val){
            if($val["username"] == $obj->username){
                $n += 1;
            }
            if($val["email"] == $obj->email){
                $e += 1;
            }
        }
        echo("[{\"username\": \"".$n."\", \"email\": \"".$e."\"}]");
        break;
    }
    case 'register': {
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
       
        $query = "SELECT nickname FROM test2 WHERE (nickname = '$login')";
        $res = $conn->query($query);
        $query = "SELECT pass FROM test2 WHERE (pass = '$email')";
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
    case 'login': {
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
       
        $query = "SELECT nickname, pass, emai FROM test2 WHERE nickname = '$login' AND pass = '$pass' AND emai = '$email'";
        $res = $conn->query($query);
        
        
        if(mysqli_num_rows($res) == 1){            
            echo($login);            
        } else {
           echo("Wrong password");
        }
        break;
    }

    case 'create_table': {
        $sql = "CREATE DATABASE pdatabase";
        if ($conn->query($sql) === TRUE) {
            $msg.= "Database created successfully"."\n";
        } else {
            $msg.= "Error creating database: " . $conn->error."\n";
        }

        $query = "create table test2(".
        "ID INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,".
        "nickname VARCHAR(25) NOT NULL UNIQUE,".
        "pass VARCHAR(25) NOT NULL,".
        "emai VARCHAR(25) NOT NULL UNIQUE".
        ") CHARACTER SET utf8";

        //$conn->query($query);
        $servername = "localhost";
        $username = "root";
        $password = "";
        $msg = "";
        $conn = new mysqli($servername, $username, $password);
        //Check connection
        if ($conn->connect_error) {
            $msg.=("Connection failed: " . $conn->connect_error."\n");
        } 
        $msg.= "Connected successfully"."\n";

       
    }
    case 'connect': {
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
        //echo($msg);
        break;
    }
}

?>