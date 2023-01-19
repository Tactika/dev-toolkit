import { useState, useContext, useEffect } from "react";
import { formatter } from "../utils/helpers";
import ProductOptions from "./ProductOptions";
import { CartContext } from "../context/shopContext";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url, id) => (
  axios.get(url, {
    params: {
      id: id
    }
  }).then(res => res.data)
)

function ProductForm({ product }) {
  const { data: productInventory } = useSWR(
    ['/api/available', product.handle],
    (url, id) => fetcher(url, id),
    { errorRetryCount: 3 }
  )

  const [available, setAvailable] = useState(true)

  const { addToCart } = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(item => item.node.id === selectedVariant.id)

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true)
      } else {
        setAvailable(false)
      }
    }
  }, [productInventory, selectedVariant])

  return (
    <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3">
      <h2 className="text-2xl font-bold text-orange-400">{product.title}</h2>
      <span className="pb-3 pt-3 text-xl text-red-500">
        {formatter.format(selectedVariant.variantPrice)}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      {available ?
        <button
          onClick={() => {
            addToCart(selectedVariant);
          }}
          className="bg-orange-400 rounded-lg mt-3 text-white px-2 py-3 hover:bg-orange-400 hover:border-2 hover:border-neutral-300 hover:text-neutral-800 hover:font-bold"
        >
          Add To Cart
        </button>
        :
        <button
          className="rounded-lg mt-3 text-white px-2 py-3 bg-gray-800 cursor-not-allowed"
        >
          Sold Out!
        </button>
      }
    </div>
  );
}

export default ProductForm;
