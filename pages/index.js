import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Home () {
  return (
    <Fragment>

      <nav className='max-w-6xl h-20 mx-auto font-Roboto'>
        <div className='flex justify-between h-full items-center gap-14'>
          {/* Flex div */}
          <div>
            <Link href='#'>
              <Image
                src='/log.svg'
                alt='Picture of the author'
                width={100}
                height={100}
              />
            </Link>
          </div>
          {/* flex div */}
          <div className='flex-1'>
            <ul className='flex gap-7'>
              <li className=''>
                <Link href='#'>
                  <div className='flex'>
                    <span className='tracking-wider'>Shop</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-7 font-bold'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </div>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <div className='flex'>
                    <span className='tracking-wider'>Our Technologies</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-7 font-bold'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </div>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <div className='flex'>
                    <span>About Us</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-7 font-bold'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </div>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <div className='flex'>
                    <span>Build with Us</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-7 font-bold'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex gap-5'>
            <Link href='#'>
              <div className='flex pr-5 border-r tracking-wider border-gray-200'>
                <span>Support</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-7 font-bold'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </div>
            </Link>
            <svg
              fill='currentColor'
              viewBox='0 0 24 24'
              width='2em'
              height='1.5em'
              class='x1lliihq x1heor9g xxk0z11 xvy4d1p'
              role='img'
              aria-label='Empty bag'
            >
              <path
                d='m11.56 2.023-.34.061a3.778 3.778 0 0 0-1 .347C9.16 2.96 8.417 3.887 8.112 5.06c-.074.284-.086.469-.101 1.627l-.018 1.307-1.207.015c-1.126.015-1.222.022-1.446.105a2.062 2.062 0 0 0-1.23 1.229l-.09.237-.012 3.8c-.008 2.577.002 3.924.032 4.186.09.789.38 1.57.841 2.258.271.405.89 1.024 1.295 1.295a5.2 5.2 0 0 0 2.223.839c.457.056 6.745.056 7.202 0a5.29 5.29 0 0 0 2.38-.95 5.061 5.061 0 0 0 1.979-3.442c.03-.262.04-1.609.032-4.186l-.012-3.8-.09-.237a2.047 2.047 0 0 0-1.236-1.231c-.217-.081-.322-.088-1.44-.103l-1.207-.015-.018-1.307c-.016-1.177-.026-1.341-.105-1.645a4.92 4.92 0 0 0-.606-1.324c-.518-.763-1.41-1.374-2.338-1.602-.308-.075-1.157-.133-1.38-.093m.918 2.039c.672.153 1.272.739 1.449 1.415.056.217.069.459.071 1.393L14 8h-4V6.898c0-1.255.034-1.5.265-1.884.475-.794 1.317-1.156 2.213-.952M8 11.5V13h2v-3h4v3h2v-3h2.002l-.012 3.77c-.012 3.483-.018 3.788-.084 4.01a3.113 3.113 0 0 1-2.146 2.127c-.243.068-.495.073-3.76.073-3.265 0-3.517-.005-3.76-.073a3.113 3.113 0 0 1-2.146-2.127c-.066-.222-.072-.527-.084-4.01L5.998 10H8v1.5'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
      </nav> 
    </Fragment>
  )
}
