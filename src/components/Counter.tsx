import * as React from 'react';

import { connect } from 'dva';            // 将dva中的 state 转化为组件的 props
import { Dispatch } from 'redux';    // 类型限制, 

const styles: NodeRequire = require('../routes/index.less');

import CounterButton from '@/components/CounterButton';    // 这是点击的按钮, 我将它分成了一个单独的组件,


// 定义接口
export interface ICounterProps {
    current: number;    // 即时数字
    record?: number;    // 最高纪录
    dispatch: Dispatch<{type: string, payload?: any}>;    // tip: 这里类型定义Dispatch, vscode 会自动帮我引入 Dispatch, 很智能
};


const Counter: React.SFC<ICounterProps> = (props: ICounterProps): JSX.Element => {
    const { current, record, dispatch } = props;
    
    // 按钮点击事件, 处理函数
    const handleClick: React.ReactEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(event.currentTarget);        // button Element
        dispatch({
            type: 'counter/addRemote',         // 触发 action
        });
    };
    
    return (
        <div className={styles['counterbox']}>
            <p className={styles['counter-show']}>The highest count is: { record }</p>
            <div className={styles['counter-currentcount']}>
                Current count is: { current }
            </div>
            <div className={styles['counter-button']}>
                <CounterButton onBtnClick={handleClick} />
            </div>
        </div>
    );
};

// 将 state => props
const mapStateToProps = (state): {current: number, record?: number} => {
    const { current, record } = state.counter;
    
    return {
        current,
        record,
    };
};


export default connect(mapStateToProps)(Counter);