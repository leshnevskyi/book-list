import {createGlobalStyle} from 'styled-components';

const GlobalFonts = createGlobalStyle`
	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Light'), local('SFUIText-Light'),
			url('../../assets/fonts/subset-SFUIText-Light.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-Light.woff') 
			format('woff');
		font-weight: 300;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Light Italic'), local('SFUIText-LightItalic'),
			url('../../assets/fonts/subset-SFUIText-LightItalic.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-LightItalic.woff') 
			format('woff');
		font-weight: 300;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Regular'), local('SFUIText-Regular'),
			url('../../assets/fonts/subset-SFUIText-Regular.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-Regular.woff') 
			format('woff');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Italic'), local('SFUIText-RegularItalic'),
			url('../../assets/fonts/subset-SFUIText-RegularItalic.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-RegularItalic.woff') 
			format('woff');
		font-weight: 400;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Medium'), local('SFUIText-Medium'),
			url('../../assets/fonts/subset-SFUIText-Medium.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-Medium.woff') 
			format('woff');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Medium Italic'), local('SFUIText-MediumItalic'),
			url('../../assets/fonts/subset-SFUIText-MediumItalic.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-MediumItalic.woff') 
			format('woff');
		font-weight: 500;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Semibold'), local('SFUIText-Semibold'),
			url('../../assets/fonts/subset-SFUIText-Semibold.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-Semibold.woff') 
			format('woff');
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Semibold Italic'), local('SFUIText-SemiboldItalic'),
			url('../../assets/fonts/subset-SFUIText-SemiboldItalic.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-SemiboldItalic.woff') 
			format('woff');
		font-weight: 600;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Bold'), local('SFUIText-Bold'),
				url('../../assets/fonts/subset-SFUIText-Bold.woff2') 
				format('woff2'),
				url('../../assets/fonts/subset-SFUIText-Bold.woff') 
				format('woff');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Bold Italic'), local('SFUIText-BoldItalic'),
			url('../../assets/fonts/subset-SFUIText-BoldItalic.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-BoldItalic.woff') 
			format('woff');
		font-weight: 700;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Heavy'), local('SFUIText-Heavy'),
			url('../../assets/fonts/subset-SFUIText-Heavy.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-Heavy.woff') 
			format('woff');
		font-weight: 900;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'SF UI Text';
		src: local('SF UI Text Heavy Italic'), local('SFUIText-HeavyItalic'),
			url('../../assets/fonts/subset-SFUIText-HeavyItalic.woff2') 
			format('woff2'),
			url('../../assets/fonts/subset-SFUIText-HeavyItalic.woff') 
			format('woff');
		font-weight: 900;
		font-style: italic;
		font-display: swap;
	}
`;

export default GlobalFonts;