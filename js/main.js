function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var overlay = document.querySelector('.overlay');
    modal.style.display = "block";
    overlay.style.display = "block";
}

function closeModal(event) {
    var modal = event.target.closest(".modal");
    var overlay = document.querySelector('.overlay');
    modal.style.display = "none";
    overlay.style.display = "none";
}

function addToCart(event) {
    alert("Producto agregado al carrito");
    closeModal(event);
}
