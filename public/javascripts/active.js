/// Url actual
let url = window.location.href;

/// Elementos de li
const tabs = ["#section-1", "#section-2", "#section-3", "#section-4", "#section-5"];

tabs.forEach(e => {
    /// Agregar .php y ver si lo contiene en la url
    if (url.indexOf("localhost:3000/" + e) !== -1) {
        /// Agregar tab- para hacer que coincida la Id
        setActive("tab-" + e);
    }

});

/// Funcion que asigna la clase active
function setActive(id) {
    document.getElementById(id).setAttribute("class", "nav-item active");
}