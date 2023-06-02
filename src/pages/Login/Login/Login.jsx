import { Link, useLocation, useNavigate } from 'react-router-dom';
import resisterImg from "../../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Proveider/AuthProveider";

const Login = () => {
    const { login } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleForm = (e) => {
        e.preventDefault()

        const form = e.target
        const capcha = form.capcha.value

        if (validateCaptcha(capcha)) {
            const email = form.email.value
            const password = form.password.value

            login(email, password)
                .then(res => {
                    alert("User login sussecfull")
                    console.log(res.user);
                    navigate(from)
                })
                .catch(err => {
                    alert("User no login ", err.message)
                    console.log(err);
                })
        } else {
            alert("Captcha does't Matched");
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200 pt-4">
            <div className="hero-content justify-between items-center flex-col md:flex-row w-full">
                <div className="text-center w-full lg:text-left">
                    <img src={resisterImg} alt="" />
                </div>
                <div className="flex justify-center w-full">
                    <div className="card w-full">
                        <form className="card-body" onSubmit={handleForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <label className="input input-bordered h-fit p-2"><LoadCanvasTemplate className="bg-transparent" /></label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="text" name="capcha" placeholder="Type the capcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-yellow-700 text-white" type="submit" value="Sign in" />
                            </div>
                        </form>
                        <div className='pb-4'>
                            <p className='text-yellow-700 text-center'><small>New here? </small> <Link to="/resister">Create a New Account</Link></p>
                            <div className="form-control text-center">
                                <h6 className='font-semibold mb-4'>Or sing up with</h6>
                                <div className="flex justify-center">
                                    <button className='btn mx-2'>F</button>
                                    <button className='btn mx-2'>G</button>
                                    <button className='btn mx-2'>H</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;