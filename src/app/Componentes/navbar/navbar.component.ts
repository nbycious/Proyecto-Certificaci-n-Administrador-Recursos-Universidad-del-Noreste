import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: any = null;

  constructor(private router: Router) {
    // Verificamos si el usuario ya está logueado
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      this.usuario = JSON.parse(storedUser);
    }
   }

  ngOnInit(): void {
  }
  logout() {
    // Elimina el usuario del localStorage
    localStorage.removeItem('usuario');
    this.usuario = null;
  
    // Navega a la página de inicio
    this.router.navigate(['']);
  
    // Muestra la alerta de SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Sesión cerrada con éxito',
      text: 'Te esperamos pronto de vuelta',
      confirmButtonText: 'Aceptar',
    });
  }
  
    navegarInicio(){
      this.router.navigate(['/Main'])
    }
  }
  