import "../../styles/home.css";
import NavBarMain from "../navbar/NavBar";
import ServiceData from "./service/ServiceData";
function Services() {
 


  return (
    <div className="parent-container vh-100">
      <NavBarMain />
      <div className="container-home ">
        <div
          className="container-content bg-light rounded ms-4"
          style={{ marginTop: "2rem", display: "flex" }}
        >
          <div
            className="container-description"
            style={{
              flex: "2",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <section className="p-3">
              <div style={{ display: "flex" }}>
                <ServiceData />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
