import Footer from 'components/Footer';
import Header from 'components/Header';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import imgPerson1 from '../../assets/images/person1.png';
import imgPerson2 from '../../assets/images/person2.png';
import imgPerson3 from '../../assets/images/person3.png';
import imgPerson4 from '../../assets/images/person4.png';
import imgPerson5 from '../../assets/images/person5.png';
import imgPerson6 from '../../assets/images/person6.png';

import imgPartner1 from '../../assets/images/partner1.png';
import imgPartner2 from '../../assets/images/partner2.png';
import imgPartner3 from '../../assets/images/partner3.png';
import imgPartner4 from '../../assets/images/partner4.png';
import imgPartner5 from '../../assets/images/partner5.png';
import imgPartner6 from '../../assets/images/partner6.png';
import imgStay from '../../assets/images/stay.png';

const Content = styled.div`
    max-width: 1440px;
    margin: auto;
    position: relative;
    .btn {
        cursor: pointer;
    }
    .btn:hover {
        opacity: 0.9;
    }
    .left_bar {
        width: 150px;
        position: absolute;
        height: 100%;
        background-color: #ede4cd;
        right: 0;
        z-index: -1;
    }
    .section {
        z-index: 1;
        position: relative;
    }
    .title {
        font-family: 'RB Freigeist Neue';
        font-style: normal;
        font-weight: 800;
        font-size: 150px;
        line-height: 90%;
        display: flex;
        align-items: flex-end;
        text-align: center;
        letter-spacing: -0.04em;
        font-feature-settings: 'ss01' on;
        color: #082c4e;
        padding-top: 62px;
        padding-left: 48px;
    }

    .potential {
        .img_person1 {
            position: absolute;
            top: 159px;
            right: 0;
        }
        .img_person2 {
            position: absolute;
            top: 574px;
            left: 284px;
        }
        .subtitle {
            width: 448px;
            height: 956px;
            font-family: 'RB Freigeist Neue';
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 110%;
            letter-spacing: -0.02em;
            font-feature-settings: 'ss01' on, 'ss02' on;
            color: #082c4e;
            margin-top: 51px;
            margin-left: 60px;
        }
    }

    .founders {
        z-index: 2;
        .founders_block {
            z-index: -1;
            background-color: #ffd6f1;
            height: 786px;
            width: 1044px;
            position: absolute;
        }
        .title {
            padding-top: 80px;
            padding-bottom: 80px;
        }
        .founder_section {
            margin-left: 45px;
            margin-right: 45px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 24px;
            grid-row-gap: 24px;
            .founder_item {
                position: relative;
                .founder_name {
                    position: absolute;
                    top: 350px;
                    left: 65px;
                    font-family: 'RB Freigeist Neue';
                    font-style: normal;
                    font-weight: 800;
                    font-size: 92px;
                    line-height: 90%;
                    display: flex;
                    align-items: flex-end;
                    letter-spacing: -0.02em;
                    font-feature-settings: 'ss01' on;
                    color: #fdf9f4;
                }
                .btn_find {
                    position: absolute;
                    top: 454px;
                    left: 71px;
                    background-color: #ffd200;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 130%;
                    color: #082c4e;
                    padding: 20px 40px;
                }
            }
        }
    }

    .story {
        .subtitle {
            width: 373px;
            height: 186px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 130%;
            color: #082c4e;
            margin-left: 60px;
            padding-top: 211px;
        }
        .btn_story {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 130%;
            color: #082c4e;
            border: 1px solid #082c4e;
            padding: 20px 40px;
            cursor: pointer;
            display: inline-block;
            margin-top: 60px;
            margin-left: 60px;
            margin-bottom: 230px;
        }
        .partner_block {
            position: absolute;
            height: 710px;
            width: 932px;
            background-color: #96496e;
            top: -45px;
            right: 0;
            display: flex;
            justify-content: center;
            .partner_imgs {
                padding-top: 248px;
                display: inline-grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                .partner_item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    .stay {
        position: relative;
        .stay_tuned {
            height: 708px;
            width: 912px;
            background: #ffd200;
            font-family: 'RB Freigeist Neue';
            font-style: normal;
            font-weight: 800;
            font-size: 150px;
            line-height: 90%;
            align-items: flex-end;
            text-align: center;
            letter-spacing: -0.04em;
            font-feature-settings: 'ss01' on;
            color: #082c4e;
            transform: rotate(-90deg);
            padding-top: 24px;
            display: inline-block;
            margin-top: 150px;
            margin-left: -89px;
            margin-bottom: 300px;
        }
        .img_stay {
            position: absolute;
            top: 232px;
            left: 184px;
        }
        .blank {
            position: absolute;
            background-color: white;
            width: 150px;
            right: 0;
            top: -87px;
            height: 1269px;
        }
    }
`;

function Home() {
    return (
        <>
            <Header />
            <Content>
                <div className="left_bar" />
                <div className="section potential">
                    <div className="title">Potential multiplied.</div>
                    <div className="subtitle">We’re there from the start, backing the early-stage founders making a global impact.</div>
                    <img className="img_person1" src={imgPerson1} alt="" />
                    <img className="img_person2" src={imgPerson2} alt="" />
                </div>
                <div className="section founders">
                    <div className="founders_block" />
                    <div className="title">Our founders</div>
                    <div className="founder_section">
                        <div className="founder_item">
                            <img className="imgFounder" src={imgPerson3} alt="" />
                            <div className="founder_name">Adyen</div>
                            <div className="btn btn_find">Find out more</div>
                        </div>
                        <div className="founder_item">
                            <img className="img_founder" src={imgPerson4} alt="" />
                            <div className="founder_name">Robinhood</div>
                            <div className="btn btn_find">Find out more</div>
                        </div>
                        <div className="founder_item">
                            <img className="img_founder" src={imgPerson5} alt="" />
                            <div className="founder_name">Roadsurfer</div>
                            <div className="btn btn_find">Find out more</div>
                        </div>
                        <div className="founder_item">
                            <img className="img_founder" src={imgPerson6} alt="" />
                            <div className="founder_name">Palantir</div>
                            <div className="btn btn_find">Find out more</div>
                        </div>
                    </div>
                </div>
                <div className="section story">
                    <div className="subtitle">
                        Promising talent meets accomplished investors. Combining years of experience with a network-driven approach, we have
                        successfully backed over 15 unicorns.
                    </div>
                    <div className="btn btn_story">See our success stories</div>
                    <div className="partner_block">
                        <div className="partner_imgs">
                            <div className="partner_item">
                                <img className="img_partner" src={imgPartner1} alt="" />
                            </div>
                            <div className="partner_item">
                                <img className="img_partner" src={imgPartner2} alt="" />
                            </div>
                            <div className="partner_item">
                                <img className="img_partner" src={imgPartner3} alt="" />
                            </div>
                            <div className="partner_item">
                                <img className="img_partner" src={imgPartner4} alt="" />
                            </div>
                            <div className="partner_item">
                                <img className="img_partner" src={imgPartner5} alt="" />
                            </div>
                            <div className="partner_item">
                                <img className="img_partner" src={imgPartner6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section stay">
                    <div className="stay_tuned">Stay tuned</div>
                    <img className="img_stay" src={imgStay} alt="" />
                    <div className="blank" />
                </div>
            </Content>
            <Footer />
        </>
    );
}
export default Home;
