import React from 'react'
import { InputGroup, FormLabel } from 'react-bootstrap'
import PropTypes from 'prop-types'


const ViewController = ({view, changeView}) => (

    <div className='d-flex justify-content-center'>
        <FormLabel  className='mx-4'>
            <InputGroup.Radio
                name='view'
                value='list'
                id='list-view'
                onChange={changeView}
                className='d-inline-block'
                checked={view === 'list'}

            />
            List View
        </FormLabel>
        <FormLabel className='mx-4'>
            <InputGroup.Radio
                name='view'
                value='table'
                id='table-view'
                onChange={changeView}
                className='d-inline-block'
                checked={view === 'table'}

            />
        Table View
        </FormLabel>

    </div>
)

ViewController.propTypes={
    view:PropTypes.string.isRequired,
    changeView : PropTypes.func.isRequired
}

export default ViewController