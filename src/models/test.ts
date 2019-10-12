import { Effect } from 'dva';
import { Reducer } from 'redux';
import { FecthData } from '@/services/test'
interface TestModeType {
    namespace:string,
    state:any,
    effects:{
        fetch:Effect
    },
    reducers:{
        save:Reducer
    }
}

 const TestMode:TestModeType={

    namespace: 'test',
  
    state: {},
  

  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        const res = yield call (FecthData);
        console.log('res',res)
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  
  export default TestMode;