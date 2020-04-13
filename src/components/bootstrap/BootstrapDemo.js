import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    ListGroup,
} from 'react-bootstrap'
import Counter from "../Counter";

class BootstrapDemo extends Component {
    constructor(props){
        super(props)}
        render(){
        console.log(this.props)
    return <div> BOOTSTRAP DEMO

        <Container fluid={true}>
            <Row>
                <Col>Counter</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col sm={8}><ListComponent/></Col>
                <Col sm={4}>sm=4</Col>
            </Row>
    </Container></div>}
}

class ListComponent extends Component{
    render(){
        return <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    }
}

export default BootstrapDemo