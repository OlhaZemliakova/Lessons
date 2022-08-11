// Створити сторінку, що показує нумерований список пісень:

var playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];

function sortList(list) {
    let sortList = document.createElement('ol')
    sortList.setAttribute('class', 'sortList')

    for (let key of list) {
        key.toString = function keyToString() {
            key = `${this.song} - author: ${this.author} `
            return key
        }
    }

    for (let i = 0; i <= list.length - 1; i++) {
        let text = `${list[i]}`;
        let sortList__item = document.createElement('li')
        sortList__item.setAttribute('class', 'sortList__item')
        sortList.appendChild(sortList__item)
        sortList__item.innerText = text;
    }
    document.body.appendChild(sortList)
}
sortList(playList)

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном.
//На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається.
//При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

let button = document.createElement('button')
button.innerText = 'Відкрити'
button.setAttribute('style', 'padding: 8px; background-color: deeppink ; font-size: 16px; border: 2px solid black; border-radius:12px; width: 200px; color: black; margin:15px')
document.body.appendChild(button)

let modal = document.createElement('div')
modal.setAttribute('class', 'modal')
document.body.appendChild(modal)
modal.setAttribute('style', 'width:300px; height:200px; border-radius:12px; background-color: deeppink; opacity: 0; display:flex; align-items:center; justify-content:center; flex-direction: column; position: absolute; top: 100px')

let modal__text = document.createElement('span')
modal__text.innerText = "Закрити?"
modal__text.setAttribute('style', 'margin-bottom: 40px; color: black; font-size: 24px; text-align:center')
modal.appendChild(modal__text);

let modal__btn = document.createElement('button')
modal__btn.innerText = 'Закрити'
modal__btn.setAttribute('style', 'padding: 8px; border-radius: 10px; outline: none; background-color: white; color: black; font-size:30px; border: 2px solid black; cursor:pointer;')
modal.appendChild(modal__btn);

button.onclick = () => {
    modal.style.top === '100px' ? modal.style.top = '300px' : modal.style.top = '100px';
    modal.style.opacity === '0' ? modal.style.opacity = '1' : modal.style.opacity = '0';
}

modal__btn.onclick = () => {
    modal.style.top === '300px' ? modal.style.top = '100px' : modal.style.top = '300px';
    modal.style.opacity === '0' ? modal.style.opacity = '1' : modal.style.opacity = '0';
}

// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

let trafficLight = document.createElement('div');
    trafficLight.setAttribute('class','trafficLight');
    trafficLight.setAttribute('style','background-color: black; width: 150px; height 500px;  border-radius: 12px; margin: 15px; display:flex; flex-direction: column; align-items: center; justify-content:center; padding: 20px');
    document.body.appendChild(trafficLight);

let redLight = document.createElement('div');
    redLight.setAttribute('class','trafficLight__light');
    redLight.setAttribute('style','border-radius:50%; width: 70px;height: 70px; background-color: red; margin: 10px 0; opacity: 0.2');
    trafficLight.appendChild(redLight);
    
let yellowLight = document.createElement('div');
    yellowLight.setAttribute('class','trafficLight__light');
    yellowLight.setAttribute('style','border-radius:50%;width: 70px;height: 70px; background-color: yellow; margin: 10px 0; opacity: 0.2')
    trafficLight.appendChild(yellowLight);

let greenLight = document.createElement('div');
    greenLight.setAttribute('class','trafficLight__light');
    greenLight.setAttribute('style','border-radius:50%;width: 70px;height: 70px; background-color: green; margin: 10px 0; opacity: 0.2');
    trafficLight.appendChild(greenLight);   
    
let colorSwitcher = document.createElement('button');
    colorSwitcher.innerText = 'Change color';
    colorSwitcher.setAttribute('style', 'padding: 10px;background-color: deeppink; width: 80px; border-radius:12px; font-size:15px; border: 2px solid black; color: black; cursor:pointer; margin: 10px');
    document.body.appendChild(colorSwitcher);    


let node = null

colorSwitcher.onclick = () => selectNextNode()

function selectNextNode() {
    resetOpacity();
    let list = document.getElementsByClassName('trafficLight');
    if(node === null) {
        node = list[0].firstChild;
    }
    node.style.opacity = '1'; 
    node = node.nextSibling;
}

function resetOpacity() {
    let lightOpacity = document.getElementsByClassName('trafficLight__light');
    for(let i = 0; i < lightOpacity.length; i++) {
        lightOpacity[i].style.opacity = '0.2';
    }
}

colorSwitcher.onclick = () => selectNextNode()
