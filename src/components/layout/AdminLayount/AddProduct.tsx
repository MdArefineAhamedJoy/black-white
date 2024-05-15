import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <h1>Add Product Section</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* Include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* Errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;