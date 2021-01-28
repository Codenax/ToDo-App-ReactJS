import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, Button } from 'react-bootstrap'


const SearchPanel = ({ term, toggleFrom, handleSearch }) => (

    
    <div className="d-flex mb-3">
        <FormControl
            placeholder='Enter Search Term'
            className='mr-3'
            value={term}
            onChange={e => handleSearch(e.target.value)}
        />
        <Button variant='success' onClick={toggleFrom}>
            New
        </Button>
    </div>
);



SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleFrom: PropTypes.func.isRequired
}
export default SearchPanel