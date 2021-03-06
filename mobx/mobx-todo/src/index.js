import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './components/App';
import TodoStore from './stores/TodoStore';

ReactDOM.render(
	<Provider store={TodoStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
