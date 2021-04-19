import {useRecoilState} from 'recoil';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import {isEqual, upperFirst} from 'lodash-es';

import {bookListState} from '../../state/bookList';
import {bookProps, normalizeBookData} from '../../utils/validation'
import {useNotifications} from '../notifications/hooks/useNotifications';

import InputField from './InputField';

const Form = styled.form`
	--input-height: 6.25rem;

	position: relative;
	display: flex;
	flex-direction: column;
	gap: var(--input-height);
`;

const InputsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
`;

const Button = styled.button`
	--color: rgb(var(--cold-grey-800));
	--bg: rgb(var(--cold-grey-100));
	--border-color: rgb(var(--white));

	height: var(--input-height);
	color: var(--color);
	font-weight: 700;
	font-size: 1.5em;
	text-transform: capitalize;
	background: var(--bg);
	border-bottom: var(--default-stroke-width) solid var(--border-color);

	&:disabled {
		--bg: rgb(var(--cold-grey-500));
		--border-color: rgba(var(--white), 0.3);
	}
`;

const BookForm = () => {
	const [bookList, setBookList] = useRecoilState(bookListState);
	const {notify} = useNotifications();
	const {register, handleSubmit, formState, reset, errors} = useForm({
		mode: 'onChange',
	});

	const renderedInputs = Object.values(bookProps).map(({
		label, 
		name, 
		pattern, 
		max,
	}) => (
		<InputField 
			label={upperFirst(label ?? name)}
			name={name}
			isValid={!errors[name]}
			key={name}
			ref={register({
				required: true,
				pattern,
				max,
			})}
		/>
	));

	const handleSubmitCallback = data => {
		const newBook = normalizeBookData(data);
		
		const isBookPresent = Boolean(bookList.find(currBook => {
			return isEqual(newBook, currBook);
		}));

		if (isBookPresent) {
			notify.error('Book is already in the list');

			return;
		}

		setBookList(state => [...state, newBook]);
		reset();
	}

	return (
		<Form
			onSubmit={handleSubmit(handleSubmitCallback)}
			noValidate
		>	
			<InputsWrapper>
				{renderedInputs}
			</InputsWrapper>
			<Button
				disabled={!formState.isValid}
			>
				Add book
			</Button>
		</Form>
	)
}

export default BookForm;
