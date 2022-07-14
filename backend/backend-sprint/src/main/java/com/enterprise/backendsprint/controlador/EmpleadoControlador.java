package com.enterprise.backendsprint.controlador;

import com.enterprise.backendsprint.modelo.Actividad;
import com.enterprise.backendsprint.modelo.Empleado;
import com.enterprise.backendsprint.repositorio.ActividadRepositorio;
import com.enterprise.backendsprint.repositorio.EmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET})
public class EmpleadoControlador {
    @Autowired
    private EmpleadoRepositorio repositorio;

    @GetMapping("/empleados")
    public List<Empleado> listarEmpleados() {
        return repositorio.findAll();
    }
}
