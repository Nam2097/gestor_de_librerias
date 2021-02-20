/* GLOBAL VARIABLES */
let username = ''

/* USERNAME MODAL */
document.getElementById('modal_button').addEventListener("click", function() {
    username = document.getElementById('username')
    if (username.value != ''){
        document.querySelector('.background_username_modal').style.display = 'none'
    } else {
        document.getElementById('modal_warning').innerHTML = 'Por favor, dime como quieres que te llamemos'
    }
});