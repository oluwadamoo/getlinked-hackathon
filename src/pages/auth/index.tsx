import React, { useState } from 'react'
import RegisterButton from '../../components/RegisterButton'

function Register() {
    const [termsIsAccepted, setTermsIsAccepted] = useState(false)
    return (
        <div className='sm:px-[8.47%] px-[10%] overflow-x-hidden overflow-y-scroll min-h-[calc(100vh-100px)] z-[10] relative  sm:pt-[140px] pt-[40px]'>
            <h6 className='block sm:hidden text-[#D434FE] font-[700] text-[15px] clash-text mb-[36px]'>Register</h6>

            <div className='flex text-[#fff] text-[16px] justify-between sm:flex-row flex-col'>
                <div>
                    <img alt='3d graphic designer' src='/assets/images/g-inside-room.svg' className='sm:ml-[-50px] sm:min-w-[650px]' />
                </div>

                {/* FORM */}
                <form onSubmit={(e) => e.preventDefault()} className='sm:form z-[10]  relative py-[75px] sm:px-[92px] flex flex-col sm:min-w-[740px] sm:w-[740px] w-[100%]'>
                    <h6 className='sm:block hidden text-[#D434FE] font-[600] text-[32px] clash-text mb-[46px]'>Register</h6>

                    <div className='flex items-center text-[14px] sm:text-[13px]'>
                        <p className='sm:text-[14px] text-[12px]'>Be part of the movement!</p>

                        <div className='ml-[7px]'>
                            <div className=' flex items-center'>
                                <img alt='girl running' src='/assets/images/girl-running.svg' />
                                <img alt='boy running' src='/assets/images/boy-running.svg' />

                            </div>
                            <img alt='track' src='/assets/images/track.svg' />

                        </div>
                    </div>
                    <h5 className='mt-[19px] sm:text-[24px] text-[20px]'>CREATE YOUR ACCOUNT</h5>

                    <div className='flex items-center mt-[33px] sm:flex-row flex-col'>
                        <label className=' max-[620px]:w-[100%] max-[620px]:mb-[18px]'>
                            Team's Name
                            <input className='w-[100%] mt-[14px] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='Enter the name of your group' required />

                        </label>

                        <label className='sm:ml-[32px] max-[620px]:w-[100%] max-[620px]:mb-[18px]'>
                            Phone

                            <input className=' mt-[14px] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='Enter your phone number' required type='tel' />

                        </label>
                    </div>

                    <div className='flex items-center sm:mt-[33px] sm:flex-row flex-col justify-between'>
                        <label className='sm:mr-[32px] max-[620px]:w-[100%] max-[620px]:mb-[18px]'>
                            Email

                            <input className=' mt-[14px] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='Enter your email address' required type='email' />

                        </label>


                        <label className='max-[620px]:w-[100%] max-[620px]:mb-[18px]'>
                            Project Topic
                            <input className=' mt-[14px] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='What is your group project topic' required />

                        </label>

                    </div>

                    <div className='flex items-center sm:mt-[33px]'>
                        <label className='sm:mr-[32px] max-[620px]:w-[100%] max-[620px]:mb-[18px]'>
                            Category

                            <select className='mt-[14px] bg-[inherit] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='Enter your email address' required >
                                <option>Select your category</option>
                            </select>

                        </label>
                        <label className='max-[620px]:ml-[20px] max-[620px]:w-[40%] max-[620px]:mb-[18px]'>
                            Group Size

                            <select className=' mt-[14px] bg-[inherit] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='Enter your email address' required >
                                <option>Select</option>
                            </select>

                        </label>



                    </div>

                    <p className='italic text-[12px] text-[#FF26B9] mt-[23px]'>Please review your registration details before submitting</p>

                    <button type='button' className='flex items-center mt-[16px]' onClick={() => setTermsIsAccepted(!termsIsAccepted)}>
                        {termsIsAccepted ? (
                            <img
                                alt="check"
                                src="/assets/images/check.svg"
                                className="mr-[6px] h-[18px] w-[18px]"
                            />
                        ) : (
                            <div
                                className={`h-[14px] w-[14px] border-[2px]
                rounded-[2px] border-[#FFF] mr-[10px]`}
                            />
                        )}
                        <p className=' sm:text-[12px] text-[10px] text-[#FFF] text-left '>I agreed with the event terms and conditions  and privacy policy</p>

                    </button>
                    <RegisterButton
                        title='Register Now'
                        className='self-center mt-[31px] w-full'
                        onClick={() => console.log("Submit")}
                    />
                </form>
            </div>

        </div>
    )
}

export default Register