import Lottie from "lottie-react";
import registerLottie from '../../../public/registerLottie.json'
import { useForm } from "react-hook-form";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
    const [firebaseError, setFirebaseError] = useState('')
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        setFirebaseError('')
        createUser(data?.email, data?.password)
            .then(result => {
                updateUser({ displayName: data?.name, photoURL: data?.photoURL })
                    .then(result => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Successfully create user!',
                            icon: 'success',
                            confirmButtonText: 'ok'
                        })
                        reset()
                    })
                    .catch(error => setFirebaseError(error.message))
            })
            .catch(error => setFirebaseError(error.message))
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Re<span>
                        <Typewriter
                            words={["gister now!"]}

                        />
                    </span> </h1>
                    <Lottie animationData={registerLottie} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="User Name" className="input input-bordered" {...register("name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"} />
                            {
                                errors.name?.type === 'required' && <p className="text-xs text-red-500">First name is required</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"} />
                            {
                                errors.email?.type === 'required' && <p className="text-xs text-red-500">Email is required</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"  {...register("password", { required: true, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ } })}
                                aria-invalid={errors.password ? "true" : "false"} />
                            {
                                errors.password?.type === 'required' && <p className="text-xs text-red-500">Password is required</p>
                            }
                            {
                                errors.password?.type === 'pattern' && <p className="text-xs text-red-500">password contains at least one uppercase letter, one lowercase letter, and has a minimum length of 6 characters.</p>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" {...register("photoURL", { required: true })}
                                aria-invalid={errors.photoURL ? "true" : "false"} />
                            {
                                errors.photoURL?.type === 'required' && <p className="text-xs text-red-500">Photo URL is required</p>
                            }
                        </div>
                        {
                            firebaseError && <p className="text-xs text-red-500">{firebaseError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-secondary text-neutral-50">Register</button>
                        </div>

                        <p className="text-xs">Already  have an account? <Link to='/logIn'><span className="font-bold text-secondary cursor-pointer">Log In</span></Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;