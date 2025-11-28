<?php

include 'db_ramais.php';

class Ramais
{
    private $ramalBancoDados;

    public function __construct()
    {
        
    }

    public function getRamais()
    {

        $sql = "SELECT id, nome, statusramal, numeroramal, IPramal FROM ramais";
        $stmt = $_SESSION['conn']->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();
        $getRamais = $result->fetch_all(MYSQLI_ASSOC); 

        $info_ramais = array();

        foreach ($getRamais as $ramal) {

            if($ramal['statusramal'] == 'UNKNOWN') {

                $info_ramais[$ramal['id']] = array(
                'nome'   => $ramal['nome'],
                'status' => $ramal['statusramal'],
                'online' => false,
                'numeroramal'  => $ramal['numeroramal'],
                'IPramal'  => $ramal['IPramal']
                );
            } else {
                $info_ramais[$ramal['id']] = array(
                    'nome'   => $ramal['nome'],
                    'status' => $ramal['statusramal'],
                    'online' => true,
                    'numeroramal'  => $ramal['numeroramal'],
                    'IPramal'  => $ramal['IPramal']
                );
            }
        }

        return $info_ramais;
    }
}

$conexao = new Ramais();
$listaRamais = json_encode($conexao->getRamais());
echo $listaRamais;

?>