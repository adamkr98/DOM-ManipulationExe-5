let displayedSquareWrapper = document.querySelector(".displayedsquare-wrapper");

const actionSquares = document.querySelectorAll('.actionsquare')


const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}


let ul = document.querySelector("ul");


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

        newSquare.addEventListener("click", () => {
            alert("green");
        });
        
        newSquare.classList.add("displayedSquare", "green");
       
        displayedSquareWrapper.appendChild(newSquare);

        document.addEventListener("keydown", (event) => {
            if( event.code === "KeyS" ) {
                newSquare.remove();
           
          };
        }); 
    });

    violet.addEventListener("click", () => {
        let newSquare = document.createElement("div");

        newSquare.addEventListener("click", () => {
            alert("violet");
        });
        
        newSquare.classList.add("displayedSquare", "violet");
       
        displayedSquareWrapper.appendChild(newSquare);

        document.addEventListener("keydown", (event) => {
            if( event.code === "KeyS" ) {
                newSquare.remove();
           
          };
        }); 
    });

    orange.addEventListener("click", () => {
        let newSquare = document.createElement("div");

        newSquare.addEventListener("click", (event) => {
            alert("orange");
        });
        
        newSquare.classList.add("displayedSquare", "orange");
       
        displayedSquareWrapper.appendChild(newSquare);

        document.addEventListener("keydown", (event) => {
            if( event.code === "KeyS" ) {
                newSquare.remove();
           
          };
        });
    });

    let randomBackgroundColor = () => {
        let r = Math.floor(Math.random() * 256 );
        let g = Math.floor(Math.random() * 256 );
        let b = Math.floor(Math.random() * 256 );

        let randomColor = "rgb(" + r + "," + g + "," + b + ")";
        return randomColor;
    };
    // console.log(randomBackgroundColor());
   
    
    document.addEventListener("keydown", (event) => {

        if( event.key === " " ) {

            document.body.style.backgroundColor = randomBackgroundColor();
            
            let li = document.createElement("li");
            li.innerHTML =  "Spacebar has been clicked";
            ul.appendChild(li); 
                    
        };   
    });

    document.addEventListener("keydown", (event) => {



        if( event.code === "KeyL" ) {

            let li = document.querySelector("li");

                if( li ) {
                    li.remove();
                };
        };

       
        
    });
  
     

   
    
   

for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare);

        
    };
       


    
   