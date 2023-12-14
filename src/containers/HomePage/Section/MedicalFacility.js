import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {

        return (
        <div className="section-share section-medical-facility">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Cơ sở y tế nổi bật</span>
                    <button className="btn-section">xem thêm</button>
                </div>
                <div className="section-body">
                    <Slider {...this.props.settings}>
                        <div className="section-customize">
                            <div className="bg-image section-medical-facility" />
                            <div>MedicalFacility 1</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-medical-facility" />
                            <div>MedicalFacility 2</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-medical-facility" />
                            <div>MedicalFacility 3</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-medical-facility" />
                            <div>MedicalFacility 4</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-medical-facility" />
                            <div>MedicalFacility 5</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-medical-facility" />
                            <div>MedicalFacility 6</div>
                        </div>
                    </Slider>
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
                        
export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);