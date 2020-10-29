const getMealBtn = document.getElementById("TACO");
const mealContainer = document.getElementById('meal');

getMealBtn.addEventListern('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0])
    })
});

function createMeal(meal) {
    const ingredients = [];
    for (i=1; i<=20; i++) {
        if (meal [`strIngredients${i}`]) {
            ingredients.push(`${meal[`strIngredients${i}`]}) - ${meal[`strMeasure${i}`]}`
            )
        } else {
            break;
        }
}

mealContainer.innerHTML = `
<div class= "row">
<div class= "column five">
<img src = "${meal.strMealThumb}" alt="Meal Img"/>
<p><strong>Area:</strong> ${meal.strArea}</p>
<h5>Ingredients</h5>
<ul>${ingredients.map(ingredients => `
    <li>${ingredients}</li>`).join('')}
</ul>
<div>
<div class= "column seven">
<h4>${meal.strMeal}</h4>
<p>${meal.strInstructions}</p>
</div>
</div>

<div class ="row">
<h5>Video Instructions</h5>
<div class = "videoWrapper">
<iframe src = ""https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"/>
</div>
<div>
`;
}