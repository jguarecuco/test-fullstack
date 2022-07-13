package com.enterprise.backendsprint.repositorio;

import com.enterprise.backendsprint.modelo.Actividad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActividadRepositorio extends JpaRepository<Actividad, Long> {

}
