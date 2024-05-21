import React from "react";
import { Badge, Table } from "react-bootstrap";
import { DonorCampaigns } from "../dashboard/donor/DonorCampaigns";

const Campaigns = () => {
  return (
    <div>
      <section>
        <h5 className="text-center mb-3">
          Campaigns <span style={{ marginLeft:'3rem' }}></span>
        </h5>

        <div>
          <div className="rounded shadow ">
            <DonorCampaigns/>
          </div>

          <div className="mt-4 border rounded p-3">
            <div className="border rounded d-flex justify-content-center align-items-center p-3">
              {" "}
              <h6 className="text-center lead ">Reminder</h6>
            </div>
            <p className="text-center">
              Join our life-changing mission to save lives. Your single act of
              kindness can make an immense impact. Visit our blood donation
              center or schedule an appointment through our user-friendly web
              app using React. Every donation counts, and every donor is a hero.
              Together, let's build a healthier and stronger community. Your
              generosity can bring hope and healing. Be the difference – donate
              blood now! 🩸💪 #DonateLife #BloodDonation #CommunityHeroes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
