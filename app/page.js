"use client"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const cropsInBangladesh = [
  {
    key: 1,
    cropImage: '/assets/crop_1.png',
    cropName: 'ধান',
    cropDetail: 'চাষের সময়ের উপর নির্ভর করে বাংলাদেশের ধানকে তিনটি ভাগে ভাগ করা হয়ে থাকে। এই প্রধান তিনটি ভাগ হল আউশ, আমন ও বোরো। বাংলাদেশে আউশ, আমন এবং বোরো এই তিন মৌসুমে ধান চাষ করা হয়।',
  },

  {
    key: 2,
    cropImage: '/assets/crop_2.png',
    cropName: 'ভুট্টা',
    cropDetail: 'ধান ও গমের তুলনায় ভুট্টার পুষ্টিমান বেশি। এতে প্রায় ১১% আমিষ জাতীয় উপাদান রয়েছে। আমিষে প্রয়োজনীয় এ্যামিনোএসিড, ট্রিপটোফ্যান ও লাইসিন অধিক পরিমানে আছে। এছাড়া হলদে রংয়ের ভুট্টা দানায় প্রতি ১০০ গ্রামে প্রায় ৯০ মিলিগ্রাম ক্যারোটিন বা ভিটামিন "এ" থাকে।',
  },

  {
    key: 3,
    cropImage: '/assets/crop_3.png',
    cropName: 'পাট',
    cropDetail: 'পাট একটি বর্ষাকালীন ফসল। এর জীবনকাল ১০০ থেকে ১২০ দিন পর্যন্ত। বাংলাদেশে পাটকে সোনালী আঁশ বলা হয়ে থাকে এবং পাটই বাংলার (বাংলাদেশ ও পশ্চিম বঙ্গের) শত বর্ষের ঐতিহ্য।',
  },

  {
    key: 4,
    cropImage: '/assets/crop_4.png',
    cropName: 'ভুট্টা',
    cropDetail: 'ধান ও গমের তুলনায় ভুট্টার পুষ্টিমান বেশি। এতে প্রায় ১১% আমিষ জাতীয় উপাদান রয়েছে। আমিষে প্রয়োজনীয় এ্যামিনোএসিড, ট্রিপটোফ্যান ও লাইসিন অধিক পরিমানে আছে। এছাড়া হলদে রংয়ের ভুট্টা দানায় প্রতি ১০০ গ্রামে প্রায় ৯০ মিলিগ্রাম ক্যারোটিন বা ভিটামিন "এ" থাকে।',
  },
]

const diseasesOfCrops = [
  {
    key: 1,
    diseasesImage: '/assets/r_1.png',
    diseasesName: 'ধানের উফরা রোগ',
  },

  {
    key: 2,
    diseasesImage: '/assets/r_2.png',
    diseasesName: 'ধানের পাতার লালচে রেখা রোগ',
  },

  {
    key: 3,
    diseasesImage: '/assets/r_3.png',
    diseasesName: 'ধানের পাতার লালচে রেখা রোগ',
  },

  {
    key: 4,
    diseasesImage: '/assets/r_4.png',
    diseasesName: 'ধানের টুংরো রোগ',
  },
]


