import styled from 'styled-components';

import Toolbar from '../shared/Toolbar';
import BookCountSelect from '../shared/BookCountSelect';
import BookSortingSelect from '../shared/BookSortingSelect';
import BookTable from '../book-list/BookTable';

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
	return (
		<ContentWrapper>
			<Toolbar>
				<BookCountSelect/>
				<BookSortingSelect/>
			</Toolbar>
			<BookTable/>
		</ContentWrapper>
	);
}

export default Navigation;