const userData = [
    {
        "id": 1,
        "name": "John",
        "description": "fafewqrewrqwer2322revzd",
        "profilePicture": "https://images.unsplash.com/1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
        "id": 2,
        "name": "Josh",
        "description": "qweqwsxasdqwew",
        "profilePicture": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
        "id": 3,
        "name": "Jane",
        "description": "yjtykyumjhjhjkgjhhjkhkj",
        "profilePicture": "https://media.istockphoto.com/photos/elegant-beauty-picture-id516208984?k=20&m=516208984&s=612x612&w=0&h=KooFBmqHtO2lz5CFV5Oe87u_12wgKCxHvTHxlYuErCU="
    },
    {
        "id": 4,
        "name": "Iness",
        "description": "k4jh23k4jh23kjhk2jhk",
        "profilePicture": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    {
        "id": 5,
        "name": "Alex",
        "description": ";oiu;oxzkxfaklwejlkwej",
        "profilePicture": "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },
    {
        "id": 6,
        "name": "Nathan",
        "description": "lkheklerhtlk3jtk34jh5kjhkwekfjekjfahe",
        "profilePicture": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        "id": 7,
        "name": "Tracy",
        "description": "rerewervdfgdfgsdfgsdgsdfgsdfg",
        "profilePicture": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "id": 8,
        "name": "James",
        "description": "yjtykyumjhjhjkgjhhjkhkj",
        "profilePicture": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    }
]



const root = document.querySelector('#root')


function section(user) {
    const section = document.createElement('section'); 
    section.classList.add('section');
    const userArticle = article();
    const userDesc = p(user.description);
    const userImg = img(user.profilePicture);
    const userHeading = h1(user.name);
    const userButton = button();
    userArticle.append(userImg);
    userArticle.append(userHeading);
    userArticle.append(userDesc);
    userArticle.append(userButton);
    userButton.textContent = 'Connect';
    section.append(userArticle);
    return section;
}

function article(desc) {
  const article = document.createElement('article');
  article.textContent = desc;
  article.classList.add('article');
  return article;
}

function img(imgSrc) {
  const img = document.createElement('img');
  img.setAttribute('src', imgSrc); 
  img.classList.add('img');
  return img;
}

function h1(name) {
  const h1 = document.createElement('h1');
  h1.textContent = `${name}`;
  h1.classList.add('h1');
  return h1;
}

function p(desc) {
  const p = document.createElement('p');
  p.textContent = `${desc}`;
  p.classList.add('p');
  return p;
}

function button() {
    const button = document.createElement('button');
    button.classList.add('button');
    return button;
}

const userCards = userData.map(section);
root.append(...userCards);