import React, { Component } from "react";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../assets/baseUrl";
import { sourceBaseForImage } from "../assets/source";

class Footer extends Component {
  state = {
    teacherInfo: {},
  };

  componentDidMount() {
    // axios.get(`http://hossam1234-001-site1.ftempurl.com/api/Setting`).then((res) => {
    axios.get(`${baseUrl}api/Setting`).then((res) => {
      this.setState({
        teacherInfo: res.data,
      });
    });
  }

  render() {
    const { teacherInfo } = this.state;
    return (
      <div className="site-footer">
        <footer>
          <Container>
            <Grid container fixed spacing={4} className="footer-section-box">
              <Grid item xs={12} sm={6} md={4} lg={5} className="logo-box">
                <div className="footer-logo-content">
                  <div className="logo">
                    <img src={`${sourceBaseForImage}/drMohamedLogo.png`} alt="" />
                    {/* <p>
                      علم الفيزياء من العلوم الهامة في الحياة، ويصعب كثيرًا
                      تحديد معنى واحد دقيق لعلم الفيزياء، حيث يتغير المفهوم
                      بتطور الاكتشافات والاختراعات في الحياة، فهو من العلوم
                      الأساسية التي يمكن استخدامها في كل يوم وفي كل وقت، حيث
                      أنها لا تنحصر على محطات الفضاء بل تستخدم في دراسة المادة
                      والطاقة، وتُعد حقل كبير من العلوم، وكلمة الفيزياء هي كلمة
                      يونانية بالأصل وتعني معرفة الطبيعة.
                    </p> */}
                  </div>
                  <div className="social">
                    <a href={teacherInfo.whatsappLink} target="_blank">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href={teacherInfo.telegramLink} target="_blank">
                      <i className="fab fa-telegram"></i>
                    </a>
                    <a href={teacherInfo.facebookLink} target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </Grid>
              {/* <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="important-link">
                  <h5>روابط هامة</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://youtube.com/@wagdysamir3541"
                        target="_blank"
                      >
                        يوتيوب{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ekb.eg/"> بنك المعرفه المصري</a>
                    </li>
                    <li>
                      <a href="https://z-lib.org/">مكتبه المراجع العالميه </a>
                    </li>
                    <li>
                      <a href="https://www.geogebra.org/">
                        {" "}
                        موقع جيزجيبرا للرسومات
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/c/anaHr">
                        {" "}
                        صفحه انا حر للرياضيات والفيزياء
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/c/DroosOnline4u">
                        {" "}
                        دروس اونلاين
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid> */}
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="more-important">
                  <h5>هام جدا</h5>
                  <ul className="list-unstyled">
                    <li>
                      <span>رقم المعلم: </span>
                      <span> {teacherInfo.phoneNumber} </span>
                      {/* <span>01221981935</span> */}
                    </li>
                    {/* <li>
                      <span>رقم السكرتاريه: </span>
                      <span> {teacherInfo.secretarialPhoneNumber} </span>
                    </li> */}
                    <li>
                      <span>رقم فودافون كاش: </span>
                      <span> {teacherInfo.vodafonCachPhoneNumber} </span>
                      {/* <span>01021987476</span> */}
                    </li>
                    {/* <li>
                      <span>رقم تفعيل الاشتراك : </span>
                      <span>
                        {" "}
                        {teacherInfo.activationSubscriptionPhoneNumber}{" "}
                      </span>
                    </li> */}
                    <li>
                      <span> العنوان : </span>
                      <span> {teacherInfo.address} </span>
                      {/* <span>اسيوط</span> */}
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Container>
        </footer>
        <div className="copy powered-by">
          <Container>
            <h5>
              <span>جميع الحقوق محفوظه</span>
              <span style={{ fontWeight: "400" }}>
                Developed By<strong className="powered-by-link"> <a href="https://facebook.com/BrainySoftware23" target="_blank"> Brainy Software </a></strong>
              </span>
            </h5>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
