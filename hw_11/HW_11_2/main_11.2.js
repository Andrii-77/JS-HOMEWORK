const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

const target = document.getElementsByClassName('target')[0];
fetch(url)
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        for (const recipe of recipes) {
            console.log(recipe);
            const recipeDiv = document.createElement('div');
            for (const recipeKey in recipe) {
                // console.log(recipeKey, recipe[recipeKey]); - для перевірки.
                if (Array.isArray(recipe[recipeKey])) {
                    const arrayAndTitleDiv = document.createElement('div');
                    const h4 = document.createElement('h4');
                    h4.innerText = `${recipeKey}:`;
                    const ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    for (const item of array) {
                        const li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayAndTitleDiv.append(h4, ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);
                } else {
                    if (recipeKey !== 'image') {
                        const keyDiv = document.createElement('div');
                        keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`;
                        recipeDiv.appendChild(keyDiv);
                    }
                }
            }
            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);
            target.appendChild(recipeDiv);
        }


    })