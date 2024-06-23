/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";


const ContactUs = () => {
    useEffect(() => {
        document.title = 'Contact - Solo Properties';
    }, []);

    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-36 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-between hidden lg:block">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="dark:text-gray-600">We are just one step away</div>
                </div>
                <img src="https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37948.jpg?t=st=1718262836~exp=1718266436~hmac=7488e083037a53e548e76eff33e083a7d84b2be4b712f9bf144a21e8d6532106&w=1060" alt="" className="rounded-lg h-52 md:h-64" />
            </div>
            <form noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <label className="input input-bordered flex items-center gap-2">
                        {/* Name */}
                        <input type="text" className="grow" placeholder="Name" />
                    </label>
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <label className="input input-bordered flex items-center gap-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg> */}
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <button type="submit" className="w-full btn p-3 text-sm font-bold tracking-wide uppercase rounde">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;