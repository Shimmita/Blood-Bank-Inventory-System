    import React from "react";
    import { Table, Col, Row , Button} from "react-bootstrap";
    import {  Chat, TelephoneFill } from "react-bootstrap-icons";

    export const BloodRequestDash = () => {
    const hospitalDetails = [
        {  name: 'Kenyatta Hospital', doctor:'Melandez Simons ', phone:'+254753736370',email:'kenyattahospital@gmail.com',location:'Nairobi',blood:'AB-'},
        {  name: 'Kenyatta Hospital', doctor:'Melandez Simons ', phone:'+254753736370',email:'kenyattahospital@gmail.com',location:'Nairobi',blood:'AB-'},
        {  name: 'Kenyatta Hospital', doctor:'Melandez Simons ', phone:'+254753736370',email:'kenyattahospital@gmail.com',location:'Nairobi',blood:'AB-'},
       
        
    ];

    return (
        <div>
        <Row>
            <Col>
            <hr style={{ color: "white" }} />
            <p className="text-center text-light mt-2 fw-bold">Blood Requests From Other Hospitals</p>
            <hr style={{ color: "white" }} />

            <Table striped="columns">
                <thead>
                <tr>
                <th>index</th>
                    <th>Chief Doctor</th>
                    <th>Hospital Name</th>
                    <th>Hospital Phone</th>
                    <th>Hospital Email</th>
                    <th>Hospital Location</th>
                    <th>Blood Requested</th>
                    <th>action 1</th>
                    <th>action 2</th>
                </tr>
                </thead>
                <tbody>
                {hospitalDetails.map((hospital, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                    <td>
                        {hospital.doctor}
                    </td>
                    <td>{hospital.name}</td>
                    <td> <TelephoneFill/> {hospital.phone}</td>
                    <td><Chat/> {hospital.email}</td>
                    <td>{hospital.location}</td>
                    <td>{hospital.blood}</td>
                    <td>
                        <Button variant="success">approve</Button>
                    </td>
                    <td>
                        <Button variant="danger">reject</Button>
                    </td>
                    </tr>
                ))}

                </tbody>
            </Table>

            </Col>
        </Row>

        <Row>
            <Col>
            <hr style={{ color: "white" }} />
            <p className="text-center text-light mt-2 fw-bold">Our Blood Requests to Other Hospitals</p>
            <hr style={{ color: "white" }} />

            <Table striped="columns">
                <thead>
                <tr>
                <th>index</th>
                    <th>Chief Doctor</th>
                    <th>Hospital Name</th>
                    <th>Hospital Phone</th>
                    <th>Hospital Email</th>
                    <th>Hospital Location</th>
                    <th>Blood Requested</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {hospitalDetails.map((hospital, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                    <td>
                        {hospital.doctor}
                    </td>
                    <td>{hospital.name}</td>
                    <td> <TelephoneFill/> {hospital.phone}</td>
                    <td><Chat/> {hospital.email}</td>
                    <td>{hospital.location}</td>
                    <td>{hospital.blood}</td>
                    <td>
                        <p className="text-secondary text-center fw-bold">pending</p>
                    </td>
                   
                    </tr>
                ))}

                </tbody>
            </Table>

            </Col>
        </Row>

        </div>
    );
    };
