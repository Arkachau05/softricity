// src/pages/AddProduct.jsx
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/api/products", {
        name: form.name,
        category: form.category,
        price: Number(form.price),
        description: form.description,
      })
      alert("Product added successfully")
      setForm({ name: "", category: "", price: "", description: "" })
    } catch (err) {
      console.error(err)
      alert("Error adding product")
    }
  }

  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div>
              <Label>Name</Label>
              <Input name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <Label>Category</Label>
              <Input name="category" value={form.category} onChange={handleChange} required />
            </div>
            <div>
              <Label>Price</Label>
              <Input name="price" type="number" value={form.price} onChange={handleChange} required />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea name="description" value={form.description} onChange={handleChange} required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Add Product</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
