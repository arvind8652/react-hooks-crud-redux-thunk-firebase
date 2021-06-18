import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Label, Input, FormGroup } from "reactstrap";
import { editFEUser } from "../redux/action";
const EditUser = (props) => {
  const [selectedName, setSelectedName] = useState({
    id: "",
    name: "",
    collection_id: ""
  });
  const dispatch = useDispatch();
  const users = useSelector((state) => state.frontEnd.users);
  const currentId = props.match.params.id;

  const nameChangeHandler = (event) => {
    setSelectedName({ ...selectedName, name: event.target.value });
  };
  const history = useHistory();
  const onSubmitHandler = () => {
    dispatch(editFEUser(selectedName));
    history.push("/");
  };

  useEffect(() => {
    const userDetail = users.find((user) => user.id === currentId);
    setSelectedName(userDetail);
  }, [currentId, users]);
  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          onChange={nameChangeHandler}
          value={selectedName.name}
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

export default EditUser;
