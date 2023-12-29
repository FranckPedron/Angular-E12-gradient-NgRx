export interface GradientStateInterface {
  firstColor: string,
  lastColor: string,
  direction: string,
  nbColors: number,
  type: string
}

export const initialState: GradientStateInterface = {
  firstColor: '#123456',
  lastColor: '#654321',
  direction: '90deg',
  nbColors: 0,
  type: 'linear'
}
