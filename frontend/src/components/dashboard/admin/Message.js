        import React from "react";
        import { Row, Col } from "react-bootstrap";

        export const MessageUsers = () => {
        return (
            <div>
            <hr />
            <Row className="py-1">
                <Col>
                <form className="rounded border p-2 bg-light">
                    <p className="text-center">Send Message to a Blood Donor</p>

                    <div className="mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="donor's name"
                    />
                    </div>  
                    <div className="mt-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="message title"
                    />
                    </div>

                    <div className="mt-3">
                    <textarea placeholder="type your message here ..." className="form-control"  rows={5}/>
                    </div>

                    <div className="mt-2">
                    <button className="btn btn-secondary w-100">Send</button>
                    </div>
                </form>
                </Col>

                <Col>
                <form className="rounded border p-2 bg-light">
                    <p className="text-center">Send Messsage To Admin</p>
                    <div>
                    {" "}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="your full name"
                    />
                    </div>

                    <div className="mt-3">
                    {" "}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="message title"
                    />
                    </div>
                    
                    <div className="mt-3">
                    <textarea
                        placeholder="type your message here ..."
                        className="form-control"
                        rows={5}
                    />
                    </div>

                    <div className="mt-2">
                    <button className="btn btn-secondary w-100">Send</button>
                    </div>
                </form>
                </Col>
            </Row>
            <hr />
            </div>
        );
        };
