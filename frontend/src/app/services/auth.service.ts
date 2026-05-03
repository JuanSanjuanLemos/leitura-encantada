import { Injectable, inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  // Observable que escuta em tempo real o estado de autenticação do usuário
  readonly user$ = user(this.auth);

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      // Sucesso na autenticação. Podemos direcionar o professor ao dashboard.
      this.router.navigate(['/teacher']);
      return result;
    } catch (error) {
      console.error('Falha na autenticação via Google', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Erro ao sair da conta', error);
    }
  }
}
