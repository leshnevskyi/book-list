import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Light'), local('SFUIText-Light'),
			url('../../assets/fonts/subset-SFUIText-Light.woff2') format('woff2'),
			url('../../assets/fonts/subset-SFUIText-Light.woff') format('woff');
		font-weight: 300;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Light Italic'), local('SFUIText-LightItalic'),
			url('../../assets/fonts/subset-SFUIText-LightItalic.woff2') format('woff2'),
			url('../../assets/fonts/subset-SFUIText-LightItalic.woff') format('woff');
		font-weight: 300;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Regular'), local('SFUIText-Regular'),
			url('../../assets/fonts/subset-SFUIText-Regular.woff2') format('woff2'),
			url('../../assets/fonts/subset-SFUIText-Regular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Italic'), local('SFUIText-RegularItalic'),
				url('../../assets/fonts/subset-SFUIText-RegularItalic.woff2') format('woff2'),
				url('../../assets/fonts/subset-SFUIText-RegularItalic.woff') format('woff');
		font-weight: 400;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Medium'), local('SFUIText-Medium'),
			url('../../assets/fonts/subset-SFUIText-Medium.woff2') format('woff2'),
			url('../../assets/fonts/subset-SFUIText-Medium.woff') format('woff');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Medium Italic'), local('SFUIText-MediumItalic'),
			url('../../assets/fonts/subset-SFUIText-MediumItalic.woff2') format('woff2'),
			url('../../assets/fonts/subset-SFUIText-MediumItalic.woff') format('woff');
		font-weight: 500;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Semibold'), local('SFUIText-Semibold'),
			url('../../assets/fonts/subset-SFUIText-Semibold.woff2') format('woff2'),
			url('../../assets/fonts/subset-SFUIText-Semibold.woff') format('woff');
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Semibold Italic'), local('SFUIText-SemiboldItalic'),
			url('../../assets/fonts/subset-SFUIText-SemiboldItalic.woff2') format('woff2'),
			url('../../assets/fonts/subset-SFUIText-SemiboldItalic.woff') format('woff');
		font-weight: 600;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Bold'), local('SFUIText-Bold'),
				url('../../assets/fonts/subset-SFUIText-Bold.woff2') format('woff2'),
				url('../../assets/fonts/subset-SFUIText-Bold.woff') format('woff');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Bold Italic'), local('SFUIText-BoldItalic'),
			url('../../assets/fonts/subset-SFUIText-BoldItalic.woff2') format('woff2'),
			url('../../assets/fonts/subset-SFUIText-BoldItalic.woff') format('woff');
		font-weight: 700;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Heavy'), local('SFUIText-Heavy'),
		url('../../assets/fonts/subset-SFUIText-Heavy.woff2') format('woff2'),
		url('../../assets/fonts/subset-SFUIText-Heavy.woff') format('woff');
		font-weight: 900;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Heavy Italic'), local('SFUIText-HeavyItalic'),
			url('../../assets/fonts/subset-SFUIText-HeavyItalic.woff2') format('woff2'),
			url('../../assets/fonts/subset-SFUIText-HeavyItalic.woff') format('woff');
		font-weight: 900;
		font-style: italic;
		font-display: swap;
	}
	
	:root {
		--white: 255, 255, 255;
		--bright-red-500: 255, 73, 73;
		--cold-grey-100: 195, 199, 215;
		--cold-grey-500: 89, 94, 119;
		--cold-grey-700: 38, 41, 55;
		--cold-grey-800: 29, 31, 40;

		--default-stroke-width: 2px;

		--icon-color: rgb(var(--cold-grey-100));

		font-size: 10px;
		line-height: 1.3;
		overflow: hidden;
	}

	* {
		color: inherit;
		font-size: inherit;
		font-weight: inherit;
		line-height: inherit;
		box-sizing: border-box;
	}
	
	body {
		--color: rgb(var(--cold-grey-100));
		--bg: rgb(var(--cold-grey-700));

		margin: 0;
		padding: 0;
		font-family: 'SF UI Text';
		font-size: 2rem;
		font-weight: 500;
		color: var(--color);
		background: var(--bg);
	}

	main {
		display: block;
	}

	h1 {
		font-size: 2em;
		margin: 0;
	}

	hr {
		box-sizing: content-box;
		height: 0;
		overflow: visible;
	}
	
	pre {
		font-family: monospace, monospace;
		font-size: 1em;
	}

	a {
		background-color: transparent;
	}

	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}

	b,
	strong {
		font-weight: bolder;
	}

	code,
	kbd,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}
	
	sup {
		top: -0.5em;
	}

	img {
		border-style: none;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}

	button,
	input {
		overflow: visible;
		border: none;
	}

	button {
		--bg: rgb(var(--cold-grey-800));

		background: var(--bg);
		padding: 0;
		cursor: pointer;
	}

	button:disabled {
		--icon-color: rgb(var(--cold-grey-500));
	}

	input {
		--bg: rgb(var(--cold-grey-800));

		background: var(--bg);
	}

	button:focus,
	input:focus {
		outline: none;
	}

	button,
	select {
		text-transform: none;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		-webkit-appearance: button;
	}

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	button:-moz-focusring,
	[type="button"]:-moz-focusring,
	[type="reset"]:-moz-focusring,
	[type="submit"]:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}

	legend {
		box-sizing: border-box;
		color: inherit;
		display: table;
		max-width: 100%;
		padding: 0;
		white-space: normal;
	}

	progress {
		vertical-align: baseline;
	}

	textarea {
		overflow: auto;
	}

	[type="checkbox"],
	[type="radio"] {
		box-sizing: border-box;
		padding: 0;
	}

	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	[type="search"] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}

	[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}

	details {
		display: block;
	}

	summary {
		display: list-item;
	}

	svg {
		stroke: var(--icon-color);
		stroke-width: var(--default-stroke-width);
		fill: none;
	}

	template {
		display: none;
	}

	[hidden] {
		display: none;
	}
`;

export default GlobalStyle;