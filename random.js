
const sounds = document.getElementById("book");
let booklist = document.querySelectorAll(".LIB-ITEM");

setTimeout(definebook, 100);

function definebook(){
    booklist = document.querySelectorAll(".LIB-ITEM");

    booklist.forEach(i => {
        i.addEventListener("mouseover", () => {
            sounds.src = "./book.mp3";
            sounds.play();
        }); 
    });

    booklist.forEach(i => {
        i.addEventListener("click", (e) => {
            ids = e.originalTarget.id;
            idx = ids.split("^");
            x = Number(idx[0]);
            y = Number(idx[1]);

            e.originalTarget.classList.add("useitem");
            setTimeout(() => {
                tab.classList.remove("hide");
                e.originalTarget.classList.add("disable");
                document.getElementById("gogosing").innerHTML = randomArray[x][y] + "등";
            }, 500);
        }); 
    });
}


const boxes = [];
for (let i = 1; i <= 15; i++) {
  const box = document.getElementById(`box${i}`);
  boxes.push(box);
}

let ctn = 1;

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  for (let j = 0; j < 17; j++) {
    box.innerHTML += `<div class="LIB-ITEM" id="${i}^${j}">
                        <div class="LIB-CTN">${ctn}</div>
                    </div>`;
    ctn += 1;
  }
}

function NotReload(event){
    if( (event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82)) || (event.keyCode == 116) ) {
        event.keyCode = 0;
        event.cancelBubble = true;
        event.returnValue = false;
    } 
}
document.onkeydown = NotReload;

function createRandomArray() {
    const rows = 15;
    const cols = 17;
    const array = [];
    
    for (let i = 0; i < rows; i++) {
      array[i] = [];
      for (let j = 0; j < cols; j++) {
        array[i][j] = 0;
      }
    }
    let count = 0;
    while (count < 3) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (array[row][col] === 0) {
        array[row][col] = 1;
        count++;
      }
    }
    count = 0;
    while (count < 10) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (array[row][col] === 0) {
        array[row][col] = 2;
        count++;
      }
    }
  
    count = 0;
    while (count < 25) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (array[row][col] === 0) {
        array[row][col] = 3;
        count++;
      }
    }
  
    count = 0;
    while (count < 50) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (array[row][col] === 0) {
        array[row][col] = 4;
        count++;
      }
    }
  
    count = 0;
    while (count < 75) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (array[row][col] === 0) {
        array[row][col] = 5;
        count++;
      }
    }
  
    count = 0;
    while (count < 92) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (array[row][col] === 0) {
        array[row][col] = 6;
        count++;
      }
    }
  
    return array;
  }
  
const randomArray = createRandomArray();

function close_tab() {
    tab = document.getElementById("tab");
    tab.classList.add("hide");
}
