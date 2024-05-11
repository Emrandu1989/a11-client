import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./../../assets/Animation - 1715313922697.json";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {signIn, signInWithGoogle,signInWithGitHub} = useContext(AuthContext);
    const navigate = useNavigate()
 
    const location = useLocation()
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
      };
      const { View } = useLottie(options);


      const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
       
        const email = form.email.value;
        
        const password = form.password.value;
        const user = { email, password};
        console.log(user)
        signIn(email,password)
        .then(result=>{
           const loggedUser = result.user;
           console.log(loggedUser)
           Swal.fire({
              position: "center",
              icon: "success",
              title: "Login Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            setTimeout(()=>{
              navigate(location?.state ? location.state : '/')
          }, 2000)

        })
        .catch(error=>{
           console.log(error)
           Swal.fire({
              position: "top-end",
              icon: "success",
              title: error,
              showConfirmButton: false,
              timer: 1500
            });
        })
     }
 
       const handleGoogleLogin = () =>{
        signInWithGoogle()
       
        setTimeout(()=>{
          navigate(location?.state ? location.state : '/')
      }, 2000)
       }
         const handleGitHubLogin = () =>{
            signInWithGitHub()
           
            setTimeout(()=>{
              navigate(location?.state ? location.state : '/')
          }, 2000)
         }
    return (
        <>
             <Helmet>
        <title> Epicurean Arena | Login </title>
      </Helmet>

             <div className="hero min-h-screen bg-base-200 flex flex-col">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-1/2 lg:ml-24  mb-12">
          
         <span className="font-bold text-6xl text-gray-400">welcome</span> <span>{View}</span>
    </div>
    <div className="card shrink-0 w-1/2  shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
         <h1 className="text-center font-bold text-4xl text-gray-400">Please Login</h1>
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
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center my-2">New to this site Please <Link to='/register' className="btn-link">Register</Link> </p>
    </div>
  </div>
         <div>
              <h2 className="font-bold text-3xl">Login with google and github</h2>
              <div className="space-x-5 my-2 flex justify-center items-center">
                   <button onClick={handleGoogleLogin} className="btn btn-primary">Google</button>
                   <button onClick={handleGitHubLogin}  className="btn btn-outline">GitHub</button>
              </div>
         </div>
</div>
         
        </>
    );
};

export default Login;