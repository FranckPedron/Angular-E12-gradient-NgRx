import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent implements OnInit {

  direction!: string;
  firstColor!: string;
  lastColor!: string;
  type!: string;
  result!: string;

  ngOnInit() {
    this.direction = 'to right';
    this.firstColor = 'red';
    this.lastColor = 'blue';
    this.type = 'linear';
    if (this.type === 'linear') {
      this.result = `linear-gradient(${this.direction}, ${this.firstColor}, ${this.lastColor})`;
    } else {
      this.result = `radial-gradient(circle at center, ${this.firstColor}, ${this.lastColor})`;
    }
  }
}
