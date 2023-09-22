
/* 
// Component_8 - Recipe Finder

State:
    • recipes: Create a state called recipes which will store an array of all recipes (have chatgpt product that for you)
    • matchedRecipes: Create this state which will store an array of matched recipes based on the ingredients entered by the user.
    • searchInput: Create another state to track the real-time input changes in the text field where users enter ingredients.

Input:
    • Design a text field, or input, where users can type in the ingredients they have or are interested in. Bind the value of this field to the searchInput state, ensuring that it updates in real time as the user types.
  

Buttons:
    • Incorporate a "Find Recipe" button that, when clicked, initiates the searchRecipe function.

Function:
    • searchRecipe: This function takes the value from the searchInput state, queries a recipe database (or an array of recipes, if hardcoded), filters the recipes based on the entered ingredients, and then updates the matchedRecipes state with the filtered results.

Display:
    • Render a list or grid of recipes stored in the matchedRecipes state.
    
*/