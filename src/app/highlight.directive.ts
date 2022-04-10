import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elm: ElementRef) {
    elm.nativeElement.style.backgroundColor = "yellow";
   }

}
