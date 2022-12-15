import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLoginMutation } from "../services/packageApi";
import { useNavigate } from "react-router-dom";
const initialState = {
  userName: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const navigate=useNavigate();
  const { userName, password } = formValue;
  const [login, { data,isSuccess }] = useLoginMutation();
  if (isSuccess) {
    localStorage.setItem("user",JSON.stringify(data.accessToken))
    navigate('/admin/dashboard')
   }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      login(formValue);
    }

  };
  console.log(data);
  console.log(formValue);
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  console.log(formValue);
  return (
    <Container style={{ width: "20rem" }} className="mt-5">
      <h1 className="text-center">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="username"
            value={userName}
            name="userName"
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
          type="password"
          placeholder="password"
          value={password}
          name="userName"
          onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
