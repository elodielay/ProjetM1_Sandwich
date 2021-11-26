import { Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appSelection]'
})
export class SelectionDirective implements OnChanges {
  
  @HostBinding('style.BackgroundColor')
  BackgroundColor!: string;
  @HostBinding('style.color')
  color!: string;
  @Input('appSelection')
  isSelection!: boolean;

  ngOnChanges() {}

  constructor() {}

}
