const totalCategories = document.querySelector('#categories').children.length;
console.log(`В списке ${totalCategories} категории.`);


const categoryJs = document.querySelectorAll('li.item');
categoryJs.forEach(category => 
    console.log('Категория:', category.firstElementChild.textContent, 
'Количество элементов:', category.lastElementChild.children.length)
);











