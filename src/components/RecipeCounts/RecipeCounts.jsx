import PropTypes from 'prop-types';
import RecipeCount from '../RecipeCount/RecipeCount';

const RecipeCounts = ({ recipeCounts, cookingTime, handleAddToPreperingTime }) => {
    return (
        <div className='w-2/4 ml-5  mt-10 border-2 rounded-xl'>
            <div className=" text-center ">

                <div>
                    {/* <h3 className='text-3xl'>Cooking Time:{cookingTime}</h3> */}
                </div>
                <h2 className='text-2xl pt-5 font-bold border-b-2 pb-10'>Want to cook: {recipeCounts.length}</h2>

                <div>
                    <table className='ml-7 mt-5'>
                        <tr >
                            <th className='px-5'>Name</th>
                            <th className='px-9'>Times</th>
                            <th className='px-5'>Calories</th>
                        </tr>
                    </table>
                </div>

                {
                    recipeCounts.map((recipeCount, idx) => <RecipeCount key={idx} recipeCount={recipeCount} handleAddToPreperingTime={handleAddToPreperingTime}></RecipeCount>)
                }
            </div>

            <h2 className='text-2xl pt-5 font-bold border-b-2 pb-10 text-center'>Currently cooking: {handleAddToPreperingTime.length}</h2>

            <div>
                <table className='ml-7 mt-5'>
                    <thead>
                        <tr>
                            <th className='px-5'>Name</th>
                            <th className='px-9'>Times</th>
                            <th className='px-5'>Calories</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                    <tfoot></tfoot>

                </table>
            </div>
        </div>
    );
};

RecipeCounts.propTypes = {
    recipeCounts: PropTypes.array,
    cookingTime: PropTypes.number,
    handleAddToPreperingTime: PropTypes.number
}



export default RecipeCounts;