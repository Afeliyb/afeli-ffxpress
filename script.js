const prix = [900, 1700, 3700, 7200];
const inputs = document.querySelectorAll('input[type="number"]');
const totalDiv = document.getElementById("total");

inputs.forEach(input => {
    input.addEventListener("input", calculerTotal);
});

function calculerTotal() {
    let total = 0;
    inputs.forEach((input, index) => {
        total += parseInt(input.value || 0) * prix[index];
    });
    totalDiv.textContent = "Total : " + total.toLocaleString() + " FCFA";
}

function commander() {
    let message = "Bonjour, je souhaite acheter :%0A";
    let total = 0;

    inputs.forEach((input, index) => {
        let qte = parseInt(input.value || 0);
        if (qte > 0) {
            total += qte * prix[index];
            if (index === 0) message += `- ${qte} × 110 diamants%0A`;
            if (index === 1) message += `- ${qte} × 231 diamants%0A`;
            if (index === 2) message += `- ${qte} × 583 diamants%0A`;
            if (index === 3) message += `- ${qte} × 1188 diamants%0A`;
        }
    });

    let playerId = document.getElementById("playerId").value.trim();
    if (!playerId) {
        alert("Veuillez entrer votre ID Free Fire");
        return;
    }

    message += `Total : ${total.toLocaleString()} FCFA%0A`;
    message += `Mon ID Free Fire : ${playerId}%0A`;
    message += `Je vais envoyer la capture d'écran du paiement.`;

    let numero = "24162915709"; // ton numéro sans +
    window.open(`https://wa.me/${numero}?text=${message}`, "_blank");
}
