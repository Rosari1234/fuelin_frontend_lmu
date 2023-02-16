import React, { useEffect, useState } from "react";
import { AuthService } from "../../servises/AuthService";
import { RequestState } from "../../RequestState";
import { NavLink, useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import { RouteName } from "../../RouteName";
import "../../components/assets/css/core.css";
import "../../components/assets/css/style.css";
import "../../components/assets/css/style1.css";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import loginImage from "../../components/assets/images/signup.svg";
import { User } from "../../models/User";
import { CommonService } from "../../servises/CommonService";

const Signup: React.FC = () => {
    // const token = AuthService.getToken();
    const initialState = { customerBusinessName: "", primaryContactName: "", streetAddress: "", city: "", phoneNumber: "", state: "", zipCode: "", email: "", password: "", confirmpassword: "" };
    const history = useHistory();
    const [userData, setUserData] = useState(initialState);
    const verified = { userId: "", verificationCode: "", medium: "EMAIL"};
    const [verifyData, setVerifyData] = useState(verified);
    const [verification, setVerification] = useState(false);

    const submitSignup = () => {
        if (!userData.customerBusinessName) {
            toast.error("Please enter user Customer Business Name!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!userData.primaryContactName) {
            toast.error("Please enter Primary Contact Name!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!userData.streetAddress) {
            toast.error("Please enter Street Address!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!userData.city) {
            toast.error("Please enter city!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!userData.phoneNumber) {
            toast.error("Please enter Phone Number!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!userData.state) {
            toast.error("Please enter State!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!userData.zipCode) {
            toast.error("Please enter Zip Code!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!userData.email) {
            toast.error("Please enter email!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!userData.password) {
            toast.error("Please enter password!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (userData.password !== userData.confirmpassword) {
            toast.error("Passwords do not match!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        CommonService.customerSignup(userData).then((res) => {
            if (res.success) {
                setVerifyData({ ...verifyData, userId: res.data._id })
                setVerification(true);
            } else {
                toast.error(res.error, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: 'foo-bar'
                });
            }
        });
    }


    const verifyAccount = () => {
        if (!verifyData.verificationCode) {
            toast.error("Please enter verificationCode!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        if (!verifyData.userId) {
            toast.error("UserId Invalid!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
            });
            return;
        }
        CommonService.customerVerification(verifyData).then((res) => {
            if (res.success) {
                location.href = "/signin";
            } else {
                toast.error(res.error, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: 'foo-bar'
                });
            }
        });
    }

    return (
        <div className="login-page">
            <div className="login-header box-shadow">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="brand-logo">
                        {/* <a href="/">
              <img src={logo} />
            </a> */}
                    </div>
                </div>
            </div>
            <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container mt-100">
                    <div className="row align-items-center">
                        {/* <div className="col-md-5 col-lg-5">
                            <img src={loginImage} style={{ height: "58vh" }} />
                        </div> */}
                        {verification == false ? (
                            <div className="col-md-12 col-lg-12">
                                <div className="signup-box bg-white box-shadow border-radius-10">
                                    <div className="login-title mb-4">
                                        <h2 className="text-center text-primary">Signup</h2>
                                    </div>
                                    <form>
                                        <div className="row align-items-center">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-md"
                                                        placeholder="Business Name"
                                                        onChange={(e) => setUserData({ ...userData, customerBusinessName: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-md"
                                                        placeholder="Contact Name"
                                                        onChange={(e) => setUserData({ ...userData, primaryContactName: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row align-items-center">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-md"
                                                        placeholder="Street Address"
                                                        onChange={(e) => setUserData({ ...userData, streetAddress: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-md"
                                                        placeholder="City"
                                                        onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-md"
                                                        placeholder="Telephone Number"
                                                        onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-md"
                                                        placeholder="State"
                                                        onChange={(e) => setUserData({ ...userData, state: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-md"
                                                        placeholder="Zip Code"
                                                        onChange={(e) => setUserData({ ...userData, zipCode: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-md"
                                                        placeholder="Email"
                                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row align-items-center">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-md"
                                                        placeholder="Password"
                                                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="input-group custom">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-md"
                                                        placeholder="Confirm Password"
                                                        onChange={(e) => setUserData({ ...userData, confirmpassword: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row float-right">
                                            <div className="col-md-12 col-lg-12">
                                                <div className="input-group">
                                                    <button type="button" className="btn btn-sm pt-2 pb-2 signupBtn  btncolor btn-lg btn-block" onClick={submitSignup}>
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="col-md-6 col-lg-7">
                                    <img src={loginImage} style={{ height: "58vh" }} />
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <div className="login-box bg-white box-shadow border-radius-10">
                                        <div className="login-title">
                                            <h2 className="text-center text-primary">Verification Code</h2>
                                        </div>
                                        <form >
                                            <div className="input-group custom">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-md"
                                                    placeholder="Enter Verification Code"
                                                    onChange={(e) => setVerifyData({ ...verifyData, verificationCode: e.target.value })}
                                                />
                                            </div>


                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="input-group mb-0">
                                                        <button type="button" className="btn btn btn-sm pt-2 pb-2 btncolor  btn-lg btn-block" onClick={verifyAccount}>
                                                            verify
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </>)}
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Signup;
