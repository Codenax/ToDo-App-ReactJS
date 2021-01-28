import React from 'react';
import shortid from 'shortid'
import './index.scss';

import ListView from '../listView'
import TableView from '../tableView'
import { Modal } from 'react-bootstrap'

import Controller from '../controllers'
import CreateTodoForm from '../creat-todo-from'

class Todos extends React.Component {

    state = {
        todos: [{
            id: 'asdweka',
            text: 'main todo text',
            description: 'simple description',
            time: new Date(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 'asdka',
            text: 'main todo text',
            description: 'simple description',
            time: new Date(),
            isComplete: false,
            isSelect: false
        }
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'list'
    }

    toggleSelect = (todoId) => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isSelect = !todo.isSelect
        this.setState({ todos });

    }
    toggleComplete = (todoId) => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isComplete = !todo.isComplete
        this.setState({ todos });

    }

    toggleFrom = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }

    handleSearch = () => {

    }
    createTodo = todo => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false
        const todos = [todo, ...this.state.todos]
        this.setState({ todos })
        this.toggleFrom()
    }


    handleFilter = () => { }
    changeView = event => {
        this.setState({
            view: event.target.value
        })

    };
    clearSelected = () => { }
    clearCompleted = () => { }
    reset = () => { }

    getView = () => {
        return this.state.view === "list" ? (
            <ListView todos={this.state.todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        ) : (
            <TableView todos={this.state.todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
        />
        )

    }

    render() {
        return (
            <div>
                <h1 className='display-5 text-center my-3'>Jb To Do App</h1>
                <Controller
                    term={this.state.searchTerm}
                    handleSearch={this.handleSearch}
                    toggleFrom={this.toggleFrom}
                    view={this.state.view}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}


                />
                <div>
                    {this.getView()}
                </div>
               
                <Modal
                    show={this.state.isOpenTodoForm}
                    onHide={this.toggleFrom}
                >
                    <Modal.Header closeButton
                    >
                        Create New Todo Item
                    </Modal.Header>
                    <Modal.Body>
                        <CreateTodoForm
                            createTodo={this.createTodo}
                        />
                    </Modal.Body>
                </Modal>

            </div >

        );
    }
}

export default Todos;


