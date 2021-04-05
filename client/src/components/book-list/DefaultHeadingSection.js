import styled from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	align-items: center;
`;

const Heading = styled.h1`
	font-size: 3em;
	font-weight: 900;
`;

export default () => {
	return (
		<Wrapper>
			<Heading>
				No books so far.
				<br/>
				Try to add one!
			</Heading>
		</Wrapper>
	);
}