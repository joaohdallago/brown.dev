import styled from 'styled-components';

export default function Header() {
	return (
		<Container>
            brown.dev
		</Container>
	);
}

const Container = styled.div`
    height: 60px;

    display: flex;
    align-items: center;

    padding: 20px;

    color: #E6E6E6;
    background-color: #52332A;
`;