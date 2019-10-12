import React from 'react';
import { connect } from 'dva';
// require('')
import {  Button } from 'antd';
import lessStyle from '@/less/index.less';
import  styles from './index.less';


function IndexPage(props) {
  const handleChange = (primaryColor) => {
    props.dispatch({
      type:'settings/changeSetting',
      payload:{
        primaryColor
      }
    })    

    // console.log('aa')
    // less.modifyVars({
    //   '@primary-color': 'red'
    // }).then(() => {console.log(less)})

  }
  return (
    <div className={styles.normal}>
        <div className={lessStyle.outer}>aaaa
          <div className={lessStyle.inner}> inner</div>
        </div>
        <Button  type="primary"> 12323</Button>
      <Button onClick={()=>handleChange('#722ed1')} type="primary"> click</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
