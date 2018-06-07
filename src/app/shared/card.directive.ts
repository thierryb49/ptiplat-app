import { Directive, OnChanges, SimpleChanges, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective implements OnChanges {
  @Input() appCard: number;
  @HostBinding('class') nomClass;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.appCard);
    if (this.appCard > 6) {
      this.nomClass = 'red-card';
    } else {
      this.nomClass = 'green-card';
    }

  }
}
