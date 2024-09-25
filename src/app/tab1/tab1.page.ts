import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  registerForm!: FormGroup;


  constructor(public auth: AuthService) {

    this.registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    });
  }

  onSignin() {
    if (this.registerForm.valid) {
      const { email, senha } = this.registerForm.value;
      this.auth.emailSignin(email, senha)
        .then(res => {
          console.log('Login bem-sucedido', res);
        })
        .catch(err => {
          console.error('Erro no login', err);
        });
    }
  }
}
