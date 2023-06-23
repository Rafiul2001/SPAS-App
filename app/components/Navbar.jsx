"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IoHome } from 'react-icons/io5'
import { AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai'
import { LuContact } from 'react-icons/lu'
import { GiThreeLeaves } from 'react-icons/gi'
import { FaDisease } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg'
import Link from 'next/link'

const menuItems = [
  {
    key: 1,
    component: <IoHome />,
    text: "মূলপেজ",
    link: '/',
  },
  {
    key: 2,
    component: <AiOutlineInfoCircle />,
    text: "আমাদের সম্পর্কে",
    link: '',
  },
  {
    key: 3,
    component: <LuContact />,
    text: "যোগাযোগ করুন",
    link: '',
  },
  {
    key: 4,
    component: <GiThreeLeaves />,
    text: "ফসলসমূহ",
    link: '',
  },
  {
    key: 5,
    component: <FaDisease />,
    text: "ফসলের রোগ",
    link: '',
  },
]

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const refOne = useRef(null)

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
  }, [])

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      setToggleMenu(false)
      document.removeEventListener("click", handleClickOutside);
    }
  }

  return (
    <nav ref={refOne} className='max-w-7xl mx-auto py-3 px-3 flex gap-5 justify-between items-center relative'>
      <h1 className='font-medium text-bg-deep-green-c text-3xl'>SPAS</h1>

      <ul className='hidden md:flex flex-row items-center gap-6'>
        {
          menuItems.map((menuItem) => {
            return (
              <li key={menuItem.key}>
                <Link className='flex items-center gap-2' href={menuItem.link}>
                  {menuItem.component}
                  <p>{menuItem.text}</p>
                </Link>
              </li>
            )
          })
        }
      </ul>

      <CgMenu className='lg:hidden' size={24} onClick={() => setToggleMenu(true)} />

      <ul className='lg:flex gap-3 hidden'>
        <li>
          <p className='bg-bg-green-c text-white px-6 py-1 rounded-md'>log In</p>
        </li>
        <li>
          <p className='bg-bg-green-c text-white px-6 py-1 rounded-md'>Registration</p>
        </li>
      </ul>

      {/* For drop down menu */}

      {
        toggleMenu ?
          <div className='fixed w-52 h-full top-0 right-0 bottom-0 z-10 bg-slate-100 flex lg:hidden flex-col'>
            <AiOutlineClose className='mt-3 self-end' size={24} onClick={() => setToggleMenu(false)} />
            <div className='flex flex-col justify-between h-full'>
              <ul className='flex md:hidden flex-col w-full  items-end gap-6 pt-9'>
                {
                  menuItems.map((menuItem) => {
                    return (
                      <li key={menuItem.key}>
                        {
                          <Link className='flex items-center gap-2' href={menuItem.link}>
                            <p>{menuItem.text}</p>
                            {menuItem.component}
                          </Link>
                        }
                      </li>
                    )
                  })
                }
              </ul>

              <ul className='flex flex-col items-center gap-3 my-8'>
                <li className='w-fit'>
                  <p className='bg-bg-green-c text-white px-6 py-1 rounded-md'>log In</p>
                </li>
                <li className='w-fit'>
                  <p className='bg-bg-green-c text-white px-6 py-1 rounded-md'>Registration</p>
                </li>
              </ul>
            </div>
          </div>
          : null
      }
    </nav>
  )
}

export default Navbar