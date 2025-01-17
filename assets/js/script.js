// Générer un code d'invitation
function generateCode() {
    const code = 'INVITE-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    document.getElementById('invite-code').innerText = code;
}

// Marquer la présence
function markPresence() {
    const status = document.getElementById('status');
    status.innerText = "Présence marquée avec succès !";
    status.style.color = "green";
}
