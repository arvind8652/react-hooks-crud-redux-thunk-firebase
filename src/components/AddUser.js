import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Label, Input, FormGroup } from "reactstrap";
import { v4 as uuid } from "uuid";
import { addFEUser } from "../redux/action";
const AddUser = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const nameChangeHandler = (event) => {
    setName({ id: uuid(), name: event.target.value });
  };

  const history = useHistory();
  const onSubmitHandler = () => {
    dispatch(addFEUser(name));
    history.push("/");
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          onChange={nameChangeHandler}
          name="name"
          placeholder="Enter Name"
        />
      </FormGroup>
      <Button type="submit" color="primary" style={{ marginTop: "5px" }}>
        Submit
      </Button>
      <Link
        to="/"
        className="btn btn-danger"
        style={{ marginLeft: "5px", marginTop: "5px" }}
      >
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
