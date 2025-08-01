const list =  document.getElementById("list")



list.addEventListener("click" , (e) => {
    console.dir(e.target)
    if(e.target.matches('li')) {
        if(e.target.innerText === "Javascript") {
            e.target.style.backgroundColor = "yellow"
        }
        else{
            e.target.style.backgroundColor = "green"
        }
    }
    
})


function addElement ()  {

    const lan_input_element = document.getElementById("lan_input")
    lan_input_value = lan_input_element.value
    const newElement = document.createElement('li')
    newElement.innerHTML= lan_input_value
    list.appendChild(newElement)
    lan_input_element.value = ""

}