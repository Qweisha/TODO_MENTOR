var inputTask = document.getElementById('input');
var inputTODO;
var  divOpr = document.getElementById('tasks'); 


inputTask.addEventListener("keyup",function(e){
    if(e.keyCode===13){
       
        inputTODO = inputTask.value
        addElement (inputTODO)
        e.preventDefault();
       
}
})

function addElement (inputTODO) {
    const newTask = document.createElement('DIV');
    const newP = document.createElement('p');
    newP.setAttribute('class' ,'title-prgraph')
    const newCircle = document.createElement('button');
    newCircle.setAttribute("onclick", "myFunctione(event)");
    newCircle.classList.add('btn' );
    const newX = document.createElement('i');
    newX.classList.add('igoner','fas', 'fa-times');
    newX.setAttribute("onclick", "removeFunction(event)");
    newTask.innerHTML= inputTODO ;
    newTask.appendChild(newX);
    newTask.prepend(newP);
    newTask.prepend(newCircle);
    divOpr.prepend(newTask);
    document.getElementById('input').value = ''
}
function myFunctione(event) {
    event.textContent =""
    var btn = event.target;
    if(btn.tagName === "BUTTON"){
        var  newchild = document.createElement('i');
        newchild.classList.add('circle','fas', 'fa-check-circle');
        btn.appendChild(newchild)
     
        }else {
        btn.remove()
    }
 }


function removeFunction(event) {
  var x = event.target.parentElement;
  x.remove()
}