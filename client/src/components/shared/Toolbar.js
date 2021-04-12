import styled from 'styled-components';

import Select from './Select';

const ToolbarWrapper = styled.div`
	--button-size: var(--default-input-height);

	display: flex;
	align-items: center;
	margin: 5rem 0 2.7rem 0;
	gap: 5rem;
`;

const Toolbar = ({children, ...restProps}) => {
	return (
		<ToolbarWrapper {...restProps}>
			{children}
		</ToolbarWrapper>
	);
}

export default Toolbar;