import React, { useEffect, useState } from "react";
import "../assets/css/style1.css";
import "../assets/css/style.css";
import "../assets/css/core.css";
import "../assets/css/media.css";
import plusImage from "../../components/assets/images/plus.svg";
import minusImage from "../../components/assets/images/minus.svg";
import { Row, Col,Container,
    Card, CardImg, CardText, CardBody,
      CardTitle, CardSubtitle, Button,CardHeader} from "reactstrap";
    
const Subscription: React.FC = () => {

    return (
        <div className="main-container0001">
            <div className="pd-ltr-20">
                <div className="rowCheck pb-4 pt-4 height-100-p">
                    <h4 className="cardHearder">Subscription</h4>
                </div>

                <div className="card-box pd-20 height-100-p mb-30 mt-20">
                    <div className="row">
                        <div className="title mb-15  col-md-8 col-sm-12 mb-20 ml-3">
                            <h5 className="cardHearder">Subscription plans</h5>
                        </div>
                        <div className="row">
                            <Col md="12" className="mt10">
                         
                          <Col md={12}>
                          <Row>
      
      <Col md={4}>
        <Card className="subscriptionCard mb-4">
      <CardHeader className="subscriptionCardTitle d-flex justify-content-center">Weekly Fuel Plan</CardHeader>
        <CardBody>
          <CardTitle className="SubscriptionAmount d-flex justify-content-center mt-3">RS 2000</CardTitle>
          <CardText className="SubscriptionPeriod d-flex justify-content-center">Bill Weekly</CardText>
          <CardText className="SubscriptionUserCount d-flex justify-content-center mt-4">Total User Count</CardText>
          <div className="d-flex justify-content-center">
          <img  src={minusImage} />   
          <u className="SubscriptionUserCountAdd m-2">5</u>
          <img src={plusImage} />   
          </div>
          <div className="d-flex justify-content-center mt-4">
          <Button className="subscriptionPayBtn">Register</Button>
          </div>
        
        </CardBody>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="subscriptionCard">
      <CardHeader className="subscriptionCardTitle d-flex justify-content-center">Monthly Fuel Plan</CardHeader>
        <CardBody>
          <CardTitle className="SubscriptionAmount d-flex justify-content-center mt-3">Rs 8000</CardTitle>
          <CardText className="SubscriptionPeriod d-flex justify-content-center">Bill Monthly</CardText>
          <CardText className="SubscriptionUserCount d-flex justify-content-center mt-4">Total User Count</CardText>
          <div className="d-flex justify-content-center">
          <img  src={minusImage} />   
          <u className="SubscriptionUserCountAdd m-2">5</u>
          <img src={plusImage} />   
          </div>
          <div className="d-flex justify-content-center mt-4">
          <Button className="subscriptionPayBtn">Register</Button>
          </div>
        
        </CardBody>
        </Card>
      </Col>
    </Row>
                          </Col>
       
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Subscription;
