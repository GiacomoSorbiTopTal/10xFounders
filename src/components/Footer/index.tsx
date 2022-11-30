import { Link } from 'react-router-dom';
import imgLogoIcon from '../../assets/images/logo_icon.png';
import imgFacebook from '../../assets/images/social_facebook.png';
import imgLinkedIn from '../../assets/images/social_linkedin.png';
import styled from 'styled-components';

const Content = styled.div`
    max-width: 1440px;
    background: #ffd200;
    margin: auto;
    height: 218px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu_container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
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
            margin-left: 45px;
        }
        .social_icon_linkedin {
            margin-left: 13.77px;
        }
        .social_icon_facebook {
            margin-right: 0px;
        }
    }
    .footer_left {
        display: flex;
        justify-content: flex-end;
        .logo {
            margin-left: 60px;
            margin-right: 60px;
        }
        .footer_address {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            display: flex;
            align-items: flex-end;
            color: #082c4e;
        }
    }
`;

function Footer() {
    return (
        <Content>
            <div className="footer_left">
                <img className="logo" src={imgLogoIcon} alt="10xFounders" />
                <div className="footer_address">
                    10x Founders <br />
                    Brienner Str. 21D-80333 <br />
                    München, Germany
                </div>
            </div>
            <div className="menu_container">
                <Link className="menu" to="/about">
                    Contact
                </Link>
                <Link className="menu" to="/">
                    Imprint
                </Link>
                <Link className="menu social_icon_facebook" to="https://facebook.com">
                    <img className="logo" src={imgFacebook} alt="10xFounders" />
                </Link>
                <Link className="menu social_icon_linkedin" to="https://linkedin.com">
                    <img className="logo" src={imgLinkedIn} alt="10xFounders" />
                </Link>
            </div>
        </Content>
    );
}
export default Footer;
