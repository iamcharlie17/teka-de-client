
import { Link, useNavigate } from "react-router-dom";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import toast from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const pin = form.pin.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;

        const userInfo = {
            name,
            pin,
            phoneNumber,
            email,
            status: 'pending',
            role: 'user',
            balance: 0
        } 
        try {
            const {data} = await axiosCommon.post('/users', userInfo)
            if(data.insertedId){
                toast.success('User created!')
                navigate('/')
            }
        } catch (error) {
            toast.error(`${error.response.data.message}`)
        }
    }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="md:w-1/3 w-full px-2">
        <div>
          <h1 className="text-5xl font-bold text-center">
            TEKA <span className="text-amber-500">DE</span>
          </h1>
        </div>
        <div className="text-center md:my-8 my-4">
          <h1 className="text-3xl uppercase">Register</h1>
        </div>
        <div className="border p-8 w-full">
          <form onSubmit={handleSubmit} className="space-y-4"> 
            <div>
              <label htmlFor="name">Enter Name</label> <br />
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="border-2 py-2 px-4 w-full"
              />
            </div>
            <div>
              <label htmlFor="pin">Enter 5 Digits Pin Number</label>
              <br />
              <input
                required
                type="number"
                name="pin"
                id="pin"
                placeholder="Enter Pin"
                className="border-2 py-2 px-4 w-full"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Enter Phone Number</label> <br />
              <input
                required
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                className="border-2 py-2 px-4 w-full"
              />
            </div>
            <div>
              <label htmlFor="email">Enter Email</label> <br />
              <input
                required
                type="text"
                name="email"
                id="email"
                placeholder="Email"
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
            <Link to={"/"}>
              <h1 className="text-end">Login</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
