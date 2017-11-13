// @flow
import * as React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * The nav bar which appears on top of the website
 * Or appbar
 */

type Props = {
  title: string
};

function HeaderBar(props: Props) {
  return (
    <div>
      <AppBar
        title={props.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    </div>
  );
}

HeaderBar.defaultProps = {
  title: 'Default Title'
};

export default HeaderBar;
