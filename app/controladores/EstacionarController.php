<?php
require_once '../modelos/Estacionar.php';
header("Access-Control-Allow-Origin: http://localhost:5173"); // Permite peticiones desde tu frontend
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Cabeceras permitidas

class EstacionarController
{
    private $modelo;

    public function __construct()
    {
        $this->modelo = new Estacionar();
    }

    public function listar()
    {
        header('Content-Type: application/json');
        echo json_encode($this->modelo->obtenerTodos());
    }

    public function guardar()
    {
        $data = json_decode(file_get_contents("php://input"), true);
        $resultado = $this->modelo->agregar(
            $data['idCita'],
            $data['idPaciente'],
            $data['fechaHora'],
            $data['estado'],
            $data['id_historial'],
        );
        echo json_encode(["success" => $resultado]);
    }

    public function editar()
    {
        $data = json_decode(file_get_contents("php://input"), true);
        $resultado = $this->modelo->editar(
            $data['idCita'],
            $data['fechaHora'],
            $data['estado'],
            $data['id_historial'],
        );
        echo json_encode(["success" => $resultado]);
    }

    public function eliminar()
    {
        $id = json_decode(file_get_contents("php://input"), true);
        $resultado = $this->modelo->eliminar($id);
        echo json_encode(["success" => $resultado]);
    }
}

// Manejo de peticiones
$action = $_GET['action'] ?? '';
$controller = new EstacionarController();

if ($action == "listar") {
    $controller->listar();
} elseif ($action == "guardar") {
    $controller->guardar();
} elseif ($action == "editar") {
    $controller->editar();
} elseif ($action == "eliminar") {
    $controller->eliminar();
}
