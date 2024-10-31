window.onload = function() {
    // Crear el contenedor del banner
    const disclaimerBanner = document.createElement("div");
    disclaimerBanner.style.position = "fixed";
    disclaimerBanner.style.top = "0";
    disclaimerBanner.style.left = "0";
    disclaimerBanner.style.width = "100%";
    disclaimerBanner.style.backgroundColor = "#333";
    disclaimerBanner.style.color = "#fff";
    disclaimerBanner.style.padding = "20px";
    disclaimerBanner.style.textAlign = "center";
    disclaimerBanner.style.zIndex = "1000";

    // Agregar el mensaje en español e inglés
    disclaimerBanner.innerHTML = `
        <p style="margin: 0; font-size: 16px;">
            <strong>Aviso importante:</strong> Esta página es un mockup de la plataforma YouTube, creado únicamente para fines demostrativos y sin ningún propósito comercial. Ni esta página ni su código están destinados a ser utilizados con otros fines. Los autores no se hacen responsables de cualquier uso adicional de la página y/o del código por parte de terceros.<br>
            <strong>Important Notice:</strong> This page is a mockup of the YouTube platform, created solely for demonstrative purposes and with no commercial intent. Neither this page nor its code are intended for other uses. The authors are not responsible for any additional use of the page and/or code by third parties.
        </p>
        <button style="margin-top: 10px; padding: 10px 20px; font-size: 16px; background-color: #5EBC67; color: #fff; border: none; cursor: pointer;">Aceptar / Accept</button>
    `;

    // Agregar el banner al cuerpo de la página
    document.body.appendChild(disclaimerBanner);

    // Añadir el evento de cierre al botón
    const closeButton = disclaimerBanner.querySelector("button");
    closeButton.onclick = function() {
        disclaimerBanner.style.display = "none";
    };
};
