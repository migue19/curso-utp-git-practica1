function cargarConcepto() {
    document.getElementById('concepto-content').innerHTML = '<div class="text-center py-8">Cargando...</div>';

    fetch('concepto.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('concepto-content').innerHTML = html;
        });
}