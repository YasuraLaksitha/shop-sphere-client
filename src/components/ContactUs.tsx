import {FaEnvelope, FaPhone} from "react-icons/fa";
import {FaMapLocation} from "react-icons/fa6";

export default function ContactUs() {
    return (
        <div className={'flex my-10 flex-col justify-center items-center min-h-screen bg-center bg-cover mt-5'}>
            <div className={'bg-white p-10 rounded-lg mt-10 shadow-2xl w-full max-w-2xl'}>
                <h1 className={'text-5xl font-bold text-slate-800 text-center'}>
                    Contact Us
                </h1>
                <p className={'text-lg text-slate-800 mt-5 text-center'}>
                    We would love to here from you! fill the from bellow and tell us what you think
                </p>

                <form className={'space-y-5 mt-10'}>
                    <div className={'flex flex-col my-3'}>
                        <label
                            className={'block py-3 font-semibold text-slate-800'}
                            htmlFor="name">
                            Name
                        </label>
                        <input
                            placeholder={'Enter your name'}
                            className={'border-2 border-slate-300 rounded-lg px-3 py-2'}
                            type="text" id={'name'}/>
                    </div>

                    <div className={'flex flex-col my-3'}>
                        <label
                            className={'block py-3 font-semibold text-slate-800'}
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            placeholder={'Enter your email'}
                            className={'border-2 border-slate-300 rounded-lg px-3 py-2'}
                            type="email" id={'email'}/>
                    </div>

                    <div className={'flex flex-col my-3'}>
                        <label
                            className={'block py-3 font-semibold text-slate-800'}
                            htmlFor="name">
                            Message
                        </label>
                        <textarea
                            className={'border-2 border-slate-300 rounded-lg px-3 py-2'}
                            rows={4} id={'name'}/>
                    </div>

                    <button className={'mt-3 bg-blue-600 text-white px-5 py-3 w-full rounded-lg cursor-pointer' +
                        'transition-all duration-150 hover:bg-blue-500'}
                            type={'submit'}>
                        Send Message
                    </button>
                </form>

                <div className={'flex flex-col justify-center items-center mt-10'}>
                    <span className={'text-2xl text-slate-800 font-bold'}>
                        Contact Information
                    </span>
                    <span className={'block flex text-lg items-center text-slate-800 mt-5 '}>
                        <FaPhone className={'text-blue-600 mr-2'} size={20}/>
                        +39 75 663 112
                    </span>

                    <span className={'block flex text-lg justify-center items-center text-slate-800 mt-5 '}>
                        <FaEnvelope className={'text-blue-600 mr-2'} size={20}/>
                        shopsphere@gmail.com
                    </span>

                    <span className={'block flex text-lg justify-center items-center text-slate-800 mt-5 '}>
                        <FaMapLocation className={'text-blue-600 mr-2'} size={20}/>
                        13456 Via Roma, 10010, Italy
                    </span>

                </div>
            </div>
        </div>
    );
}

