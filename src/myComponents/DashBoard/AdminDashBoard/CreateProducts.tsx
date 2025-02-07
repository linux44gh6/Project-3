import { useForm } from "react-hook-form";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateProductMutation } from "@/Redux/Features/ProductMangement/CreateProduct";

const ProductForm = () => {
  const [createProduct] = useCreateProductMutation();

  // Initialize the form with react-hook-form's useForm hook
  const form = useForm({
    defaultValues: {
      // title: 'Luxury Gel Pen',
      // description: "Experience effortless writing with our Luxury Gel Pen, designed for professionals, students, and artists alike. Featuring a sleek, ergonomic design, this pen ensures a comfortable grip for long writing sessions. The smooth-flowing, quick-dry ink prevents smudging and bleeding, making it perfect for both everyday use and creative projects. Whether you taking notes, sketching, or signing documents, this high-quality gel pen delivers precision and style.",
      // image: 'https://i.ibb.co/Q3KNQMZx/4548718152131-1260-700x.webp',
      // price: 45,
      // rating: 5,
      isPublished: true,
    },
  });

  // Handle form submission
  const onSubmit = async (data) => {

    // Make sure price and rating are numbers
    // const submittedData = {
    //   body: {
    //   ...data
    //   },
    // };

    // console.log("Submitted Data:", submittedData);

    const result = await createProduct(data);
    console.log("Result:", result);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-lg mx-auto p-6 border rounded-lg shadow-md"
      >
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter product title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter product description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image URL Field */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Enter image URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Rating Field */}
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="0"
                  max="5"
                  placeholder="Enter rating (0-5)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price Field */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price ($)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter price"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Publish Checkbox */}
        <FormField
          control={form.control}
          name="isPublished"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Publish</FormLabel>
              <FormControl>
                <input type="checkbox" {...field} className="ml-2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Create Product
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
