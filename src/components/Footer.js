import React from 'react';

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-block">
          <div className="footer-site-name">
            World Theatre Map
          </div>
          <div className="footer-howlround-credit footer-meta">
            A project of <a href="http://howlround.com">HowlRound</a>
          </div>
          <div className="footer-github footer-meta">
            Open source <a href="https://github.com/howlround/worldtheatremap" target="_blank" rel="noreferrer">codebase</a> and <a href="https://github.com/howlround/wtm_data_archive" target="_blank" rel="noreferrer">data</a> on GitHub
          </div>
        </div>
        <div className="footer-block">
          <ul className="footer-navigation">
          </ul>
        </div>
        <div className="footer-block creative-commons">
          All content is free cultural work available to you under a <a href="http://creativecommons.org">Creative Commons</a> Attribution 4.0 International License (CC BY 4.0). Attribute the original author and <a href="http://howlround.com">HowlRound.com</a> when you repost and remix!
        </div>
        <div className="footer-block">
          <ul className="footer-social">
            <li>
              <a className="facebook" href="http://facebook.com/HowlRound">Facebook</a>
            </li>
            <li>
              <a className="twitter" href="http://twitter.com/HowlRound">Twitter</a>
            </li>
            <li>
              <a className="instagram" href="http://instagram.com/howlround">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer-credits">
          <ul>
            <li>
              <a className="howlround-footer-logo" href="http://howlround.com">HowlRound</a>
            </li>
            <li>
              <a className="emerson-footer-logo" href="http://emerson.edu">Emerson College</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
