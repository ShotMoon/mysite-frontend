import AppStateClass from './app-state'

export const AppState = AppStateClass

export default {
  AppState,
}

//for server rendering
export const createStoreMap = () => {
  return {
    appState: new AppState(),
  }
}
