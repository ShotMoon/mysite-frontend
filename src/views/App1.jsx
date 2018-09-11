import React from 'react';
import {
    observer,
    inject
} from 'mobx-react';
import PropTypes from 'prop-types';
import { AppState } from '../store/app-state';
import Helmet from 'react-helmet';
import Header from 'components/Header/Header';
import Cards from 'components/Cards/Cards';
import bg from 'assets/img/bg.jpg';

@inject('appState') @observer
export default class MainPage extends React.Component{
    constructor(){
        super()
        this.changeName = this.changeName.bind(this)
    }

    //异步处理，完成后再继续渲染
    asyncBootstrap() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.props.appState.count = 6
            resolve(true)
          })
        })
    }

    changeName(event) {
        this.props.appState.name = event.target.value
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>app</title>
                    <meta name="desc" content="desccc"/>
                </Helmet>
                <Header />
                <img src={bg} />
                {/* <input type="text" onChange={this.changeName} />
                <span>{this.props.appState.msg}</span> */}
            </div>
        )
    }
}

MainPage.propTypes = {
    appState: PropTypes.instanceOf(AppState),
}
  