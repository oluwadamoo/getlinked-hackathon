import React, { FormEvent, useEffect, useState } from 'react'
import RegisterButton from '../../components/RegisterButton'
import RegisteredModal from '../../components/RegisteredModal'
import axios from 'axios'
import { toast } from 'react-toastify'
import { GROUPSIZES } from '../../constants/data'

function Register() {
    const [privacy_policy_accepted, setPolicyAccepted] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [team_name, setTeamName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [group_size, setGroupSize] = useState('0')
    const [project_topic, setProjectTopic] = useState('')
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)



    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            if (!privacy_policy_accepted) {
                throw Error("Please accept the terms and condition")
            }
            await axios.post('registration', {
                email,
                phone_number,
                team_name,
                group_size,
                project_topic,
                category,
                privacy_policy_accepted
            })

            setShowModal(true)
            setIsSubmitting(false)

            setEmail('')
            setPhoneNumber('')
            setTeamName('')
            setGroupSize('')
            setProjectTopic('')
            setCategory('')
            setPolicyAccepted(false)
        } catch (error: any) {
            setIsSubmitting(false)
            toast.error(error?.response?.data ? error?.response?.data.email[0] : error?.message ? error.message : 'An Error Occurred\nTry again')
        }
    }
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get('categories-list')

                setCategories(response.data)

            } catch (error) {
                console.log(error)
            }
        }

        const controller = new AbortController()
        getCategories()

        return () => {
            controller.abort()
        }
    })
    return (
        <>
            <div className='sm:px-[8.47%] px-[10%] overflow-x-hidden overflow-y-scroll min-h-[calc(100vh-100px)] z-[8] relative  sm:pt-[140px] pt-[40px] pb-[150px]'>
                <h6 className='block sm:hidden text-[#D434FE] font-[700] text-[15px] clash-text mb-[36px]'>Register</h6>

                <img alt='star' src='/assets/images/purple-star.svg' className=' absolute star  top-[17%] left-[12%] sm:max-w-[18px] max-w-[10px]' />
                <img alt='star' src='/assets/images/gray-star.svg' className=' absolute star  top-[17%] right-[23%] sm:max-w-[18px] max-w-[10px]' />
                <img alt='star' src='/assets/images/white-star.svg' className=' absolute star  bottom-[5%] right-[18%] sm:max-w-[18px] max-w-[10px]' />

                <img alt='star' src='/assets/images/purple-star.svg' className=' absolute star  bottom-[28%] left-[40%] sm:max-w-[18px] max-w-[10px]' />
                <img alt='star' src='/assets/images/gray-star.svg' className=' absolute star  bottom-[18%] left-[13%] sm:max-w-[18px] max-w-[10px]' />

                <div className='z-[2] flex text-[#fff] text-[16px] justify-between sm:flex-row flex-col'>
                    <div>
                        <img alt='3d graphic designer' src='/assets/images/g-inside-room.svg' className='sm:ml-[-50px] sm:min-w-[650px]' />
                    </div>

                    {/* FORM */}
                    <form onSubmit={onSubmit} className='form z-[8]  relative py-[75px] sm:px-[92px] flex flex-col sm:min-w-[740px] sm:w-[740px] w-[100%]'>
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
                                <input
                                    minLength={3}
                                    value={team_name}
                                    onChange={(e) => setTeamName(e.target.value)}
                                    className='w-[100%] mt-[14px] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='Enter the name of your group' required />

                            </label>

                            <label className='sm:ml-[32px] max-[620px]:w-[100%] max-[620px]:mb-[18px]'>
                                Phone

                                <input
                                    minLength={11}
                                    maxLength={11}

                                    value={phone_number}

                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className=' mt-[14px] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='Enter your phone number' required type='tel' />

                            </label>
                        </div>

                        <div className='flex items-center sm:mt-[33px] sm:flex-row flex-col justify-between'>
                            <label className='sm:mr-[32px] max-[620px]:w-[100%] max-[620px]:mb-[18px]'>
                                Email

                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=' mt-[14px] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='Enter your email address' required type='email' />

                            </label>


                            <label className='max-[620px]:w-[100%] max-[620px]:mb-[18px]'>
                                Project Topic
                                <input
                                    minLength={3}
                                    value={project_topic}
                                    onChange={(e) => setProjectTopic(e.target.value)}
                                    className=' mt-[14px] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' placeholder='What is your group project topic' required />

                            </label>

                        </div>

                        <div className='flex items-center sm:mt-[33px]'>
                            <label className='sm:mr-[32px] max-[620px]:w-[100%] max-[620px]:mb-[18px]'>
                                Category

                                <select onChange={(e) => setCategory(e.target.value)} className='mt-[14px] bg-[inherit] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' required >
                                    <option value={""}>Select your category</option>
                                    {categories.map(({ id, name }, index) => (
                                        <option key={index} value={id}>{name}</option>
                                    ))}
                                </select>

                            </label>
                            <label className='max-[620px]:ml-[20px] max-[620px]:w-[40%] max-[620px]:mb-[18px]'>
                                Group Size

                                <select onChange={(e) => setGroupSize(e.target.value)} className=' mt-[14px] bg-[inherit] outline-[#fff] sm:w-[263px] w-[100%] h-[47px]' required >
                                    <option value={""}>Select</option>
                                    {
                                        GROUPSIZES.map((size, index) => (
                                            <option value={size} key={index}>{size}</option>

                                        ))
                                    }
                                </select>

                            </label>



                        </div>

                        <p className='italic text-[12px] text-[#FF26B9] mt-[23px]'>Please review your registration details before submitting</p>

                        <button type='button' className='flex items-center mt-[16px]' onClick={() => setPolicyAccepted(!privacy_policy_accepted)}>
                            {privacy_policy_accepted ? (
                                <img
                                    alt="check"
                                    src="/assets/images/check.svg"
                                    className="mr-[6px] h-[18px] w-[18px]"
                                />
                            ) : (
                                <div
                                    className={`h-[14px] w-[14px] border-[2px] rounded-[2px] border-[#FFF] mr-[10px]`}
                                />
                            )}
                            <p className=' sm:text-[12px] text-[10px] text-[#FFF] text-left '>I agreed with the event terms and conditions  and privacy policy</p>

                        </button>
                        <RegisterButton
                            loading={isSubmitting}
                            title={isSubmitting ? 'Please Wait' : 'Register Now'}
                            className={`self-center mt-[31px] w-full ${isSubmitting ? 'btn-disabled' : ''}`}
                            onClick={() => console.log("")}
                        />
                    </form>
                </div>




            </div>

            {showModal && <RegisteredModal closeModal={() => setShowModal(false)} />}

        </>
    )
}

export default Register