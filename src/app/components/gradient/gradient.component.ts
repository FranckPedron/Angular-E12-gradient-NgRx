import {ChangeDetectionStrategy, Component, computed, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectDirection, selectFirstColor, selectLastColor, selectType} from "../../store/gradients";

@Component({
  selector: 'Gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GradientComponent implements OnInit {

  private readonly store: Store = inject(Store);

  direction = this.store.selectSignal(selectDirection);
  firstColor = this.store.selectSignal(selectFirstColor);
  lastColor = this.store.selectSignal(selectLastColor);
  type = this.store.selectSignal(selectType);
  result = computed(() => {
      return this.type() === 'linear' ?
        `linear-gradient(${this.direction()}, ${this.firstColor()}, ${this.lastColor()})` :
        `radial-gradient(circle at center, ${this.firstColor()}, ${this.lastColor()})`;
    }
  )

  ngOnInit() {}

}
