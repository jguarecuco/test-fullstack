package com.enterprise.backendsprint.modelo;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "actividades")
public class Actividad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name", nullable = false, length = 60)
    private String nombre;
    @Column(name = "status", nullable = false, length = 60)
    private String estado;
    @Column(name = "timestamp", nullable = false)
    private Long timestamp;
    @Column(name="empleado",nullable = false,length = 60)
    private String empleado;
    public Actividad(){

    }

    public Actividad(long id, String nombre, String estado, Long timestamp, String empleado) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
        this.timestamp = timestamp;
        this.empleado = empleado;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    public String getEmpleado() {
        return empleado;
    }

    public void setEmpleado(String empleado) {
        this.empleado = empleado;
    }
}
