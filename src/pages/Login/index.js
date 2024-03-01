import React from 'react';
import { Button, Col, Form, Row, Container, Navbar } from 'react-bootstrap'
import authService from "../../services/auth.service";
import './index.css'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            password: "",
        }
    }

    handleLogin = async () => {
        let data = {
            name: this.state.name,
            password: this.state.password
        }

        let res = await authService.authenticate(data)
        console.log("res", res)
        authService.setLoggedUser(res.data)
        alert(JSON.stringify(res.data))
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.handleLogin();
    };

    render() {
        return (
            <>
                <div className='page-nav-container'>
                    <Navbar.Brand href="/">Destino Lúdico</Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
                </div>
                <div className='page-container'>
                    <Form onSubmit={this.handleSubmit} className='page-form'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01" className='page-form-group'>
                                <Form.Label>Usuário</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Digite seu usuário"
                                    defaultValue={this.state.name}
                                    onChange={e => this.setState({ name: e.target.value })}
                                    className='form-control'
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01" className='page-form-group'>
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Digite sua senha"
                                    defaultValue={this.state.password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    className='form-control'
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button type="submit">Entrar</Button>
                    </Form>
                </div>
            </>
        )
    }

}

export default LoginPage;