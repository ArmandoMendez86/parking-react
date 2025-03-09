<?php
require_once '../../config/Conexion.php';

class Estacionar
{
    private $db;

    public function __construct()
    {
        $this->db = Conexion::getConexion();
    }

    public function obtenerTodos()
    {
        $fecha = date("Y-m-d");
        $query = "SELECT * FROM estacionar WHERE DATE(fecha_ingreso) = '$fecha'";
        return $this->db->query($query)->fetchAll(PDO::FETCH_ASSOC);
    }

    public function agregar($id, $id_paciente, $fecha_hora, $estado, $id_historial)
    {
        $query = "INSERT INTO citas (id, id_paciente, fecha_hora, estado, id_historial) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$id, $id_paciente, $fecha_hora, $estado, $id_historial]);
    }

    public function editar($id, $fechaHora, $estado, $id_historial)
    {
        $query = "UPDATE citas SET fecha_hora = ?, estado = ?, id_historial = ? WHERE id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$fechaHora, $estado, $id_historial, $id]);
    }

    public function eliminar($id)
    {
        $query = "DELETE FROM citas WHERE id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$id]);
    }
}
