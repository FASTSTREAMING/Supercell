document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previene el envío normal del formulario

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;

    if (!document.getElementById('terms').checked) {
        alert('Por favor, lee y acepta los términos y condiciones para continuar.');
        return false;
    }

    var mensaje = encodeURIComponent("Yo, " + nombre + " " + apellido + ", con número de teléfono " + telefono + ", confirmo que he leído y acepto los términos y condiciones. Lei la politica de garantia y reembolso .Autorizo el uso de mis datos conforme a la política establecida.");
    var whatsappUrl = "https://wa.me/59178226437?text=" + mensaje;

    var thankYouPopup = document.getElementById('thankYouPopup');
    thankYouPopup.style.display = "block";

    var progressBar = document.getElementById('progressBar');
    progressBar.style.width = "0%";
    setTimeout(function() {
        progressBar.style.width = "100%";
    }, 10);

    setTimeout(function() {
        window.location.href = whatsappUrl;
    }, 3000);
});

// Manejo de la ventana modal para términos y condiciones
var termsModal = document.getElementById('termsModal');
var termsBtn = document.getElementById('termsLink');
var termsSpan = termsModal.getElementsByClassName("close")[0];

termsBtn.onclick = function() {
    termsModal.style.display = "block";
}

termsSpan.onclick = function() {
    termsModal.style.display = "none";
}

// Manejo de la ventana emergente de agradecimiento
var thankYouPopup = document.getElementById('thankYouPopup');
var thankYouSpan = thankYouPopup.getElementsByClassName("close")[0];

thankYouSpan.onclick = function() {
    thankYouPopup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == termsModal) {
        termsModal.style.display = "none";
    }
    if (event.target == thankYouPopup) {
        thankYouPopup.style.display = "none";
    }
}
