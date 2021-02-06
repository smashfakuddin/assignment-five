// document.getElementById('search-button').addEventListener('click', function(){
//     const inputName = document.getElementById('meal-input').value; 
//     //  foodDetect(food); 
// })

var inputName="";
function testFunction() {
    let inputName = document.getElementById('meal-input').value;
    
   anotherFunction(inputName);
   
};

function anotherFunction(inputName) {
    let url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputName}`)
    fetch(url)
        .then(response => response.json())
        .then(data => foodDetect(data))
}

// let url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${testName}`)
// fetch(url)
//     .then(response => response.json())
//     .then(data => foodDetect(data))

const foodDetect = food => {
    console.log(food.meals);
    const foodItem = document.getElementById("foodItem");
    for (let i = 0; i < food.meals.length; i++) {
        const foodName = food.meals[i];
        const foodDiv = document.createElement("div");

        const foodInfo = `
             <img  src="${foodName.strMealThumb}" alt="">   
             <h3 class="item">${foodName.strMeal}</h3>
             `
        foodDiv.innerHTML = foodInfo;
        foodItem.appendChild(foodDiv);

    }
}