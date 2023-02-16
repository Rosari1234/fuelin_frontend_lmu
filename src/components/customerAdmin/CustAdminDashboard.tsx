import React, { useEffect, useState, useContext } from "react";
import "../assets/css/style1.css";
import "../assets/css/style.css";
import "../assets/css/core.css";
import "../assets/css/media.css";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, CardTitle, Col, Form, Input, Label, Container, Nav, NavItem, CardText, NavLink, CardFooter, Row, TabContent, Modal, TabPane } from "reactstrap";
import UserContext from "../context/UserContext";
import { AdminService } from "../../servises/AdminService";
import { CustomerUser } from "../../models/CustomerUser";
import { CustomerAdminService } from "../../servises/CustomerAdminService";
const CustomerAdminDashboard: React.FC = () => {
    const [modalCenter, setModalCenter] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const [adminUser, setAdminUser] = useState([] as CustomerUser[]);
    const [addUser, setAddUser] = useState<CustomerUser>({} as CustomerUser);

    useEffect(() => {
        viewAllUser();
    }, []);


    const viewAllUser = () => {
        CustomerAdminService.getAllUsers().then(res => {
            setAdminUser(res.data);
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


    const addNewUser = () => {
        if (!addUser.firstName) {
            toast.error("Please enter First Name!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!addUser.lastName) {
            toast.error("Please enter Last Name!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!addUser.email) {
            toast.error("Please enter email!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        CustomerAdminService.addUser(addUser).then((res) => {
            if (res.success) {
                toast.success(res.success, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: 'foo-bar'
                });
                viewAllUser();
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
                            <div className="d-xl-flex justify-content-start">
                                <div className="d-flex align-items-center mr-2">
                                    <div className="avatar-md rounded-circle bg-soft card-avatar relative">
                                        <span
                                            className="avatar-title text-size-avatr text-center-div">
                                            A
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column ml-2 mt-2">
                                    <span className="card-text-name">Manager  </span>
                                    <span className="card-text-email">manager@fuelin.com </span>
                                    <button type="button" className="btn mt-2 btn-sm btn-profile">View Profile</button>
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
                                <div className="col-md-4">
                                    <span className="card-text-total">Subscription Plan</span>

                                    <span className="card-text-plan">Active</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="row float-right newCustomerRes">
                                <button type="button" className="btn mr-5 btn-sm btn-customer" onClick={() => {
                                    togCenter();
                                }}>Add new user</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-box pd-20 height-100-p mb-30 mt-20">
                    <div className="row">
                        <div className="title mb-15  col-md-8 col-sm-12 mb-20 ">
                            <h5 className="cardHearder">All Users</h5>
                        </div>
                        <div className="col-md-4">
                            <input className="form-control input-search" type="search" placeholder="Search User" aria-label="Search" />
                        </div>
                        <div className="row">
                            <Col sm="12" className="mt10">
                                <div className="table-responsive">
                                  
                                            <table className="table">
                                                <thead className="thead-dark">
                                                    <tr className="tbHead">
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
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
                            <h5 className="modal-title mt-0">Add New User</h5>
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
                                                First Name{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE', boxShadow: "none" }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                value={addUser?.firstName || ""}
                                                onChange={(e) => setAddUser({ ...addUser, firstName: e.target.value })}
                                                maxLength={15}
                                                name="fName"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="card-heading mb-2">
                                            <h5 className="buyerInfoInputLabel mb-2">
                                                Last Name{" "}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-heading mb-2 flex">
                                            <Input
                                                style={{ backgroundColor: '#EEEEEE', boxShadow: "none" }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                value={addUser?.lastName || ""}
                                                onChange={(e) => setAddUser({ ...addUser, lastName: e.target.value })}
                                                maxLength={15}
                                                name="LName"
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
                                                style={{ backgroundColor: '#EEEEEE', boxShadow: "none" }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                value={addUser?.email || ""}
                                                onChange={(e) => setAddUser({ ...addUser, email: e.target.value })}
                                                maxLength={35}
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
                                                style={{ backgroundColor: '#EEEEEE', boxShadow: "none" }}
                                                type="text"
                                                className="buyerInfoInput form-control"
                                                id="formrow-firstname-Input"
                                                value={addUser?.password || ""}
                                                onChange={(e) => setAddUser({ ...addUser, password: e.target.value })}
                                                maxLength={6}
                                                name="Password"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row float-right newCustomerRes">
                                    <button type="button" className="btn mr-3 mt-2 btn-sm btn-save" onClick={addNewUser}>Add User</button>
                                </div>

                            </div>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    );
};
export default CustomerAdminDashboard;
