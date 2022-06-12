const brigada = [
    {
        name: 'Roman Voronin',
        age: '20',
        email: 'roma@gmail.com',
        address: 'Kharkiv',
    },
    {
        name: 'Danyl Honcharov',
        age: '19',
        email: 'danya@gmail.com',
        address: 'Zaporizhya',
    },
    {
        name: 'Vadim Dybihvost',
        age: '20',
        email: 'vadya@gmail.com',
        address: 'Pablograd',
    },
    {
        name: 'Vladyslav Dovhal',
        age: '20',
        email: 'vladick@gmail.com',
        address: 'Zaporizhya',
    },
];

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(brigada));
}

let users = JSON.parse(localStorage.getItem('users'));

const form = document.querySelector('#form');

displayUsers();
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        name: e.target.elements.name.value,
        age: e.target.elements.age.value,
        email: e.target.elements.email.value,
        address: e.target.elements.address.value,
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    e.target.reset();
    displayUsers();
});

function displayUsers() {
    const list = document.querySelector('.list');
    list.innerHTML = '';

    users.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.classList.add('listItem');

        const username = document.createElement('div');
        username.classList.add('userName');
        username.innerHTML = `${user.name}`;

        const moreBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.innerText = 'More';

        moreBtn.addEventListener('click', () => {
            if (userInfo.style.display === 'none') {
                userInfo.style.display = 'block';
            } else {
                userInfo.style.display = 'none';
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerText = 'Delete User';

        deleteBtn.addEventListener('click', () => {
            users = users.filter((elem) => elem != user);
            localStorage.setItem('users', JSON.stringify(users));
            displayUsers();
        });

        const userInfo = document.createElement('ul');
        userInfo.classList.add('userInfo');

        userInfo.innerHTML = `
    <li>Age: ${user.age}</li>
    <li>Email: ${user.email}</li>
    <li>Adress: ${user.address}</li>
    `;
        userInfo.style.display = 'none';
        listItem.appendChild(username);
        listItem.appendChild(moreBtn);
        listItem.appendChild(deleteBtn);
        listItem.appendChild(userInfo);
        list.appendChild(listItem);
    });
}
