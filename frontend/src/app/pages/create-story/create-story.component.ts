import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { GenericCardComponent } from '../../components/generic-card/generic-card.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-story',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ButtonComponent, GenericCardComponent],
  templateUrl: './create-story.component.html',
  styleUrl: './create-story.component.scss'
})
export class CreateStoryComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  public auth = inject(AuthService);

  storyForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', [Validators.required, Validators.minLength(50)]]
  });

  isProcessing = false;

  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (file.type === 'text/plain') {
        const text = await file.text();
        this.storyForm.patchValue({ content: text });
      } else {
        alert("Atualmente apenas arquivos .txt são suportados diretamente. Cole o texto do PDF na caixa abaixo.");
      }
    }
  }

  async submitStory() {
    if (this.storyForm.invalid) return;

    this.isProcessing = true;
    try {
      const { title, content } = this.storyForm.value;
      // Integration with Gemini in the next steps
      console.log("Enviando texto para a IA:", title);
      
      setTimeout(() => {
        this.isProcessing = false;
        alert("Conto recebido e lido na tela! Agora avançaremos para integrá-lo diretamente à rota do Firebase Functions / Gemini na Fase 4.");
      }, 1500);

    } catch (e) {
      console.error(e);
      this.isProcessing = false;
    }
  }
}
