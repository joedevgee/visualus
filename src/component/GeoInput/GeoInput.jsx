// @flow
import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';

/**
 * A text field, a select field to
 * let user enter zipcode/city name and
 * select radius of distance for geo searching
 */

type Props = {
  schoolFieldHint?: string,
  schoolSource?: Array<string>,
  onSubmit: () => void
};

const GeoInput = (props: Props) => {
  return (
    <div>
      <AutoComplete
        hintText={props.schoolFieldHint}
        dataSource={props.schoolSource}
      />
    </div>
  );
};

GeoInput.defaultProps = {
  schoolFieldHint: 'School name (optional)',
  schoolSource: []
};

export default GeoInput;
