import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/devised-ensemble.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="1053 Profiles interested in Devised / Ensemble"
      />
    </div>
  );
}
