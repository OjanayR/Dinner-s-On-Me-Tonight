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
const ingredients = [];
for(i=1; i<=20; i++) {
    if (meal[`strIngredients${i}`]) {
        ingredients.push(`${meal[`strIngredients${i}`]} - ${meal[`strMeasure${i}`]}`)
    } else {
        break;
    }
}

mealContainer.innerHTML = `
<div class= "row">
<div class= "column five">
<img src = "${meal.strMealThumb}" alt="Meal Img"/>
<p><strong>Area:</strong> ${meal.strArea}</p>
<h3>Ingredients</h3>
<ul>${ingredients.map(ingredient => `
<li>${ingredient}</li>`).join('')}
</ul>
</div>
<div class= "column seven">
<h3>${meal.strMeal}</h3>
<p>${meal.strInstructions}</p>
</div>
</div>

<div class= "row">
<h3>Video Instructions</h3>
<div class="videoWrapper">
<iframe src= "https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"/>
</div>

</div>
    `;

}
