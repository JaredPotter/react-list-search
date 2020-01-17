const firstNameElement = document.querySelector('#firstName');
// lastName
// age
// favorite food


function fileChanged(e) {
    const file = e.files[0];

    const reader = new FileReader();

    reader.onload = function(e) {
        const jsonString = e.currentTarget.result;
        const obj = JSON.parse(jsonString);

        firstNameElement.value = obj.firstName;

    };

    reader.readAsText(file);
}