const images = [
    'https://tse3.mm.bing.net/th?id=OIP.jt0D3CCzYKTgt8kDOPbPuAHaE4&pid=Api&P=0',
    'https://tse4.mm.bing.net/th?id=OIP.QFWCOxeqkGJGteyLGRosMwHaEo&pid=Api&P=0',
    'https://tse2.explicit.bing.net/th?id=OIP.4GQVcoE787iPwHTUWRjK-wHaFj&pid=Api&P=0',
    'https://tse1.mm.bing.net/th?id=OIP.QgBCs4cudWe1HRVQZ2mMhgHaES&pid=Api&P=0',
    'https://tse3.mm.bing.net/th?id=OIP.AULsxKmsM5RkUhVuv02xPQHaHS&pid=Api&P=0',
    'https://tse4.mm.bing.net/th?id=OIP.2exJF15jFQbUcdgVhEEjOAHaHa&pid=Api&P=0',
    'https://tse3.explicit.bing.net/th?id=OIP.AaVI7vtnbZuYrGEzQO0QTwEsEq&pid=Api&P=0',
    'https://tse2.mm.bing.net/th?id=OIP.7MbnkmZWQG6X6JsQDV6JswHaHa&pid=Api&P=0',
    'https://tse4.mm.bing.net/th?id=OIP.ZDOlmw1Biy7CRhahRzl8vwHaEo&pid=Api&P=0',
  ];
  
  const smallContainer = document.querySelector('.smallFoto');
  const bigContainer = document.querySelector('.bigFoto');
  
  // Создаем маленькие картинки и добавляем их на страницу
  images.forEach((image) => {
    const foto = document.createElement('div');
    foto.classList.add('foto');
    foto.innerHTML = `<img src="${image}" alt="small Image">`;
    foto.addEventListener('click', () => {
      bigContainer.innerHTML = `<img src="${image}" alt="Big Image">`;
    });
    smallContainer.appendChild(foto);
  });
  