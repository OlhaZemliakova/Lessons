// 1. Створити HTML-сторінку для відображення/редагування тексту.
//При відкритті сторінки текст відображається за допомогою тега div.
//При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати.
//При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом.
//Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.


let subtitle = document.createElement('p')
    subtitle.innerText = 'Ctrl+E-edit / Ctrl+S-save'
    document.body.appendChild(subtitle);

let divText = document.createElement('div')
    divText.classList.toggle('divText')
    divText.setAttribute('style','width: 200px; height: 200px; border: 1px solid black; margin: 20px; border-radius: 12px; position: relative; display: flex; box-sizing: border-box;')
    document.body.appendChild(divText);

let divText__text = document.createElement('span')
    divText__text.classList.toggle('divText__text')
    divText__text.setAttribute('style', 'z-index:1; text-wrap:wrap; width: 100%; font-size: 20px; padding: 5px')
    divText__text.innerText = 'Text:' 
    divText.appendChild(divText__text)

let textArea = document.createElement('textarea')
    textArea.setAttribute('id', 'textArea');
    textArea.setAttribute('style','position: absolute; width:100%; height: 100%; z-index:-1;; border-radius: 5px; border: 0;display:none; font-size: 20px; padding: 3px ')
    divText.appendChild(textArea);

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyE' && (event.ctrlKey || event.metaKey)){
        let area = document.getElementById('textArea');
        area.value = divText__text.innerText;
        area.setAttribute('style','position: absolute; width:100%; height: 100%; z-index:2; border-radius: 5px; border: 0; outline: none ;font-family: Arial, sans-serif; font-size: 20px; padding: 3px ')
        area.focus()
        event.preventDefault()
        area.addEventListener('keydown', function(event){
            if(event.code == 'KeyS' && (event.ctrlKey || event.metaKey)){
                divText__text.innerText = area.value
                area.style.display = 'none'
                event.preventDefault()
            }
        })
    }
}) 


// 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати
//дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

grid.onclick = function (e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    // якщо клітинка TH, тоді сортувати
    // cellIndex -- це номер клітинки th:
    // 0 для першого стовпця
    // 1 для другого і т.д.
    sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    // compare(a, b) порівнює два рядки, необхідно для сортування
    let compare;

    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }

    // сортування
    rowsArray.sort(compare);

    tbody.append(...rowsArray);
}

// 3.Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку,
//якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

const body = document.getElementById('body')

const block = document.createElement('div')
    block.setAttribute('id','block')
    block.classList.toggle('block')
    block.setAttribute('style','position: absolute; width: 350px; min-width: 100px; max-width: 90%; height: 100px; min-height: 50px; max-height: 200px; border: 1px solid black; margin: 15px; border-radius: 10px; display: flex; box-sizing: border-box; padding: 8px;')
    document.body.appendChild(block);

const blockResizer = document.createElement('div')
    blockResizer.setAttribute('id','blockResizer')
    blockResizer.classList.toggle('resizer')
    blockResizer.setAttribute('style','width: 10px; height: 10px; border: 1px solid black; border-radius: 50%; position: absolute; cursor: nwse-resize; bottom: -4px; right: -4px;background-color: white')
    block.appendChild(blockResizer);


let block__text = document.createElement('p')
    divText__text.classList.toggle('block__text')
    block__text.setAttribute('style', 'width: 100%; height: 100%; font-size: 20px;')
    block__text.innerText = 'Some text' 
    block.appendChild(block__text)


function resizeDiv(div){
    const element = document.querySelector(div);
    const resizer = document.querySelector(div + ' .resizer');
  
    resizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      body.addEventListener('mousemove', resize)
      body.addEventListener('mouseup', stopResize)
    })

    function resize(e){
        element.style.width = e.pageX - element.offsetLeft + 'px';
        element.style.height = e.pageY- element.offsetTop + 'px';
    }

    function stopResize(){
        body.removeEventListener('mousemove', resize)
    }
}

resizeDiv('.block')




