import AppState from './app-state';
import {ArticleStore} from './article-store';

export { AppState, ArticleStore }

export default {
  AppState,
}

//for server rendering
export const createStoreMap = () => {
  return {
    appState: new AppState(),
    articleStore: new ArticleStore()
  }
}
