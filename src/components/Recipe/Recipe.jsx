import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { FaSuperpowers } from "react-icons/fa";


const Recipe = ({ recipe, handleAddToRecipeCounts }) => {
    // console.log(recipe);
    const { Recipe_id,Recipe_name, Short_description, Recipe_image, Ingredients, Preparing_time, Calories } = recipe;
    return (
        <div className='flex gap-2'>
            <div className='border-2 align-middle w-1/2  shadow-md mb-7 rounded-2xl '>
                <div className=''>
                    <img className='pb-6 w-80 mx-auto mt-5 rounded-2xl' src={Recipe_image} alt={`Recipe images of the title ${Short_description}`} />
                    <div className='pl-6 mb-7' >
                        <h2 className='text-2xl pb-6'>{Recipe_name}</h2>
                        <p className='text-gray-400 pb-6'>{Short_description}</p>
                        <h3 className=''>Ingredients: {Ingredients.length}</h3>
                        {
                            Ingredients.map((ingred, idx) => <li key={idx}>{ingred}</li>)
                        }

                        <div className='flex justify-around mt-5'>
                            <div className='flex items-center gap-2'>
                                <CiClock2 />
                                <h4>{Preparing_time}</h4>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaSuperpowers />
                                <p>{Calories} calories</p>
                            </div>
                        </div>
                    </div>
                    
                    <button
                        onClick={() => handleAddToRecipeCounts(recipe)}
                        className='bg-green-400 text-black p-4 rounded-2xl ml-8 w-44 mb-8'>Want to Cook
                    </button>
                </div>

            </div>

            {/* another Recipe here */}
            <div className='border-2 align-middle w-1/2 shadow-md mb-7 rounded-2xl'>
                <div className=''>
                    <img className='pb-6 w-80 mx-auto mt-5 rounded-2xl' src={Recipe_image} alt={`Recipe images of the title ${Short_description}`} />
                    <div className='pl-6 mb-7' >
                        <h2 className='text-2xl pb-6'>{Recipe_name}</h2>
                        <p className='text-gray-400 pb-6'>{Short_description}</p>
                        <h3 className=''>Ingredients: {Ingredients.length}</h3>
                        {
                           Ingredients.map((ingred,idx) => <li key={idx}>{ingred}</li>)
                        }

                        <div className='flex justify-around mt-5'>
                            <div className='flex items-center gap-2'>
                                <CiClock2 />
                                <h4>{Preparing_time}</h4>
                            </div>
                           <div className='flex items-center gap-2'>
                           <FaSuperpowers />
                           <p>{Calories} calories</p>
                           </div>
                        </div>
                    </div>
                    <button
                        onClick={() => handleAddToRecipeCounts(recipe)}
                        className='bg-green-400 text-black p-4 rounded-2xl ml-8 w-44 mb-8'>Want to Cook
                    </button>
                </div>
            </div>

        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddToRecipeCounts: PropTypes.func,
    handleCookingRead:PropTypes.func
}



export default Recipe;