import { createSelector } from 'reselect'

export const getUserInput = createSelector(
  state => state.app,
  appStates => appStates.userInput
)
