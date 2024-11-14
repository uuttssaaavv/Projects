let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let para = document.querySelector("#msg");
let turnO = true;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count = 0;
const resetgame =()=>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
};
const draw = ()=>{
    para.innerText = `draw between player O and player X`;
    msgContainer.classList.remove("hide");
    disableboxes();

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText = "O";
            turnO =false;
            count++;
        }
        else
        {
            box.innerText ="X";
            turnO = true;
            count ++;
        }
        box.disabled = true;
       
          
            checkwinner();
        
    });
});
const enableboxes =()=>{
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        count = 0;
    }
};

const disableboxes =()=>{
    for(box of boxes)
    {
        box.disabled = true;
    }
};
const showwinner =(winner)=> {
    para.innerText = `Congratulations winner is player ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkwinner =()=>{
    for(let pattern of winpatterns){
        
            let value1 = boxes[pattern[0]].innerText;
            let value2 = boxes[pattern[1]].innerText;
            let value3 = boxes[pattern[2]].innerText;
           if(value1 !="" && value2 != "" && value3 != ""){
           if(value1 == value2 && value2 == value3){
                showwinner(value1);
           };
           if(count == 9 && !(value1 == value2 && value2 == value3)){
            draw();
           }

           } ;


    };
};
newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
