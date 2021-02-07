
let inputName="";
function testFunction() {
    document.getElementById('foodItem').innerHTML ='';
    let inputName = document.getElementById('meal-input').value;    
   anotherFunction(inputName);
  
  
};

function anotherFunction(inputName) {
    let url1 = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputName}`)
    let url2 = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputName}`)
    fetch([url1 && url2])
        .then(response => response.json())
        .then(data => foodDetect(data))        
}

const foodDetect = food => {
    console.log(food.meals);
    const foodItem = document.getElementById("foodItem");
    for (let i = 0; i < food.meals.length; i++) {
        const foodName = food.meals[i];
        const foodDiv = document.createElement("div");

        const foodInfo = `
        <div onclick="testFunc('${foodName.strMeal}')">
             <img  src="${foodName.strMealThumb}" alt="">   
             <h3 class="item">${foodName.strMeal}</h3>
             </div.
             `
        foodDiv.innerHTML = foodInfo;
        foodItem.appendChild(foodDiv);
        document.getElementById('meal-input').value ='';
        
        
    }
    
}

function testFunc(name){
    const anotherUrl= (`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    console.log(anotherUrl);
}
