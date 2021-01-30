import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Todos from './component/todos';


function App() {
    return (
        <Container className='text-center'>
            <Row>
                <Col>
                    <Todos />
                </Col>
            </Row>
            
        </Container>

    );

}



export default App;