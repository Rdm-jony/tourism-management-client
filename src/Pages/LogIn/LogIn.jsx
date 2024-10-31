import Lottie from "lottie-react";
import registerLottie from '../../../public/registerLottie.json'
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const LogIn = () => {
    const [firebaseError, setFirebaseError] = useState('')
    const { signInUser, signInGoogle } = useContext(AuthContext)
    const handleOnSubmit = (e) => {
        setFirebaseError('')
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully loged in!',
                    icon: 'success',
                    confirmButtonText: 'continue'
                })
                form.reset()
            })
            .catch(error => setFirebaseError(error.message))

    }

    const handleGoogleSign = () => {
        signInGoogle()
            .then(result => Swal.fire({
                title: 'Success!',
                text: 'Successfully loged in!',
                icon: 'success',
                confirmButtonText: 'continue'
            }))
            .catch(error => setFirebaseError(error.message))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Lo<span>
                        <Typewriter
                            words={["gin now!"]}

                        />
                    </span> </h1>
                    <Lottie animationData={registerLottie} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleOnSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            firebaseError && <p className="text-xs text-red-500">{firebaseError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-secondary text-neutral-50">Login</button>
                        </div>
                        <p className="text-xs">Do not have an account <Link to='/register'><span className="font-bold text-secondary cursor-pointer">Register</span></Link> </p>

                        <div className="divider">OR</div>
                        <div className="flex justify-center gap-5">
                            <div className="avatar placeholder cursor-pointer" onClick={handleGoogleSign} >
                                <div className="bg-secondary text-neutral-content w-12 rounded-full">
                                    <FaGoogle></FaGoogle>
                                </div>
                            </div>
                            <div className="avatar placeholder cursor-pointer">
                                <div className="bg-secondary text-neutral-content w-12 rounded-full">
                                    <FaGithub></FaGithub>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;