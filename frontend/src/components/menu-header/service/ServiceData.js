  import Image from "react-bootstrap/Image";
  import Card from "react-bootstrap/Card";
  import dataCorousel from "../../../data/dataCorousel";

  function ServiceData() {
    const data = dataCorousel;
    return (
      <div>
        <section>
          {/* conditional rendering  of the data*/}
          <h5 className="text-center ">Services</h5>
          <hr/>
          <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            {data.map((data, index) => (
              <Card style={{ width: "450px", margin: "1rem" }} key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <Image src={data.image} width={80} style={{borderRadius:'50%'}} />
              </div>
              <Card.Body>
                <Card.Title className="text-center">{data.title}</Card.Title>
                <hr/>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
            </Card>
            ))}
          </div>
        </section>
      </div>
    );
  }

  export default ServiceData;
