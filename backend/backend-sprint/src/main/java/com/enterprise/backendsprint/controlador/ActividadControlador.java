package com.enterprise.backendsprint.controlador;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.enterprise.backendsprint.excepciones.ResourceNotFoundException;
import com.enterprise.backendsprint.modelo.Actividad;
import com.enterprise.backendsprint.repositorio.ActividadRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class ActividadControlador {
    @Autowired
    private ActividadRepositorio repositorio;

    @GetMapping("/actividades")
    public List<Actividad> listarActividades() {
        return repositorio.findAll();
    }


    @PostMapping("/actividades")
    public Actividad guardarActividad(@RequestBody Actividad actividad) {
        return repositorio.save(actividad);
    }

    @GetMapping("/actividades/{id}")
    public ResponseEntity<Actividad> obtenerEmpleadoPorId(@PathVariable Long id){
        Actividad actividad = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe la actividad con el ID : " + id));
        return ResponseEntity.ok(actividad);
    }

    @PutMapping("/actividades/{id}")
    public ResponseEntity<Actividad> actualizarActividad(@PathVariable Long id,@RequestBody Actividad detallesActividad){
        Actividad actividad = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe la actividad con el ID : " + id));

        actividad.setNombre(detallesActividad.getNombre());
        actividad.setEmpleado(detallesActividad.getEmpleado());
        actividad.setEstado(detallesActividad.getEstado());
        actividad.setTimestamp(detallesActividad.getTimestamp());

        Actividad actividadActualizado = repositorio.save(actividad);
        return ResponseEntity.ok(actividadActualizado);
    }


    @DeleteMapping("/actividades/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarActividad(@PathVariable Long id){
        Actividad actividad = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe la actividad con el ID : " + id));

        repositorio.delete(actividad);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar",Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
