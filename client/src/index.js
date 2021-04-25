import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as StoreProvider} from 'react-redux';
import {RecoilRoot} from 'recoil';

import store from './store';

import App from './components/App';
import GlobalStyle from './components/styles/GlobalStyle';
import GlobalFonts from './components/styles/GlobalFonts'

ReactDOM.render(
	<React.StrictMode>
		<GlobalFonts/>
		<GlobalStyle/>
		<StoreProvider store={store}>
			<RecoilRoot>
				<App/>
			</RecoilRoot>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);