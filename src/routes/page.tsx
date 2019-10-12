import * as React from 'react';
    
import Counter from '@/components/Counter';   // 导入 Counter 组件, 这是整个项目的容器

const styles: NodeRequire = require('./index.less');    // 整个项目的样式文件, 等会儿会一一列出

export interface IAppProps {};

const App: React.SFC<IAppProps> = (): JSX.Element => {
    return (
        <div className={styles['app-container']}>
            <div className={styles['app-content']}>
                <Counter />
            </div>
        </div>
    );
};

export default App;
