document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Parandalon dërgimin e formularit

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Kontrollon nëse të gjitha fushat janë plotësuar
    if (name && email && message) {
        document.getElementById("form-response").innerHTML = `<p>Faleminderit për mesazhin tuaj, ${name}. Ne do të ju kontaktojmë shpejt.</p>`;
        document.getElementById("contact-form").reset(); // Pastrimi i formularit
    } else {
        document.getElementById("form-response").innerHTML = "<p style='color: red;'>Ju lutemi plotësoni të gjitha fushat.</p>";
    }
});
