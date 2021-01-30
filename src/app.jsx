import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Todos from './component/todos';

import { Helmet } from 'react-helmet'


function App() {
    return (
        <div>
            <Helmet>
                <title>Jb To-Do App</title>
            </Helmet>
            <Container className='text-center'>
                <Row>
                    <Col>
                        <Todos />
                    </Col>
                </Row>
            </Container>
        </div>
    );

}



export default App;