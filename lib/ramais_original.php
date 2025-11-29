<?php
/**
 * Você deverá transformar em uma classe
 */
header("Content-type: application/json; charset=utf-8");
$ramais = file('ramais');
$filas = file('filas');
$status_ramais = array();
foreach($filas as $linhas){
    if(strstr($linhas, 'SIP/')){
        $linha = explode(' ', trim($linhas));
        list($tech,$ramal) = explode('/',$linha[0]);

        if (strstr($linhas,'(disponivel)')){
            $status_ramais[$ramal] = array('status' => 'disponivel');
        }
        if (strstr($linhas,'(paused)')){
            $status_ramais[$ramal] = array('status' => 'pausado');
        }
        elseif(strstr($linhas,'(Ring)')){
            $status_ramais[$ramal] = array('status' => 'chamando');
        }
        elseif(strstr($linhas,'(In use)')){            
            $status_ramais[$ramal] = array('status' => 'ocupado');    
        }
        elseif(strstr($linhas,'(Not in use)')){
            $status_ramais[$ramal] = array('status' => 'Offline');    
        }
    }
}

$info_ramais = array();
foreach($ramais as $linhas){
    $linha = array_filter(explode(' ',$linhas));
    $arr = array_values($linha);
    if(isset($arr[1]) && trim($arr[1]) == '(Unspecified)' AND isset($arr[4]) && trim($arr[4]) == 'UNKNOWN'){        
        list($name,$username) = explode('/',$arr[0]);        
        $info_ramais[$name] = array(
            'nome' => $name,
            'ramal' => $username,
            'online' => false,
            'status' => isset($status_ramais[$username]) ? $status_ramais[$username]['status'] : 'Offline'
        );
    }
    if(isset($arr[5]) && trim($arr[5]) == "OK"){        
        list($name,$username) = explode('/',$arr[0]);
        $info_ramais[$name] = array(
            'nome' => $name,
            'ramal' => $username,
            'online' => true,
            'status' => isset($status_ramais[$username]) ? $status_ramais[$username]['status'] : 'disponivel'
        );
    }
}
echo json_encode($info_ramais);