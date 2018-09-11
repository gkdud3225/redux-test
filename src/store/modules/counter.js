// 카운터 관련 상태 로직
// action과 reducer를 하나의 파일에 모두 작성하는 것을 Ducks구조라고 한다. 이 구조에서는, 리덕스 관련코드를 기능별로 하나의 파일에 작성한다.
import {createAction, handleActions} from 'redux-actions';

const INCREMENT = 'counter/INCREMENT'; // 도메인/액션이름
const DECREMENT = 'counter/DECREMENT';

// export const increment = () => ({type: INCREMENT});
// export const decrement = () => ({type: DECREMENT});
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);


const initialState = {
    number: 0
}
// export default function reducer(state = initialState, action) {
//     switch(action.type) {
//         case INCREMENT:
//             return {number: state.number + 1};
//         case DECREMENT:
//             return {number: state.number - 1};
//         default:
//             return state;
//     }
// }

export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number +1};
    },
    // action 객체를 참조하지 않으므로, stste부분에서 비구조화 할당도 해주면 다음과 같이 코드를 간소화시킬 수 있다.
    [DECREMENT]: ({number}) => ({number: number - 1})
}, initialState)