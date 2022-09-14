import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dynamicBackground]',
})
export class DynamicBackground {
  sourceImage: string;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2
  ) {
    if (el.nativeElement.src === '../../../assets/img/heart-filled.svg') {
      this.sourceImage = '../../../assets/img/heart.svg';
    } else {
      this.sourceImage = '../../../assets/img/heart-filled.svg';
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.ChangeBackgroundImg();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBackgroundImg();
  }

  ChangeBackgroundImg() {
    const { src } = this.el.nativeElement;
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.sourceImage);
    this.sourceImage = src;
  }
}
