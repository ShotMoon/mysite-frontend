import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import Register from './containers/Register/register';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (<Provider>
		<BrowserRouter>
			<div>
				<Switch>
					<Route component={Register}></Route>
				</Switch>
				
			</div>
		</BrowserRouter>
	</Provider>), 
    document.getElementById('root'));
registerServiceWorker();
