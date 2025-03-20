import PropTypes from 'prop-types';

const RecipeCount = ({ recipeCount, handleCookingRead }) => {

    const { Recipe_name, Preparing_time, Calories } = recipeCount;
    return (
        <div className='bg-red-200 p-4 m-4 rounded-xl'>
            <table className=''>
                <thead></thead>
                <tbody>
                   <tr>
                        <td className='mr-5'>1</td>
                        <td className='w-28'>{Recipe_name}</td>
                        <td className=''>{Preparing_time} minutes</td>
                        <td className='pl-5'>{Calories} calories</td>
                        <td className='pl-5'><button onClick={() => handleCookingRead(Preparing_time)} className='bg-green-400 p-3 rounded-xl'>Preparing</button></td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>


        </div>
    );
};

RecipeCount.propTypes = {
    bookmark: PropTypes.object,
    handleAddToPreperingTime: PropTypes.number
}

export default RecipeCount;