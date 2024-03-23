import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
})
export class ReadComponent {

  public file: File | null = null;


  public onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadFile(file);
  }

  public uploadFile(file: File): void {
    console.log(file);
  }
}
