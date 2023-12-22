import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
const Footers = () => {
    return (
        <Footer bgDark>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <Footer.Title title="Tours and Guide Agency" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">
                                <div className="avatar mt-4">
                                    <div className="w-16 rounded-full">
                                        <img src="/img.jpg" />
                                    </div>
                                </div>
                            </Footer.Link>
                            <Footer.Link href="#">Address</Footer.Link>
                            <Footer.Link href="#">Dhaka Bangladesh</Footer.Link>

                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Discord Server</Footer.Link>
                            <Footer.Link href="https://twitter.com/">Twitter</Footer.Link>
                            <Footer.Link href="https://www.facebook.com/">Facebook</Footer.Link>
                            <Footer.Link href="#">Contact Us</Footer.Link>
                            <Footer.Link href="#">01948550809</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="download" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">iOS</Footer.Link>
                            <Footer.Link href="#">Android</Footer.Link>
                            <Footer.Link href="#">Windows</Footer.Link>
                            <Footer.Link href="#">MacOS</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="copyright" year={2022} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="https://www.facebook.com/" icon={BsFacebook} />
                        <Footer.Icon href="https://www.instagram.com/" icon={BsInstagram} />
                        <Footer.Icon href="https://twitter.com/" icon={BsTwitter} />
                        <Footer.Icon href="https://github.com/" icon={BsGithub} />
                        <Footer.Icon href="https://dribbble.com/" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default Footers;