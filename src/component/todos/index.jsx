import React from 'react';
import shortid from 'shortid'
import './index.css';

import ListView from '../listView'
import TableView from '../tableView'
import { Modal } from 'react-bootstrap'

import Controller from '../controllers'
import CreateTodoForm from '../creat-todo-from'

class Todos extends React.Component {

    state = {
        todos: [{
            id: 'asdweka',
            text: 'Javascript 2nd project',
            description: 'Need to complete',
            time: new Date(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 'asdka',
            text: 'Jbcoder final project',
            description: 'Need to complete',
            time: new Date(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 'asdsdgka',
            text: 'Express js 2nd project',
            description: 'Need to complete',
            time: new Date(),
            isComplete: false,
            isSelect: false
        }
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'list',
        filter :'all'
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

    
    createTodo = todo => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false
        const todos = [todo, ...this.state.todos]
        this.setState({ todos })
        this.toggleFrom()
    }

    handleSearch = value => {
        this.setState({searchTerm: value})

    }

    performSearch=()=>{
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    }
    handleFilter = filter => {
        this.setState({filter})
     }
     performFiltr =todos=>{
            const {filter} = this.state
            if(filter==='completed'){
                return todos.filter(todo =>todo.isComplete)
            }else if(filter==='running'){
                return todos.filter(todo =>!todo.isComplete)
            }else{
                return todos
            }
     }
    changeView = event => {
        this.setState({
            view: event.target.value
        })
    };

    clearSelected = () => { 
        const todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({todos})

    }
    clearCompleted = () => { 
        const todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({todos})
    }
    reset = () => {
        this.setState({
            filter: 'all',
            searchTerm : '',
            view :'list',
            isOpenTodoForm: false,
        })
     }

    getView = () => {
       let todos= this.performSearch();
       todos = this.performFiltr(todos);
        return this.state.view === "list" ? (
            <ListView todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        ) : (
            <TableView todos={todos}
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
                    onHide={this.toggleFrom} >
                    <Modal.Header closeButton >
                        Create New Todo Item
                    </Modal.Header>
                    <Modal.Body>
                        <CreateTodoForm
                            createTodo={this.createTodo} />
                    </Modal.Body>
                </Modal>
            </div >

        );
    }
}

export default Todos;


