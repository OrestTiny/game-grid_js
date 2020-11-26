document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },

        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },

        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]


    cardArray.sort(() => 0.5 - Math.random())

    let grid = document.querySelector('.grid');
    let score = document.getElementById('result');
    score.textContent = ' 0';
    var cardsElem = [];
    var cardsElemId = [];
    var arrayScore = [];


    function gridWrapp() {
        for (let i = 0; i < cardArray.length; i++) {
            let blank = document.createElement('img');
            blank.setAttribute('src', 'images/blank.png');
            blank.setAttribute('data-id', i);
            blank.addEventListener('click', clickBlank)
            grid.appendChild(blank)
        }
    }

    function clickBlank() {
        let cards = this.getAttribute('data-id');
        cardsElem.push(cardArray[cards].name);
        cardsElemId.push(cards);
        this.setAttribute('src', cardArray[cards].img)
        if (cardsElem.length == 2) {
            setTimeout(creativCads, 500)
        }
    }


    function creativCads() {
        let img = document.querySelectorAll('img');

        if (cardsElemId[0] == cardsElemId[1]) {
            img[cardsElemId[0]].setAttribute('src', 'images/blank.png');
            img[cardsElemId[1]].setAttribute('src', 'images/blank.png');


        } else if (cardsElem[0] == cardsElem[1]) {
            img[cardsElemId[0]].setAttribute('src', 'images/white.png');
            img[cardsElemId[1]].setAttribute('src', 'images/white.png');
            img[cardsElemId[0]].removeEventListener('click', clickBlank);
            img[cardsElemId[1]].removeEventListener('click', clickBlank);
            arrayScore.push(cardsElem)

        } else {
            img[cardsElemId[0]].setAttribute('src', 'images/blank.png');
            img[cardsElemId[1]].setAttribute('src', 'images/blank.png');
        }

        cardsElem = [];
        cardsElemId = [];

        score.textContent = ' ' + arrayScore.length;
        if (arrayScore.length == cardArray.length / 2) {
            score.textContent = ' End'
        }
    }

    gridWrapp()
})