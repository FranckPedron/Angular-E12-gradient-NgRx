import {Component, Input} from '@angular/core';

@Component({
  selector: 'color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.sass']
})
export class ColorComponent {

  @Input()
  color!: string;
}
