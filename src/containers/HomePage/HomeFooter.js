import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {

    render() {

        return (
            <div className="section-share home-footer">
                {/* <p>&copy; 2023 Star Dương IT. More information... 
                <a target="_blank" href="https://www.facebook.com/starduong2k4"> 
                &#8594; Click here &#8592;</a></p> */}

                <div className="section-share home-footer block">
                    <div className="section-share home-footer block about-support-icon">
                        <i className="fa fa-paper-plane"></i>
                    </div>
                    <div className="social-network">
                        <section>
                            <ul className="icon-list">
                                <li className="icon-item">
                                    <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li className="icon-item">
                                    <a href="#" className="icon-link"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="icon-item">
                                    <a href="#" className="icon-link"><i className="fab fa-dribbble"></i></a>
                                </li>
                                <li className="icon-item">
                                    <a href="#" className="icon-link"><i className="fab fa-youtube"></i></a>
                                </li>
                                <li className="icon-item">
                                    <a href="#" className="icon-link"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <h2>Hỗ trợ đặt lịch</h2>
                    <h3> Xin vui lòng liên hệ với đội ngũ BookingCare để được hỗ trợ </h3>
                    <div className="section-share home-footer block about-support-contact">
                        <p>&copy; Support:
                            <a target="_blank" href="https://www.facebook.com/starduong2k4">
                                &#8594; BookingCare.vn &#8592;</a></p>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.user.isLanguage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);