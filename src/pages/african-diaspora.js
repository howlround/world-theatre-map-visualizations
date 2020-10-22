import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/african_diaspora.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="309 Profiles interested in African Diaspora"
        prev="/young-people-children-educational"
        next="/climate"
      />
    </div>
  );
}
