
// app.jsx

// Reusable CartCard component
const CartCard = () => {
    const apiCart = 'https://33ba-103-156-164-40.ngrok-free.app//cart';
    const bodyCart = document.querySelector('.bodyCart');
  
    // Function to show carts
    const showCart = (carts, events) => {
      let output = '';
      carts.forEach(cart => {
        const eventData = events.find(event => event.id == cart.tickets.id);
  
        output += `
          <div class="itemCart card">
            <!-- Existing HTML content for CartCard -->
          </div>
        `;
      });
      bodyCart.innerHTML = output;
    }
  
    // Function to handle cart item interactions
    const handleCartItemClick = (e) => {
      e.preventDefault();
      let delButtonIsPressed = e.target.classList.contains('deleteCart');
      let editButtonIsPressed = e.target.classList.contains('editCart');
      let checkoutButtonIsPressed = e.target.classList.contains('checkoutBtn');
  
      const cartId = e.target.closest('.dataCart').dataset.id;
      sessionStorage.setItem('cartId', cartId);
  
      if (delButtonIsPressed) {
        deleteCartItem(cartId);
      }
  
      if (editButtonIsPressed) {
        editCartItem(cartId);
      }
  
      if (checkoutButtonIsPressed) {
        checkoutCartItem(cartId);
      }
    };
  
    // Function to delete a cart item
    const deleteCartItem = (cartId) => {
      fetch(`${apiCart}/${cartId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(() => location.reload());
    };
  
    // Function to edit a cart item
    const editCartItem = (cartId) => {
      window.location.href = `put.html?id=${cartId}`;
    };
  
    // Function to checkout a cart item
    const checkoutCartItem = (cartId) => {
      fetch(`${apiCart}/${cartId}`, {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': true,
          'Ngrok-Version': '2'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(cartData => {
        const checkoutData = {
          customerName: cartData.customerName,
          phoneNumber: cartData.phoneNumber,
          tickets: cartData.tickets,
          totalPrice: cartData.totalPrice,
          paymentStatus: "Lunas"
        };
  
        const checkoutOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': true,
            'Ngrok-Version': '2'
          },
          body: JSON.stringify(checkoutData),
        };
  
        return fetch(`${apiCheckout}/${cartId}`, checkoutOptions);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(checkoutData => {
        console.log('Checkout Successful:', checkoutData);
        return deleteCartItem(cartId);
      })
      .then(() => location.reload())
      .catch(error => {
        console.error('Error:', error.message);
      });
    };
  
    // Fetch data and show carts
    fetchAPI(apiCart)
      .then(cartData => {
        fetchAPI(apiEvent)
          .then(eventData => {
            const carts = cartData.data;
            const events = eventData.data;
            showCart(carts, events);
          });
      });
  
    // Add click event listener to bodyCart
    bodyCart.addEventListener('click', handleCartItemClick);
  
    return (
      <div class="cart card mt-5">
      </div>
    );
  };
  
  // Reusable CheckoutCard component
  const CheckoutCard = () => {
    const apiCheckout = 'https://33ba-103-156-164-40.ngrok-free.app//checkout';
    const bodyCheckout = document.querySelector('.bodyCheckout');
  
    // Function to show checkouts
    const showCheckout = (checkouts, events) => {
      let output = '';
      checkouts.forEach(checkout => {
        const eventData = events.find(event => event.id == checkout.tickets.id);
  
        output += `
          <div class="itemCheckout card">
            <!-- Existing HTML content for CheckoutCard -->
          </div>
        `;
      });
      bodyCheckout.innerHTML = output;
    }
  
    // Fetch data and show checkouts
    fetchAPI(apiCheckout)
      .then(checkoutData => {
        fetchAPI(apiEvent)
          .then(eventData => {
            const checkouts = checkoutData.data;
            const events = eventData.data;
            showCheckout(checkouts, events);
          });
      });
  
    return (
      <div class="checkout card mt-5">
      </div>
    );
  };
  
  // Other existing functions and code here
  
  // Use Promise.all to fetch multiple API requests in parallel
  Promise.all([
    fetchAPI(apiCart),
    fetchAPI(apiEvent),
    fetchAPI(apiCheckout),
  ])
    .then(responses => {
      // responses berisi array hasil dari setiap permintaan API
      const [cartData, eventData, checkoutData] = responses;
  
      console.log('Data Cart:', cartData);
      console.log('Data Event:', eventData);
      console.log('Data Checkout:', checkoutData);
  
      const carts = cartData.data;
      const events = eventData.data;
      const checkout = checkoutData.data;
  
      showCart(carts, events);
      showCheckout(checkout, events);
  
    })