import { useContext } from "react";
import { AuthContext } from './../../../provider/AuthProvider';
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';



const Register = () => {
    const { createUser } = useContext(AuthContext)


    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        // console.log(user)

        // create user
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleRegister} className="flex max-w-md flex-col gap-4 w-full">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name2" value="Your name" />
                    </div>
                    <TextInput name="name" id="name2" type="text" placeholder="inter your name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput name="email" id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput name="password" id="password2" type="password" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                    </div>
                    <TextInput name="repeat" id="repeat-password" type="password" required shadow />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            terms and conditions
                        </Link>
                    </Label>
                </div>
                <Button type="submit">Register new account</Button>
            </form>
        </div>
    );
};

export default Register;