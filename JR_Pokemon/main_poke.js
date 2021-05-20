//grab data from the form
const form = document.querySelector('#pokeDataForm')
console.log(form);

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event);
    let name = event.path[0][0].value;
    console.log(name);
})

const getData = async (pokemon) => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response);
    return response.data;
}


const createList = (id, Name, Height) =>{
    const html = `<a href="https://pokeapi.co/api/v2/pokemon/${id}/" class="list-group-item list-group-item-action list-group-item-light" id=${id}>${Name} ${Height}</a>`;
    document.querySelector('.kekambas-list').insertAdjacentHTML('beforeend', html);
}


// Function to load data and display HTML
const loadData = async () => {
    const pokeSection = document.getElementsByClassName('pokemon-results')[0].childElementCount
    if (pokeSection){
        console.warn('You already have data. Hit "clear" to search again')
    }else{
        const poke = await getData();
        console.log(poke);
        poke.forEach((element) =>{
            createList(element.id, element.name, element.height)
        });
    }
}


// Function to clear data from HTML
const clearData = () => {
    document.getElementsByClassName('pokemon-results')[0].innerHTML = '';
}

