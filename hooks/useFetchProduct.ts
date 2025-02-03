import {useEffect, useState} from "react"
import axios from "axios"
import {useRouter} from "next/router"

export type ProductType = {
  id: string
  title: string
  description: string
  thumbnail: string
  price: number
  brand: string
  rating: number
  stock: number
  images: []
}

export type Nullable<T> = null | T

export const useFetchProduct = (): Nullable<ProductType> => {
  const [product, setProduct] = useState<Nullable<ProductType>>(null)

  const router = useRouter()


  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${2}`)
      .then(res => {
        setProduct(res.data)

      })
      .catch(err => console.log(err));
  }, []);

  return product;
}