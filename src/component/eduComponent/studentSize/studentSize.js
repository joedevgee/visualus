// @flow
import * as React from 'react';
import { Switch } from 'antd';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

import './studentSize.css';

type Props = {
  +undergradSize: { [year: string]: number },
  +gradSize: { [year: string]: number }
};

type State = {
  showUndergrad: boolean
};

class StudentSize extends React.Component<Props, State> {
  static defaultProps = {
    undergradSize: {},
    gradSize: {}
  };

  state = {
    showUndergrad: true
  };

  onSwitchChange = (checked: boolean) => {
    this.setState({
      showUndergrad: checked
    });
  };

  renderSwitch = () => {
    const isUndergradEmpty = Object.keys(this.props.undergradSize).length === 0;
    const isGradEmpty = Object.keys(this.props.gradSize).length === 0;
    if (isUndergradEmpty || isGradEmpty) {
      return '';
    } else {
      return (
        <Switch
          checkedChildren={'Undergraduate'}
          unCheckedChildren={'Graduate'}
          onChange={this.onSwitchChange}
          defaultChecked
        />
      );
    }
  };

  renderDataViz = (size: { [year: string]: number }) => {
    const sizeData = [];
    Object.keys(size).forEach(year => {
      const studentSize = size[year];
      sizeData.push({
        year: year,
        size: studentSize
      });
    });
    const cols = {
      year: { alias: 'year' },
      size: { alias: 'student size' }
    };
    return (
      <Chart height={400} data={sizeData} scale={cols} forceFit>
        <Axis
          name="year"
          title={null}
          tickLine={null}
          line={{ stroke: '#E6E6E6' }}
        />
        <Axis
          name="student size"
          line={false}
          tickLine={null}
          grid={null}
          title={null}
        />
        <Tooltip />
        <Geom
          type="line"
          position="year*size"
          size={1}
          color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
          shape="smooth"
          style={{
            shadowColor: 'l (270) 0:rgba(21, 146, 255, 0)',
            shadowBlur: 60,
            shadowOffsetY: 6
          }}
        />
      </Chart>
    );
  };

  render() {
    return (
      <div>
        {this.renderSwitch()}
        {this.renderDataViz(
          this.state.showUndergrad
            ? this.props.undergradSize
            : this.props.gradSize
        )}
      </div>
    );
  }
}

export default StudentSize;
