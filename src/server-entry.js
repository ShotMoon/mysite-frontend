import React from 'react';
import { StaticRouter } from 'react-router-dom';//专门处理服务端渲染的组件
import { Provider, useStaticRendering } from 'mobx-react';
import { JssProvider } from 'react-jss';
import App from './views/App';
import { createStoreMap } from './store/store';

// 让mobx在服务端渲染的时候不会重复数据变换
useStaticRendering(true)


export default (stores, routerContext,sheetRegistry, jss, url) => (
    <Provider {...stores}>
      <StaticRouter context={routerContext} location={url}>
        <JssProvider registry={sheetRegistry} jss={jss}>
          <App />
        </JssProvider>
      </StaticRouter>
    </Provider>
)

export { createStoreMap }