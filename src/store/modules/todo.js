import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// action type 정의
const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

// action 생성 함수
export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;
// 모듈의 초기상태
const initialState = Map({
    input: '',
    todos: List()
})
// reducer 생성
export default handleActions({
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    // action객체를 비구조화 할당
    [INSERT]: (state, {payload: text}) => {
        const item = Map({id: id++, checked: false, text});
        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, {payload: id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') == id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },
    [REMOVE]: (state, {payload: id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') == id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);
