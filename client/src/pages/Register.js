import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import styles from './styles/Register';
import Swal from 'sweetalert2'
import Container from "react-bootstrap/Container";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const username = this.state.value;
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(username) || username.toLocaleLowerCase().includes("admin")) {
            Swal.fire({
                title: "Username Not Allowed!",
                icon: "warning",
                text: "Username should not include special characters or resemble with ADMIN",
                confirmButtonColor: "orange"
            });
            return;
        }
        axios.post("http://localhost:5000/register", { username: username }, { withCredentials: true }).then((res) => {
            if (res.data === 'success') {
                Swal.fire({
                    title: "Succesfully registered!",
                    icon: "success",
                    text: "Good luck now :)",
                    confirmButtonColor: "green",
                    confirmButtonText: 'Lessgoo'
                }).then(() => {
                    window.location.href = '/play';
                });
            }
            else if (res.data === 'user already exists') {
                Swal.fire({
                    title: "Username Already Exists!",
                    icon: "warning",
                    text: "Your Username was taken by someone else, please use a different one.",
                    confirmButtonColor: "orange"
                });
                return;
            }
        })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container type="fluid" className="username">
                <h3 className="head">
                    Just enter a username and you're good to go!
                </h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter Username" value={this.state.value} onChange={this.handleChange} required />
                        <Form.Text className="text-muted">
                            The Username shouldn't contain any special characters or the word 'admin'.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Register