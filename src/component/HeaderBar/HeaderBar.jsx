// @flow
import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';

/**
 * The nav bar which appears on top of the website
 * Or appbar
 */

type Props = {
  title: string
};

function HeaderBar(props: Props) {
  function handleToggle(e) {
    console.log('Something is changed');
  }

  return (
    <div>
      <AppBar
        title={props.title}
        iconElementRight={
          <Toggle style={{ margin: 20 }} onToggle={handleToggle} />
        }
      />
    </div>
  );
}

HeaderBar.defaultProps = {
  title: 'Default Title'
};

export default HeaderBar;
