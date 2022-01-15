import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Add from "../components/Add"
import AddButton from "../components/AddButton"
import Featured from '../components/Featured'
import ProductsList from '../components/ProductsList'
import styles from '../styles/Home.module.css'
import { useState } from "react"

export default function Home({ productsList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>NY Pizza</title>
        <meta name="description" content="Best pizza in town!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose} />}
      <ProductsList productsList={productsList} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if(myCookie.token === process.env.TOKEN) {
    admin = true
  }

  const res = await axios.get("http://pizza-ecommerce-two.vercel.app/api/products");
  return{
    props:{
      productsList:res.data,
      admin
    }
  }
}
