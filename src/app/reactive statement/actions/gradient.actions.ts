import {createAction, props} from '@ngrx/store'
export const changeFirstColor = createAction('[CHANGE_FIRST_COLOR] color', props<{ color: string }>());
export const changeDirection = createAction('[CHANGE_DIRECTION] direction', props<{ direction: string }>());
export const toggleRadialMode = createAction('[TOGGLE_RADIAL_MODE]');
