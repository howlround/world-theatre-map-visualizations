import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/peacebuilding-conflict-transformation.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="134 Profiles interested in Peacebuilding / Conflict Transformation"
        prev="/lgbtqia"
        next="/roma-diaspora"
      />
    </div>
  );
}
