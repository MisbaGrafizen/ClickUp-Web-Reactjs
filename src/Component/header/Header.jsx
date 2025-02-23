import React from 'react'
import logo from '../../../public/logo/logo.jpeg'
import mlogo from '../../../public/logo/images.png'

export default function Header() {
    return (
        <>
            <div className=' flex w-[100%] px-[20px]  font-Poppins items-center justify-between  h-[50px] bg-[#2a216a]'>
                <div className=' flex w-[300px]'>
                    <img className='  flex  h-[28px] w-[33px]' src={logo} />


                </div>

                <div className='   w-fit flex gap-[10px]'>
                    <div className=' w-[33px] h-[33px] text-[#d8d7d7] flex justify-center items-center rounded-[7px] bg-[#e6e6e663] p-[3px]'>
                        <i className="fa-light text-[15px] fa-calendar"></i>
                    </div>
                    <div className=' flex  text-[#d8d7d7] bg-[#e6e6e663] rounded-[7px] justify-between px-[9px] items-center gap-[10px] w-[400px]  '>
                        <div className=' flex gap-[10px] items-center justify-center'>


                            <i className="fa-regular fa-magnifying-glass"></i>
                            <input placeholder='Search . . .' className=' serch text-[14px] flex bg-transparent outline-none' type='text' />
                        </div>
                        <div className=' flex w-fit h-[] gap-[6px] pl-[10px] items-center border-l-[1px] '>
                            <i className="fa-light text-[16px] fa-brain-circuit"></i>
                            <p>
                                AI
                            </p>
                        </div>
                    </div>

                </div>
                <div className=' flex text-[#fff]  px-[10px]  items-center  gap-[17px]'>
                    <div className=' flex items-center gap-[8px]  '>
                        <i class="fa-light text-[18px] fa-circle-plus"></i>
                        <p>
                            New
                        </p>
                    </div>
                    <span className='  w-[1px]  bg-[#ffffff8c] h-[25px] '>

                    </span>
                    <div className=' flex gap-[26px] items-center px-[10px] text-[17px]'>
                        <i class="fa-solid fa-circle-check "></i>

                        <i class="fa-regular fa-memo-pad"></i>
                        <i class="fa-regular fa-video"></i>
                        <i class="fa-regular fa-alarm-clock"></i>

                        <i class="fa-light fa-file-lines"></i>
                        <i class="fa-solid fa-grid-"></i>
                        <div className=' p-[5px] flex rounded-2xl items-center gap-[10px] bg-[#ffffff8c]  w-fit'>
                            <img className=' flex   w-[20px]  gap-[10px] rounded-full' src={mlogo} />
                            <i class="fa-regular fa-chevron-down text-[10px] mr-[2px]"></i>
                        </div>
                    </div>

                </div>
            </div>





        </>
    )
}
