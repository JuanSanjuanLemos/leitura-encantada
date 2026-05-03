import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GenericCardComponent } from '../../components/generic-card/generic-card.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule, GenericCardComponent, ButtonComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  authService = inject(AuthService);
  private router = inject(Router);

  goToCreate() {
    this.router.navigate(['/teacher/create']);
  }
}
