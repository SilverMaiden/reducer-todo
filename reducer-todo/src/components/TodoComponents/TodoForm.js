import React from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

const TodoForm = props => {
    let submit = (event) => {
                        event.preventDefault();
                        props.dispatch({
                        type: 'ADD',
                        payload: props.inputValue});
                        props.setInputValue('');
                    }
        return (
            <>
                <Form onSubmit={submit}>
                    <Input
                        className="bar"
                        name="todo"
                        id="todo"
                        placeholder="todoList"
                        value={props.inputValue}
                        onChange={props.handleChange}
                    />

                    <Button onClick={submit} > Add Todo </Button>
                    <Button onClick={() => props.dispatch({
                        type: 'CLEAR'
                    })}> Clear Completed </Button>
                </Form>
            </>
        )
}

export default TodoForm;
