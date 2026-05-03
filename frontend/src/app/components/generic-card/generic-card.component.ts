import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="generic-card" [ngClass]="customClass">
      <h3 *ngIf="title">{{ title }}</h3>
      <p *ngIf="description">{{ description }}</p>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .generic-card {
      background: white;
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.02);
      border: 1px solid #edf2f7;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.06);
      }

      h3 {
        font-size: 22px;
        color: #2d3748;
        margin-top: 0;
        margin-bottom: 12px;
      }
      p {
        color: #718096;
        line-height: 1.5;
        margin-bottom: 24px;
        flex-grow: 1;
      }
      .card-content {
        margin-top: auto;
      }
    }
  `]
})
export class GenericCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() customClass: string = '';
}
