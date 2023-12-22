import { useContext, useState } from "react";
import { AuthContext } from './../../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from 'flowbite-react';
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);

    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const repeat = form.repeat.value;
        console.log(email, password, repeat)
        // console.log(user)


        // reset error
        setError('')
        setSuccess('')

        // validation
        if (password !== repeat) {
            Swal.fire({
                title: 'Error!',
                text: 'Your password did not match',
                icon: 'error',
                confirmButtonText: 'ok'
            })
            setError('Your password did not match')
            return;
        }

        // create user
        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
                setSuccess('User logged in Successfully')
                Swal.fire({
                    title: 'Success!',
                    text: 'Wow User logged in Successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                // setUser(loggedUser)
                // navigate(location?.state ? location.state : '/')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubSign = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Helmet>
                <title>Tours and Guide Agency | Login</title>
            </Helmet>
            <div className="flex justify-center">
                <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4 w-full">
                    <div>
                        <div className="mb-2 block w-full">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput name="email" id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <div className="relative">
                            <TextInput name="password" id="password2" type={show ? 'text' : 'password'} placeholder="password" required shadow />

                            <span className="mt-2 absolute top-1 right-2"
                                onClick={() => setShow(!show)}
                            >
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> :
                                        <FaEye></FaEye>
                                }
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="Repeat password" />
                        </div>
                        <div className="relative">
                            <TextInput name="repeat" id="repeat-password" type={show ? 'text' : 'password'} placeholder="password" required shadow />

                            <span className="mt-2 absolute top-1 right-2"
                                onClick={() => setShow(!show)}
                            >
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> :
                                        <FaEye></FaEye>
                                }
                            </span>
                        </div>
                    </div>
                    <Button type="submit">Login Now</Button>
                </form>

            </div>
            <div className="text-center my-5">
                <button onClick={handleGoogleSign} className="btn btn-outline mr-8 w-52">Google</button>
                <button onClick={handleGithubSign} className="btn btn-outline w-52">Github</button>
            </div>
            <p className='my-4 text-center'>New to Create Account<Link className='text-orange-400' to="/register"> Register</Link></p>
            <div className="text-center mb-5">
                {
                    error && <p className="text-red-800">{error}</p>
                }
                {
                    success && <p className="text-green-800">{success}</p>
                }
            </div>

        </>
    );
};

export default Login;