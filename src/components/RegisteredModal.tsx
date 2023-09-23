import RegisterButton from './RegisterButton'

interface RegisteredModalProps {
    closeModal: () => void
}
function RegisteredModal({ closeModal }: RegisteredModalProps) {
    return (
        <div className='z-[200] w-[100%] h-[100%] fixed top-0 bottom-0 left-0 right-0 bg-[#150E28ED] p-[10%] flex items-center justify-center'>

            <div className='flex flex-col items-center text-[#fff] font-[600] text-center bg-[#FFFFFF03] border-[1px] border-[#D434FE] rounded-[5px] sm:w-[699px] w-[100%] sm:pt-[28px] sm:pb-[73px] pt-[17px] pb-[28px] px-[10%]'>

                <img alt='congratulations' src='/assets/images/congratulation.png' />
                <h3 className='text-[32px] '>
                    Congratulations
                    you have successfully Registered!
                </h3>

                <p className='text-[14px] mt-[14px] sm:max-w-[240px]'>
                    Yes, it was easy and you did it!
                    check your mail box for next step
                </p>


                <RegisterButton title='Back' className='w-full mt-[40px]' onClick={closeModal} />
            </div>
            <img alt='star' src='/assets/images/purple-star.svg' className=' absolute star  top-[21%] right-[26%] sm:max-w-[18px] max-w-[10px]' />

            <img alt='star' src='/assets/images/gray-star.svg' className=' absolute star  top-[40%] left-[30%] sm:max-w-[18px] max-w-[10px]' />
            <img alt='star' src='/assets/images/purple-star.svg' className=' absolute star  bottom-[25%] right-[35%] sm:max-w-[18px] max-w-[10px]' />

        </div>
    )
}

export default RegisteredModal