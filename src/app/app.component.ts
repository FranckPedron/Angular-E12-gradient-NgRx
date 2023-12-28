import { Component } from '@angular/core';
import {GradientComponent} from "./components/gradient/gradient.component";
import {ColorsComponent} from "./components/colors/colors.component";
import {RandomButtonsComponent} from "./components/buttons/random-buttons/random-buttons.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    GradientComponent,
    ColorsComponent,
    RandomButtonsComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'Gradient-Angular';
}
