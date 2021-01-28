import React from 'react'
import {ButtonGroup,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const BulkController=({clearSelected,clearCompleted,reset})=>(

    <ButtonGroup>
        <Button variant="danger" onClick={clearSelected}>Clear Selected</Button>
        <Button variant="danger" onClick={clearCompleted}>Clear Completed</Button>
        <Button variant="danger" onClick={reset}>Reset</Button>
    </ButtonGroup>
);

BulkController.propTypes ={

    clearSelected:PropTypes.func.isRequired,
    clearCompleted:PropTypes.func.isRequired,
    reset:PropTypes.func.isRequired
}
export default BulkController;