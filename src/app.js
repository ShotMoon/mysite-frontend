import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './views/App';
import { AppState, ArticleStore } from './store/store';

const initialState = window.__INITIAL__STATE__ || {}

const root = document.getElementById('root')


const createApp = (TheApp) => {
    class Main extends React.Component {
      // Remove the server-side injected CSS.
      componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
  
      render() {
        return <TheApp />
      }
    }
    return Main
}

const appState = new AppState(initialState.appState)
const articleStore = new ArticleStore(initialState.articleStore)

const render = (Component) =>{
    ReactDOM.hydrate(
        <AppContainer>
            <Provider appState={appState} articleStore={articleStore}>
                <BrowserRouter>
                    <Component/>
                </BrowserRouter>
            </Provider>
        </AppContainer>,root
    )
}

//服务端渲染warning
// ReactDOM.hydrate(<MainPage />, root);
render(createApp(App))

if (module.hot){
    module.hot.accept('./views/App.jsx', ()=>{
        const NextApp = require('./views/App.jsx').default
        // ReactDOM.hydrate(<NextMainPage />, root);
        render(createApp(NextApp))
    })
}
