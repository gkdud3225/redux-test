// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, {Component} from 'react';
import Todos from 'components/Todos';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TodoActions} from 'store/actionCreators';
import * as todoActions from 'store/modules/todo';

class TodosContainer extends Component {
    handleChange = (e) => {
        // const {TodoActions} = this.props;
        TodoActions.changeInput(e.target.value);
    }

    handleInsert = () => {
        const {input} = this.props;
        TodoActions.insert(input);
        TodoActions.changeInput('');
    }

    handleToggle = (id) => {
        // const {TodoActions} = this.props;
        TodoActions.toggle(id);
    }

    handleRemove = (id) => {
        // const {TodoActions} = this.props;
        TodoActions.remove(id);
    }
    
    render() {
        const {handleChange, handleInsert, handleToggle, handleRemove} = this;
        const {input, todos} = this.props;
        return (
            <Todos
                input={input}
                todos={todos}
                onChange={handleChange}
                onInsert={handleInsert}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        );
    }
}

// 컴포넌트를 리덕스와 연동할때는 connect를 사용한다.
// connect()의 결과는 컴포넌트에 props를 넣어주는 함수를 반환한다.
// 반환된 함수에 만든 컴포넌트(TodoContainer)를 넣어주면 된다.
export default connect(
    // props값으로 넣어줄 상태 정의
    // state를 비구조화 할당
    ({todo}) => ({
        // immutable을 사용하므로 값을 조회할때는 .get()을 사용해준다.
        input: todo.get('input'),
        todos: todo.get('todos')
        // input: todo.input,
        // todos: todo.todos
    })
    // props 값으로 넣어줄 액션 함수들 정의
    // (dispatch) => ({
    //     TodoActions: bindActionCreators(todoActions, dispatch)
    // })
)(TodosContainer);