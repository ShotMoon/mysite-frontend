import React from 'react';
import {
    observer,
    inject
} from 'mobx-react';
import PropTypes from 'prop-types';
import { AppState } from '../store/app-state';

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
            this.props.appState.count = 4
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
                <input type="text" onChange={this.changeName} />
            {this.props.appState.msg}</div>
        )
    }
}

MainPage.propTypes = {
    appState: PropTypes.instanceOf(AppState),
}
  