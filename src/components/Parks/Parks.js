import { useState, useEffect } from "react";
import { loadModules } from "@esri/react-arcgis";
import tree from "../../images/tree.png";

const Parks = props => {
  const [graphic, setMyFeatureLayer] = useState(null);
  useEffect(() => {
    loadModules(["esri/layers/FeatureLayer"])
      .then(([FeatureLayer]) => {
        // Create layer style
        const markerSymbol = {
          type: "simple",
          symbol: {
            type: "picture-marker",
            url: tree,
            width: "26px",
            height: "26px"
          }
        };

        //create popup template
        const template = {
          title: "{park}",
          content:
            "<b>State: </b>{state}<br><b>Information:</b> {description}<br><b>location: {lat} , {lon}</b>"
        };

        const nationalParks = new FeatureLayer({
          url:
            "https://services6.arcgis.com/C0u9jTfk9HEMuvXT/ArcGIS/rest/services/national_parks_us/FeatureServer/0",
          renderer: markerSymbol,
          popupTemplate: template
        });

        // Add the layout to the view
        setMyFeatureLayer(nationalParks);
        props.map.add(nationalParks);
      })
      .catch(err => console.error(err));

    return function cleanup() {
      props.view.graphics.remove(graphic);
    };
  }, [graphic, props]);

  return null;
};

export default Parks;
