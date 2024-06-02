let flag = 0;
let count = 0;


let arr = [[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]];



function getid(id){
   if(id=='b1') return 0;
   if(id=='b2') return 1;
   if(id=='b3') return 2;
   if(id=='b4') return 3;
   if(id=='b5') return 4;
   if(id=='b6') return 5;
   if(id=='b7') return 6;
   if(id=='b8') return 7;
   if(id=='b9') return 8;
}

function iswin_diagonal() {
   let x = (arr[0][0] == arr[1][1]) && (arr[1][1] == arr[2][2]);
   let y = (arr[0][2] == arr[1][1]) && (arr[1][1] == arr[2][0]);
   return x | y;
}


function iswin_row() {
   let x = (arr[0][0] == arr[1][0]) && (arr[1][0] == arr[2][0]);
   let y = (arr[0][1] == arr[1][1]) && (arr[1][1] == arr[2][1]);
   let z = (arr[0][2] == arr[1][2]) && (arr[1][2] == arr[2][2]);
   return x | y | z;
}


function iswin_column() {
   let x = (arr[0][0] == arr[0][1]) && (arr[0][1] == arr[0][2]);
   let y = (arr[1][0] == arr[1][1]) && (arr[1][1] == arr[1][2]);
   let z = (arr[2][0] == arr[2][1]) && (arr[2][1] == arr[2][2]);
   return x | y | z;
}




function iswin(id,s){
   let x = Math.floor((id)/3);
   let y = id%3;
   arr[x][y] = s;
    return iswin_row() | iswin_column() | iswin_diagonal();
}


function addx(b){
try{
   let val = getid(b.id); 
   let a = b.firstChild;
   let new_element = document.createElement('h3');
   new_element.innerHTML = "<b> X </b>";
   a.appendChild(new_element);
   flag = 1-flag;
   count++;
   document.querySelector('#gameinfo').textContent = count;
   if(iswin(val,'x')) {
      alert('Winner Winner Chiken Dinner!!');
      document.querySelector('#yeah').style.visibility = "visible";
   }
}
catch(error){
   alert("Wrong Click");
}
}

function add0(b){
try{
   let val = getid(b.id); 
   let a = b.firstChild;
   let new_element = document.createElement('h3');
   new_element.innerHTML = "<b> 0 </b>";
   a.appendChild(new_element);
   flag = 1-flag;
   count++;
   document.querySelector('#gameinfo').textContent = count;
   if(iswin(val,'o')) {
      alert('Winner Winner Chiken Dinner!!');
      document.querySelector('#yeah').style.visibility = "visible";
   }
}
catch(error){
   alert("Wrong Click");
}
}



function reset(){
location.reload();
}



document.querySelector('#b1').addEventListener('click',(e) =>{
 if(flag)  addx(e.target);
 else add0(e.target);
})

document.querySelector('#b2').addEventListener('click',(e) =>{
   if(flag)  addx(e.target);
 else add0(e.target);
})

document.querySelector('#b3').addEventListener('click',(e) =>{
   if(flag)  addx(e.target);
 else add0(e.target);
})

document.querySelector('#b4').addEventListener('click',(e) =>{
   if(flag)  addx(e.target);
 else add0(e.target);
})

document.querySelector('#b5').addEventListener('click',(e) =>{
   if(flag)  addx(e.target);
 else add0(e.target);
})

document.querySelector('#b6').addEventListener('click',(e) =>{
   if(flag)  addx(e.target);
 else add0(e.target);
})

document.querySelector('#b7').addEventListener('click',(e) =>{
   if(flag)  addx(e.target);
 else add0(e.target);
})

document.querySelector('#b8').addEventListener('click',(e) =>{
   if(flag)  addx(e.target);
 else add0(e.target);
})
document.querySelector('#b9').addEventListener('click',(e) =>{
   if(flag)  addx(e.target);
 else add0(e.target);
})

document.querySelector('#btn').addEventListener('click', (e) =>{
   reset();
})