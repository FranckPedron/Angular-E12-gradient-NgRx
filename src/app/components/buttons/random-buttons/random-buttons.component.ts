import {Component, inject, OnInit} from '@angular/core';
import {Action, Store} from "@ngrx/store";
import {changeFirstColor, changeLastColor} from "../../../store/gradients";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'Random-buttons',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './random-buttons.component.html',
  styleUrl: './random-buttons.component.scss'
})
export class RandomButtonsComponent implements  OnInit{
  private  readonly store: Store = inject(Store);

  ngOnInit(): void {
  }

  changeFirst () {
   this.store.dispatch(changeFirstColor({color:'#F0F'}));
  }

  changeLast = () => {
    this.store.dispatch(changeLastColor({color:'#0F0'}));
  }
}
