// Product data array
const products = [];

// Function to add a new product
function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (!name || isNaN(price) || isNaN(rating)) {
        alert('Please enter valid product details.');
        return;
    }

    // Add product to the list
    products.push({ name, price, rating });

    // Clear inputs
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productRating').value = '';

    // Update graphs
    updateGraphs();
}

// Function to update the graphs
function updateGraphs() {
    // Clear existing graphs
    document.getElementById('priceGraph').innerHTML = '<h2>Price Graph</h2>';
    document.getElementById('ratingGraph').innerHTML = '<h2>Rating Graph</h2>';

    // Render price graph
    products.forEach(product => {
        const bar = createBar(product.name, product.price, 'price');
        document.getElementById('priceGraph').appendChild(bar);
    });

    // Render rating graph
    products.forEach(product => {
        const bar = createBar(product.name, product.rating, 'rating');
        document.getElementById('ratingGraph').appendChild(bar);
    });
}

// Function to create a bar element
function createBar(name, value, type) {
    const bar = document.createElement('div');
    bar.className = 'bar';

    const barValue = document.createElement('div');
    barValue.style.height = `${value * 10}px`; // Scale height
    barValue.style.width = '40px';
    barValue.textContent = value;

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = name;

    bar.appendChild(barValue);
    bar.appendChild(label);

    return bar;
}

// Function to sort the graph data
function sortGraph(type) {
    if (type === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (type === 'rating') {
        products.sort((a, b) => a.rating - b.rating);
    }
    updateGraphs();
}
