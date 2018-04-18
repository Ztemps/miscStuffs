import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResalted]'
})
export class ResaltedDirective {

  constructor(private elRef: ElementRef) {
    console.log('ResaltedDirective Loaded');
    // elRef.nativeElement.style.backgroundColor = 'yellow';
  }

  // tslint:disable-next-line:no-input-rename
  @Input('appResalted') newColor: string;


  @HostListener('mouseenter') mouseEnter() {
    this.resaltedColor( this.newColor || 'yellow ');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.resaltedColor( null );
  }

  private resaltedColor( color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
