import React from 'react'
import {ButtonGroup,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const FilterController=({handleFilter})=>(

    <ButtonGroup >
        <Button variant="secondary" onClick={()=>handleFilter('all')}>ALL</Button>
        <Button variant="secondary" onClick={()=>handleFilter('running')}>Running</Button>
        <Button variant="secondary" onClick={()=>handleFilter('completed')}>Completed</Button>
    </ButtonGroup>
);

FilterController.propTypes ={

    handleFilter:PropTypes.func.isRequired
}
export default FilterController;