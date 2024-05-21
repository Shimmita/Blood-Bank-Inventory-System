import React from "react";
import DataFAQs from "../../data/Index";
import { Accordion } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const FAQs = () => {
  const data = DataFAQs;
  return (
    <div>
      <h5 className="text-center  p-3">Chat Bot</h5>
      <hr />
      <section>
        <Image
          src={require("../../images/bot_image.jpg")}
          width={150}
          className="border"
          style={{ borderRadius: "2rem" }}
        />
        <div>
          <form>
            <div className="form-group">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="mx-3 my-3"
              >
                Enter Your Question
              </label>
              <textarea
                className="form-control shadow"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <button type="info" className="btn btn-secondary mt-2 mx-1">
              Submit
            </button>
          </form>
        </div>

        <div>
          <textarea
            className="form-control shadow mt-3 rounded"
            id="exampleFormControlTextarea1"
            rows="10"
            disabled={true}
          />
        </div>

        {/* {data &&
          data.map((data, index) => {
            return (
              <div key={index}>
                <Accordion className="mb-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{data.quiz}</Accordion.Header>
                    <Accordion.Body>{data.answer}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            );
          })} */}
      </section>
    </div>
  );
};

export default FAQs;
