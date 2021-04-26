import {useSelector} from 'react-redux';
import styled from 'styled-components';

import {selectBookListIsEmpty} from '../book-list/bookListSlice';

import Toolbar from '../shared/Toolbar';
import BookCountSelect from '../shared/BookCountSelect';
import BookSortingSelect from '../shared/BookSortingSelect';
import BookTable from '../book-list/BookTable';
import ChangeOrderButton from '../shared/ChangeOrderButton';
import DefaultHeadingSection from '../book-list/DefaultHeadingSection';

const ContentWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	padding: var(--v-padding) var(--h-padding);
	background: rgba(var(--cold-grey-700), 0.7);
	backdrop-filter: blur(15px);
`;

const Navigation = () => {
	const isBookListEmpty = useSelector(selectBookListIsEmpty);

	return (
		<ContentWrapper>
			<Toolbar>
				<BookCountSelect/>
				<BookSortingSelect/>
				<ChangeOrderButton/>
			</Toolbar>
			{isBookListEmpty
				? <DefaultHeadingSection/>
				: <BookTable/>
			}
		</ContentWrapper>
	);
}

export default Navigation;