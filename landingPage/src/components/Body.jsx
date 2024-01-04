import imagen from '../assets/images/logo-removebg-preview.png';

function Body() {
    return (
        <>
           
                <div className=" flex  justify-center mt-10 mb-12 ">
                    <ul className='flex text-4xl'>
                        <li className='mx-10'>about us</li>
                        <li className='mx-10'>about us</li>
                        <li className='mx-10'>about us</li>
                        <li className='mx-10'>about us</li>
                    </ul>
                </div>

                <div className='flex justify-center text-center'>
                    <h1 className='text-5xl font-Abril-Fatface mt-4 ml-20 absolute text-center '>
                        HOTEL VIRTUAL ASSISTANT
                    </h1>
                </div>

                <div className='flex justify-center'>
                    <img className='rounded-full w-60 h-36 mt-20 mb-10' src={imagen} alt="" />
                </div>
               
                



                <div className='flex justify-center'>
                    <h1 className='text-3xl font-Abril-Fatface '>
                        Descubre un servicio excepcional en cada interacción
                    </h1>
                </div>

                <div className='flex justify-center mt-10'>
                    <button className='bg-green-900  py-3 px-4 rounded-3xl font-mono text-xl text-lime-50'>
                        Call to Action
                    </button>
                </div>

            

        </>
    )
}

export default Body