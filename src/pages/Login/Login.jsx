import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="md:w-1/3 w-full px-2">
        <div>
          <h1 className="text-5xl font-bold text-center">
            TEKA <span className="text-amber-500">DE</span>
          </h1>
        </div>
        <div className="text-center md:my-8 my-4">
          <h1 className="text-3xl uppercase">Log In</h1>
        </div>
        <div className="border p-8 w-full">
          <form className="space-y-4">
            <div>
              <label htmlFor="emailOrPhone">Email or Phone Number</label> <br />
              <input
                required
                type="text"
                name="emailOrPhone"
                id="emailOrPhone"
                placeholder="Email/Number"
                className="border-2 py-2 px-4 w-full"
              />
            </div>
            <div>
              <label htmlFor="pin">Enter Pin</label>
              <br />
              <input
                type="number"
                name="pin"
                id="pin"
                placeholder="Enter Pin"
                className="border-2 py-2 px-4 w-full"
              />
            </div>
            <div>
              <button className="text-center w-full bg-amber-500 text-white uppercase font-semibold my-4 py-2">
                Next
              </button>
            </div>
          </form>
          <div>
            <Link to={"/register"}>
              <h1 className="text-end">Register</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
