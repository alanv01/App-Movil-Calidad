import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  usuario: string = '';
  contrasena: string = '';  
  showPassword: boolean = false; 

  constructor(private formBuilder: FormBuilder, private router: Router) { // Inyecta el Router
    this.registroForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const username = this.registroForm.get('username')?.value;
      const password = this.registroForm.get('password')?.value;
      console.log('Usuario registrado:', { username, password });

      // Guarda el usuario en el almacenamiento local
      localStorage.setItem('usuario', JSON.stringify({ username, password }));

      // Redirige a la página de login
      this.router.navigate(['/login']);
    } else {
      console.log('Formulario no válido');
    }
  }
}


