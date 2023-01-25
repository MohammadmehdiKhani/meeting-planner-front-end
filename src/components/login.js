import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axiox from "axios";
import { Container, Card, Button, Form } from "react-bootstrap";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  let history = useHistory();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = e.currentTarget;

      if (form.checkValidity() === true) {
        const response = await axiox.post("http://localhost:5000/api/auth/login", { email, password });
        localStorage.setItem("user", JSON.stringify({ userLogin: true, token: response.data.access_token, email: email }));
        setError("");
        setEmail("");
        setPassword("");
        history.push("/")
      }

      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }

      setValidated(true);
    }
    catch (error) {
      setError(error.response.data.message);
    }
  }

  return (
    <Container>
      <div className="parent-div">
        <div className="example-div">
          <Card className="card-style">
            <h1 className="login-heading">Login</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Form className="login-form" noValidate validated={validated} onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label-text">Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback  type="invalid">Enter a valid email</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label-text">Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Form.Control.Feedback></Form.Control.Feedback>
                <Form.Control.Feedback  type="invalid">Password could not be empty</Form.Control.Feedback>
              </Form.Group>
              <Button className="login-submit-button" variant="primary" type="submit">
                Submit
              </Button>
              <Link to="/register">Create an account</Link>
            </Form>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Login;