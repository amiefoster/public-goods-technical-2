const BASE_URL = "https://cat-fact.herokuapp.com/facts";
const closeButton = document.querySelector('#close-button');
const getFacts = document.querySelector('#get-facts');
const factsUl = document.querySelector('#fact-ul');
const popUp = document.querySelector('#pop-up');

let init = () => {
    console.log('here are some cat facts')

}

let fetchData = () => {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => renderFacts(data))
}

let renderFacts = (data) => {
    const facts = data

    facts.map(fact => {
        console.log(fact.text)
        const newLi = document.createElement('li')
        newLi.textContent = fact.text
        factsUl.appendChild(newLi)
    })
}

let closeWindow = () => {
    popUp.remove()
}

getFacts.addEventListener('click', fetchData)
closeButton.addEventListener('click', closeWindow)
document.addEventListener('DOMContentLoaded', init);