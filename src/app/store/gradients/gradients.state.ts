export interface GradientState {
  firstColor: string,
  lastColor: string,
  direction: string,
  nbColors: number,
  type: string
}

export const initialState: GradientState = {
  firstColor: '#123456',
  lastColor: '#654321',
  direction: '90deg',
  nbColors: 0,
  type: 'linear'
}
