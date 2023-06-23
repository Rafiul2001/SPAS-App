import React from 'react'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiOutlineGooglePlus } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className='bg-bg-gray-c'>
      <div className='py-20 px-3 max-w-7xl mx-auto flex flex-col sm:flex-row gap-10'>
        <div className='flex-1 max-w-2xl'>
          <h1 className='text-white text-lg font-medium'>আমাদের কিছু কথা -</h1>
          <p className='pt-3 text-gray-300 font-normal'>এখানে একজন কৃষক ফসলের যাবতীয় তথ্য সম্পর্কে জানতে পারবেন। কোন এলাকার জন্য কোন ফসল উপযোগী তা জানতে পারবেন। ফসলের যেকোনো ধরণের রোগ সম্পর্কে জানতে পারবেন এবং আমাদেরকে জানাতে পারবেন। আমরা দ্রুত সমস্যা সমাধান করতে সাহায্য করব।</p>
        </div>
        <ul className='flex-1 flex flex-col sm:flex-row gap-3'>
          <li className='flex-1'>
            <h1 className='text-white text-lg'>সামাজিক মাধ্যম -</h1>
            <ul className='pt-3 flex flex-col gap-1'>
              <li className='flex gap-2 items-center'>
                <BsFacebook size={20} color='#ffffff'/>
                <p className='text-gray-300 font-normal'>Facebook</p>
              </li>
              <li className='flex gap-2 items-center'>
                <BsTwitter size={20} color='#ffffff'/>
                <p className='text-gray-300 font-normal'>Twitter</p>
              </li>
              <li className='flex gap-2 items-center'>
                <AiOutlineGooglePlus size={20} color='#ffffff'/>
                <p className='text-gray-300 font-normal'>Google +</p>
              </li>
            </ul>
          </li>

          <li className='flex-1'>
            <h1 className='text-white text-lg'>তথ্য সূত্র -</h1>
          </li>

          <li className='flex-1'>
            <h1 className='text-white text-lg'>যোগাযোগ -</h1>
            <ul className='pt-3 flex flex-col gap-1'>
              <li>
                <p className='text-gray-300 font-normal'>ফোনঃ ০১xxxxxxxxx</p>
              </li>
              <li>
                <p className='text-gray-300 font-normal'>ইমেইলঃ example@gmail.com </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-center bg-bg-gray-deep'>
        <p className='py-4 text-gray-300'>Copyright 2023 Smart Precision Agriculture System. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer