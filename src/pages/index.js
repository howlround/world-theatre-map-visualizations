import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/climate.json";

export default () => {
  return (
    <div>
      <VisualizationPage items={items}/>
    </div>
  );
}
