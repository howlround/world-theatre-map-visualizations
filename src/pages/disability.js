import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/disability.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="266 Profiles interested in Disability"
        prev="/devised-ensemble"
        next="/indigenous"
      />
    </div>
  );
}
