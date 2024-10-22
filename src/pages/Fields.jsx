import React, { Component } from "react";

// material ui
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

// component
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer";
import axios from "axios";
import GetUserToken from "../component/getToken";
import { baseUrl } from "../assets/baseUrl";
export default class Fields extends Component {
  state = {
    fields: [],
    name: "",
    loading: true,
    levelId: this.props.match.params.levelId
  };

  componentDidMount() {
    // const URL_PASE = "http://hossam1234-001-site1.ftempurl.com/api/";
    const URL_PASE = "https:/localhost:44334/api/";
    const levelId = this.props.match.params.levelId;
    console.log('levelId',levelId);
    const token = GetUserToken();
    axios
      .get(`${baseUrl}api/Specialty`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({
          fields: res.data.items,
          name: res.data.name,
          loading: false,
          levelId: this.props.match.params.levelId
        });
      })
      .catch((er) => {
        console.log(er);
        this.setState({
          loading: false,
        });
      });
  }
  render() {
    const { name, fields, loading, levelId } = this.state;
    return (
      <div>
        <Breadcrumb head="المراحل" />
        <div className="levels-section">
          <Container>
            <Grid container spacing={3}>
              {this.state.fields.map((field, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <Link to={"/" + levelId + "/" + field.id +"/level-details/" } className="level-card">
                    <h5 className="card-title">{field.name}</h5>
                  </Link>
                 
                </Grid>
              ))}
            </Grid>
          </Container>
          {loading ? (
            <div className="loading">
              <button class="btn">
                <span class="spinner"></span>
                <span class="btn__text">برجاء الانتظار...</span>
              </button>
            </div>
          ) : null}
        </div>
        {loading ? null : <Footer />}
      </div>
    );
  }
}
