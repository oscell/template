import { Button } from "@/components/ui/button";
import { Hits } from "react-instantsearch";
import React from 'react';
import { useHits } from 'react-instantsearch';


const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Furniture"
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Furniture"
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Furniture"
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Furniture"
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      category: "Furniture"
    },
  ];


function Results(props) {
  const { items } = useHits(props);


    return (
<main className="col-span-12 md:col-span-9">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {items.map((hit) => (
        <div
          key={hit.objectID}
          className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-square relative overflow-hidden rounded-t-lg">
            <img
              src={hit.image}
              alt={hit.name}
              className=" object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{hit.name}</h3>
            <p className="text-sm text-muted-foreground">{hit.category}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold">
                {/* ${hit.price.toFixed(2)} */}
              </span>
              <Button size="sm">Add to Cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </main>
    );
}
export default Results;