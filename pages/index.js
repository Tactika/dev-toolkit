import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="">
      <Head>
        <title>Dev Toolkit</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Modern eCommerce Storefront to purchase tech gifts for your budding developer, built using Next.js, Shopify, and TailwindCSS." />
        <meta property="og:title" content="Dev Toolkit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dev_toolkit.myshopify.com" />
        <meta property="og:image" content="https://dev_toolkit.myshopify.com/share.png" />
        <meta property="og:description" content="Modern eCommerce Storefront to purchase tech gifts for your budding developer, built using Next.js, Shopify, and TailwindCSS. Additonal topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps, and much much more!" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Dev Toolkit" />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
