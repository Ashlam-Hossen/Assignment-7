
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipe from './components/OurRecipe/OurRecipe'
import RecipeItems from './components/RecipeItems/RecipeItems'
import RecipeCounts from './components/RecipeCounts/RecipeCounts'



function App() {
   const [recipeCounts, setRecipeCounts] = useState([]);

   const [cookingTime,setCookingTime] = useState(0)

   const [preperingTimes,setPreperingTimes] = useState(0)

   const handleAddToRecipeCounts = recipe =>{
    // console.log(recipe);
    const newRecipeCounts = [...recipeCounts,recipe];
    setRecipeCounts(newRecipeCounts);
   }

   const handleCookingRead = (time,Recipe_id) =>{
    // console.log('marking as red',time)
     const newCookingTime = cookingTime + time;
     setCookingTime(newCookingTime);

    console.log('remove bookmark',Recipe_id)
    const remainingRecipeCounts = recipeCounts.filter(RecipeCount => RecipeCount.Recipe_id !== Recipe_id);
    setCookingTime(remainingRecipeCounts);
  }
  const handleAddToPreperingTime = prepering=>{
    const newprepering = [...preperingTimes,prepering];
    setPreperingTimes(newprepering)
  }

  return (
    <>  
    <Header></Header>
    <Banner></Banner>
    <OurRecipe></OurRecipe>
      <div className='md:flex w-10/12 mx-auto'>
         <RecipeItems 
         handleAddToRecipeCounts={handleAddToRecipeCounts}
         handleCookingRead={handleCookingRead}
         ></RecipeItems>

         <RecipeCounts 
         recipeCounts={recipeCounts}
         cookingTime={cookingTime}
         handleAddToPreperingTime={handleAddToPreperingTime}
         preperingTimes={preperingTimes}
         ></RecipeCounts>
      </div>
    
    </>
  );
};

export default App;
