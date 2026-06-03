let totalArvores = 0;

function plantarArvore() {
    totalArvores++;

    document.getElementById("contador").textContent = totalArvores;

    if (totalArvores === 10) {
        alert("Parabéns! Você ajudou a plantar 10 árvores virtuais!");
    }
}
