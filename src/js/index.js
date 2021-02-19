/* GLOBAL VARIABLES */
let username = ''

function redireccionar(){
    window.location="./pages/main_page.html";
}

document.getElementById('modal_button').addEventListener("click", function() {
    username = document.getElementById('username')
    if (username.value != ''){
        document.getElementById('background_modal_section').style.display = 'none'
    } else {
        document.getElementById('modal_warning').innerHTML = 'Por favor, dime como quieres que te llamemos'
    }
});