import React from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

const TodoForm = props => {
        return (
            <>
                <Form onSubmit={props.submitHandler}>
                <Input
                className="bar"
                name="todo"
                id="todo"
                placeholder="todoList"
                onChange={props.handleChange} />

                <Button onClick={() => props.dispatch({ type: 'ADD', payload: props.inputValue})} > Add Todo </Button>
                <Button onClick={() => props.dispatch({ type: 'CLEAR'})}> Clear Completed </Button>
                </Form>
            </>
        )
}

export default TodoForm;
