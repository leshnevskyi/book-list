import {useState, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import {selectSortedBooks, addBook, removeBook} from './bookListSlice';
import DoublyLinkedList from '../../utils/doublyLinkedList';
import {useNotifications} from '../notifications';

import Toolbar from '../shared/Toolbar';
import Arrow from '../shared/Arrow';
import RemoveBookButton from './RemoveBookButton';
import BookSortingSelect from '../shared/BookSortingSelect';

const Section = styled.section`

`;

const ArrowButton = styled(Arrow).attrs({el: 'button'})`
	--icon-size: var(--button-size);
`;

const Heading = styled.h1`
	--color: rgb(var(--white));

	color: var(--color);
	font-size: 3em;
	font-weight: 800;
`;

const Author = styled.strong`
	font-size: 1.4em;
	font-weight: 700;
`;

const InfoTable = styled.table`
	margin: 5rem 0;
`;

const TableBody = styled.tbody`
`;

const AttrWrapper = styled.tr`
	font-size: 1.5em;
`;

const AttrTitle = styled.th`
	--color: rgb(var(--cold-grey-500));

	display: inline;
	color: var(--color);
`;

const AttrValue = styled.td`
	display: inline;
	font-weight: 700;
`;

const RegularText = styled.span`
	font-weight: 400;
`;

const attrTitles = {
	title: 'title',
	author: 'author',
	year: 'year',
	pageCount: 'number of pages',
	price: 'price',
}

const BookList = () => {
	const dispatch = useDispatch();
	const sortedBooks = useSelector(selectSortedBooks);

	const bookList = useMemo(() => {
		return new DoublyLinkedList(...sortedBooks) 
	}, [sortedBooks]);

	const [currBook, setCurrBook] = useState(bookList.head);
	const {notify} = useNotifications();

	let renderedAttrs;

	if (currBook) renderedAttrs = Object.keys(currBook.data)
		.filter(attrTitle => (
			attrTitle !== 'id' 
			&& attrTitle !== 'title' 
			&& attrTitle !== 'author'
		))
		.map(attrTitle => (
			<AttrWrapper key={attrTitle}>
				<AttrTitle>{attrTitles[attrTitle]}&nbsp;</AttrTitle>
				<AttrValue>
					{currBook.data[attrTitle]}
					{attrTitle === 'price' && <RegularText>$</RegularText>}
				</AttrValue>
			</AttrWrapper>
		));	

	useEffect(() => {
		setCurrBook(bookList.head);
	}, [bookList]);

	return (
		<Section>
			<Toolbar 
				style={{
					margin: '5rem -1rem',
				}}
			>
				<ArrowButton 
					direction='left'
					disabled={!currBook.prev}
					onClick={() => setCurrBook(currBook.prev)}
				/>
				<ArrowButton 
					direction='right'
					disabled={!currBook.next}
					onClick={() => setCurrBook(currBook.next)}	
				/>
				<RemoveBookButton
					onClick={() => {
						const currBookData = currBook.data;
						const restoreBook = () => dispatch(addBook(currBookData));

						dispatch(removeBook(currBook.data.id));
						notify.info('Book removed', {onUndo: restoreBook});
					}}
				/>
				<BookSortingSelect/>
			</Toolbar>
			<Heading>{currBook.data.title}</Heading>
			<AttrWrapper as='div'>
				<AttrTitle as='span'>by&nbsp;</AttrTitle>
				<Author>{currBook.data.author}</Author>
			</AttrWrapper>
			<InfoTable>
				<TableBody>
					{renderedAttrs}
				</TableBody>
			</InfoTable>
		</Section>
	);
}

export default BookList;