import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import ChartsVisualise from "../../charts/ChartsVisualise";
import { BarChart } from "../../charts/BarCharts";
export const Statistics = () => {
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

  //pie chart data overal blood
  const data = [
    ["Blood Group", "Amount"],
    ["A+", 100],
    ["B+", 150],
    ["O", 120],
    ["AB", 80],
    ["A-", 50],
    ["B-", 75],
    ["AB-", 30],
    ["O-", 90],
  ];

  //pie chat data gender distribution
  const data_2 = [
    ["Gender", "Total"],
    ["Male", 200],
    ["Female", 350],
  ];

  return (
    <div>
      <Col>
        <Row>
          <Col>
            <p className="text-center text-light">Blood Visualisation</p>
            <ChartsVisualise data={data} />
          </Col>

          <Col>
            <p className="text-center text-light">Blood Inventory Table</p>
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
        <Row className="mt-3">
          <Col>
            <p className="text-light text-center">Distribution of Blood</p>
            {/* pie chart visualisation */}
            <ChartsVisualise data={data_2} />
          </Col>
          <Col>
            {/* bar graph */}
            <p className="text-light text-center">Blood Group Blood Group Visualisation</p>

            <BarChart />
          </Col>
        </Row>
      </Col>
    </div>
  );
};
