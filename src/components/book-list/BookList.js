import {useState, useEffect, useMemo} from 'react';
import {useRecoilState} from 'recoil';
import styled from 'styled-components';

import DoublyLinkedList from '../../utils/doublyLinkedList';
import {bookListState} from '../../state/atoms';

import ArrowButton from '../shared/ArrowButton';
import RemoveBookButton from './RemoveBookButton';

const Section = styled.section`
	min-height: 100vh;
`;

const Controls = styled.div`
	--button-size: 4.3rem;

	display: flex;
	margin: 5rem -1rem;
	gap: 5rem;
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
	margin: 6rem 0;
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
	const [books, setBooks] = useRecoilState(bookListState);
	const bookList = useMemo(() => new DoublyLinkedList(...books), [books]);
	const [currBook, setCurrBook] = useState(bookList.head);

	const deleteBook = () => {
		const filteredBooks = books.filter(book => {
			return book.title !== currBook.data.title;
		});

		setBooks(filteredBooks);
	}

	let renderedAttrs;

	if (currBook) renderedAttrs = Object.keys(currBook.data)
		.filter(attrTitle => attrTitle !== 'title' && attrTitle !== 'author')
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
			{currBook && 
			<>
				<Controls>
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
						onClick={deleteBook}
					/>
				</Controls>
				<Heading>{currBook.data.title}</Heading>
				<AttrWrapper>
					<AttrTitle>by&nbsp;</AttrTitle>
					<Author>{currBook.data.author}</Author>
				</AttrWrapper>
				<InfoTable>
					{renderedAttrs}
				</InfoTable>
			</>
			}
		</Section>
	);
}

export default BookList;