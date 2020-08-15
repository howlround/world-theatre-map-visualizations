import React from "react";
import VisualizationPage from "../components/VisualizationPage";

import items from "../data/roma-diaspora.json";

export default () => {
  return (
    <div>
      <VisualizationPage
        items={items}
        title="51 Profiles interested in Roma Diaspora"
      />
    </div>
  );
}
