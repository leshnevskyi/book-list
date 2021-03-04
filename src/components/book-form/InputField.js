import {forwardRef} from 'react';
import styled from 'styled-components';

const Input = styled.input`
	--color: rgb(var(--white));
	--border-color: ${props => props.isValid
		? 'rgb(var(--cold-grey-500))'
		: 'rgb(var(--bright-red-500))'
	};

	position: relative;
	height: var(--input-height);
	width: 100%;
	display: flex;
	padding: 0 1.3em;
	color: var(--color);
	font-weight: 700;
	border-bottom: var(--default-stroke-width) solid var(--border-color);
`;

const Label = styled.label`
	display: flex;
	flex-direction: column;
	gap: 0.3em;
`;

const InputField = forwardRef(({label, name, ...restProps}, ref) => {
	return (
		<Label>
			{label}
			<Input 
				ref={ref}
				name={name}
				autoComplete='off'
				{...restProps}
			/>
		</Label>
	)
});

export default InputField;