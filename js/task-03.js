const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const imagesContainer = document.querySelector('#gallery');

    const imagesJs = images.map(element => {
        const newGallery = document.createElement('li');
        const imagJs = document.createElement('img');
        imagJs.src = element.url;
        imagJs.alt = element.alt;
        // imagJs.setAttribute('max-width',1200);
        newGallery.insertAdjacentElement('afterbegin', imagJs);
        return newGallery;
    })

    imagesContainer.append(...imagesJs);




//   const imagesContainer = document.querySelector('#gallery');

//     const imagesJs = images.map(element => {
//         const newGallery = document.createElement('li');
//         const imagJs = document.createElement('img');
//         imagJs.src = element.url;
//         imagJs.alt = element.alt;
//         imagJs.setAttribute('width',800);
//         newGallery.append(imagJs);
//         return newGallery;
//     })
// console.log(imagesJs)
//     imagesContainer.append(...imagesJs);
    
