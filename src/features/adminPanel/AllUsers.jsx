import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";
export default function AllUsers() {
  const allusers = useStore((state) => state.allUsers);
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
console.log(allusers)
  const UsersList = () => {
    if (allusers) {
      return allusers.map((user) => {
        return (
          <div key={user._id}>
            <h4>{user.firstName}</h4>
            <h4>{user.email}</h4>
            <h4>{user.birthDate}</h4>
            <button onClick={() => handledeleteUser({ id: user._id })}>
              delete
            </button>
            <Link to={`/dass-coffee/Users/${user._id}/profile`}>
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
