import React, { useEffect, useState, useContext } from "react";
import "../assets/css/style1.css";
import "../assets/css/core.css";
import "../assets/css/media.css";
import { Card, CardBody, CardTitle, Col, Form, Input, Label, Container, Nav, NavItem, CardText, NavLink, CardFooter, Row, TabContent, Modal, TabPane } from "reactstrap";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import { CustomerAdmin } from "../../models/CustomerAdmin";
import { AdminService } from "../../servises/AdminService";
import UserContext from "../context/UserContext";
const Dashboard: React.FC = () => {
    const [modalCenter, setModalCenter] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const [customerAdmin, setCustomerAdmin] = useState([] as CustomerAdmin[]);
    const [addCustomer, setAddCustomer] = useState<CustomerAdmin>({} as CustomerAdmin);

    useEffect(() => {
        viewAllCustomer();
    }, []);

    const viewAllCustomer = () => {
        AdminService.getAllCustomerAdmins().then(res => {
            setCustomerAdmin(res.data);
        });
    };

    function togCenter() {
        setModalCenter(!modalCenter);
        removeBodyCss();
    }

    function togCenterClose() {
        setModalCenter(false)
    }

    function removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    const addNewCustomer = () => {
        if (!addCustomer.customerBusinessName) {
            toast.error("Please enter verificationCode!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!addCustomer.primaryContactName) {
            toast.error("UserId Invalid!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        AdminService.addAminCustomers(addCustomer).then((res) => {
            if (res.success) {
                toast.success(res.success, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: 'foo-bar'
                });
                viewAllCustomer();
                setModalCenter(false)
            } else {
                toast.error(res.error, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: 'foo-bar'
                });
            }
        });
    }

    return (
        <div className="main-container0001">
            <div className="pd-ltr-20">
                <div className="rowCheck pb-4 pt-4 height-100-p">
                    <h4 className="cardHearder">Dashboard</h4>
                </div>

                <div className="card-box pd-20 height-100-p mb-20 mt-20">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-xl-2">
                                    <div className="avatar-md rounded-circle bg-soft card-avatar relative">
                                        <span
                                            className="avatar-title text-size-avatr text-center-div">
                                            A
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xl-9 ml-2">
                                    <span className="card-text-name">Admin </span>
                                    <span className="card-text-email">admin@fuelin.com </span>
                                    {/* <button type="button" className="btn mt-2 btn-sm btn-profile">View Profile</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <span className="card-text-total">Total Users</span>

                                    <span className="card-text-count">15</span>
                                </div>
                                <div className="col-md-4">
                                    <span className="card-text-total">Total Deals</span>

                                    <span className="card-text-count">15</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="row float-right newCustomerRes">
                                <button type="button" className="btn mr-5 btn-sm btn-customer" onClick={() => {
                                    togCenter();
                                }}>Add New Manager</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-box pd-20 height-100-p mb-30 mt-20">
                    <div className="row">
                        <div className="title mb-15  col-md-8 col-sm-12 mb-20 ">
                            <h5 className="cardHearder">All Managers</h5>
                        </div>
                        <div className="col-md-4">
                            <input className="form-control input-search" type="search" placeholder="Search Customer" aria-label="Search" />
                        </div>
                        <div className="row">
                            <Col sm="12" className="mt10">
                                <div className="table-responsive">
                                   
                                            <table className="table">
                                                <thead className="thead-dark">
                                                    <tr className="tbHead">
                                                        <th scope="col">Business Name</th>
                                                        <th scope="col">Contact Name</th>
                                                        <th scope="col">email</th>
                                                        <th scope="col">Phone Number</th>
                                                        <th scope="col">Street Address</th>
                                                        <th scope="col">Validation Code</th>
                                                        <th scope="col" style={{ textAlign: "end", paddingRight: "75px" }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                  
                                                </tbody>
                                            </table>
                                  
                                </div>
                            </Col>
                        </div>
                    </div>

                    <Modal
                        isOpen={modalCenter}
                        toggle={() => {
                            togCenter();
                        }}
                        centered>
                        <div className="modal-header">
                            <h5 className="modal-title mt-0">Add New Manager</h5>
                            <button
                                type="button"
                                onClick={() => {
                                    togCenterClose();
                                }}
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-2">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                Business Name{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE' }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                value={addCustomer?.customerBusinessName || ""}
                                                onChange={(e) => setAddCustomer({ ...addCustomer, customerBusinessName: e.target.value })}
                                                maxLength={10}
                                                name="name"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                Contact Name{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE' }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                maxLength={10}
                                                value={addCustomer?.primaryContactName || ""}
                                                onChange={(e) => setAddCustomer({ ...addCustomer, primaryContactName: e.target.value })}
                                                name="Contact Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                Street Address{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE' }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                maxLength={40}
                                                value={addCustomer?.streetAddress || ""}
                                                onChange={(e) => setAddCustomer({ ...addCustomer, streetAddress: e.target.value })}
                                                name="Address"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                City{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE' }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                maxLength={20}
                                                value={addCustomer?.city || ""}
                                                onChange={(e) => setAddCustomer({ ...addCustomer, city: e.target.value })}
                                                name="City"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                State{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE' }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                maxLength={20}
                                                value={addCustomer?.state || ""}
                                                onChange={(e) => setAddCustomer({ ...addCustomer, state: e.target.value })}
                                                name="State"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                Zip Code{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE' }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                maxLength={8}
                                                value={addCustomer?.zipCode || ""}
                                                onChange={(e) => setAddCustomer({ ...addCustomer, zipCode: e.target.value })}
                                                name="zip Code"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                Phone Number{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE' }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                maxLength={14}
                                                value={addCustomer?.phoneNumber || ""}
                                                onChange={(e) => setAddCustomer({ ...addCustomer, phoneNumber: e.target.value })}
                                                name="Phone Number"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                Email{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE' }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                maxLength={30}
                                                value={addCustomer?.email || ""}
                                                onChange={(e) => setAddCustomer({ ...addCustomer, email: e.target.value })}
                                                name="Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                Password{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE' }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                maxLength={6}
                                                value={addCustomer?.password || ""}
                                                onChange={(e) => setAddCustomer({ ...addCustomer, password: e.target.value })}
                                                name="Password"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row float-right newCustomerRes">
                                    <button type="button" className="btn mr-3 mt-2 btn-sm btn-save" onClick={addNewCustomer}>Add customer</button>
                                </div>

                            </div>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
