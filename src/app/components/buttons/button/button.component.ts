import {Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
import {Action, Store} from "@ngrx/store";

@Component({
  selector: 'Button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  private readonly store: Store = inject(Store)

  @Input()
  action!: Action;

  @ViewChild('button')
  input!: ElementRef;

  executeAction(act: Action) {
    this.store.dispatch(act);
  }
}
