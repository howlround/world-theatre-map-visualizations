import React from 'react';
import classnames from 'classnames';
import { includes, isEmpty, isNil } from 'lodash';

export default class ProfileSearchResult extends React.Component {
  renderImage() {
    const { profile } = this.props;
    let output = '';

    if (profile.imageWide) {
      output = (
        <img
          className="profile-image"
          width="100px"
          height="100px"
          src={profile.imageWide}
          alt={profile.name}
        />
      );
    }

    return output;
  }

  render() {
    const { profile } = this.props;

    const interests = (profile.interests) ?
      profile.interests.join(', ')
      : false;

    let orgTypes = (
      profile.orgTypes &&
      includes(profile.profileType, 'Organization')
    ) ?
      profile.orgTypes.join(', ')
      : false;

    let selfDefinedRoles = (
      profile.selfDefinedRoles &&
      includes(profile.profileType, 'Individual')
    ) ?
      profile.selfDefinedRoles.join(', ')
      : false;

    const locationBlock = [
      profile.locality,
      profile.administrativeArea,
      profile.country,
    ].filter(val => (val)).join(', ');

    const classNames = classnames('profile-content-wrapper', {
      'profile-with-image': !isNil(profile.imageWide),
    });

    return (
      <article className="profile search-result">
        {profile.imageWide ? this.renderImage() : ''}
        <div className={classNames}>
          <span
            className="profile-name"
          >
            {profile.name}
          </span>
          <div className="profile-metadata metadata">
            {!isEmpty(locationBlock) ?
              <div className="profile-location">
                <span className="profile-metadata-label">
                  Location
                </span> {locationBlock}
              </div> : ''}
            {(
              !isEmpty(profile.selfDefinedRoles) &&
              includes(profile.profileType, 'Individual')
            ) ?
              <div className="profile-roles" title="Roles">
                <span className="profile-metadata-label">
                  Roles
                </span> {selfDefinedRoles}
              </div> : ''}
            {(!isEmpty(profile.orgTypes) && includes(profile.profileType, 'Organization')) ?
              <div className="profile-organization-types" title="Organization Type">
                <span className="profile-metadata-label">
                  Organization Types
                </span> {orgTypes}
              </div> : ''}
            {!isEmpty(profile.interests) ?
              <div className="profile-interests" title="Interests">
                <span className="profile-metadata-label">
                  Interests
                </span> {interests}</div> : ''}
          </div>
        </div>
      </article>
    );
  }
}
