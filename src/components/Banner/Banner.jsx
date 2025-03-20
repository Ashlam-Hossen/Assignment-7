import banner from '../../assets/images/banner.jpg';
const Banner = () => {
    return (
        <div className="w-10/12 mx-auto ">
           <div className='rounded-2xl'
           style=
           {{
            backgroundImage:`url(${banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // width: '100vw',
            // height: '100vh'
             }}>
        
            <div className='mt-10'>
              <h1 className='text-5xl text-center text-white pt-32 font-bold'>Discover an exceptional cooking</h1>
               <h2 className='text-5xl text-center text-white pt-4 pb-8 font-bold'>class tailored for you!</h2>
                <p className='text-1xl text-center text-white pt-2 w-9/12 mx-auto pb-8' >
                Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                </p>
            </div>

            <div className='text-center pb-36 mt-10'>
                <button className='bg-green-400 text-black p-4 rounded-2xl mr-4 w-44'>Explore Now</button>
                <button className='bg-transparent text-white p-4 rounded-2xl mr-4 border-2 w-44'>Our Feedback</button>
            </div>
          
           </div>
        </div>
    );
};

export default Banner;