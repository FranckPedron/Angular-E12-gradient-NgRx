import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {changeFirstColor, changeLastColor} from "../../store/gradients";

@Component({
  selector: 'Gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.scss'],
  standalone: true
})
export class GradientComponent implements OnInit {

  private  readonly store: Store = inject(Store);

  direction!: string;
  firstColor!: string;
  lastColor!: string;
  type!: string;
  result!: string;

  ngOnInit() {
    this.initGradient();
    this.changeState();
  }

  initGradient() {
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

  changeState() {
    this.store.dispatch(changeFirstColor({color:'#F0F'}));
    this.store.dispatch(changeLastColor({color:'#0F0'}));
  }
}
