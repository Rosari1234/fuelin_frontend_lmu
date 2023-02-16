import React, { useEffect, useState } from "react";
import "../assets/css/style1.css";
import "../assets/css/core.css";
import { Col, Row, Container, Card, CardBody, Input, Label, Form, FormGroup } from "reactstrap";
import { environment } from "../../environment/environment";
import calendarImage from "../../components/assets/images/calendar.svg";

const BuyerInformation: React.FC = () => {
    return (
        <React.Fragment>
            <div className="main-container0001 ">
                <Container fluid className="mt-30 ">

                    <CardBody className="fluid-container">
                        <div className="row">
                            <div className="title mb-15  col-md-6 col-sm-12 mb-20 ">
                                <h6 className="cardHearder">Buyer Information</h6>
                            </div>
                            <Row>
                                <Col className="d-flex justify-content-end">
                                    <button className="savebtn me-2">Save</button>
                                    <button className="downloadbtn me-2">Download</button>
                                    <button className="deletebtn me-2">Delete</button>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xl={4}>
                                    <div className="card-heading mb-2">
                                        <h5 className="buyerInfoInputLabel mb-2">Name </h5>
                                    </div>

                                    <div className="card-heading mb-2 flex">
                                        <Input
                                            style={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
                                            type="text"
                                            className="buyerInfoInput form-control mb-3 form-control"
                                            id="formrow-firstname-Input"
                                            maxLength={8}
                                            name="Email"
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="card-heading mb-2">
                                        <h5 className="buyerInfoInputLabel mb-2">Address </h5>
                                    </div>

                                    <div className="card-heading mb-2 flex">
                                        <Input
                                            type="text"
                                            style={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
                                            className="buyerInfoInput form-control mb-3 form-control"
                                            id="formrow-firstname-Input"
                                            maxLength={8}
                                            name="Email"
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="card-heading mb-2">
                                        <h5 className="buyerInfoInputLabel mb-2">City/ State/ Zip </h5>
                                    </div>

                                    <div className="card-heading mb-2 flex">
                                        <Input
                                            type="text"
                                            style={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
                                            className="buyerInfoInput form-control mb-3 form-control"
                                            id="formrow-firstname-Input"
                                            maxLength={8}
                                            name="Email"
                                            required
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xl={4}>
                                    <div className="card-heading mb-2">
                                        <h5 className="buyerInfoInputLabel mb-2">Phone </h5>
                                    </div>

                                    <div className="card-heading mb-2 flex">
                                        <Input
                                            type="text"
                                            style={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
                                            className="buyerInfoInput form-control mb-3 form-control"
                                            id="formrow-firstname-Input"
                                            maxLength={8}
                                            name="Email"
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="card-heading mb-2">
                                        <h5 className="buyerInfoInputLabel mb-2">Email </h5>
                                    </div>

                                    <div className="card-heading mb-2 flex">
                                        <Input
                                            type="text"
                                            style={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
                                            className="buyerInfoInput form-control mb-3 form-control"
                                            id="formrow-firstname-Input"
                                            maxLength={8}
                                            name="Email"
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="card-heading mb-2">
                                        <h5 className="buyerInfoInputLabel mb-2">
                                            Payoff<span style={{ color: "#990000" }}></span>
                                        </h5>
                                    </div>

                                    <div className="card-heading mb-2">
                                        <Row>
                                            <Col>
                                                <div className="form-check form-switch ml-4"
                                                    style={{ marginTop: "-10px", boxShadow: "#EEEEEE" }}>
                                                    <label
                                                        style={{ color: "black" }}
                                                        className="form-check-label" htmlFor="">
                                                        <input
                                                            style={{ backgroundColor: "#5D5AF2", width: "50px" }}
                                                            type="checkbox"
                                                            className="form-check-input "
                                                            id=""

                                                        />
                                                    </label>
                                                </div>

                                            </Col>
                                            {/* <Col style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                          <div className="form-check mb-5 mt-3 ">
                            <input
                              style={{ width: "23px", height: "23px" }}
                              className="form-check-input"
                              type="radio"
                              name="exampleRadioss"
                              id="exampleRadios1"
                              value="True"
                            />

                            <label className="form-check-label checkbox-label ml-4" htmlFor="exampleRadios1">
                              True
                            </label>
                          </div>

                          <div className="form-check mb-5 mt-3">
                            <input
                              style={{ width: "23px", height: "23px" }}
                              className="form-check-input"
                              type="radio"
                              name="exampleRadioss"
                              id="exampleRadios2"
                              value="False"
                            />

                            <label className="form-check-label checkbox-label ml-4" htmlFor="exampleRadios2">
                              False
                            </label>
                          </div>
                        </Col> */}
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        
                        </div>
                    </CardBody>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default BuyerInformation;
