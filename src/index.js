import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from './views/MainPage/MainPage.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (<Provider>
		<BrowserRouter>
			<div>
				<Switch>
					<Route component={MainPage}></Route>
				</Switch>
				
			</div>
		</BrowserRouter>
	</Provider>), 
    document.getElementById('root'));
registerServiceWorker();
