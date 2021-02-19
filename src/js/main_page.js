/* GLOBAL VARIABLES */
let username = ''

/* LOAD JSON DOCUMENT */
document.querySelector('#load_json_button').addEventListener('click', trearDatos)

function trearDatos(){
    const xhttp = new XMLHttpRequest()
    
    xhttp.open('GET', './src/json/biblioteca.json', true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText)

            let tableContents = document.querySelector('#table__contents')
            tableContents.innerHTML = ''
            for(let item of data){
                tableContents.innerHTML += `
                    <tr>
                        <th>${item.Libro}</th>
                        <th>${item.Autor}</th>
                        <th>${item.Leido}</th>
                    </tr>
                `
            }
        }
    }
}

/* MODAL ACTIONS */
document.getElementById('modal_button').addEventListener("click", function() {
    username = document.getElementById('username')
    if (username.value != ''){
        document.querySelector('.background_modal_section').style.display = "none";
    } else {
        document.getElementById('modal_warning').innerHTML = 'Por favor, dime como quieres que te llamemos'
    }
});