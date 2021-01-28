import React from 'react'
import {Form,FormControl,FormLabel,FormGroup,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

class CreatTodoFrom extends React.Component{
    state={
        text:'',
        description:''
    }
 handleChange = event =>{
     this.setState({
         [event.target.name]: event.target.value
     })
 }
 handleSubmit = event =>{
     event.preventDefault()
     this.props.createTodo(this.state)
     event.target.reset()
     this.setState({text:'',description:''})
 }

 render(){
     return(
         <Form onSubmit={this.handleSubmit}>
             <FormGroup >
                 <FormLabel>Entry Task</FormLabel>
                 <FormControl
                 placeholder='do some code'
                 name = 'text'
                 value ={this.state.text}
                 onChange={this.handleChange}
                />
             </FormGroup>
             <FormGroup>
                 <FormLabel>Discribe task</FormLabel>
                 <FormControl
                 as="textarea" 
                 placeholder='Write some sort discription about your task'
                 name = 'description'
                 value ={this.state.description}
                 onChange={this.handleChange}
                />
             </FormGroup>
             <Button type='submit' variant='primary'>
                 Create Task
             </Button>
         </Form>
     );
 }
}

CreatTodoFrom.propTypes ={
    createTodo: PropTypes.func.isRequired
};

export default CreatTodoFrom;