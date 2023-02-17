// Define an array to store ticket objects
let beleter = [];

// Function to register a new ticket purchase
function registrerBillett() {
    // Get the values of the input fields
    const bestling={
         film : document.getElementById("film").value,
         antall : document.getElementById("antall").value,
         firstName : document.getElementById("fornavn").value,
         lastName : document.getElementById("etternavn").value,
         phone : document.getElementById("telefonnr").value,
         email : document.getElementById("epost").value,

    };


    // Check if any input fields are empty
    if (!bestling.antall) {
        alert("Please quantity input field.");
        return;
    }

    if (!bestling.antall) {
        alert("Please  fill quantity input field.");
        return;
    }

    if (!bestling.firstName) {
        alert("Please fill firstName quantity input field.");
        return;
    }

    if (!bestling.lastName) {
        alert("Please fill lastName quantity input field.");
        return;
    }

    if (!bestling.phone) {
        alert("Please fill phone input field.");
        return;
    }

    if (!bestling.email) {
        alert("Please fill email quantity input field.");
        return;
    }else{

        beleter.push(bestling);
        console.log(beleter)

        // Reset the input fields
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";

        // Update the ticket list
        updateTicketList();
    }







    }






















// Function to update the ticket list
function updateTicketList() {
    // Get the output element
    const output = document.getElementById("output");

    // Clear the output element
    output.innerHTML = "";

    // If there are no beleter, show a message
    if (beleter.length === 0) {
        output.innerHTML = "Ingen billetter registrert.";
        return;
    }

    // Create a table to display the beleter
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const filmHeader = document.createElement("th");
    filmHeader.textContent = "Film";
    const quantityHeader = document.createElement("th");
    quantityHeader.textContent = "Antall";
    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Navn";
    const phoneHeader = document.createElement("th");
    phoneHeader.textContent = "Telefon";
    const emailHeader = document.createElement("th");
    emailHeader.textContent = "Epost";

    headerRow.appendChild(filmHeader);
    headerRow.appendChild(quantityHeader);
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(phoneHeader);
    headerRow.appendChild(emailHeader);
    table.appendChild(headerRow);

    // Add a row for each ticket
    for (let i = 0; i < beleter.length; i++) {
        const ticket = beleter[i];
        const row = document.createElement("tr");
        const filmCell = document.createElement("td");
        filmCell.textContent = ticket.film;
        const quantityCell = document.createElement("td");
        quantityCell.textContent = ticket.antall;
        const nameCell = document.createElement("td");
        nameCell.textContent = ticket.firstName + " " + ticket.lastName;
        const phoneCell = document.createElement("td");
        phoneCell.textContent = ticket.phone;
        const emailCell = document.createElement("td");
        emailCell.textContent = ticket.email;
        row.appendChild(filmCell);
        row.appendChild(quantityCell);
        row.appendChild(nameCell);
        row.appendChild(phoneCell);
        row.appendChild(emailCell);
        table.appendChild(row);
    }

    // Add the table to the output element
    output.appendChild(table);
}



function clearTickets() {
    // Clear the beleter array
    beleter = [];

    // Update the ticket list
    updateTicketList();
}