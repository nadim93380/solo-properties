import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvidor";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'



const Login = () => {

    useEffect(() => {
        document.title = 'Login - Solo Properties';
    }, []);

    const location = useLocation()
    const navigate = useNavigate();
    const { loginUser,loginWithGoogle } = useContext(AuthContext)



    const to = location.state
    // Handle Email Pass Sign In
    const handleSignIn = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        loginUser(email, password)
            .then(() => {
                toast("Login Successfully")
                setTimeout(() => {
                    navigate(`${to ? to : "/"}`)
                }, 3000)
            })
            .catch(err => {
                toast.error("Something went wrong")
                console.log(err.message)
            })
        e.target.reset()

    }

    // Handle Google Sign In
    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(() => {
                toast("Login Successfully")
                setTimeout(() => {
                    navigate(`${to ? to : "/"}`)
                }, 3000)
            })
            .catch(() => {
            toast.error("Something Went Wrong")
        })
    }

    return (
        <div className="py-20">

            <div className="flex flex-col justify-center h-[50vh] items-center">
                <h3 className="text-4xl font-bold mb-6">Login Now</h3>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" name="email" className="grow" placeholder="Email" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="text" name="password" className="grow" placeholder="Password" required />
                    </label>
                    <button className="btn bg-green-500 w-full">Login</button>
                </form>
                <div>
                    <div className="flex w-full mt-3">
                        <div className="grid h-20 flex-grow card rounded-box place-items-center">
                            <button className="btn" onClick={handleGoogleSignIn}>GOOGLE</button>
                        </div>
                        <div className="divider divider-horizontal">OR</div>
                        <div className="grid h-20 flex-grow card rounded-box place-items-center">
                            <button className="btn">GITHUB</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-10">
                    <p>New Here ? </p>
                    <Link to='/register' className="text-blue-600">Register</Link>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;