import frame from '../../assets/images/Frame 5.jpg'
import search from '../../assets/images/search.jpg'
const Header = () => {
    return (
        <div className='flex justify-between items-center w-10/12 mx-auto'>
              <h1 className="text-2xl">Recipe Calories</h1>
              <div className='items-center'>
                <ul className='flex px-5'>
                <li className='mx-4'><a href="">Home</a></li>
                <li className='mx-4'><a href="">About</a></li>
                <li className='mx-4'><a href="">Recipes</a></li>
                <li className='mx-4'><a href="">Search</a></li>
                </ul>
              </div>
              <div className='flex items-center border-e-lime-400'>
                <div className='absolute'>
                <span className='relative left-2 top-0'><img src={search} alt="" /></span> 
                </div>
                
                <input type="text" className='border-2 rounded-2xl p-2 pl-10' defaultValue="searchSearch..." placeholder='Search'/> 
                <img className='ml-2' src={frame} alt="" />
              </div>
             
              
        </div>
    );
};

export default Header;