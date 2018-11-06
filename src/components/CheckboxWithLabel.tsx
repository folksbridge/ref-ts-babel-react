import * as React from 'react';

interface CheckboxWithLabelProps {
  labelOff: string;
  labelOn: string;
}

interface CheckboxWithLabelState {
  isChecked: boolean;
}

class CheckboxWithLabel extends React.Component<CheckboxWithLabelProps, CheckboxWithLabelState> {
  constructor(props: CheckboxWithLabelProps) {
    super(props);
    this.state = {isChecked: false};
  }

  public handleInputChange = () => {
    this.setState((current) => ({isChecked: !current.isChecked}));
  }

  public render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleInputChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

export default CheckboxWithLabel;
