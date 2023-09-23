import React, { FormEvent, useState } from 'react'
import RegisterButton from '../../components/RegisterButton'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Slide } from 'react-awesome-reveal'

function ContactUs() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [first_name, setFirstName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await axios.post('contact-form', {
                email,
                phone_number,
                first_name,
                message
            })

            toast.success("Message sent successfully!")
            setIsSubmitting(false)

            setEmail('')
            setPhoneNumber('')
            setFirstName('')
            setMessage('')
        } catch (error) {
            setIsSubmitting(false)
            toast.error('An Error Occurred\nTry again')
        }
    }
    return (
        <div className='px-[8.47%] overflow-x-hidden overflow-y-scroll min-h-[calc(100vh-100px)] z-[10] relative  sm:py-[140px] py-[100px] sm:pb-[200px]'>
            <div className='flex text-[#fff] text-[16px] justify-between'>
                <Slide direction='down'>
                    <div className='max-[620px]:hidden'>
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
                </Slide>

                {/* FORM */}
                <form onSubmit={onSubmit} className='form z-[10] relative sm:py-[75px] sm:px-[92px] flex flex-col sm:w-[617px] w-[100%]'>
                    <h6 className='text-[#D434FE] font-[600] text-[20px] clash-text'>Questions or need assistance?</h6>
                    <h6 className='text-[#D434FE] font-[600] text-[20px] clash-text'>Let us know  about it!</h6>
                    <p className='sm:hidden mt-[24px] text-[#fff] text-[12px]'>Email us below to any question related
                        to our event</p>

                    <input
                        value={first_name}
                        minLength={3}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='mt-[34px] outline-[#fff] w-[100%] h-[47px]' placeholder="First Name" required
                        type='text'
                    />

                    <input
                        minLength={11}
                        maxLength={11}
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='mt-[42px] outline-[#fff] w-[100%] h-[47px]' placeholder="Phone Number" required type='tel' />

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='mt-[42px] outline-[#fff] w-[100%] h-[47px]' placeholder="Email" required type='email' />

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Message'
                        className='h-[119px] w-[100%] mt-[42px] outline-[#fff] pt-[10px]'
                    />

                    <RegisterButton
                        title={isSubmitting ? 'Please wait' : 'Submit'}
                        className={`self-center mt-[31px] ${isSubmitting ? 'btn-disabled' : ''}`}
                        onClick={() => console.log("")}
                    />

                    <div className='sm:hidden flex flex-col items-center mt-[41px]'>
                        <p className='text-[16px] text-[#D434FE] mb-[14px]'>Share on</p>
                        <div className='flex items-center'>

                            {['/assets/images/instagram.svg', '/assets/images/x.com.svg', '/assets/images/facebook.svg', '/assets/images/linkedin.svg'].map((social, index) => (
                                <a href='/#' key={index} className='mr-[16px]'>
                                    <img alt='social' src={social} />
                                </a>
                            ))}

                        </div>
                    </div>
                </form>
            </div>


            <img alt='star' src='/assets/images/purple-star.svg' className=' absolute star  top-[5%] left-[8%] sm:max-w-[18px] max-w-[10px]' />
            <img alt='star' src='/assets/images/gray-star.svg' className=' absolute star  top-[3%] right-[11%] sm:max-w-[18px] max-w-[10px]' />
            <img alt='star' src='/assets/images/white-star.svg' className=' absolute star  bottom-[17%] right-[5%] sm:max-w-[18px] max-w-[10px]' />

            <img alt='star' src='/assets/images/purple-star.svg' className=' absolute star  bottom-[28%] left-[49%] sm:max-w-[18px] max-w-[10px]' />

        </div>
    )
}

export default ContactUs