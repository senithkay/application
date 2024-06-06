import React from 'react'

export default function Store() {
    return (
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="https://placehold.co/400x300" alt="Baby Blue Spinel" className="rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8">
              <h1 className="text-2xl font-semibold">Baby Blue Spinel 2.19ct – 7x5mm Pair (SP0539)</h1>
              <div className="mt-2 text-3xl font-bold text-zinc-800 dark:text-zinc-200">US$ 349</div>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">BASED ON 1880 REVIEWS</span>
                </div>
              </div>
              <div className="mt-4 text-zinc-700 dark:text-zinc-300">
                <p>Loose Spinel Gemstone Spinel</p>
                <p>Spinel price per carat US$ 159</p>
                <p className="mt-2 text-green-600 dark:text-green-400">In stock</p>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Add-on Certification</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Certification service for gems that do not already have certificate or require additional certification from different lab. <a href="#" className="text-blue-500">View Sample Certificates</a></p>
                <select className="mt-2 w-full p-2 border border-zinc-300 rounded-md">
                  <option>None</option>
                </select>
              </div>
              <div className="mt-4">
                <button className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold">ADD TO CART</button>
              </div>
             
             
            </div>
          </div>
        </div>
    )
}