
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'


const RecipeItems = ({handleAddToRecipeCounts,handleCookingRead,}) => {

const [recipeItems, setRecipeItems] = useState([]);

    useEffect(() => {
        fetch('Recipe.json')
            .then(res => res.json())
            .then(data => setRecipeItems(data))
    }, [])

    return (
            <div className=" md:w-2/3">
                {/* <h1 className="text-4xl">Recipe Items: {recipeItems.length}</h1> */}
                {
                    recipeItems.map(recipe => <Recipe
                        key={recipe.Recipe_id}
                        recipe={recipe}
                        // --------------------
                        handleAddToRecipeCounts ={handleAddToRecipeCounts}
                        handleCookingRead ={handleCookingRead}
                        >
                    </Recipe>)
                }
         </div>
    );
};

RecipeItems.propTypes = {
    handleAddToRecipeCounts: PropTypes.func,
    handleCookingRead:PropTypes.func,
    handleAddToPreperingTime:PropTypes.func
}


export default RecipeItems;