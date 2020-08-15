import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/deaf.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="143 Profiles interested in Deaf"
      />
    </div>
  );
}
