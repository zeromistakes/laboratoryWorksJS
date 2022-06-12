// 1. Конструктор User. Должен
// создавать пользователей с именем, почтой и паролем,
// иметь функции сброса пароля (установки нового),
// задания контрольного вопроса (спрашивается при изменении данных, если ок - продолжать),
// изменения имени и почты.
// Возможность дружить между пользователями. Удаления из друзей.
function User(name, password, email, secretWord) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.secretWord = secretWord;
    this.friends = [];

    this.addFriend = function (friendName) {
        this.friends.push(friendName);
    };
    this.removeFriend = function (friendName) {
        const friendIndex = this.friends.indexOf(friendName);
        this.friends.splice(friendIndex, 1);
    };

    this.resetPassword = function (newPassword, secretWord) {
        if (this.askSecretWord(secretWord)) {
            this.password = newPassword;
        } else {
            console.log('access denied: wrong secret word');
        }
    };

    this.changeName = function (newName, secretWord) {
        if (this.askSecretWord(secretWord)) {
            this.name = newName;
        } else {
            console.log('access denied: wrong secret word');
        }
    };

    this.resetEmail = function (newEmail, secretWord) {
        if (this.askSecretWord(secretWord)) {
            this.email = newEmail;
        } else {
            console.log('access denied: wrong secret word');
        }
    };

    this.askSecretWord = function (secretWord) {
        if (this.secretWord === secretWord) {
            return true;
        } else {
            return false;
        }
    };
}

let user = new User('vasya', '123', 'qwe@com', 'dog');
console.log('initial ---', user);

user.resetPassword('312', 'dog');
console.log('right word ---', user);

user.resetPassword('3882', 'dok');
console.log('wrong word ---', user);

user.resetEmail('rrr@fas', 'dog');
console.log('email reset', user);

user.changeName('vitalya', 'dog');
console.log('name reset', user);

user.addFriend('Ivan');
console.log('friend added', user);

user.removeFriend('Ivan');
console.log('friend deleted', user);
