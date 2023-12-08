let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart').textContent = `Cart: ${cartCount}`;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

 function submitForm(event) {
  event.preventDefault();
  
} 
function openGmail() {
  // Replace 'your.email@gmail.com' with your actual email address
  var email = 'your.email@gmail.com';
  var subject = 'Inquiry from ' + document.getElementById('fullName').value;
  var body = 'Email: ' + document.getElementById('email').value + '\n';
  body += 'Phone Number: ' + document.getElementById('phoneNumber').value + '\n\n';

  // Construct the mailto link
  var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Open the default email client
  window.location.href = mailtoLink;
}


const productsData = [
    { category: 'category1', name: 'creave ', description: 'creave Ance', price: '$20', imageUrl:'images/creave.jpg'},
    { category: 'category1', name: 'loreal', description: 'loreal paris', price: '$30', imageUrl: 'images/loreal.jpg' },
    { category: 'category1', name: 'Pixi', description: 'pixi cream', price: '$10', imageUrl: 'images/bb.jpg' },
    { category: 'category1', name: 'Osea Serum', description: 'osea serum200mg', price: '$10', imageUrl: 'images/osea.jpg' },
    { category: 'category1', name: 'Tatcha', description: 'Tatcha water cream', price: '$25', imageUrl: 'images/tik.jpg' },
    { category: 'category1', name: 'Pine Forest', description: 'pine forest', price: '$10', imageUrl: 'images/4s.jpg' },
    { category: 'category1', name: 'vaseline', description: 'vasiline lipbalm', price: '$44', imageUrl: 'images/vas.jpg' },
    { category: 'category1', name: 'Mary cream', description: 'mary cream', price: '$10', imageUrl: 'images/mary.jpg' },
    { category: 'category1', name: 'ordinary', description: 'ordinary hydronic acid', price: '$4', imageUrl: 'images/ord.jpg' },
    
    { category: 'category2', name: 'Eylinear', description: 'Eyeliner', price: '$15', imageUrl: 'images/Eyeliner.jpg' },
    { category: 'category2', name: 'Highlight', description: 'Highlight', price: '$15', imageUrl: 'images/Highlight.jpg' },
    { category: 'category2', name: 'Lip Linear', description: 'liplinear', price: '$15', imageUrl: 'images/LipLinear.jpg' },
    { category: 'category2', name: 'Essence Mascara', description: 'Mascara essence', price: '$15', imageUrl: 'images/Mascara.jpg' },
    { category: 'category2', name: 'countour', description: 'Countour eyes', price: '$15', imageUrl: 'images/contour.jpg' },
   
    { category: 'category2', name: 'Lip Stick', description: 'Lipsticks', price: '$15', imageUrl: 'images/Lip stick.jpg' },

    { category: 'category2', name: 'Nars Concelar', description: 'concelar nars ', price: '$15', imageUrl: 'images/Nars.jpg' },
    { category: 'category2', name: 'beauty blender', description: 'Beauty Blender black', price: '$15', imageUrl: 'images/beuty.jpg' },
    { category: 'category2', name: 'Sheglam Blusher', description: 'sheglam blsh', price: '$20', imageUrl: 'images/she.jpg' },
    
   
    { category: 'category3', name: 'ring', description: 'ring ', price: '$15', imageUrl: 'images/ring.jpg' },
   
    { category: 'category3', name: 'Earing star', description: 'Earing stars', price: '$15', imageUrl: 'images/qq.jpg' },
    { category: 'category3', name: 'necklace', description: 'Necklace', price: '$15', imageUrl: 'images/silsla.jpg' },
    
   
    { category: 'category3', name: 'earing', description: 'earing', price: '$15', imageUrl: 'images/hala.jpg' },
    { category: 'category3', name: 'crown', description: 'bracelete', price: '$15', imageUrl: 'images/loly.jpg' },
    { category: 'category3', name: 'earing star', description: 'Earing star', price: '$20', imageUrl: 'images/star.jpg' },
    { category: 'category3', name: 'crown', description: 'crown', price: '$15', imageUrl: 'images/ssssss.jpg' },
    { category: 'category3', name: 'series', description: 'series', price: '$15', imageUrl: 'images/moon.jpg' },
   
  // Add more products as needed
];

// Function to generate product elements
function generateProductElements() {
  const productsContainer = document.getElementById('products');

  productsData.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product', product.category);
    
    productElement.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: ${product.price}</p>
      <button  onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
    `;

    productsContainer.appendChild(productElement);
  });
}

// Function to handle product filtering
function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  const filterButtons = document.querySelectorAll('#filter button');

  // Reset styles for all buttons
  filterButtons.forEach(button => button.classList.remove('selected'));

  // Hide all products
  products.forEach(product => {
    product.style.display = 'none';
  });

  // Display products of the selected category
  products.forEach(product => {
    if (product.classList.contains(category)) {
      product.style.display = 'block';
    }
  });

  // Highlight the selected category button
  const selectedButton = document.querySelector(`#filter button[data-category="${category}"]`);
  if (selectedButton) {
    selectedButton.classList.add('selected');
  }
}

// Function to handle "Add to Cart" button click
function addToCart(productName, productPrice) {
  const cartItemsContainer = document.getElementById('cart-items');
  
  // Create a new cart item
  const cartItem = document.createElement('li');
  cartItem.textContent = `${productName} - ${productPrice}`;
  
  // Add a remove button to the cart item
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function() {
    cartItemsContainer.removeChild(cartItem);
  };

  // Append the remove button to the cart item
  cartItem.appendChild(removeButton);


  // Add the item to the cart
  cartItemsContainer.appendChild(cartItem);
}

// Generate product elements on page load
document.addEventListener('DOMContentLoaded', function() {
  generateProductElements();
});
var slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slider-container")[0].getElementsByTagName("img");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

