import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--v-padding: 7.3vh;
		--h-padding: 7.9vw;

		--white: 255, 255, 255;
		--bright-red-500: 255, 73, 73;
		--cold-grey-100: 195, 199, 215;
		--cold-grey-500: 89, 94, 119;
		--cold-grey-700: 38, 41, 55;
		--cold-grey-800: 29, 31, 40;

		--default-stroke-width: 2px;

		--icon-color: rgb(var(--cold-grey-100));

		--default-input-height: 4.3rem;

		font-size: 10px;
		line-height: 1.3;
	}

	::selection {
		color: rgb(var(--cold-grey-800));
		background-color: rgb(var(--cold-grey-100));
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background: rgb(var(--cold-grey-500));
	}

	::-webkit-scrollbar-thumb {
		background: rgb(var(--cold-grey-100));
	}

	::-webkit-scrollbar-thumb:hover {
		background: rgb(var(--white));
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
		user-select: none;
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