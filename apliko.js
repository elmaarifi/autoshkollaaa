document.getElementById("application-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Parandalon dërgimin e formularit

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const message = document.getElementById("message").value;
    // Funksioni për të kontrolluar moshën
    function calculateAge(dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth();
        if (month < birthDate.getMonth() || (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Kontrollon moshën
    const age = calculateAge(dob);
    if (age < 18) {
        document.getElementById("form-response").innerHTML = "<p style='color: red;'>Për të aplikuar duhet të jeni mbi 18 vjeç.</p>";
        return; // Kthen dhe ndalon dërgimin e formularit
    }

    // Kontrollon nëse të gjitha fushat janë plotësuar
    if (fullName && email && phone && dob && message) {
        document.getElementById("form-response").innerHTML = `<p>Faleminderit për aplikimin tuaj, ${fullName}. Ne do të ju kontaktojmë shpejt.</p>`;
        document.getElementById("application-form").reset(); // Pastrimi i formularit
    } else {
        document.getElementById("form-response").innerHTML = "<p style='color: red;'>Ju lutemi plotësoni të gjitha fushat.</p>";
    }
});
