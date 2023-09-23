
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'
import RegisterButton from '../../components/RegisterButton'
import { JUDGING_CRITERIA, FAQ, TIMELINES, REWARDS, PARTNERS, LICENSING_POLICY } from '../../constants/data';
import { Fade, Slide } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';

interface AwardCardProps {
    extraClass?: string;
    containerClass?: string;
    rewardTextClass?: string;
    position: string;
    reward: string;
    icon: string;

}
const AwardCard = ({ rewardTextClass, extraClass, containerClass, position, reward, icon }: AwardCardProps) => (
    <div className={`flex flex-col items-center ${containerClass}`}>
        <img alt='award' src={icon} className={`z-[10] ${position === '1st' ? 'max-[620px]:max-w-[125px]' : 'max-[620px]:max-w-[75px]'}`} loading='lazy' />
        <div className={`rounded-[8px] sm:pt-[111px] pt-[60px] sm:mt-[-100px] mt-[-50px] flex flex-col items-center pb-[33px] sm:px-[25px] px-[9px] text-center bg-[#D434FE1F] border-[1px] border-[#D434FE] ${extraClass}`}>

            <h3 className='sm:text-[36px] text-[12px] leading-[216.4%] text-[#fff] font-[700]'>{position}</h3>
            <h5 className='sm:text-[24px] text-[12px] text-[#fff] font-[600] leading-[216.4%]'>Runner</h5>
            <h4 className={`sm:text-[32px] text-[14px] font-[700] text-[#D434FE] leading-[216.4%] ${rewardTextClass}`}>{reward}</h4>
        </div>
    </div>
)


