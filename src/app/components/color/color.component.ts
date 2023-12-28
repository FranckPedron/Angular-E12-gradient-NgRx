import {Component, Input} from '@angular/core';

@Component({
  selector: 'Color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  standalone: true
})
export class ColorComponent {

  @Input()
  color!: string;
}
