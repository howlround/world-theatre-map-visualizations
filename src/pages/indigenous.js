import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/indigenous.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="256 Profiles interested in Indigenous"
      />
    </div>
  );
}
