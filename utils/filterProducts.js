export function filterProducts(products, answers) {
  // Step 1: Filter products based on user answers
  const filteredProducts = products.filter(product => {
    return Object.values(answers).some(answer => product.tags.includes(answer));
  });

  // Step 2: Group products by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // Step 3: Select the most relevant product from each category
  const selectedProducts = Object.values(groupedProducts).map(categoryProducts => {
    return categoryProducts.reduce((best, current) => {
      const bestRelevance = calculateRelevance(best, answers);
      const currentRelevance = calculateRelevance(current, answers);
      return currentRelevance > bestRelevance ? current : best;
    });
  });

  // Step 4: Randomize the order of selected products
  const shuffledProducts = shuffleArray(selectedProducts);

  return shuffledProducts;
}

function calculateRelevance(product, answers) {
  const answerValues = Object.values(answers);
  const relevantTags = product.tags.filter(tag => answerValues.includes(tag));
  return relevantTags.length;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}