import axios from "axios";
import { useEffect, useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  //   const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchUsers()
  }, []);

  const fetchUsers = (search = '') => {
    axios.get(`http://localhost:3000/users?search=${search}`)
    .then(res=> setUsers(res.data))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const searchValue = e.target.search.value;
    console.log(searchValue)
    fetchUsers(searchValue)
  }

  return (
    <div>
      <div className="overflow-x-auto text-black">
        <form onSubmit={handleSearch} className="my-4 flex justify-center gap-4">
    
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search by user name"
              className="border md:w-1/2 px-4 py-2 rounded-lg"
            />
            <button>Search</button>

        </form>
        <table className="table table-xs">
          <thead>
            <tr className="bg-sky-500 text-white">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Status</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phoneNumber}</td>
                <td>{user?.status}</td>
                <td>{user?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
