import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { useCreateProductMutation } from "@/Redux/Features/ProductMangement/CreateProduct";
interface ProductFormValues {
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  isPublished: boolean;
}

const ProductForm: React.FC = () => {
  const [createProduct] = useCreateProductMutation();
  const form = useForm<ProductFormValues>({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      price: 0,
      rating: 0,
      isPublished: true,
    },
  });

  // ✅ Handle Form Submission
  const onSubmit: SubmitHandler<ProductFormValues> = async (data) => {
    try {
      const result = await createProduct({
        ...data,
        price: Number(data.price),
        rating: Number(data.rating),
      });

      console.log("Product Created:", result);
    } catch (error) {
      console.error("Error creating product:", error);
    }
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
          rules={{ required: "Title is required" }}
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
          rules={{ required: "Description is required" }}
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
          rules={{ required: "Image URL is required" }}
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
          rules={{
            required: "Rating is required",
            min: { value: 0, message: "Minimum rating is 0" },
            max: { value: 5, message: "Maximum rating is 5" },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  min="0" 
                  max="5" 
                  step="0.1" 
                  placeholder="Enter rating (0-5)" 
                  {...field} 
                  onChange={(e) => field.onChange(Number(e.target.value))}
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
          rules={{ required: "Price is required", min: { value: 0, message: "Price must be positive" } }}
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
                  onChange={(e) => field.onChange(Number(e.target.value))}
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
                <input 
                  type="checkbox" 
                  checked={field.value} 
                  onChange={(e) => field.onChange(e.target.checked)} 
                  className="ml-2"
                />
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
