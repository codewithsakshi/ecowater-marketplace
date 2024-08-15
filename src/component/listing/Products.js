import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./productCards";
import Carousel from "../carousel/carousel";

const sampleProducts = [
  {
    _id: "1",
    name: "Eco-Friendly Water Filter",
    description: "Advanced water filter system with eco-friendly materials.",
    price: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Water Treatment",
    manufacturer: "EcoWater Solutions Inc.",
    ecoFriendly: true,
  },
  {
    _id: "2",
    name: "Reusable Stainless Steel Water Bottle",
    description: "Durable stainless steel water bottle, perfect for daily use.",
    price: 200,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661320812120-5ee4d44fc720?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Water Bottles",
    manufacturer: "EcoGear Inc.",
    ecoFriendly: true,
  },
  {
    _id: "3",
    name: "Water Saving Shower Head",
    description: "High-efficiency shower head that reduces water consumption.",
    price: 250,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661423635728-ebb72749503c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Bathroom Accessories",
    manufacturer: "GreenTech Innovations",
    ecoFriendly: true,
  },
  {
    _id: "3",
    name: "Water Saving Shower Head",
    description: "High-efficiency shower head that reduces water consumption.",
    price: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Bathroom Accessories",
    manufacturer: "GreenTech Innovations",
    ecoFriendly: true,
  },
];

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <ProductList products={sampleProducts} />
    </div>
  );
}

export default Products;
