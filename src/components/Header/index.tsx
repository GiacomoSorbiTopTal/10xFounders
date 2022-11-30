import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';

const Content = styled.div`
    max-width: 1440px;
    background: #ede4cd;
    margin: auto;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu_container {
        display: flex;
        justify-content: flex-end;
        gap: 45px;
        margin-right: 60px;
        .menu {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            display: flex;
            align-items: flex-end;
            text-align: right;
            color: #082c4e;
            text-decoration: none;
        }
    }
    .logo {
        margin-left: 60px;
    }
`;

function Header() {
    return (
        <Content>
            <img className="logo" src={logo} alt="10xFounders" />
            <div className="menu_container">
                <Link className="menu" to="/about">
                    About us
                </Link>
                <Link className="menu" to="/">
                    Our team
                </Link>
                <Link className="menu" to="/founders">
                    Our founders
                </Link>
                <Link className="menu" to="/network">
                    Our network
                </Link>
                <Link className="menu" to="/contact">
                    Contact
                </Link>
            </div>
        </Content>
    );
}
export default Header;
