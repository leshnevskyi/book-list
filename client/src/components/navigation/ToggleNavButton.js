import {useRecoilState} from 'recoil';
import styled from 'styled-components';

import {navigationState} from '../../state/navigation';

const Button = styled.button`
	position: absolute;
	top: calc(var(--v-padding) + 5rem);
	right: var(--h-padding);
	height: var(--default-input-height);
	display: flex;
	align-items: center;
	background: transparent;
	border-bottom: var(--default-stroke-width) solid rgb(var(--cold-grey-500));
`;

const Label = styled.span`
	color: rgb(var(--white));
	font-weight: 700;
	text-transform: uppercase;
`;

const ToggleNavButton = () => {
	const [nav, setNav] = useRecoilState(navigationState);
	const label = nav.isOpen ? 'Close' : 'Navigation';

	function handleClick() {
		setNav(prevState => ({...prevState, isOpen: !prevState.isOpen}));
	}

	return (
		<Button
			onClick={handleClick}
		>
			<Label>{label}</Label>
		</Button>
	);
}

export default ToggleNavButton;