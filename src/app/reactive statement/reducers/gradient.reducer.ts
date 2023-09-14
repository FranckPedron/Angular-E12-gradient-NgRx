import {createReducer, on} from "@ngrx/store";
import * as GradientActions from "../actions/gradient.actions";

export interface Gradient {
  firstColor: string,
  lastColor: string,
  direction: string,
  nbColors: number,
  type: string
}

export const initialState: Gradient = {
  firstColor: '#123456',
  lastColor: '#654321',
  direction: '90deg',
  nbColors: 0,
  type: 'linear'
}

export const gradientReducer= createReducer(
  initialState,
  on(GradientActions.changeFirstColor, (state, action) => ({...state, nbColors: state.nbColors +1, firstColor: action.color})),
  on(GradientActions.changeDirection, (state, action) => ({...state, direction: action.direction })),
  on(GradientActions.toggleRadialMode, state => ({...state, type: state.type === 'radial'? 'linear': 'radial'}))
  );
