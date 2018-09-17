// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, {Component} from 'react';
import Counter from 'components/Counter';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {CounterActions} from 'store/actionCreators';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {
    handleIncrement = () => {
        // const {CounterActions} = this.props;
        CounterActions.increment();
    }
    handleDecrement = () => {
        // const {CounterActions} = this.props;
        CounterActions.decrement();
    }
    render() {
        const {handleIncrement, handleDecrement} = this;
        const {number} = this.props;

        return (
            <Counter 
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        )
    }
}

// const mapStateToProps = (state) => ({
//     number: state.counter.number
// })
// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(counterActions.increment()),
//     decrement: () => dispatch(counterActions.decrement())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);


// 첫번째 파라미터 mapStateToProps: props 값으로 넣어줄 상태 정의
// 컴포넌트를 리덕스와 연동할때는 connect를 사용한다.
// connect()의 결과는 컴포넌트에 props를 넣어주는 함수를 반환한다.
// 반환된 함수에 만든 컴포넌트(CounterContainer))를 넣어주면 된다.
export default connect(
    (state) => ({
        number: state.counter.number
    })
    // (dispatch) => ({
    //     CounterActions: bindActionCreators(counterActions, dispatch)
    // })
)(CounterContainer);