function Home() {
    const navigate = useNavigate()
    const [showFaqAnswer, setShowFaqAnswer] = useState(false)
    const [currFaqIndex, setCurrFaqIndex] = useState(0)


    const [time, setTime] = useState({
        hours: 24,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
                clearInterval(interval);
            } else {
                updateTime();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    const updateTime = () => {
        setTime((prevTime) => {
            let newTime = { ...prevTime };

            if (newTime.seconds > 0) {
                newTime.seconds--;
            } else {
                if (newTime.minutes > 0) {
                    newTime.minutes--;
                    newTime.seconds = 59;
                } else {
                    if (newTime.hours > 0) {
                        newTime.hours--;
                        newTime.minutes = 59;
                        newTime.seconds = 59;
                    }
                }
            }

            return newTime;
        });
    };

    return (
        <div className=' overflow-x-hidden overflow-y-scroll min-h-[calc(100vh-100px)] relative  pt-[32px]'>

            <div className=' pl-[8.47%] pr-[3.64%] relative'>
                <section className='z-[10] relative max-[620px]:w-fit'>
                    <h3 className='italic text-[#fff] sm:text-[36px] text-[16px] font-[700] sm:text-right '>Igniting a Revolution in HR Innovation</h3>
                    <img src='/assets/images/arc.svg' alt='arc' className='absolute right-0 max-[620px]:max-w-[115px] ' loading='lazy' />
                </section>

                <section className='flex mt-[40px] sm:flex-row flex-col relative z-[6]'>

                    <div className='text-[#fff] relative z-[5] flex-1 max-[620px]:flex max-[620px]:flex-col max-[620px]:items-center'>
                        <div className='flex justify-end w-[42%] sm:mb-[-25px] mb-[-20px]'>
                            <img alt='bulb' src='/assets/images/yellow-bulb.svg' className='max-w-[53px] max-w-[16px]' />
                        </div>
                        <h2 className='clash-text font-[700] sm:text-[80px] text-[32px] sm:text-left text-center'>
                            getlinked Tech
                        </h2>
                        <div className='mt-[-3px] flex items-center max-[620px]:justify-center clash-text font-[700] sm:text-[80px] text-[32px] sm:text-left text-center'>
                            <h2>
                                Hackathon
                            </h2>
                            <h2 className='text-[#D434FE]'>
                                1.0
                            </h2>
                            <img alt='chain' src='/assets/images/chain.svg' className='ml-[6px] max-[620px]:max-w-[32.797px]' loading='lazy' />
                            <img alt='fire' src='/assets/images/fire.svg' className='max-[620px]:max-w-[22.119px]' loading='lazy' />
                        </div>
                        <p className='mt-[8px] sm:text-[20px] text-[13px] max-[620px]:text-center max-w-[522px] mb-[41px]'>
                            Participate in getlinked tech Hackathon 2023 stand
                            a chance to win a Big prize
                        </p>

                        <RegisterButton onClick={() => navigate('/register')} />

                        {/* Timer */}
                        <div className='mt-[77px] flex unica-text'>
                            {['h', 'm', 's'].map((t, index) => (
                                <div className='flex h-fit' key={index}>
                                    <h4 className={`${index > 0 ? 'ml-[60px]' : ''} sm:text-[64px] text-[48px]`}>{t === 'h' ? time.hours.toString().padStart(2, '0') : t === 'm' ? time.minutes.toString().padStart(2, '0') : time.seconds.toString().padStart(2, '0')}</h4>
                                    <p className='self-end sm:mb-[25px] mb-[15px] sm:text-[16px] text-[14px]'>{t}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='sm:absolute z-[4] flex-1 right-0 sm:mt-[0px] mt-[16.84px]'>
                        <img src='/assets/images/smart-glasses-guy.svg' alt='man-in-glasses' className='sm:min-w-[740px] absolute right-[0]' loading='lazy' />
                        <img src='/assets/images/light.svg' alt='3d' className='light z-[10] absolute sm:min-w-[660px] right-0' loading='lazy' />

                    </div>

                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  top-[-10%] left-0 sm:max-w-[21px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/gray-star.svg' className='absolute  top-[0] left-[45%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/gray-star.svg' className='absolute  bottom-[15%] left-[35%] sm:max-w-[21px] max-w-[12px]' />
                </section>
            </div>
            <section className=' z-[5] pt-[62px] pb-[78px] sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%] border-[1px] border-[#FFFFFF2E] sm:mt-[91px] mt-[400px] flex sm:flex-row flex-col justify-between items-center relative'>
                <div className='relative'>
                    <img alt='light-bulb' src='/assets/images/big-idea.svg' className='sm:min-w-[490px]' loading='lazy' />
                    <img alt='arrow' src='/assets/images/curled-arrow.svg' className='absolute bottom-0 right-0' loading='lazy' />

                </div>

                <div className='text-[#fff] sm:max-w-[50%] mt-[30px]'>
                    <div className='flex'>
                        <div className='sm:text-[32px] text-[20px] font-[700] clash-text sm:text-left text-center max-[620px]:flex max-[620px]:flex-col max-[620px]:items-center max-[620px]:w-[100%]'>
                            <h5>Introduction to getlinked</h5>
                            <h5 className='text-[#D434FE]'>tech Hackathon 1.0</h5>
                        </div>

                        <img alt='star' src='/assets/images/purple-star.svg' className='ml-[90px] max-[620px]:hidden' loading='lazy' />
                    </div>
                    <p className='mt-[18px] sm:text-[14px] text-[13px] max-[620px]:text-center'>
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!
                    </p>
                </div>

                <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[30%] left-[8%] sm:max-w-[18px] max-w-[12px]' />
                <img alt='star' src='/assets/images/purple-star.svg' className='absolute  bottom-[15%] left-[35%] sm:max-w-[21px] max-w-[12px]' />

            </section>

            {/* Rules */}
            <Fade>
                <section className=' relative z-[5] pt-[62px] pb-[78px] sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%]  sm:h-[590px]  border-b-[1px] border-b-[#FFFFFF2E] flex sm:flex-row flex-col-reverse justify-between items-center'>

                    <div className='text-[#fff] sm:max-w-[50%]'>
                        <div className='flex'>
                            <div className='sm:text-[32px] text-[20px] max-[620px]:text-center font-[700] clash-text max-[620px]:w-[100%]'>
                                <h5>Rules and</h5>
                                <h5 className='text-[#D434FE]'>Guidelines</h5>
                            </div>

                        </div>
                        <p className='mt-[18px] sm:text-[14px] text-[13px] max-[620px]:text-center'>
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a
                            design maverick, or a concept wizard, you'll have the chance to transform
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                    </div>

                    <div className='sm:absolute right-0'>
                        <img alt='girl-sitting' src='/assets/images/lady-sitting.svg' className='sm:min-w-[600px]' />

                    </div>


                    <img alt='star' src='/assets/images/gray-star.svg' className='absolute  top-[25%] left-[25%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  bottom-[25%] left-[45%] sm:max-w-[21px] max-w-[12px]' />

                </section>
            </Fade>

            {/* Judging criteria */}
            <Fade duration={1000}>
                <section className='relative pt-[62px] pb-[78px]  sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%]  border-b-[1px] border-b-[#FFFFFF2E] flex sm:flex-row flex-col justify-between items-center'>
                    <div className='relative'>
                        <img alt='observer' src='/assets/images/observer.svg' className='sm:min-w-[680px]' loading='lazy' />

                    </div>

                    <div className='sm:ml-[53px] text-[#fff] sm:max-w-[50%] max-[620px]:flex max-[620px]:flex-col'>
                        <div className='flex sm:mb-[0px] mb-[16px]'>
                            <div className='sm:text-[32px] text-[20px] font-[700] clash-text max-[620px]:text-center max-[620px]:w-[100%]'>
                                <h5>Judging Criteria</h5>
                                <h5 className='text-[#D434FE]'>Key attributes</h5>
                            </div>

                        </div>

                        {
                            JUDGING_CRITERIA.map(({ title, details }, index) => (
                                <div key={index} className='mb-[22px] text-[#FFF] text-[14px] max-[620px]:text-center'>
                                    <span className='text-[#FF26B9] text-[16px] font-[700]'>{title}: </span>
                                    {details}
                                </div>
                            ))
                        }

                        <RegisterButton className="mt-[55px] max-[620px]:self-center" title='Read More' onClick={() => console.log("Read more")} />

                    </div>

                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[10%] left-[20%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/gray-star.svg' className='absolute  bottom-[50%] left-[35%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  bottom-[15%] left-[45%] sm:max-w-[18px] max-w-[12px]' />

                </section>
            </Fade>

            {/* FAQ */}
            <div id='faq' />
            <Slide triggerOnce={false} direction='right'>
                <section className=' relative sm:pt-[80px] pt-[62px] pb-[78px]  sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%]  border-b-[1px] border-b-[#FFFFFF2E] flex sm:flex-row flex-col justify-between items-center'>

                    <div className='text-[#fff] sm:max-w-[50%]'>
                        <div className='flex mb-[68px]'>
                            <div className='sm:text-[32px] text-[20px] max-[620px]:text-center  font-[700] clash-text'>
                                <h5>Frequently Ask</h5>
                                <h5 className='text-[#D434FE]'>Question</h5>
                                <p className='sm:max-w-[342px] text-[#FFF] text-[14px] mt-[16px] font-[400]'>We got answers to the questions that you might want to ask about <b>getlinked Hackathon 1.0</b></p>
                            </div>

                        </div>


                        <div>
                            {
                                FAQ.map(({ question, answer }, index) => (
                                    <div className='sm:w-[427px] w-[100%] mb-[12px] text-[14px] text-[#fff]'>
                                        <button
                                            onClick={() => {
                                                setCurrFaqIndex(index)
                                                if (currFaqIndex === index) {
                                                    setShowFaqAnswer(!showFaqAnswer)
                                                } else {
                                                    setShowFaqAnswer(true)
                                                }
                                            }}
                                            key={index} className='w-[100%] py-[13px] border-b-[1px] border-b-[#D434FE] flex items-center  justify-between  '>
                                            <p className={`max-[620px]:text-left ${(currFaqIndex === index && showFaqAnswer) ? 'font-[700] text-[15px]' : ''}`}>{question}</p>
                                            <p className={`text-[20px] text-[#D434FE] ${(currFaqIndex === index && showFaqAnswer) ? 'rotate-[30deg] font-[700] text-[#903AFF]' : ''}`}>+</p>
                                        </button>
                                        {(showFaqAnswer && currFaqIndex === index) && <Slide direction='left'> <div className='py-[10px] faq-ans mt-[5px] text-[13px]'>
                                            <p>{answer}</p>
                                        </div></Slide>}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='sm:absolute top-[5%] right-0 z-[10]'>
                        <img alt='questioning' src='/assets/images/thinking.svg' className='sm:min-w-[600px]' loading='lazy' />

                    </div>

                    <img alt='question' src='/assets/images/question2.svg' className='absolute  sm:top-[10%] bottom-[44%] sm:right-[23%] right-[43%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='question' src='/assets/images/question1.svg' className='absolute  sm:top-[4%]  bottom-[46%] sm:right-[30%] right-[50%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='question' src='/assets/images/question2.svg' className='absolute  sm:top-[10%] bottom-[44%] sm:right-[37%] right-[57%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[4%] left-[5%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/gray-star.svg' className='absolute  top-[50%] left-[45%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  bottom-[5%] right-[5%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[25%] left-[55%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[10%] left-[72%] sm:max-w-[18px] max-w-[12px]' />


                </section>
            </Slide>

            {/* Timeline */}
            <div id='timeline' />

            <Fade duration={2000}>
                <section id='timeline' className=' relative pt-[62px] pb-[78px]  sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%]  border-b-[1px] border-b-[#FFFFFF2E]  justify-between items-center'>
                    <div className='text-[#fff] text-center flex flex-col items-center'>
                        <h5 className='sm:text-[32px] text-[20px] max-[620px]:text-center font-[700] clash-text'>Timeline</h5>
                        <p className='sm:text-[14px] text-[13px] max-[620px]:text-center  mt-[12px] max-w-[346px]'>
                            Here is the breakdown of the time we anticipate
                            using for the upcoming event.
                        </p>
                    </div>


                    <div className='mt-[91px] relative max-[620px]:flex '>
                        <div className='h-[90%] w-[4px] bg-[#D434FE] absolute top-0 left-[0%] sm:hidden' />

                        <div className='max-[620px]:ml-[30px]'>
                            {TIMELINES.map(({ event, details, date }, index) => (
                                <div key={index} className={`flex ${index % 2 === 0 ? 'sm:flex-row flex-col' : 'sm:flex-row-reverse flex-col-reverse'} justify-between mb-[120px]`}>
                                    <div className={`flex-1 flex  ${index % 2 === 0 ? 'mr-[90px] flex-row' : 'flex-row-reverse'}`}>
                                        <div className='sm:max-w-[90%]'>
                                            <h4 className='sm:text-[24px] text-[12px] font-[700] text-[#D434FE]'>{event}</h4>
                                            <p className='text-[#fff] mt-[12px] sm:text-[14px] text-[12px]'>{details}</p>
                                        </div>

                                        <div className='absolute border-[10px] border-[#150E28] sm:left-[42.5%] left-[-4%] mt-[20px] z-[4] flex sm:h-[63px] h-[39px] w-[39px] sm:w-[63px] rounded-full items-center justify-center text-[#fff] timeline max-[620px]:text-[12px]'>{index + 1}</div>
                                    </div>

                                    <div className='flex-1'>
                                        <h4 className='sm:text-[24px] text-[12px] font-[700] text-[#D434FE]'>{date}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='h-[100%] w-[4px] bg-[#D434FE] absolute top-0 left-[45%] max-[620px]:hidden' />

                    </div>

                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[10%] left-[15%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  top-[45%] right-[20%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/gray-star.svg' className='absolute  bottom-[8%] left-[7%] sm:max-w-[18px] max-w-[12px]' />

                </section>
            </Fade>


            {/* REWARDS */}
            <Fade>
                <section className=' rewards-bg pt-[62px] pb-[78px] sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%] border-b-[1px] border-b-[#FFFFFF2E] relative'>
                    <div className='text-[#fff] flex flex-col items-center sm:mb-[180px] mb-[40px]'>
                        <div className='sm:w-[400px]'>
                            <h5 className='sm:text-[32px] text-[20px] font-[700] max-[620px]:text-center clash-text'>Prizes and</h5>
                            <h5 className='sm:text-[32px] text-[20px] font-[700] max-[620px]:text-center clash-text text-[#D434FE]'>Rewards</h5>
                            <p className='sm:text-[14px] text-[12px]  mt-[12px] max-w-[346px] max-[620px]:text-center'>
                                Highlight of the prizes or rewards for winners and for participants
                            </p>
                        </div>
                    </div>

                    <Slide direction='left'>
                        <div className='flex justify-between sm:flex-row flex-col'>
                            <img alt='reward-cup' src='/assets/images/cup.svg' loading='lazy' />
                            <div className='flex  max-[620px]:mt-[190px] max-[620px]:justify-center'>
                                {
                                    REWARDS.map(({ position, icon, reward }, index) => (

                                        <AwardCard position={position} icon={icon} reward={reward} key={index} extraClass={`${index === 1 ? 'mx-[30px] bg-[#903AFF1F] border-[#903AFF]' : ''}`} containerClass={`${index === 1 ? 'mt-[-80px]' : ''}`} rewardTextClass={`${index === 1 ? 'text-[#903AFF]' : ''}`} />
                                    ))
                                }
                            </div>
                        </div>
                    </Slide>

                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[5%] left-[15%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  top-[45%] left-[45%] sm:max-w-[21px] max-w-[13px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  top-[45%] right-[5%] sm:max-w-[21px] max-w-[13px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  bottom-[5%] left-[15%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  bottom-[5%] right-[15%] sm:max-w-[18px] max-w-[12px]' />

                </section>
            </Fade>

            {/* Partners */}
            <Fade>
                <section className=' relative pt-[62px] pb-[78px] sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%] border-b-[1px] border-b-[#FFFFFF2E]'>
                    <div className='text-[#fff] text-center flex flex-col items-center'>
                        <h5 className='sm:text-[32px] text-[20px] font-[700] clash-text max-[620px]:text-center'>Partners and Sponsors</h5>
                        <p className=' text-[12px] sm:text-[14px]  mt-[12px] max-w-[346px] max-[620px]:text-center'>
                            Getlinked Hackathon 1.0 is honored to have the following major
                            companies as its partners and sponsors
                        </p>
                    </div>


                    <Slide direction='right' >
                        <div className='flex flex-col mt-[65px] border-[1px] border-[#D434FE] bg-[#FFFFFF03] rounded-[5px] px-[47px] sm:py-[144px] py-[38px]'>

                            <div className='grid grid-cols-3 self-center sm:w-[950.604px] relative '>
                                {
                                    PARTNERS.map((partner, index) => (
                                        <div key={index} className={`flex sm:py-[22.79px] py-[10px] max-[620px]:px-[10px] sm:w-[316.868px] max-[620px]:max-w-[250px] relative items-center justify-center ${index === 1 ? 'sm:border-l-[4px] border-l-[2px] sm:border-r-[4px] border-r-[2px] sm:border-b-[4px] border-b-[2px] border-b-[#D434FE] border-r-[#D434FE] border-l-[#D434FE]' : index === 4 ? 'sm:border-l-[4px] sm:border-r-[4px] border-l-[2px] border-r-[2px]  border-r-[#D434FE] border-l-[#D434FE]' : index === 0 || index === 2 ? 'border-b-[2px] sm:border-b-[4px] border-b-[#D434FE]' : ''}`}>
                                            <img alt='partner' key={index} src={partner} className='z-[10] max-[620px]:max-w-[60px]' loading='lazy' />
                                            {(index === 0 || index === 1) && <div className={`z-[20]  sm:top-[82%] top-[90%] right-[-10%] absolute rotate-[45deg] sm:w-[59.55px] w-[15px] h-[15px] sm:h-[59.55px] bg-[#150E28] flex item-center justify-center`}>
                                                <div className={`z-[20] w-[15px] h-[15px]  sm:w-[59.55px] sm:h-[59.55px] bg-[#FFFFFF03]`} />

                                            </div>}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Slide>

                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[22%] left-[15%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[40%] left-[55%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  bottom-[15%] left-[55%] sm:max-w-[21px] max-w-[13px]' />

                </section>
            </Fade>


            {/* Privacy Policy */}
            <Fade>
                <section className='relative pt-[169px] pb-[150px] sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%] border-b-[1px] border-b-[#FFFFFF2E] flex sm:flex-row flex-col justify-between items-center'>

                    <div className='text-[#fff] sm:max-w-[50%] text-[14px]'>
                        <div className='flex mb-[68px]'>
                            <div className='sm:text-[32px] text-[20px] max-[620px]:text-center font-[700] clash-text'>
                                <h5>Privacy Policy and</h5>
                                <h5 className='text-[#D434FE]'>Terms</h5>
                                <p className='text-[#FFFFFFBF] text-[14px] mt-[17px] font-[400]'>Last updated on September 12, 2023</p>
                                <p className='text-[#FFF] text-[14px] mt-[30px] font-[400]'>Below are our privacy & policy, which outline a lot of goodies.
                                    it’s our aim to always take of our participant</p>
                            </div>

                        </div>

                        <div className='max-[620px]:text-[12px] rounded-[5px] mt-[69px] py-[59px] sm:px-[72px] px-[15px] border-[1px] border-[#D434FE] bg-[#D9D9D908]'>
                            <p >
                                At getlinked tech Hackathon 1.0, we value your privacy
                                and are committed to protecting your personal information.
                                This Privacy Policy outlines how we collect, use, disclose,
                                and safeguard your data when you participate in our tech
                                hackathon event. By participating in our event, you consent
                                to the practices described in this policy.         </p>

                            <h5 className='mt-[24px] font-[700] leading-[216.4%] text-[#D434FE] max-[620px]:text-[13px]'>Licensing Policy</h5>
                            <p className='font-[700] mb-[18px]'>Here are terms of our Standard License:</p>

                            <div>
                                {
                                    LICENSING_POLICY.map((policy, index) => (
                                        <div className='flex mb-[18px]' key={index}>
                                            <img alt='list-icon' src='/assets/images/list-icon.svg' loading='lazy' />
                                            <p className='ml-[14px]'>{policy}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex justify-center'>
                                <RegisterButton title='Read More' onClick={() => console.log("read more")} />
                            </div>
                        </div>
                    </div>

                    <div className='sm:absolute right-0 top-[15%] relative max-[620px]:mt-[100px]'>
                        <Slide direction='down'>
                            <img alt='privacy lock' src='/assets/images/privacy.svg' className='sm:min-w-[559px] z-[2] relative' />
                        </Slide>
                        <img alt='privacy' src='/assets/images/privacy-watermark.svg' className='sm:min-w-[530px] absolute top-[-15%]' />

                    </div>


                    <img alt='star' src='/assets/images/gray-star.svg' className='absolute  top-[15%] left-[30%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  top-[25%] left-[55%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  bottom-[25%] left-[5%] sm:max-w-[21px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/white-star.svg' className='absolute  bottom-[38%] left-[68%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/purple-star.svg' className='absolute  bottom-[48%] left-[73%] sm:max-w-[18px] max-w-[12px]' />
                    <img alt='star' src='/assets/images/gray-star.svg' className='absolute  bottom-[10%] right-[10%] sm:max-w-[18px] max-w-[12px]' />

                </section>
            </Fade>

            {/* Footer */}
            <footer className=' px-[8.47%] py-[83px] relative'>
                <div className='flex sm:flex-row flex-col text-[#fff] justify-between'>
                    <section>
                        <Logo />
                        <p className='text-[12px] max-w-[412px] sm:mb-[70px] mb-[39px]'>Getlinked Tech Hackathon is a technology innovation program
                            established by a group of organizations with the aim of showcasing
                            young and talented individuals in the field of technology</p>


                        <div className='flex items-center text-[12px]'>
                            <a href='/#'>Terms of Use</a>
                            <div className='h-[18px] w-[1px] bg-[#D434FE] mx-[8px]' />
                            <a href='/#'>Privacy Policy</a>
                        </div>
                    </section>


                    <section className='max-[620px]:my-[64px]'>
                        <h5 className='text-[#D434FE] font-[600] leading-[172.4%] mb-[6px] text-[14px]'>Useful Links</h5>

                        {
                            ['Overview', 'Timeline', 'FAQs', 'Register'].map((link, index) => (
                                <div key={index} className='mb-[12px] text-[12px] hover:scale-y-[1.3]'>
                                    <Link to={link}>{link}</Link>
                                </div>
                            ))
                        }

                        <div className='flex items-center mt-[6px] text-[12px] text-[#D434FE]'>
                            <p>Follow us</p>
                            {['/assets/images/instagram.svg', '/assets/images/x.com.svg', '/assets/images/facebook.svg', '/assets/images/linkedin.svg'].map((social, index) => (
                                <a href='/#' key={index} className='ml-[16px]'>
                                    <img alt='social' src={social} loading='lazy' />
                                </a>
                            ))}

                        </div>
                    </section>


                    <section>
                        <h5 className='text-[#D434FE] font-[600] leading-[172.4%] mb-[6px] text-[14px]'>Contact Us</h5>

                        <div className='flex mt-[19px]'>
                            <img alt='phone' src='/assets/images/call.svg' />
                            <p className='text-[12px] ml-[16px]'>+234 6707653444</p>
                        </div>
                        <div className='flex mt-[22px]'>
                            <img alt='address' src='/assets/images/location.svg' loading='lazy' />
                            <p className='text-[12px] ml-[16px] max-w-[89px]'>27,Alara Street
                                Yaba 100012
                                Lagos State</p>
                        </div>
                    </section>
                </div>


                <p className='mt-[59px] text-[12px] text-[#fff] text-center'>All rights reserved. © getlinked Ltd.</p>

                <img alt='star' src='/assets/images/white-star.svg' className='absolute  top-[25%] left-[5%] sm:max-w-[18px] max-w-[10px]' />
                <img alt='star' src='/assets/images/gray-star.svg' className='absolute  top-[25%] right-[26%] sm:max-w-[18px] max-w-[10px]' />
                <img alt='star' src='/assets/images/white-star.svg' className='absolute  bottom-[32%] right-[4%] sm:max-w-[18px] max-w-[10px]' />

                <img alt='star' src='/assets/images/purple-star.svg' className='absolute  bottom-[28%] left-[45%] sm:max-w-[18px] max-w-[10px]' />

            </footer>
        </div>
    )
}

export default Home