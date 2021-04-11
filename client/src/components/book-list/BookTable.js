import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {upperFirst} from 'lodash-es';

import {sortedBookListState} from '../../state/bookList';
import {bookCountState} from '../../state/bookList';
import {bookProps} from '../../utils/validation';

const Table = styled.table`
	position: relative;
	width: 100%;
`;

const TableHead = styled.thead`

`;

const TableBody = styled.tbody`

`;

const TableRow = styled.tr`
	position: relative;
	height: 4.3em;
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
	const renderedBookDataCells = Object.values(book).map(value => {
		return <TableCell key={value}>{value}</TableCell>;
	});

	return <TableRow>{renderedBookDataCells}</TableRow>;
}

const BookTable = () => {
	const bookList = useRecoilValue(sortedBookListState);
	const bookCount = useRecoilValue(bookCountState);
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
			key={`${book.title} ${book.author}`}
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