import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  err: any;

  constructor(public auth: AngularFireAuth) { }

  async emailSignin(email: string, senha: string){
    try {
      const credencial = await this.auth.createUserWithEmailAndPassword(email, senha);
      this.user = credencial;
    } catch (error) {
      this.err = error
    }
  }
}
