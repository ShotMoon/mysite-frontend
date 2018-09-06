import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'mobx-react';
import MainPage from './views/MainPage/MainPage.jsx';
import appState from './store/app.state';

const root = document.getElementById('root')

const render = (Component) =>{
    ReactDOM.hydrate(
        <AppContainer>
            <Provider appState = {appState}>
                <BrowserRouter>
                    <Component/>
                </BrowserRouter>
            </Provider>
        </AppContainer>,root
    )
}

//服务端渲染warning
// ReactDOM.hydrate(<MainPage />, root);
render(MainPage)

if (module.hot){
    module.hot.accept('./views/MainPage/MainPage.jsx', ()=>{
        const NextMainPage = require('./views/MainPage/MainPage.jsx').default
        // ReactDOM.hydrate(<NextMainPage />, root);
        render(NextMainPage)
    })
}
