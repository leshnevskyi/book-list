import styled from 'styled-components';
import {upperFirst} from 'lodash-es';
import {useSelector} from 'react-redux';

import {selectSortedBooks} from './bookListSlice';
import {bookProps} from '../../utils/validation';
import {selectMaxCount} from './bookFilteringSlice';

const Table = styled.table`
	--row-height: 4.3em; 

	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const TableHead = styled.thead`
	width: 100%;
`;

const TableBody = styled.tbody`
	position: relative;
	max-height: calc(var(--row-height) * 6);
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`;

const TableRow = styled.tr`
	position: relative;
	height: var(--row-height);
	display: grid;
	grid-template-columns: 7fr 5fr 2fr 2fr 2fr;
	gap: 0 3rem;
	border-bottom: var(--default-stroke-width) solid rgb(var(--cold-grey-500));
`;


const HeaderRow = styled(TableRow)`
	height: auto;
	padding: 1rem 0;
	border-color: rgb(var(--cold-grey-100));
`;

const TableCell = styled.td`
	position: relative;
	display: flex;
	align-items: center;
	font-weight: 700;

	&:first-child {
		color: rgb(var(--white));
	}
`; 

const TableHeaderCell = styled(TableCell).attrs({as: 'th'})`
	&& {
		color: rgb(var(--cold-grey-500));
	}
`;

const BookDataRow = ({book}) => {
	const bookData = {...book};
	delete bookData.id;

	const renderedBookDataCells = Object.values(bookData).map(value => {
		return <TableCell key={value}>{value}</TableCell>;
	});

	return <TableRow>{renderedBookDataCells}</TableRow>;
}

const BookTable = () => {
	const bookList = useSelector(selectSortedBooks);
	const bookCount = useSelector(selectMaxCount);
	const bookListSlice = bookList.slice(0, bookCount);

	const renderedHeaders = Object.values(bookProps).map(value => {
		return (
			<TableHeaderCell key={value.name}>
				{upperFirst(value.shortLabel ?? value.label ?? value.name)}
			</TableHeaderCell>
		);
	});

	const renderedBookDataRows = bookListSlice.map(book => (
		<BookDataRow
			key={book.id}
			book={book}
		/>
	));

	return (
		<Table>
			<TableHead>
				<HeaderRow>
					{renderedHeaders}
				</HeaderRow>
			</TableHead>
			<TableBody>
				{renderedBookDataRows}
			</TableBody>
		</Table>
	);
}

export default BookTable;