const url = ('https://www.themealdb.com/api/json/v1/1/random.php','https://www.themealdb.com/api/json/v1/1/search.php?f=a')
fetch(url)
.then(response => response.json())
.then(data => foodDetect("Apple Frangipan Tart"))

const foodDetect = foodName => {
    console.log(data[0].meals.strMeal)
}