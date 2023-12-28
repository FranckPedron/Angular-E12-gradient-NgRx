import {createReducer, on} from "@ngrx/store";
import * as GradientActions from "./gradients.actions";
import {initialState} from "./gradients.state";


export const gradientsReducers= createReducer(
  initialState,
  on(GradientActions.changeFirstColor, (state, action) => ({...state, nbColors: state.nbColors +1, firstColor: action.color})),
  on(GradientActions.changeLastColor, (state, action) => ({...state, nbColors: state.nbColors +1, lastColor: action.color})),
  on(GradientActions.changeDirection, (state, action) => ({...state, direction: action.direction })),
  on(GradientActions.toggleRadialMode, state => ({...state, type: state.type === 'radial'? 'linear': 'radial'}))
  );
