let displayedSquareWrapper = document.querySelector(".displayedsquare-wrapper");

const actionSquares = document.querySelectorAll('.actionsquare')


const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}


let ul = document.querySelector("ul");
let array = [];

// let isFunctionCalled = false;

const clickOnSquare = (e) => {
    // isFunctionCalled = true;

    let colorName = e.target.classList[1];
    let time = getElapsedTime();

        let li = document.createElement("li");

            li.innerHTML = "[" + time + "]" + " " + "Created a new " + e.target.classList[ 1 ] + " " + "square";
            ul.appendChild(li);
    };
    
    let square = document.querySelector(".displayedSquare");
    let green = document.querySelector(".green");
    let violet = document.querySelector(".violet");
    let orange = document.querySelector(".orange");

    green.addEventListener("click", () => {
        let newSquare = document.createElement("div");
        
        newSquare.classList.add("displayedSquare", "green");
       
        displayedSquareWrapper.appendChild(newSquare);
    });

    violet.addEventListener("click", () => {
        let newSquare = document.createElement("div");
        
        newSquare.classList.add("displayedSquare", "violet");
       
        displayedSquareWrapper.appendChild(newSquare);
    });

    orange.addEventListener("click", () => {
        let newSquare = document.createElement("div");
        
        newSquare.classList.add("displayedSquare", "orange");
       
        displayedSquareWrapper.appendChild(newSquare);
    });

   



for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare);

        
    };
       


    
   