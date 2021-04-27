import styled from 'styled-components';

const NotificationContainer = styled.div`
	position: fixed;
	bottom: var(--v-padding);
	right: var(--h-padding);
	display: flex;
	flex-direction: column-reverse;
	gap: 2.5rem;
`;

export {
	NotificationContainer,
};