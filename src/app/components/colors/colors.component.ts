import {Component, inject, OnInit} from '@angular/core';
import {ColorComponent} from "../color/color.component";
import {Store} from "@ngrx/store";
import {firstColor, lastColor} from "../../store/gradients";

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
  private readonly store: Store = inject(Store);

  firstColor = this.store.selectSignal(firstColor);
  lastColor= this.store.selectSignal(lastColor);

  ngOnInit() {  }
}
