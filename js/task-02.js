const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsContainer = document.querySelector('#ingredients');

    const elements = ingredients.map(element => {
        const newList = document.createElement('li');
        newList.textContent = element;
        return newList;
    })

    ingredientsContainer.append(...elements);



  
  