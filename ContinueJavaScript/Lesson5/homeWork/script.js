const newData = JSON.parse(data);
console.log(newData);

const divContentElem = document.querySelector('.content');

newData.forEach(element => {
    const imgUrl = `https://example.com/images/${element._id}.jpg`;
    const tagsStr = element.tags.join(', ');

    divContentElem.insertAdjacentHTML('beforeend', `
    <div class='wrapper'>
        <img src="${imgUrl}" alt="Котик" width="200" height="200">
        <p>Теги: ${tagsStr}</p>
        <p>Мимотип: ${element.mimetype}</p>
        <p>Размер: ${element.size}</p>
    </div>
    `);
});