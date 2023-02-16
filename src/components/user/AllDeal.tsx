import React, { useEffect, useState } from "react";
import "../assets/css/style1.css";
import "../assets/css/style.css";
import "../assets/css/core.css";
import "../assets/css/media.css";
import { Col } from "reactstrap";
const UserAllDeal: React.FC = () => {



    return (
        <div className="main-container0001">
            <div className="pd-ltr-20">
                <div className="rowCheck pb-4 pt-4 height-100-p">
                    <h4 className="cardHearder">All Deals</h4>
                </div>

                <div className="card-box pd-20 height-100-p mb-30 mt-20">
                    <div className="row">
                        <div className="title mb-15  col-md-8 col-sm-12 mb-20 ">
                            <h5 className="cardHearder">All Deals</h5>
                        </div>
                        <div className="col-md-4">
                            <input className="form-control input-search" type="search" placeholder="Search Deals" aria-label="Search" />
                        </div>
                        <div className="row">
                            <Col sm="12" className="mt10">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr className="tbHead">
                                                <th scope="col">Order Id</th>
                                                <th scope="col">Sales Representive</th>
                                                <th scope="col">Create Date</th>
                                                <th scope="col">Last Saved</th>
                                                <th scope="col" style={{ textAlign: "end", paddingRight: "75px" }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">#4001</th>
                                                <td>Lakshan Rathnayake</td>
                                                <td>23/12/2022</td>
                                                <td>23/12/2022</td>
                                                <td >
                                                    <div className="buttonGroup" style={{ float: "right" }}>
                                                        <button className="btn updateBtn btn-sm">View</button>
                                                        <button className="btn deleteBtn btn-sm">delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserAllDeal;
