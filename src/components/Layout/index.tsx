import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
    background-color: red;
`;

function Layout() {
    return (
        <Content>
            <div>
                <Link to="/about">About</Link>
                <h2>Github Pages</h2>
                <h3>Deploying React to Github</h3>
            </div>
        </Content>
    );
}
export default Layout;
