export function filterProducts(products, answers) {
  return products.filter(product => {
    return Object.values(answers).some(answer => product.tags.includes(answer));
  });
}