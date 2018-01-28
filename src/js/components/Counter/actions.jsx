// @flow
export const COUNTER_STEP = 'COUNTER_STEP'

export const counterStep = (steps:number) => ({
  type: COUNTER_STEP,
  payload: {
    steps,
  },
})
