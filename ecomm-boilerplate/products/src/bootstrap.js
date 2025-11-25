import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  el.innerHTML = products;
}

// Context 1
// Running file in development in isolation
// Using local index.html file
// Immediately render app into the element 'dev-products'
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming container doesn't have an element with id 'dev-products'
  if (el) {
    // Running in isolation
    mount(el);
  }
}

// Context 2
// Running file in development or production through Container
// Element of id 'dev-products' may or may not exist
// Do not immediately render the app
export { mount };