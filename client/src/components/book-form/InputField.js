import {forwardRef} from 'react';
import styled from 'styled-components';

import {bookProps} from 'utils/validation';

const Input = styled.input`
	--color: rgb(var(--white));
	--border-color: ${props => props.isValid
		? 'rgb(var(--cold-grey-500))'
		: 'rgb(var(--bright-red-500)) !important'
	};

	position: relative;
	height: var(--input-height);
	width: 100%;
	display: flex;
	padding: 0 1.3em;
	color: var(--color);
	font-weight: 700;
	border-bottom: var(--default-stroke-width) solid var(--border-color);

	&:focus {
		--border-color: rgb(var(--white));
	}
`;

const Label = styled.label`
	display: flex;
	flex-direction: column;
	gap: 0.3em;
`;

const ErrorMessage = styled.span`
	display: flex;
	margin-top: 0.5rem;
	font-size: 1.5rem;
	font-weight: 700;
	color: rgb(var(--white));
`;

const InputField = forwardRef(({label, name, isValid, ...restProps}, ref) => {
	return (
		<Label>
			{label}
			<Input 
				ref={ref}
				name={name}
				type='text'
				autoComplete='off'
				spellcheck={false}
				isValid={isValid}
				{...restProps}
			/>
			{!isValid && (
				<ErrorMessage>{bookProps[name].errorMessage}</ErrorMessage>
			)}
		</Label>
	)
});

export default InputField;