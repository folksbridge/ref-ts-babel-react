import * as React from 'react';
interface CheckboxWithLabelProps {
    labelOff: string;
    labelOn: string;
}
interface CheckboxWithLabelState {
    isChecked: boolean;
}
declare class CheckboxWithLabel extends React.Component<CheckboxWithLabelProps, CheckboxWithLabelState> {
    constructor(props: CheckboxWithLabelProps);
    handleInputChange: () => void;
    render(): JSX.Element;
}
export default CheckboxWithLabel;
