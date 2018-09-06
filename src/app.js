import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MainPage from './views/MainPage/MainPage.jsx';
import NextPage from './views/MainPage/NextPage.jsx';
const root = document.getElementById('root')

const render = (Component) =>{
    ReactDOM.hydrate(
        <AppContainer>
            <Component/>
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
