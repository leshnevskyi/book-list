import React from 'react';
import ReactDOM from 'react-dom';
import {RecoilRoot} from 'recoil';

import App from './components/App';
import GlobalStyle from './components/styles/GlobalStyle';
import GlobalFonts from './components/styles/GlobalFonts'

ReactDOM.render(
	<React.StrictMode>
		<GlobalFonts/>
		<GlobalStyle/>
		<RecoilRoot>
			<App/>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);