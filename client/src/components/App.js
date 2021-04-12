import styled, {keyframes} from 'styled-components';
import {useRecoilValue} from 'recoil';

import {bookListState} from '../state/bookList';
import {navigationState} from '../state/navigation';

import Form from './book-form/BookForm';
import BookList from './book-list/BookList';
import DefaultHeadingSection from './book-list/DefaultHeadingSection';
import ToggleNavButton from './navigation/ToggleNavButton';
import Navigation from './navigation/Navigation';

const scrollingTitle = keyframes`
	from {
		opacity: 1;
		transform: var(--default-transformation) translateX(-100%);
	}

	to {
		opacity: 0.3;
		transform: var(--default-transformation) translateX(100%);
	}
`;

const ContentWrapper = styled.div`
	--content: 'Book List';

	position: relative;
	display: grid;
	grid-template-columns: 2.6fr 5fr;
	gap: 7.5vmax;
	padding: var(--v-padding) var(--h-padding);
	
	&:before, &:after {
		--default-transformation: translateY(-100%) rotate(-90deg);

		content: var(--content);
		position: fixed;
		top: 0;
		right: var(--h-padding);
		width: 150vh;
		display: flex;
		color: rgb(var(--cold-grey-800));
		font-size: 30vh;
		font-weight: 800;
		line-height: 0.7em;
		transform-origin: 100% 100%;
		transform: var(--default-transformation);
		opacity: 0;
		z-index: -1;
	}

	&:before {
		animation: ${scrollingTitle} 10s infinite linear;
	}

	&:after {
		animation: ${scrollingTitle} 10s 5s infinite linear;
	}
`;

const App = () => {
	const bookList = useRecoilValue(bookListState);
	const {isOpen: isNavOpen} = useRecoilValue(navigationState);
	const isBookListEmpty = !bookList.length;

	return (
		<>
			<ContentWrapper>
				<Form/>
				{isBookListEmpty 
					? <DefaultHeadingSection/>
					: <BookList/> 
				}
			</ContentWrapper>
			{isNavOpen && <Navigation/>}
			<ToggleNavButton/>
		</>
	);
}

export default App;