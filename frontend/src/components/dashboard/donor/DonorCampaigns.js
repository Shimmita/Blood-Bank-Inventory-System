import React, { useEffect, useState } from "react";
import { Table, Col, Row, Badge } from "react-bootstrap";
import axios from "axios";

export const DonorCampaigns = () => {
  // Set initial state to empty array
  const [campaignData, setCampaigns] = useState([]);

  const url_get_campaigns = `http://localhost:1010/bloodAPI/campaigns/all`;
  useEffect(() => {
    axios
      .post(url_get_campaigns)
      .then((response) => {
        setCampaigns(response.data); // Set the entire response data
      })
      .catch((error) => {
        console.log("error occurred");
      });
  }, [url_get_campaigns]);

  return (
    <div>
      <hr style={{ color: "white" }} />
      <section>
        <p className="text-center mb-3 fw-bold">
          Blood Donation Campaigns{" "}
          <span>
            <Badge className="bg-secondary">{campaignData.length}</Badge>
          </span>{" "}
        </p>
        <hr />

        <div>
          <Table striped="columns" className="rounded border shadow">
            <thead>
              <tr>
                <th>S/No</th>
                <th>Date</th>
                <th>Place</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {campaignData.length > 0 && // Check if there's data before mapping
                campaignData.map((data, index) => (
                  <tr key={data._id}>
                    <th>{index + 1}</th>{" "}
                    {/* Consider using an index for S/No */}
                    <th>{data.date}</th>
                    <th>{data.location}</th>
                    <th>{data.description}</th>
                  </tr>
                ))}
              {/* Add a message if no data is found */}
              {campaignData.length === 0 && (
                <tr>
                  <td colSpan="4">No campaigns found.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </section>
      <hr />
    </div>
  );
};
