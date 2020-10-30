const getMealBtn = document.getElementById("TACO");
const mealContainer = document.getElementById('meal');





getMealBtn.addEventListener('click', () => {
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(res => {
    createMeal(res.meals[0])

})
});


function createMeal(meal) {
const availableIngredients = [];
for(let i=1; i<=20; i++) {
    if (meal[`strIngredients${i}`]) {
        availableIngredients.push(`${meal.strIngredients[i]} - ${meal.strMeasure[i]}`)
    } else {
        break;
    }
    console.log(availableIngredients);
}


mealContainer.innerHTML = `
<div class= "row">
<div class= "column five">
<img src = "${meal.strMealThumb}" alt="Meal Img"/>
<p><strong>Area:</strong> ${meal.strArea}</p>
<p><strong>Tags:</strong>
${meal.strTags.split(',').join(', ')}</p>

<h3>Ingredients</h3>
<ul>${availableIngredients.map(ingredient => `
<li>${ingredient}</li>`).join('')}
</ul>
</div>
<div class= "column seven">
<h3>${meal.strMeal}</h3>
<p>${meal.strInstructions}</p>
</div>
</div>
<div class ="videoWrapper">
<iframe src = "https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"/>
</div>

</div> 
`;
}



