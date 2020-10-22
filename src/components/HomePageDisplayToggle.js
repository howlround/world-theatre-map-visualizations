import React from 'react';
import { Link } from "gatsby"
import classnames from 'classnames';

export default function HomePageDisplayToggle({ prev, next }) {
  return (
    <div className="homepage-option-toggle">
      <Link
        to={prev}
        className={classnames(
          'option-toggle-item',
          'homepage-display-events',
          'icon-arrow-up'
        )}
      />
      <Link
        to={next}
        className={classnames(
          'option-toggle-item',
          'homepage-display-people',
          'icon-arrow-up'
        )}
      />
    </div>
  );
}
