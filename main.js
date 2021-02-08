let inputName = "";
const searchFood = () => {
    document.getElementById('ShowfoodInfo').innerHTML = '';
    document.getElementById('foodItem').innerHTML = '';
    let inputName = document.getElementById('meal-input').value;
    foodSearchResult(inputName);


};

const foodSearchResult = inputName => {
    let url1 = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputName}`)
    let url2 = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`)
    fetch([url1 && url2])
        .then(response => response.json())
        .then(data => foodDetect(data))
        .catch(error => handleError("Sorry! There is no match.Try again"))
}

const foodDetect = food => {

    const foodItem = document.getElementById("foodItem");
    for (let i = 0; i < food.meals.length; i++) {
        const foodName = food.meals[i];
        const foodDiv = document.createElement("div");

        const foodInfo = `
        <div onclick="displayFoodDetail('${foodName.strMeal}')">
             <img  src="${foodName.strMealThumb}" alt="">   
             <h3 class="item">${foodName.strMeal}</h3>
             </div.
             `
        foodDiv.innerHTML = foodInfo;
        foodItem.appendChild(foodDiv);
        document.getElementById('meal-input').value = '';


    }

}

const displayFoodDetail = name => {
    const anotherUrl = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    fetch(anotherUrl)
        .then(response => response.json())
        .then(data => showFoodDetails(data.meals[0]))
}

const showFoodDetails = meals => {
    const ShowDetailUser = document.getElementById('ShowfoodInfo');
    ShowDetailUser.innerHTML = `
        <img src="${meals.strMealThumb}" alt="">
        <h1>${meals.strMeal}</h1>
        <h3>Ingredient</h3>
        <p>${meals.strIngredient1}</p>
        <p>${meals.strIngredient2}</p>
        <p>${meals.strIngredient3}</p>
        <p>${meals.strIngredient4}</p>
        <p>${meals.strIngredient5}</p>
        <p>${meals.strIngredient6}</p>       
    `
}

const handleError = error =>{
    const errorMassage = document.getElementById('display-error');
    errorMassage.innerText = error;
    

}