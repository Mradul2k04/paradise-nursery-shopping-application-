import React from "react";

// Product data with images
const products = [
  {
    id: 1,
    name: "Fern",
    price: 10,
    thumbnail:
      "https://planaplant.com/cdn/shop/products/GoldenFernPlant1_627x700.jpg?v=1636572588",
  },
  {
    id: 2,
    name: "Cactus",
    price: 15,
    thumbnail:
      "https://cdn.britannica.com/08/100608-050-684264CB/Saguaro-cactus-Arizona.jpg",
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 20,
    thumbnail:
      "https://myuncommonsliceofsuburbia.com/wp-content/uploads/2023/07/snake-plant-4985304_1280-682x1024.jpg",
  },
  {
    id: 4,
    name: "Monstera",
    price: 25,
    thumbnail:
      "https://masonhome.in/cdn/shop/files/IMG_9313.jpg?v=1724395859https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSux6kO0taCUwnO9WGo2kfYHKZS3t944L90Qmxh75aARRI_0BP6",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 18,
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSux6kO0taCUwnO9WGo2kfYHKZS3t944L90Qmxh75aARRI_0BP6",
  },
  {
    id: 6,
    name: "Peace Lily",
    price: 22,
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEPjxcWlz_XDV5FidVZD74OskyufueS2EmE8vKHAYSH-n_x_IT",
  },

  {
    id: 7,
    name: "Lipstick Single Stem",
    price: 22,
    thumbnail:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7VKMo7Udk06OMwt4UWTQ476g1_QuXJB0vu9ASbv-MgkSnsFFlIyyi1YuPejPmEz4CpbIMPFMa8Qk8FkcKdesucWlzBJNqWKWgPLg5-QJWGe-Xmi2TMU0TzA",
  },
  {
    id: 8,
    name: "Philodendron Birkin",
    price: 22,
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRXj5xOWztoQybbc9hDtm7NyaGMv9ZSbqtk-hggrLcGibweG30Pco7I0etz58Z3EPdQyr7Z50SpHiObGt9gzs6G-aCQdxSdrv7bfltN2dGjefkML6P462t",
  },
  {
    id: 9,
    name: "Pink Beauty Plant",
    price: 22,
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDrG3gGU8bAyZ7G9XspT2jHo0qVubKdzKF2w2sX-rwuW1AQ8KljW4D3Ynysq7CL60pLfzH7S2L4Y9wDABpwF8RYNe9EM_7LrnVeGqcEHpB",
  },
];

const ProductListing = ({ addToCart, changePage }) => {
  return (
    <div>
      <h1>Products</h1>
      <button onClick={() => changePage("cart")}>Go to Cart</button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
              width: "150px",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
