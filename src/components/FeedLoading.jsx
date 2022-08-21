import React from 'react'

export default function FeedLoading() {
  return (
    <div className="scrollbar-hide hover:z-[100] group relative w-full h-full flex  scroll-smooth">
      <div
        className="h-[100%] flex w-full">
        <div
          className=" cursor-pointer  w-full">
          <div
            className="cursor-pointer p-4 relative w-full max-w-[420px] mx-auto flex justify-center scrollbar-hide"
          >
            <button className="w-full z-[1] flex flex-col items-center h-full justify-evenly space-y-4 group">
              <h1 className=" text-[24px] bg-gray-600 font-bold text-white rotate-[-2deg]  w-[97%] text-center break-words  p-4 "></h1>
                <figure className="max-h-full md:h-[50%] w-full h-full lg:h-[33.333%]">
                    <div className='rotate-[-2deg] bg-gray-600 mt-2 aspect-square max-w-[400px] w-full h-full max-h-[400px] flex  border-4 border-gray-600'></div>
                </figure> 
              <div className="flex z-[50] w-[100%]  flex-col px-2 text-[16px]  font-bold text-white">
                <div className="py-2  text-center tracking-wider w-full text-[18px] flex justify-center space-x-2">
                  <p>
                  </p>
                  <p>
                  </p>
                </div>
                <div className=" transition-all duration-700 z-[-50] text-white ">
                  <div className="flex justify-between p-1 ">
                    <p className='bg-gray-600 p-4 w-full'></p>
                    <p className='bg-gray-600 p-4 w-full'></p>
                  </div>
                  <div className="flex items-center justify-between p-1">
                    <p className='bg-gray-600 p-4 w-full'></p>
                    <div className="flex space-x-1">
                    </div>
                  </div>
                  <div className="flex justify-between p-1">
                    <p className='bg-gray-600 p-4 w-full'></p>
                    <div className="flex space-x-1">
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
