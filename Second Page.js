// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get elements from the document
  var imageElement = document.getElementById('backgroundImage');
  var container = document.getElementById('imageContainer');
  var detailButton;

  // Function to handle mouseover event
  function handleMouseOver() {
      // Make the image element visible when mouseover occurs
      imageElement.style.display = 'block';
  }

  // Add mouseover event listener to the container
  container.addEventListener('mouseover', handleMouseOver);

  // Initially hide the image element
  imageElement.style.display = 'none';

  // Array of image URLs
  var imageUrls = [
      // Image URLs
      'https://payload.cargocollective.com/1/3/119931/12113932/Anorak-Cake-Issue-Cover_1000.jpg',
      'https://payload.cargocollective.com/1/3/119931/14227590/Bunny-Bear-Wear_2_1000.png'
  ];

  // Iterate over the array of image URLs
  for (var i = 0; i < imageUrls.length; i++) {
      // Create an img element for each URL
      var linkImage = document.createElement('img');
      linkImage.src = imageUrls[i];
      // Set image styles
      linkImage.style.width = 'auto';
      linkImage.style.maxWidth = '100%';
      linkImage.style.height = 'auto';
      linkImage.style.display = 'none'; // Initially hide the image
      linkImage.style.margin = '80px auto 0';
      // Append the image to the container
      container.appendChild(linkImage);
  }

  // Add click event listener to the main image element
  imageElement.addEventListener('click', function () {
      // Loop through the container's children and make them visible
      for (var i = 1; i < container.children.length; i++) {
          container.children[i].style.display = 'block';
      }

      // Create a detail button
      detailButton = document.createElement('button');
      detailButton.id = 'detailButton';
      detailButton.textContent = 'Detail';
      detailButton.onclick = showDetailImages;
      // Append the button to the container
      container.appendChild(detailButton);

      // Remove the mouseover event listener from the container
      container.removeEventListener('mouseover', handleMouseOver);
  });

  // Function to show detail images
  function showDetailImages() {
      // Creating additional image elements
      var fourthImage = document.createElement('img');
      fourthImage.src = 'https://payload.cargocollective.com/1/3/119931/13993865/Lisa-Simpson_1000.jpg';
      // Setting image styles
      fourthImage.style.maxWidth = '100%';
      fourthImage.style.height = 'auto';
      fourthImage.style.display = 'block';
      fourthImage.style.margin = '80px auto 0';
      // Appending to the container
      container.appendChild(fourthImage);

      var fifthImage = document.createElement('img');
      fifthImage.src = 'https://payload.cargocollective.com/1/3/119931/13993865/Bart-3D_1000.jpg';
      // Setting image styles
      fifthImage.style.width = 'auto';
      fifthImage.style.maxWidth = '100%';
      fifthImage.style.height = 'auto';
      fifthImage.style.display = 'block';
      fifthImage.style.margin = '80px auto 0';
      // Appending to the container
      container.appendChild(fifthImage);

      // Add click event listener to the fifth image to navigate to another page
      fifthImage.addEventListener('click', function () {
          window.location.href = 'Third Page.html';
      });

      // Hide the detail button after displaying the images
      detailButton.style.display = 'none';
  }
});

// Function to navigate between pages
function navigate(page) {
  switch (page) {
    // Cases for different pages
    case 'about.html':
      window.location.href = 'Fourth Page.html';
      break;
    case 'home.html':
      window.location.href = 'First Page.html';
      break;
    case 'contact.html':
      window.open('https://www.zhangliangray.com/Contact', '_blank');
      break;
    // Handling other pages if needed
    default:
      break;
  }
}

  
