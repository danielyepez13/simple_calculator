// clear
document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#display").value= ' ';
})

// backspace function

const backspace = () => {
    var num = document.querySelector("#display").value.slice(0, -1)
    document.querySelector("#display").value = num;

}

// one function
// const one = () => {
//     if(document.querySelector("#display").value == " "){
//         document.querySelector('#display').value = "1";
//     }else{
//         document.querySelector('#display').value = document.querySelector('#display').value + "1";
//     }
// }

// Funcion para mostrar numeros en display de calculadora
const number = (n) => {
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = n;
    }else{
        document.querySelector('#display').value = document.querySelector('#display').value + n;
    }
}