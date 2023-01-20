// affichage/masquage du mdp

var myPasswords = document.querySelectorAll('.password');
	

var eyeVisible = document.querySelectorAll('.uil-eye');
var eyeHidden = document.querySelectorAll('.uil-eye-slash');

for (let i = 0; i < eyeVisible.length; i++) {
    eyeVisible[i].addEventListener('click', () =>{
        affiMdp(i);
    });
}
for (let i = 0; i < eyeHidden.length; i++) {
    eyeHidden[i].style.display = "none";
    eyeHidden[i].addEventListener('click', () =>{
        affiMdp(i);
    });
}

function affiMdp(i) {
    if (myPasswords[i].type === "password") {
        eyeHidden[i].style.display = "";
        eyeVisible[i].style.display = "none";
        myPasswords[i].type = 'text';
    } else {
        eyeHidden[i].style.display = "none";
        eyeVisible[i].style.display = "";
        myPasswords[i].type = 'password';
    }
}


// changement du bouton menu après click

var menuO = document.getElementById('menuO');
var menuC = document.getElementById('menuC');
menuC.style.display = "none";

menuO.addEventListener('click', function(){
    menuO.style.display = "none";
    menuC.style.display = "";
});
menuC.addEventListener('click', function(){
    menuO.style.display = "";
    menuC.style.display = "none";
});

// alert("TM");