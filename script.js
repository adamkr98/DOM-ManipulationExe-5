
let displayedSquare = document.createElement("div");
displayedSquare.classList.add(".displayedSquare-wrapper");



const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}


let ul = document.querySelector("ul");

const clickOnSquare = (e) => {
    let colorName = e.target.classList[1];
    let time = getElapsedTime();

        let li = document.createElement("li");

            li.innerHTML = "[" + time + "]" + " " + "Created a new " + e.target.classList[ 1 ] + " " + "square";
            ul.appendChild(li);
    };


const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);

}


    
   