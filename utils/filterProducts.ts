export function filterProducts(products, answers) {
  // First, filter products based on user answers
  const filteredProducts = products.filter(product => {
    return Object.values(answers).some(answer => product.tags.includes(answer));
  });

  // Group products by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // Select the most relevant product from each category
  const selectedProducts = Object.values(groupedProducts).map(categoryProducts => {
    return categoryProducts.reduce((best, current) => {
      const bestRelevance = calculateRelevance(best, answers);
      const currentRelevance = calculateRelevance(current, answers);
      return currentRelevance > bestRelevance ? current : best;
    });
  });

  return selectedProducts;
}

function calculateRelevance(product, answers) {
  const answerValues = Object.values(answers);
  const relevantTags = product.tags.filter(tag => answerValues.includes(tag));
  return relevantTags.length;
}