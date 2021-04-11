import styled from 'styled-components';

import Select from './Select';

const ToolbarWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 5rem 0 2.7rem 0;
	gap: 10rem;
`;

const Toolbar = ({children}) => {
	return (
		<ToolbarWrapper>
			{children}
		</ToolbarWrapper>
	);
}

export default Toolbar;