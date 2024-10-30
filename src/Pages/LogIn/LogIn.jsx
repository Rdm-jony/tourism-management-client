import Lottie from "lottie-react";
import registerLottie from '../../../public/registerLottie.json'
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
const LogIn = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

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
                        <div className="form-control mt-6">
                            <button className="btn bg-secondary text-neutral-50">Login</button>
                        </div>
                        <p className="text-xs">Do not have an account <Link to='/register'><span className="font-bold text-secondary cursor-pointer">Register</span></Link> </p>

                        <div className="divider">OR</div>
                        <div className="flex justify-center gap-5">
                            <div className="avatar placeholder">
                                <div className="bg-secondary text-neutral-content w-12 rounded-full">
                                    <FaGoogle></FaGoogle>
                                </div>
                            </div>
                            <div className="avatar placeholder">
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