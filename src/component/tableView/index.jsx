import React from 'react'
import { InputGroup, Table, Button } from 'react-bootstrap'

import PropTpyes from 'prop-types'
const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <tr>
            <th scope='row'>
                <InputGroup.Checkbox
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
            </th>
            <th>
                {todo.time.toDateString()}
            </th>
            <th>
                {todo.text} <br></br>
               <span className='font-weight-light'>{todo.description}</span> 
            </th>
            <th>
                <Button variant={todo.isComplete ? 'danger' : 'success'} onClick={() => toggleComplete(todo.id)}>
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </th>
        </tr>
    )

}

RowItem.propTpyes = {
    todo: PropTpyes.object.isRequired,
    toggleSelect: PropTpyes.func.isRequired,
    toggleComplete: PropTpyes.func.isRequired
}

const TableView = ({ todos, toggleSelect, toggleComplete }) => {

    return (
        <Table className='table-view'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <RowItem
                        key={todo.id}
                        todo={todo}
                        toggleSelect={toggleSelect}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </tbody>
        </Table>
    )

}

TableView.propTpyes = {
    todos: PropTpyes.object.isRequired,
    toggleSelect: PropTpyes.func.isRequired,
    toggleComplete: PropTpyes.func.isRequired
}

export default TableView;