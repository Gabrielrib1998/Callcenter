<?php
    // Conexão com o banco de dados  
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "callcenter";

    // Criar conexão
    $conn = new mysqli($servername, $username, $password, $dbname);


    $_SESSION['conn'] = $conn;

?>