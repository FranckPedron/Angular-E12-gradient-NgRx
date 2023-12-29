import {createFeature, createReducer, on} from "@ngrx/store";
import {changeDirection, changeFirstColor, changeLastColor, toggleRadialMode} from "./gradients.actions";
import {initialState} from "./gradients.state";

const gradientFeature = createFeature({
  name: 'gradients',
  reducer: createReducer(
    initialState,
    on(changeFirstColor, (state, action) => ({...state, nbColors: state.nbColors + 1, firstColor: action.color})),
    on(changeLastColor, (state, action) => ({...state, nbColors: state.nbColors + 1, lastColor: action.color})),
    on(changeDirection, (state, action) => ({...state, direction: action.direction})),
    on(toggleRadialMode, state => ({...state, type: state.type === 'radial' ? 'linear' : 'radial'}))
  )
})

export const {
  name: gradientFeatureKey,
  reducer: gradientReducer,
  selectFirstColor,
  selectLastColor,
  selectType,
  selectDirection,
  selectNbColors
} = gradientFeature
