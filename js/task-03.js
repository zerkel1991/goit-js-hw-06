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

const firstObj = images[0];
const secondObj = images[1];
const thirdObj = images[2];

const firstImage = document.createElement('img');
firstImage.src = firstObj.url;
firstImage.alt = firstObj.alt;
firstImage.width = 620;
firstImage.classList.add("gallery__image")

const firstLi = document.createElement("li");
firstLi.classList.add("gallery__item")
firstLi.appendChild(firstImage);


const secondImage = document.createElement('img');
secondImage.src = secondObj.url;
secondImage.alt = secondObj.alt;
secondImage.width = 620;
secondImage.classList.add("gallery__image")

const secondLi = document.createElement("li");
secondLi.classList.add("gallery__item")
secondLi.appendChild(secondImage);

const thirdImage = document.createElement('img');
thirdImage.src = thirdObj.url;
thirdImage.alt = thirdObj.alt;
thirdImage.width = 620;
thirdImage.classList.add("gallery__image")

const thirdLi = document.createElement("li");
thirdLi.classList.add("gallery__item")
thirdLi.appendChild(thirdImage);

const gallery = document.querySelector(".gallery");
gallery.append(firstLi,secondLi,thirdLi);