function saveFormData() {
    // Get form values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var website = document.getElementById("website").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    console.log(msg)
    // Create an object to store the form data
    var formData = {
        name: name,
        email: email,
        phone: phone,
        msg: msg,

        website: website
    };

    // Send the form data to the server
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function saveFormDataJS() {
    // Get form values
    var name = document.getElementById("name2").value;
    var phone = document.getElementById("phone2").value;
    var attachment = document.getElementById("attachment").value;
    var email = document.getElementById("email2").value;

    console.log(msg)
    // Create an object to store the form data
    var formData = {
        name: name,
        email: email,
        phone: phone,


        attachment: attachment
    };

    // Send the form data to the server
    fetch('/submit-form2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
function saveFormDataBE() {

    // Get form values
    var name1 = document.getElementById("name1").value;
    var phone1 = document.getElementById("phone1").value;
    var company = document.getElementById("company").value;
    var service = document.getElementById("service").value;
    var employee = document.getElementById("employee").value;
    var location = document.getElementById("location").value;
    var email1 = document.getElementById("email1").value;
    var Req = document.getElementById("Req").value;

    // Create an object to store the form data
    var formData1 = {
        name: name1,
        email: email1,
        phone: phone1,
        company: company,
        service: service,
        employee: employee,
        location: location,
        Req: Req,

    };

    // Send the form data to the server
    fetch('/submit-form1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData1),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


