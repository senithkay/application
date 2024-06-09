import React from 'react'

function RequestGems() {
  return (
    <>
      <div className="flex flex-col md:flex-row border p-4 bg-zinc-200 dark:bg-zinc-800">

        <div className="flex-1 p-4">
          <div className="flex items-center mb-4">
            <h2 className="text-xl md:text-2xl font-semibold">LET US HELP YOU FIND THE EXACT GEM STONE YOU NEED</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>Submit Your Request and Get Quotations for Quality Gemstones</li>
            <li>Network of over 500 Gem Dealers Across Sri Lanka</li>
            <li>Get Certified by Preferred Certification Body</li>
          </ul>
        </div>

        <div className="flex-1 p-4 bg-white dark:bg-zinc-700 border-t md:border-t-0 md:border-l">
          <h3 className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">REQUEST FOR GEM STONE</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Gem Stone Name" className="w-full p-2 border rounded" />
            <textarea placeholder="Requirement ( Size, Shape, Color )" className="w-full p-2 border rounded"></textarea>
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
              <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded">Submit</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default RequestGems