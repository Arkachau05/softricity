import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(() => setError("Unable to load products."));
  }, []);

  return (
    <div className="space-y-6">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {products.map(p => (
        <Card key={p._id} className="bg-gray-800 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">{p.name}</CardTitle>
            <p className="text-gray-400 text-sm">{p.description}</p>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-green-400">Price: ${p.price}</p>

            <Separator className="bg-gray-700" />

            <h4 className="text-white font-medium">Reviews:</h4>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              {p.reviews.map((r, i) => (
                <li key={i}>
                  <strong className="text-white">{r.user}</strong>: {r.comments}
                  <Badge className="ml-2 bg-yellow-400 text-black">{r.rating}★</Badge>
                </li>
              ))}
            </ul>

            <Separator className="bg-gray-700" />
            <p className="text-blue-300 font-medium">Admin Feedback: {p.feedback || "N/A"}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Products;
