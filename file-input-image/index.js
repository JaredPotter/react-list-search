const uploadButtonElement = document.querySelector('#uploadButton');
const fileInputElement = document.querySelector('#fileInput');
// const dropZoneElement = document.querySelector('#dropZone');

uploadButtonElement.addEventListener('click', function() {
    fileInputElement.click();
});

// dropZoneElement.addEventListener('drop', function(e) {
//     debugger;
// });

function fileChanged(e) {
  const file = e.files[0];

  const reader = new FileReader();

  reader.onload = function(e) {
    const imageUrl = e.currentTarget.result

    const imageElement = document.querySelector('#image');
    imageElement.src = imageUrl;
    debugger;
  };

  reader.readAsDataURL(file);
}
