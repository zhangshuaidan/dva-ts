import { Effect } from 'dva';
import { Reducer } from 'redux';
export interface TabModelType {
    namespace: 'tab';
    state: TabModelState;
    effects: {
        addTab:Effect,
        changeSelect:Effect,
        removeTab:Effect
    };
    reducers: {
        save: Reducer<TabModelState>
    };
}

interface tabListType {
    name:string,
    component:React.FC
}

export interface TabModelState {
    selectKey: string,
    tabList: tabListType[],
}

const TabModel: TabModelType = {
    namespace: 'tab',
    state: {
        selectKey: '',
        tabList: []
    },
    effects: {
        *addTab({ payload }, { put, select }) {
            const { tab } = yield select(state => (
                { tab: state.tab }
            ))
            let flag = tab.tabList.find(v => v.name === payload.name)
            if (flag) {
                yield put({
                    type: 'save',
                    payload: {
                        selectKey: payload.name
                    }
                })
            } else {
                let arr = tab.tabList.concat(payload)
                yield put({
                    type: 'save',
                    payload: {
                        selectKey: payload.name,
                        tabList: arr
                    }
                })
            }
        },
        *changeSelect({ payload }, { put }) {
            yield put({
                type: 'save',
                payload: {
                    selectKey: payload.name
                }
            })
        },
        *removeTab({ payload }, { put, select }) {
            const { tab } = yield select(state => (
                { tab: state.tab }
            ));

            let arr = tab.tabList.filter(v => v.name !== payload.name);
            if (tab.selectKey === payload.name) {
                yield put({
                    type: 'save',
                    payload: {
                        selectKey: arr.length ? arr[arr.length - 1].name : '',
                        tabList: arr
                    }
                })
            } else {
                yield put({
                    type: 'save',
                    payload: {
                        tabList: arr
                    }
                })
            }

        }
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

export default TabModel;