        import React from "react";
        import { Col, Row, Image } from "react-bootstrap";
        import devImage from "../../../images/logo.jpg";
        export const Profile = () => {
        return (
            <div>
            <hr />
            <Row className="py-1">
                <Col>
                <form className="rounded border p-2 bg-light">
                    <p className="text-center">Personal Details</p>

                    <div className="mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Shimita"
                        disabled
                    />
                    </div>

                    <div className="mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Douglas"
                        disabled
                    />
                    </div>

                    <div className="mt-2">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="shimitadougalas@gmail.com"
                        disabled
                    />
                    </div>

                    <div className="mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Mombasa County"
                    />
                    </div>

                    <div className="mt-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="+254757450777"
                    />
                    </div>

                    <div className="mt-2">
                    <button className="btn btn-secondary w-100">
                        Update Details
                    </button>
                    </div>
                </form>
                </Col>

                <Col>
                <form className="rounded border p-2 bg-light">
                    <p className="text-center">Profile Photo</p>
                <div className="d-flex justify-content-center align-items-center mt-1">
                <Image src={devImage} width={110} style={{borderRadius:'50%', border:'1px solid grey'}}/>
                </div>
                    <div className="mt-3">
                    <p>change photo</p>
                    <hr/>

                    <input type="file" className="form-control" />
                    </div>

                    <div className="mt-2">
                    <button className="btn btn-secondary w-100">update photo</button>
                    </div>
                </form>
                </Col>
            </Row>
            <hr />
            </div>
        );
        };
