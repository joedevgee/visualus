import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * The nav bar which appears on top of the website
 * Or appbar
 */
const HeaderBar = () => (
  <div>
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </div>
);

export default HeaderBar;