export default function Home() {

  return (
    <main className="w-full">

      <div className='w-full bg-linear-1'>
        <div className="py-11 px-3 flex flex-col-reverse lg:flex-row items-center max-w-7xl gap-4 mx-auto">
          <div className="flex-1 max-w-3xl flex flex-col gap-6">
            <img className='w-16 h-24' src='/assets/h_1.png' alt='h_1'/>
            <p className='font-medium text-2xl leading-normal'>
              মানুষ এই পৃথিবীতে তার জীবন শুরু করেছিল কৃষি দিয়ে এবং এখনও মানুষের জীবন প্রবাহ কৃষির উপর নির্ভর করে। বর্তমান যুগ বিজ্ঞানের যুগ। সর্বক্ষেত্রে বিজ্ঞানের কল্যাণ-স্পর্শ জীবনকে করে তুলেছে সহজ ও আনন্দমুখর। ফলে কৃষিক্ষেত্রেও আজ বিজ্ঞানের ব্যবহার শুরু হয়েছে এবং বিজ্ঞানের ছোঁয়ায় কৃষিতে সূচিত হয়েছে সবুজ বিপ্লব।
            </p>
            <button className="self-center lg:self-start w-fit">
              <p className="bg-bg-green-c text-white cursor-pointer rounded-sm px-8 py-2">বিস্তারিত দেখুন</p>
            </button>
          </div>

          <div className="lg:flex-1 max-w-full lg:max-w-lg">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay
              pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className='flex justify-center items-center relative w-full h-80'>
                  <img src='/assets/crop_1.png' alt='Swiping Image' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center items-center relative w-full h-80'>
                  <img src='/assets/crop_2.png' alt='Swiping Image' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center items-center relative w-full h-80'>
                  <img src='/assets/crop_3.png' alt='Swiping Image' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className='py-11 px-3 flex flex-col items-center max-w-7xl mx-auto'>
        <h1 className='text-4xl font-semibold text-bg-deep-green-c'>ফসলসমুহ</h1>
        <p className='text-base font-medium mt-3'>বাংলাদেশে উৎপাদিত ফসলসমূহ</p>

        <div className='flex flex-row flex-wrap w-full gap-5 justify-center mt-9'>

          {
            cropsInBangladesh.map((crop) => {
              return (
                <section key={crop.key} className='flex-1 max-w-[280px] min-w-[280px]'>
                  <div className='relative h-52'>
                    <img src={crop.cropImage} alt='Crops Image'/>
                  </div>
                  <h2 className='text-center text-lg py-1'>{crop.cropName}</h2>
                  <p className='leading-normal text-xs text-justify'>
                    {crop.cropDetail}
                  </p>
                  <p className='text-center my-1 text-sm cursor-pointer'>বিস্তারিত দেখুন</p>
                </section>
              )
            })
          }
        </div>
      </div>

      <div className='w-full bg-bg-gray-c'>
        <div className='max-w-7xl mx-auto py-20 px-3'>
          <h1 className='text-center text-white font-semibold text-4xl'>ফসলের রোগ</h1>
          <p className='text-white font-medium text-xl text-center mt-3'>ফসলের রোগসমূহ ও দমন ব্যবস্থাপনা</p>
          <div className='flex flex-col md:flex-row mt-8 gap-8'>
            <div className='flex-1 md:min-w-[280px] md:max-w-[320px] h-56 max-w-full'>
              <img src="/assets/s_1.png" alt='Image'/>
            </div>
            <div className='flex-1'>
              <p className='text-white leading-normal text-lg'>ফসলের রোগ হওয়াটা স্বাভাবিক বিষয়। কিন্তু সেই রোগ সঠিক সময় চিহ্নিত করে সঠিক ব্যবস্থা গ্রহণ করতে পারলেই আসবে সফলতা। আপনি আমাদেরকে আপনার ফসলের রোগ সম্পর্কে জানাতে পারেন। আমরা যথাসম্ভব চেষ্টা করব আপনাকে সঠিক তথ্য দিয়ে সমস্যা সমাধান করার। </p>

              <Link href="/getprediction">
                <h3 className='cursor-pointer text-orange-400 underline py-3'>
                  ফসলের উপসর্গ জানাতে এখানে ক্লিক করুন -
                </h3>
              </Link>

              <p className='text-white'>অথবা নিচে রোগের তথ্য দিয়ে সার্চ করতে পারেন।</p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto flex flex-col py-8 px-3'>
        <form className='self-center flex gap-3 items-center' action="">
          <label htmlFor='search'>সম্ভাব্য উপসর্গঃ </label>
          <input className='rounded border' type="search" id="search" name="search" />
          <input type="submit" className='bg-bg-gray-c text-white px-3 py-1 rounded-xl' />
        </form>

        <div className='flex flex-row flex-wrap w-full gap-5 justify-center mt-9'>

          {
            diseasesOfCrops.map((diseases) => {
              return (
                <section key={diseases.key} className='flex-1 max-w-[280px] min-w-[280px]'>
                  <div className='relative h-52'>
                    <img src={diseases.diseasesImage} alt='Diseases Image'/>
                  </div>
                  <h2 className='text-center text-lg py-1'>{diseases.diseasesName}</h2>
                </section>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
