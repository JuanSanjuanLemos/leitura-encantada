import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
  @Input() public urlNavigate: string = '';

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

  constructor(private router: Router){

  }

  ngOnInit(){
    this.mountPaletteColor();
  }

  mountPaletteColor(){
    switch(this.type){
      case 'orange':
        this.backGroundColor = this.palette.orange;
        this.color = this.palette.white;
        this.boxShadowColor = '#e1bf91';
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

  navigate() {
    if(this.urlNavigate) {
      this.router.navigate([this.urlNavigate]);
    }
  }

}
