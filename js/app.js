window.onload = function() {
    // Crear una ventana popup con el mensaje
    let disclaimerWindow = window.open("", "Disclaimer", "width=400,height=350");

    // Establecer el título de la ventana
    disclaimerWindow.document.title = "DISCLAIMER";

    // Escribir el contenido del mensaje en ambos idiomas en la nueva ventana
    disclaimerWindow.document.body.innerHTML = `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; font-size: 16px;">
            <p><strong>Aviso importante:</strong><br>
            Esta página es un mockup de la plataforma YouTube, creado únicamente para fines demostrativos y sin ningún propósito comercial. Ni esta página ni su código están destinados a ser utilizados con otros fines. Los autores no se hacen responsables de cualquier uso adicional de la página y/o del código por parte de terceros.</p>
            
            <p><strong>Important Notice:</strong><br>
            This page is a mockup of the YouTube platform, created solely for demonstrative purposes and with no commercial intent. Neither this page nor its code are intended for other uses. The authors are not responsible for any additional use of the page and/or code by third parties.</p>
            
            <p>Gracias por su comprensión / Thank you for your understanding.</p>
        </div>
    `;

    // Cerrar la ventana al hacer clic en cualquier parte
    disclaimerWindow.document.body.onclick = function() {
        disclaimerWindow.close();
    };
};
