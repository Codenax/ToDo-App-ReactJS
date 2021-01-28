import React from 'react'
import SearchPanel from './search-panel'
import PropTypes from 'prop-types'

import { Row, Col } from 'react-bootstrap'

import FilterController from './filterController'
import ViewController from './viewController'
import BulkController from './bulkController'
const Controller = ({ term, handleSearch, toggleFrom, handleFilter, view, changeView, clearSelected, clearCompleted, reset }) => (
    <div>
        <SearchPanel
            term={term}
            handleSearch={handleSearch}
            toggleFrom={toggleFrom}
        />
        <Row className='my-4'>
            <Col md={4}>
                <FilterController
                    handleFilter={handleFilter}
                />
            </Col>
            <Col md={4} >
                <ViewController
                    view={view}
                    changeView={changeView}
                />
            </Col>
            <Col md={4} className='d-flex'>

                <div className='ml-auto'>
                    <BulkController
                        clearSelected={clearSelected}
                        clearCompleted={clearCompleted}
                        reset={reset}
                    />
                </div>

            </Col>

        </Row>
    </div>
)



Controller.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleFrom: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}
export default Controller