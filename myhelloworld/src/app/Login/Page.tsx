import Image from "next/image";
function MyImages() {
    return(
    
        <div className="flex justify-around my-10 flex-col align-middle sm:flex-row md:flex-row lg:flex-row">
        <div className="w-3/12 text-center border-4 border-black rounded-2xl">
        <div className="py-3 px-8">
        <Image src="/PowerBank.png" alt="" width={310} height={150}/>
        </div>
        <p className=" font-bold text-1xl underline">Portable Transparent Power Bank</p>
        <p className="text-center font-bold">80$</p>
        <button className="bg-yellow-500 text-white font-bold  px-10 my-4 border-4 border-black h-10 rounded-2xl">Buy-Now</button>
     </div>
     <div className="w-3/12 text-center border-4 border-black rounded-2xl  ">
        <div className="py-7 px-8">
        <Image src="/PD.jpg" alt="" width={310} height={540}/>
        </div>
        <p className=" font-bold text-1xl underline">Portable Transparent Power Bank</p>
        <p className="text-center font-bold">90$</p>
        <button className="bg-yellow-500 text-white font-bold  px-10 my-4 border-4 border-black h-10 rounded-2xl">Buy-Now</button>
     </div>
     <div className="w-3/12 text-center border-4 border-black rounded-2xl">
        <div className="py-6 px-8">
        <Image src="/Black.jpg" alt="" width={310} height={150}/>
        </div>
        <p className=" font-bold text-1xl underline">Portable Transparent Power Bank</p>
        <p className="text-center font-bold">100$</p>
        <button className="bg-yellow-500 text-white font-bold  px-10 my-4 border-4 border-black h-10 rounded-2xl">Buy-Now</button>
     </div>
     {/* <div className="w-3/12 text-center border-4 border-black rounded-2xl">
        <div className="py-6 px-8">
        <Image src="/Black.jpg" alt="" width={310} height={150}/>
        </div>
        <p className=" font-bold text-1xl underline">Portable Transparent Power Bank</p>
        <p className="text-center font-bold">100$</p>
        <button className="bg-yellow-500 text-white font-bold  px-10 my-4 border-4 border-black h-10 rounded-2xl">Buy-Now</button>
     </div> */}
     </div>

     
    )
}
export default MyImages;