import React from "react";

// Styles
import "./SunsetBlogPost.css";

export default function SunsetBlogPost() {
  return (
    <div class="post-text">
      <h3>Sunsetting</h3>

      <p>We have sunsetted one of our experimental open-source projects, the <a href="https://www.worldtheatremap.org/" target="_blank" rel="noreferrer" aria-label="World Theatre Map (link opens in a new window)">World Theatre Map</a>. As a community-created directory of the world’s theatre field, the project attempted to fulfill an important need for knowledge sharing and connection. Since the launch of the project in January 2017, we discovered that the need for this kind of resource wasn’t as strong as we anticipated, as the World Theatre Map struggled to be as vibrant as other HowlRound projects such as the Journal and HowlRound TV.</p>

      <p>We’re immensely proud of this project, which evolved out of the New Play Map (2009–16) which sought to reveal how new playwriting in the United States was supported institutionally. The World Theatre Map, as a digital commons, was collectively edited and people-powered, and it is our hope that another organization or group might find use of the collective work that went into the map. As such, we have <a href="https://github.com/howlround/worldtheatremap" target="_blank" rel="noreferrer" aria-label="open-sourced and published the code and database (link opens in a new window)">open-sourced and published the code and database</a> with an <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noreferrer" aria-label="MIT Licence (link opens in a new window)">MIT Licence</a> for the World Theatre Map, which makes all the data free and open to reuse, remix, and redesign. </p>

      <p>The archive of how the New Play Map was developed, as well as stories of its impact, can be found on the HowlRound website by searching <a href="https://howlround.com/search?entity_type=All&amp;content_type=essay&amp;essay_type=All&amp;event_type=All&amp;keys=New%20Play%20Map">New Play Map</a>. For posts about the World Theatre Map’s development and impact, visit the <a href="https://howlround.com/tags/world-theatre-map">World Theatre Map tag page</a>. </p>

      <p>Despite the challenges of experimentation, the World Theatre Map and the New Play Map before it served well in symbolizing the idea of commoning, expressing the idea of a field that is global, and developing our field’s capacity to imagine and innovate through challenging the status quo and business-as-usual in terms of what the field can collectively do online if its energies are organized and stewarded.</p>

      <h3>&nbsp;</h3>

      <h3>Challenges of Design and Learning</h3>

      <p>The World Theatre Map launched in January 2017. In the first two months, there were 8,900 visits and 800 editor accounts created. After this initial peak, visits and participation plateaued, indicating that repeat engagement from the community was low. </p>

      <p>One key difference between the World Theatre Map as a web-based project and the HowlRound Journal and HowlRound TV as web-based projects is that the latter two contain ideas, stories, conversation, opinions, and artwork, whereas the World Theatre Map is a directory of information. This kind of information content does not have the same kind of value or impact that a typical essay or TV event has for our theatre communities.  </p>

      <p>In response to this challenge, when we launched the new HowlRound website in 2018, we created more topical linkages between the World Theatre Map and the HowlRound website in hopes of further connecting the ideas with the data. Unfortunately these design tweaks did not significantly impact how people engaged with the World Theatre Map. </p>

      <p>Despite countless ideas from hundreds of Map editors and contributors, including engaging a global cohort of World Theatre Map <a href="https://howlround.com/introducing-world-theatre-map-ambassadors">ambassadors</a> to promote and organize their local communities, we have not been able to discover a promising pivot that maintains the current data architecture and would at the same time provide the community of theatre practitioners with information vital enough to warrant their ongoing participation.  </p>

      <p>Information that demands high engagement from theatremakers includes job listings, training and continued education opportunities, grant listings, and rehearsal space listings. These services already exist and many are localized on many different platforms. This is information that has the potential to directly change people’s lives. And an example of an information project that is valuable for the theatregoer/consumer (which is not HowlRound’s core audience) is a comprehensive listing of local shows. Like job listings, these services are localized and have varying degrees of success. </p>

      <p>Contrary to the HowlRound Journal and HowlRound TV projects, which are built upon existing and widely used technology platforms, we chose to create the World Theatre Map as a custom-made web/software application. While this allowed us to build something unique, it also generated a large financial cost of technical development and ongoing maintenance. Moving forward, we would think long and hard about building another project from scratch in this way.  </p>

      <h3>&nbsp;</h3>

      <h3>Integrating the Best Concepts into HowlRound’s Website</h3>

      <p>The directory of the World Theatre Map had the ability to conduct searches of organizations, shows, and people with various filters such as interests, specializations, and geography. The intent of a search function was for learning both who and what is in our global field, which could in turn create the possibility of connection, collaboration, and action. We are considering expanding the howlround.com profile search capabilities so that the HowlRound community will have more of the possibility to discover each other.</p>

      <h3>&nbsp;</h3>

      <h3>The Project Archive</h3>

      <p>What you now see at worldtheatremap.org is a static, archival website. Every page that ever existed is present and keyword searchable in a web search, however a live database and the ability to dynamically filter data will not be available. The site also displays several example directory searches that reveal profiles of organizations and people along certain interest topics that are related to HowlRound’s areas of focus. </p>

      <p>If you are interested in reanimating the project and adapting the existing data, the entire project lives permanently on <a href="https://github.com/howlround/worldtheatremap" target="_blank" rel="noreferrer" aria-label="GitHub (link opens in a new window)">GitHub</a>. Email map@howlround.com if you would like further information.</p>
    </div>
  );
}
