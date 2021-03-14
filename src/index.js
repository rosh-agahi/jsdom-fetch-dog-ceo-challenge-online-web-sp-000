console.log('%c HI', 'color: firebrick')

const dogBreeds = document.querySelector("#dog-breeds")
const breedDropdown = document.querySelector("#breed-dropdown")

document.addEventListener('DOMContentLoaded', function() {
  loadImages();
  loadDogBreeds();
  addBreedSelectListener()
})

function loadImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(results => { results.message.forEach(image => addImage(image))});
}