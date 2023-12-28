import {Component, OnInit} from '@angular/core';
import {ColorComponent} from "../color/color.component";

@Component({
  selector: 'Colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  imports: [
    ColorComponent
  ],
  standalone: true
})
export class ColorsComponent implements OnInit {

  firstColor!: string;
  lastColor!: string;

  ngOnInit() {
    this.firstColor = "blue";
    this.lastColor = "yellow";
  }
}
