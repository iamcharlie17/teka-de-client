import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosCommon } from "../../../../hooks/useAxiosCommon";
import toast from "react-hot-toast";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [control, setControl] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  //   const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchUsers();
  }, [control]);

  const fetchUsers = (search = "") => {
    axios
      .get(`http://localhost:3000/users?search=${search}`)
      .then((res) => setUsers(res.data));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    fetchUsers(searchValue);
  };

  const handleStatus = async (value) => {
    await axiosCommon
      .put("/update-status", value)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Status updated!");
          setControl(!control);
        }
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };

  const handleRole = async (value) => {
    // console.log(value);
    try {
      const { data } = await axiosCommon.put("/update-role", value);
      if (data.modifiedCount > 0) {
        toast.success("Role Update Success!!");
        setControl(!control);
      }
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto text-black">
        <div className="flex justify-between items-center mx-4 my-2">
          <div>
            <Link to={"/admin/dashboard"}>
              <button>Back</button>
            </Link>
          </div>
          <form
            onSubmit={handleSearch}
            className="my-4 flex justify-center gap-4 relative"
          >
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search by user name"
              className="border w-full px-4 py-2 rounded-lg"
            />
            <button>
              <FaSearch size={25} />
            </button>
          </form>
        </div>
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
            {users
              .filter((u) => u?.email !== user?.email)
              .map((u, idx) => (
                <tr key={u._id}>
                  <th>{idx + 1}</th>
                  <td>{u?.name}</td>
                  <td>{u?.email}</td>
                  <td>{u?.phoneNumber}</td>
                  <td>
                    <div className={` dropdown-top dropdown dropdown-end`}>
                      <div tabIndex={0} role="button" className=" m-1">
                        {u?.status}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
                      >
                        <li
                          onClick={() =>
                            handleStatus({ status: "active", id: u?._id })
                          }
                          className="shadow-lg"
                        >
                          <a>Active</a>
                        </li>
                        <li
                          onClick={() =>
                            handleStatus({ status: "block", id: u?._id })
                          }
                          className="shadow-lg"
                        >
                          <a>Block</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div className={` dropdown-top dropdown dropdown-end`}>
                      <div tabIndex={0} role="button" className=" m-1">
                        {u?.role}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
                      >
                        <li
                          onClick={() =>
                            handleRole({ role: "user", id: u?._id })
                          }
                          className="shadow-lg"
                        >
                          <a>User</a>
                        </li>
                        <li
                          onClick={() =>
                            handleRole({ role: "agent", id: u?._id })
                          }
                          className="shadow-lg"
                        >
                          <a>Agent</a>
                        </li>
                        <li
                          onClick={() =>
                            handleRole({ role: "admin", id: u?._id })
                          }
                          className="shadow-lg"
                        >
                          <a>Admin</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
