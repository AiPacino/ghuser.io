import React from 'react';

import Content from '../Content';
import NavBar from '../NavBar';
import PageContent from '../PageContent';
import '../All.css';

import LeftPanel from './leftpanel/LeftPanel';
import RightPanel from './RightPanel';

const Profile = props => {
  if (!props.user) {
    return <div>404</div>;
  };
  return (
    <PageContent>
      <NavBar/>
      <Content>
        <div className="container container-lg">
          <div className="row">
            <LeftPanel user={props.user} orgs={props.orgs} />
            <RightPanel contribs={props.user.contribs} />
          </div>
        </div>
      </Content>
    </PageContent>
  );
};

export default Profile;
