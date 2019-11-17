// Version 3

// 1.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users
// - Displays the "name", "email" and "city" of the first person inside an unordered list (created programmatically using JavaScript)

  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(data => {
      // console.log(data);
      const infoList = document.createElement('ul');
      document.body.appendChild(infoList);
      const firstPerson = data[0];
      const personName = document.createElement('li');
      infoList.appendChild(personName);
      personName.innerHTML = `Name: ${firstPerson.name}`;
      const personEmail = document.createElement('li');
      infoList.appendChild(personEmail);
      personEmail.innerHTML = `Email: ${firstPerson.email}`
      const personCity = document.createElement('li');
      infoList.appendChild(personCity);
      personCity.innerHTML = `City: ${firstPerson.address.city}`;
    })
    .catch((error) => console.log(new Error(error)));
  }
  fetchData();

  // const apiURL = 'https://jsonplaceholder.typicode.com/users';
  // fetchData(apiURL);

// 2.
// Write a function that:
// - Takes in an array of strings:
const fruits = ["Strawberry", "Apple", "Papaya", "Banana", "Apricot", "Pear"];

// - Returns an array with the fruits that start with the letter "P"
function fruitsChecker(fruitsArray) {
  const result = fruitsArray.filter(item => item.startsWith('P'));
  return result;
}
console.log(fruitsChecker(fruits));

// 3.
// Using JavaScript only (adding HTML to index.html is NOT allowed), write a function that:
// - Creates a button element (with text "click me!")
// - Creates an empty image element and add it to the document.
// - Inserts an image URL into the <img> tag, when the button is clicked
// - Removes the button after the click
// - Use the following image URL: https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png

function btnClicking () {
const btn = document.createElement('button');
btn.innerHTML = 'Click me!';
document.body.appendChild(btn);
const newImage = document.createElement('img');
document.body.appendChild(newImage);
btn.addEventListener('click', function() {
  newImage.setAttribute('src', 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
  btn.style.display = 'none';
})
}
btnClicking();