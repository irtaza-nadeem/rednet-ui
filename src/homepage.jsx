import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Form, FormControl, Jumbotron, Nav, Navbar, NavDropdown} from "react-bootstrap";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return <div>
            <Navbar className="text-white rounded" bg="dark" expand="lg" >
                <div className="font-weight-bold"><Navbar.Brand className="text-white" href="#home">RED NET</Navbar.Brand></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-white" href="/">Home</Nav.Link>
                        <Nav.Link className="text-white" href="/">Donors</Nav.Link>
                        <Nav.Link className="text-white" href="/create">Create Donor</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search donor" className="mr-sm-4" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div>
            </div>
            <br/><br/>
            <div className="container">
                <div><h1 className="text-center">Listing all articles</h1></div>
                <br/>
                <div>
                    <Jumbotron>
                        <h1>Name: Irtaza Nadeem</h1>
                        <p>Phone No: 0321-7276885</p>
                        <p>Gender: Male</p>
                        <p>Blood Group: O+</p>
                        <p>
                            <Button variant="primary">Edit</Button><span>&nbsp;&nbsp;</span>
                            <Button variant="danger">Delete</Button>
                        </p>
                    </Jumbotron>

                    {/*for each loop lgana ha */}
                </div>
            </div>
            <br/>
            <div>
                <NavDropdown.Divider />
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);