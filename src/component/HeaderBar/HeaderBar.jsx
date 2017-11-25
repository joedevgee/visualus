// @flow
import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';

/**
 * The nav bar which appears on top of the website
 * Or appbar
 */

type Props = {
  title?: string,
  defaultTheme: boolean
  // onToggle: () => void
};

function HeaderBar(props: Props) {
  return (
    <div>
      <AppBar
        title={props.title}
        iconElementRight={
          <Toggle
            style={{ margin: 20 }}
            onToggle={console.debug('Default theme? ', props.defaultTheme)}
          />
        }
      />
    </div>
  );
}

HeaderBar.defaultProps = {
  title: 'Default Title'
};

export default HeaderBar;
