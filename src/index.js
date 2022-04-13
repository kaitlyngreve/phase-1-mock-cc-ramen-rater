// write your code here

// first create a variable to house your API link
const ramenUrl = 'http://localhost:3000/ramens'

// creating the function for my fetch()
const fetchRamenImg = () => {
    fetch(ramenUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}

// create a function for the data we recieve with the fetchRamenImg
function renderRamenImg(data) {
    // access the container the images should be stored in
    const ramenImgContainer = document.getElementById('ramen-menu');
    console.log(data)
    // access the array more directly, saying 'for each index in the array, do this'
    ramenImgArray.forEach = (ramenUrl) => {
        // create new elements for each key
        ramenUrl.image.src = document.createElement('img')

         ramenImgContainer.append(ramenUrl)
        
    }
}

// define the inupt tag as a button
const btn = document.getElementById('final-submit')
// console.log(btn)
const forms = document.getElementById('new-ramen');



forms.addEventListener('submit', (e) => {
    // the form data
    let name = document.createElement('p')
    let resturant = document.createElement('p')
})











// invoke functions DOWN HERE! 
fetchRamenImg()