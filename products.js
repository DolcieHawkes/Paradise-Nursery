// Assuming you have an array to store cart items
let cartItems = []; 

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card'); // Find the parent product card

    // Extract product information from the card
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', '')); 
    const productImage = productCard.querySelector('img').src;

    // Create a cart item object
    const newItem = {
      name: productName,
      price: productPrice,
      quantity: 1, // Start with quantity 1
      image: productImage
    };

    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.name === newItem.name);

    if (existingItemIndex > -1) {
      // If item exists, increase its quantity
      cartItems[existingItemIndex].quantity++;
    } else {
      // If item doesn't exist, add it to the cart
      cartItems.push(newItem);
    }

    // You'll likely want to update the cart display or store the cart data in local storage here
    console.log('Cart Items:', cartItems); // For now, just log the cart items to the console
  });
});
  if (existingItemIndex > -1) {
              cartItems[existingItemIndex].quantity++;
            } else {
              cartItems.push(newItem);
            }

            // Update local storage with the new cart items
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            console.log('Cart Items:', cartItems); 
    

        // Retrieve cart items from local storage when the page loads
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
          cartItems = JSON.parse(storedCartItems);
        }
   