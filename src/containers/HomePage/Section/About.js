import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {

        return (
        <div className="section-share section-about">
            <div className="section-about-header">
                Truyền thông nói về Booking care
            </div>
            <div className="section-about-content">
                <div className="content-left">
                <iframe width="100%" height="400" 
                    src="https://www.youtube.com/embed/wXwJwFZaczI" 
                    title="BookingCare.vn - Đặt lịch khám bệnh dễ dàng" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                </div>
                <div className="content-right">
                    <p>
                        BookingCare là một trong số ít nền tảng đặt lịch khám bệnh đầu tiên tại Việt Nam có định hướng kết nối bệnh nhân, bác sĩ, và cơ sở y tế; hỗ trợ đặt lịch khám miễn phí. Với mục tiêu tiên quyết là “kiến tạo nền tảng công nghệ chuẩn Quốc tế, đồng thời phù hợp với thói quen, thị yếu của người Việt”, BookingCare đem đến cho người bệnh và bác sĩ giải pháp giúp việc khám bệnh trở nên thuận tiện, dễ dàng, chính xác, hiệu quả. Song hành giúp các cơ sở y tế tối ưu hoá được nguồn lực, trở nên có ích và thực sự thân thiện với người bệnh.
                    </p>
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
                        
export default connect(mapStateToProps, mapDispatchToProps)(About);