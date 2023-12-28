import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {direction, firstColor, lastColor, type} from "../../store/gradients";

@Component({
  selector: 'Gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.scss'],
  standalone: true
})
export class GradientComponent implements OnInit {

  private readonly store: Store = inject(Store);

  direction = this.store.selectSignal(direction);
  firstColor = this.store.selectSignal(firstColor);
  lastColor = this.store.selectSignal(lastColor);
  type = this.store.selectSignal(type);
  result!: string;

  ngOnInit() {
    this.initGradient();
  }

  initGradient() {
    this.result = this.type() === 'linear' ?
      `linear-gradient(${this.direction()}, ${this.firstColor()}, ${this.lastColor()})` :
      `radial-gradient(circle at center, ${this.firstColor()}, ${this.lastColor()})`;
  }
}
