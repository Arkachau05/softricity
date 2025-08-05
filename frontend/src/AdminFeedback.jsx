import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AdminFeedback = () => {
  const [products, setProducts] = useState([]);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(() => console.error("Error loading data."));
  }, []);

  const handleSubmit = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/products/${id}/feedback`, {
        feedback: feedback[id],
      });
      alert("✅ Feedback submitted.");
    } catch {
      alert("❌ Error submitting feedback.");
    }
  };

  return (
    <div className="space-y-6">
      {products.map((p) => (
        <Card key={p._id} className="bg-gray-800 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">{p.name}</CardTitle>
            <p className="text-gray-400 text-sm">{p.description}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-green-400">Price: ${p.price}</p>
            <Separator className="bg-gray-700" />
            <p className="text-sm text-blue-300">Previous Feedback: {p.feedback || "None"}</p>
            <Textarea
              placeholder="Write feedback here..."
              className="bg-gray-900 text-white border-gray-600"
              value={feedback[p._id] || ''}
              onChange={(e) =>
                setFeedback({ ...feedback, [p._id]: e.target.value })
              }
            />
            <Button onClick={() => handleSubmit(p._id)} className="w-full bg-blue-600">
              Submit Feedback
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminFeedback;
