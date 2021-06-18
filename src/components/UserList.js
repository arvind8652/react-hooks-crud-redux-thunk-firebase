import { Fragment, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";
import { removeFEUser, defaultData, fetchRecord } from "../redux/action";

const UserList = () => {
  const [us, setUs] = useState({ userss: [], loadings: true });

  const users = useSelector((state) => state.frontEnd.users);
  const loading = useSelector((state) => state.frontEnd.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecord());
    console.log("test");
    console.log(users);
  }, []);
  useEffect(() => {
    if (loading === false) {
      setUs({ userss: users, loadings: loading });
    }
  }, [loading]);

  return (
    <ListGroup style={{ marginTop: "20px" }}>
      {us.userss.length > 0 ? (
        <Fragment>
          {us.userss.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <div style={{ marginLeft: "auto" }}>
                <ButtonGroup>
                  <Link to={`/edit/${user.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <Button
                    onClick={() => dispatch(removeFEUser(user.collection_id))}
                    color="danger"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            </ListGroupItem>
          ))}
        </Fragment>
      ) : (
        <h4 className="text-center">No record</h4>
      )}
    </ListGroup>
  );
};
export default memo(UserList);
