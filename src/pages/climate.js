import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/climate.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="301 Profiles interested in Climate Change or Eco Theatre"
        prev="/african-diaspora"
        next="/deaf"
      />
    </div>
  );
}
