import * as React from 'react';

import { Button } from 'antd';


export interface ICounterButtonProps {
    onBtnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};


const CounterButton: React.SFC<ICounterButtonProps> = (props: ICounterButtonProps): JSX.Element => {
    return (
        <Button
            type = "primary"
            onClick = {props.onBtnClick}
        >
            Please Click Me 
        </Button>
    );
};

export default CounterButton;