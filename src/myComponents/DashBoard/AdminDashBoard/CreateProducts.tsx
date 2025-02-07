import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { useCreateProductMutation } from "@/Redux/Features/ProductMangement/CreateProduct";
import { toast } from "sonner";
import { z } from "zod";  // Import zod
import { zodResolver } from '@hookform/resolvers/zod'; // Import resolver

interface ProductFormValues {
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  isPublished: boolean;
}

//  the form validation schema
const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Invalid URL format").min(1, "Image URL is required"),
  price: z.number(),
  rating: z.number(),
  isPublished: z.boolean(),
});

const ProductForm: React.FC = () => {
  const [createProduct] = useCreateProductMutation();

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      price: 0,
      rating: 0,
      isPublished: true,
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<ProductFormValues> = async (data) => {
    const toastId = toast.success("Product create success");
    try {
      await createProduct({
        ...data,
        price: Number(data.price),
        rating: Number(data.rating),
      });
      toast.success("Product created successfully", { id: toastId });
      form.reset()
    } catch (error) {
      toast.error("Something went wrong");
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
