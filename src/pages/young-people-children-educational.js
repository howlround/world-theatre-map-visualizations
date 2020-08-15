import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/young-people-children-educational.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="1034 Young People / Children / Educational"
      />
    </div>
  );
}
