function calcularEngajamento() {
    var seguidores = document.getElementById("seguidores").value;
    var likes = document.getElementById("likes").value;
    var comentarios = document.getElementById("comentarios").value;
    var resultado = document.getElementById("resultado");

    if (seguidores === "" || likes === "" || comentarios === "") {
        resultado.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    seguidores = parseFloat(seguidores);
    likes = parseFloat(likes);
    comentarios = parseFloat(comentarios);

    if (isNaN(seguidores) || isNaN(likes) || isNaN(comentarios)) {
        resultado.textContent = "Por favor, insira números válidos.";
        return;
    }

    var engajamento = ((likes + comentarios) / seguidores) * 100;
    resultado.textContent = "Engajamento: " + engajamento.toFixed(2) + "%";
}