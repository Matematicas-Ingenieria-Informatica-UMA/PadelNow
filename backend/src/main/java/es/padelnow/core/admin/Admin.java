package es.padelnow.core.admin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Admin {

    @Id
    @GeneratedValue
    private Long username;

    @Column(nullable = false, name = "contraseña")
    private String contrasena;

    @Column(nullable = false)
    private String correo;
}
