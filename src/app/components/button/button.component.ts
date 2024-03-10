import { Component, Input, OnInit } from '@angular/core';
interface Palette {
  orange: string;
  lightOrange: string;
  green: string;
  lightGreen: string;
  white: string;
  gray1: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {

  @Input() public text: string = '';
  @Input() type: 'green' | 'orange' | 'white' = 'white';

  public color:string = '';
  public backGroundColor:string = '';
  public boxShadowColor:string = '';

  private palette: Palette = {
    orange: 'var(--orange)',
    lightOrange: 'var(--light-orange)',
    green: 'var(--green)',
    lightGreen: 'var(--light-green)',
    white: 'var(--white)',
    gray1: 'var(--gray-1)'
  };

  ngOnInit(){
    this.mountPaletteColor();
  }

  mountPaletteColor(){
    switch(this.type){
      case 'orange':
        this.backGroundColor = this.palette.orange;
        this.color = this.palette.white;
        this.boxShadowColor = '#FEF8F0';
        break
      case 'white':
        this.backGroundColor = this.palette.white;
        this.color = this.palette.gray1;
        this.boxShadowColor = '#4F4F4F';
        break
      case 'green':
        this.backGroundColor = this.palette.green;
        this.color = this.palette.white;
        this.boxShadowColor = '#93E7DF';
    }
  }

}
