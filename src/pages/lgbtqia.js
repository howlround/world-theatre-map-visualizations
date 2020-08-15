import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/lgbtqia.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="580 Profiles interested in LGBTQIA*"
      />
    </div>
  );
}
