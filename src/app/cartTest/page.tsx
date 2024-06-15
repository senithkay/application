import React from 'react'

function page() {
    return (
       
            <div className="flex flex-col md:flex-row justify-between p-4 md:w-[70%] w-full ">
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">Your Cart</h2>
                        <button className="text-sm text-zinc-500">Clear Cart</button>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="https://placehold.co/60x60" alt="Red Gem" className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h3 className="font-semibold">Red Gem</h3>
                            <p className="text-zinc-500">Red gem is a gem</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="text-blue-500">SEND AN OFFER</button>
                        <div className="flex items-center">
                            <span className="mr-2">20</span>
                            <span className="text-green-500">(Original)</span>
                            <button className="text-zinc-500 ml-4">×</button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
                    <div className="bg-zinc-100 p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>$72.97</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Taxes</span>
                            <span>$5.84</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mb-4">
                            <span>Total</span>
                            <span>$78.81</span>
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>

      
    )
}

export default page