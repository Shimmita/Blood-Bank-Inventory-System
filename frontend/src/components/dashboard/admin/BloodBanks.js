    import React from "react";
    import { Table, Col, Row } from "react-bootstrap";
    export const BloodBanksDash = () => {
    const bloodInventory = [
        { type: "A+", quantity: 100 },
        { type: "B+", quantity: 150 },
        { type: "O", quantity: 120 },
        { type: "AB", quantity: 80 },
        // Add more blood groups here as needed
        { type: "A-", quantity: 50 },
        { type: "B-", quantity: 75 },
        { type: "AB-", quantity: 30 },
        { type: "O-", quantity: 90 },
        
    ];

    return (
        <div>
            
        <Row>
            <Col>
            <hr style={{ color: "white" }} />

            <p className="text-center text-light mt-2 fw-bold">Blood Inventory</p>

            <Table striped="columns">
                <thead>
                <tr>
                    <th>Blood type</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {bloodInventory.map((bloodGroup, index) => (
                    <tr key={index}>
                    <td>{bloodGroup.type}</td>
                    <td>{bloodGroup.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Col>

        </Row>
        </div>
    );
    };
