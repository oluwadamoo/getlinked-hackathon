import React from 'react'
import RegisterButton from '../../components/RegisterButton'

function ContactUs() {
    return (
        <div className='px-[8.47%] overflow-x-hidden overflow-y-scroll min-h-[calc(100vh-100px)] z-[10] relative  pt-[140px]'>
            <div className='flex text-[#fff] text-[16px] justify-between'>
                <div>
                    <h3 className='clash-text text-[32px] font-[700] text-[#D434FE]'>Get in touch</h3>

                    <p className='my-[17px]'>Contact Information</p>
                    <p className='mb-[17px]'>27,Alara Street
                        Yaba 100012
                        Lagos State</p>
                    <p className='mb-[17px]'>
                        Call Us : 07067981819
                    </p>

                    <p className='mb-[17px]'>
                        we are open from Monday-Friday
                        08:00am - 05:00pm
                    </p>

                    <p className='text-[16px] text-[#D434FE] mb-[14px]'>Share on</p>
                    <div className='flex items-center'>

                        {['/assets/images/instagram.svg', '/assets/images/x.com.svg', '/assets/images/facebook.svg', '/assets/images/linkedin.svg'].map((social, index) => (
                            <a href='/#' key={index} className='mr-[16px]'>
                                <img alt='social' src={social} />
                            </a>
                        ))}

                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={(e) => e.preventDefault()} className='form z-[10] relative py-[75px] px-[92px] flex flex-col sm:w-[617px]'>
                    <h6 className='text-[#D434FE] font-[600] text-[20px] clash-text'>Questions or need assistance?</h6>
                    <h6 className='text-[#D434FE] font-[600] text-[20px] clash-text'>Let us know  about it!</h6>


                    <input className='mt-[34px] outline-[#fff] w-[100%] h-[47px]' placeholder='First Name' required />
                    <input className='mt-[42px] outline-[#fff] w-[100%] h-[47px]' placeholder='Mail' required type='email' />
                    <textarea
                        placeholder='Message'
                        className='h-[119px] w-[100%] mt-[42px] outline-[#fff] pt-[10px]'
                    />

                    <RegisterButton
                        title='Submit'
                        className='self-center mt-[31px]'
                        onClick={() => console.log("Submit")}
                    />
                </form>
            </div>

        </div>
    )
}

export default ContactUs