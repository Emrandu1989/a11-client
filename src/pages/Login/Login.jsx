import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./../../assets/Animation - 1715313922697.json";

const Login = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
      };
      const { View } = useLottie(options);

    return (
        <>


             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left ml-24">
          
         <span className="font-bold text-6xl text-gray-400">welcome</span> <span>{View}</span>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
         <h1 className="text-center font-bold text-3xl text-gray-400">Please Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;