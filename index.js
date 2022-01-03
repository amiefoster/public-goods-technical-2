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



//Things I would work on given more time

//I didnt get to any of the CSS styling but given more time I would have made the whole "pop up" into a modal component 
//I'd use bootstraps grid to organize the modal and place the picture on the left and the rest on the right
//I would have added some css styling to center the modal itsself and style the inner elements as close to the photo reference as possible!

//Next, I would work on making the modal pop-up
//I would try to use a combination of CSS and JS. 
//I would start by using CSS to hide the pop up, and on page load I would add the timer to wait 3 seconds and then unhide the pop up. 
//I would use CSS animation to make the pop up come up from the bottom of the screen. 

//Thank you for the oppourtunity to interview with Public Goods and I look forward to hearing from you! :) 