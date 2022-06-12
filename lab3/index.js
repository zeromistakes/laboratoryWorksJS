const url = 'https://dummyjson.com/products';

const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = () => {
    let products = xhr.response.products;
    const list = document.querySelector('.productList');
    const searchInput = document.querySelector('.searchInput');

    products.forEach((p) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<li>${p.title}</li>`;
        list.appendChild(listItem);
    });

    searchInput.addEventListener('input', (e) => {
        let searchValue = e.target.value.toLowerCase().trim();
        const listItems = document.querySelectorAll('.productList li');

        if (searchValue != '') {
            listItems.forEach((p) => {
                if (p.innerText.toLowerCase().search(searchValue) == -1) {
                    p.style.display = 'none';
                } else {
                    p.style.display = 'list-item';
                }
            });
        } else {
            listItems.forEach((p) => {
                p.style.display = 'list-item';
            });
        }
    });
};
xhr.send();
