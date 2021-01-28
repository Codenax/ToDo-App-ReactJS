import React from 'react'
import { ListGroupItem, InputGroup,Button ,ListGroup} from 'react-bootstrap'
import PropTpyes from 'prop-types'



/* list item component */
const ListItem = ({ todo,toggleSelect,toggleComplete }) => {
    return (
        <ListGroupItem className='list-view d-flex align-item-center text-left'>
            <InputGroup.Checkbox
                
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
            <div className='mx-3'>
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button className='ml-auto' variant ={todo.isComplete ? 'danger': 'success'} onClick ={()=> toggleComplete(todo.id)} >
            {todo.isComplete ? 'Completed': 'Running'}
            </Button>
        </ListGroupItem>
    )
}

ListItem.propTpyes={
    todo: PropTpyes.object.isRequired,
    toggleSelect: PropTpyes.func.isRequired,
    toggleComplete: PropTpyes.func.isRequired
}


const ListView = ({todos,toggleSelect,toggleComplete})=>{
    return(
        <ListGroup>
            {todos.map(todo=>(
                <ListItem
                   key={todo.id}
                   todo = {todo}
                   toggleSelect ={toggleSelect}
                   toggleComplete ={toggleComplete}
                />
            ))}
        </ListGroup>
    );
}

ListView.propTpyes={
    todos: PropTpyes.object.isRequired,
    toggleSelect: PropTpyes.func.isRequired,
    toggleComplete: PropTpyes.func.isRequired
}

export default ListView;