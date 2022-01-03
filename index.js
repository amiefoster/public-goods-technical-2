const BASE_URL = "https://cat-fact.herokuapp.com/facts";
const closeButton = document.querySelector('#close-button');
const getFacts = document.querySelector('#get-facts');
const factsContainer = document.querySelector('#facts-container');
const factsUl = document.querySelector('#fact-ul')

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

getFacts.addEventListener('click', fetchData)
document.addEventListener('DOMContentLoaded', init);