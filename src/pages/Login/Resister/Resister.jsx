import { Link, Navigate } from 'react-router-dom';
import resisterImg from '../../../assets/others/authentication2.png'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../../Proveider/AuthProveider';

const Resister = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                console.log("user resister successfull");
                updateUserProfile(result.user, data.name, data.photo)
                    .then(() => {
                        alert('update User Profile')
                    }).catch((err) => {
                        alert('update User Profile', err.message)
                    });
                <Navigate to='/' />
            }).catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200 pt-4">
            <div className="hero-content justify-between items-center flex-col md:flex-row w-full">
                <div className="text-center w-full lg:text-left">
                    <img src={resisterImg} alt="" />
                </div>
                <div className="flex justify-center w-full">
                    <div className="card w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Enter your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-400'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Enter your photo Url" className="input input-bordered" />
                                {errors.photo && <span className='text-red-400'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="Enter your Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-400'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="Enter your Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-400'>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-400'>Password must be 6 caracter</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-400'>Password must be 20 under caracter</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-400'>password will be one UpperCase, one LowerCase,one Digit,one scpecitin carecter</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-yellow-700 text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className='pb-4'>
                            <p className='text-yellow-700 text-center'><small>Already registered?</small> <Link to="/login">Go to log in</Link></p>
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

export default Resister;