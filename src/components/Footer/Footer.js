import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="App-footer">
      <div className="row">
        <div className="column_a">
          <p className="footerText">© 2019 National Parks US</p>
          <p className="footerText">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/perla-jarillo-98290436/"
              target="blank"
              rel="noopener noreferrer"
            >
              Perla Jarillo
            </a>
          </p>
        </div>

        <div className="column_b">
          <p className="footerText">CREDITS</p>
          <div className="footerText">
            Icons made by{" "}
            <a href="https://www.freepik.com/" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </div>
          <p className="footerText">
            {" "}
            ArcGIS API components:{" "}
            <a
              href="https://github.com/Esri/react-arcgis"
              target="_blank"
              rel="noopener noreferrer"
            >
              React-ArcGIS{" "}
            </a>
          </p>
          <p className="footerText">
            Park's information is a compilation from:{" "}
            <a href="https://www.nps.gov/index.htm">National Parks Service</a>{" "}
            and{" "}
            <a href="https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States">
              Wikipedia
            </a>
          </p>
          <p className="footerText">
            ArcGIS REST Services provided by{" "}
            <a href="https://www.esri.com/en-us/arcgis/about-arcgis/overview">
              esri
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
