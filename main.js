document.getElementById('search-button').addEventListener('click', function(){
    const inputName = document.getElementById('meal-input').value;
    console.log(inputName);
})



const url = ('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
fetch(url)
    .then(response => response.json())
    .then(data => foodDetect(data))

const foodDetect = food => {
    console.log(food.meals);
    const ul = document.getElementById("foodItem");
    for (let i = 0; i < food.meals.length; i++) {
        const foodName = food.meals[i];
        const li = document.createElement('li');
        li.innerText =foodName.strMeal;
        ul.appendChild(li);
        
    }


}