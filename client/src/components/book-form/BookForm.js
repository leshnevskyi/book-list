import {useSetRecoilState} from 'recoil';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

import {bookListState} from '../../state/bookList';

import InputField from './InputField';

const inputs = [
	{
		label: 'Title',
		name: 'title',
	},
	{
		label: 'Author',
		name: 'author',
	},
	{
		label: 'Year',
		name: 'year',
		pattern: /^\d{4}$/,
		max: new Date().getFullYear(),
	},
	{
		label: 'Number of pages',
		name: 'pageCount',
		pattern: /^\d+$/,
	},
	{
		label: 'Price',
		name: 'price',
		pattern: /^\d+(\.\d{2})?$/,
	},
];

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
	const setBookList = useSetRecoilState(bookListState);
	const {register, handleSubmit, formState, reset, errors} = useForm({
		mode: 'onChange',
	});

	const renderedInputs = inputs.map(({label, name, pattern, max}) => (
		<InputField 
			label={label}
			name={name}
			isValid={!errors[name]}
			key={label}
			ref={register({
				required: true,
				pattern,
				max,
			})}
		/>
	));

	return (
		<Form
			onSubmit={handleSubmit(data => {
				setBookList(state => [data, ...state,]);
				reset();
			})}
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
