import React from "react";
import { Helmet } from "react-helmet"

// Styles
import "./VisualizationPage.css";

// Components
import Footer from "../components/Footer";
import ProfilesGlobe from "../components/ProfilesGlobe";
import HomePageDisplayToggle from "../components/HomePageDisplayToggle";

export default function VisualizationPage({ items, title, prev, next }) {
  // const siteName = 'World Theatre Map';
  // const siteDescription = 'The World Theatre Map is a user-generated directory of the world\'s theatre community (makers, workers, companies, institutions) and a real-time media hub of its projects, events, performances, conversations, ideas.'; // eslint-disable-line max-len

  return (
    <div id="container">
      <Helmet
        titleTemplate={`%s | World Theatre Map`}
        defaultTitle="World Theatre Map"
      />
      <header id="header">
        <section id="menu">
          <span
            className="home"
          >
            World Theatre Map
          </span>
        </section>
      </header>
      <section>
        <div class="announcement">
          Read about the status of the <a href="https://howlround.com/world-theatre-map">World Theatre Map</a> project.
        </div>
      </section>
      <section id="content-container">
        <div className="homepage-content-wrapper">
          <div className="page">
            <section className="homepage-globe">
              <HomePageDisplayToggle
                prev={prev}
                next={next}
              />
              <div className="homepage-globe-label">
                <h2>
                  <span
                    className="people-view-all"
                  >
                    {title}
                  </span>
                </h2>
              </div>
              <ProfilesGlobe
                items={items}
              />
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
