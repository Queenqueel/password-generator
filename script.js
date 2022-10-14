let sliderElement = document.getElementById('slider');
let buttonElement = document.getElementById('btn');

let sizePassword = document.getElementById('valor');
let password = document.getElementById('password');

let containerPasswors = document.getElementById('container-password');

let charset = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ0123456789.";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    novaSenha = pass;
    containerPasswors.classList.remove('hide');
    password.innerHTML = pass;

}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    swal("Bom trabalho!", "Senha copiada com sucesso", "success");
}