import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GradientState} from "./gradients.state";

export const gradientsFeature = createFeatureSelector<GradientState>('gradients');

export const firstColor = createSelector(
  gradientsFeature,
  (state: GradientState) => state.firstColor
);

export const lastColor = createSelector(
  gradientsFeature,
  (state: GradientState) => state.lastColor
);

export const direction = createSelector(
  gradientsFeature,
  (state: GradientState) => state.direction
);

export const type = createSelector(
  gradientsFeature,
  (state: GradientState) => state.type
);
