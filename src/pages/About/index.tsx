import Footer from 'components/Footer';
import Header from 'components/Header';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
    background-color: yellow;
`;

function About() {
    return (
        <>
            <Header />
            <Content>
                <div>
                    <h2>Github Pages</h2>
                    <h3>Deploying React to Github</h3>
                </div>
            </Content>
            <Footer />
        </>
    );
}
export default About;
