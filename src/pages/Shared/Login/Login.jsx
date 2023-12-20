import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const repeat = form.repeat.value;
    console.log(email, password, repeat)
}

const Login = () => {
    return (
        <div className="flex justify-center mt-10">
            <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4 w-full">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" name="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput placeholder="password" id="password1" name="password" type="password" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                    </div>
                    <TextInput name="repeat" id="repeat-password" type="password" required shadow />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <input className="bg-red-700 rounded py-2" type="submit" value="Submit" />
                <Button color="success" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Login;