import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";
export default function AllUsers() {
  const Users = useStore((state) => state.allUsers);
  const getAllUsers = useStore((state) => state.getAllUsers);
  const deleteUser = useStore((state) => state.deleteUser);
  const [error, setError] = useState("");

  const handledeleteUser = async (deletedUserID) => {
    try {
      setError("");
      const res = await deleteUser(deletedUserID);
      console.log("deleted");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(()=>{
    getAllUsers()
  },[getAllUsers])

  const UsersList = () => {
    if (Users) {
      return Users.map((User) => {
        return (
          <div key={User._id}>
            <h4>{User.firstName}</h4>
            <h4>{User.email}</h4>
            <h4>{User.birthDate}</h4>
            <button onClick={() => handledeleteUser({ id: User._id })}>
              delete
            </button>
            <Link to={`/dass-coffee/Users/${User._id}/profile`}>
              Edit
            </Link>
          </div>
        );
      });
    }
  };
  return (
    <section>
      <h2>Store Users</h2>
      {<UsersList />}
      {error && <h3>{error}</h3>}
    </section>
  );
}
