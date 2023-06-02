import Image from 'next/image'
import SliderSlick from "@/components/SliderSlick/SliderSlick";
import Search from "@/components/SearchComponent/Search";
import { getDataServices} from "@/services/getDataServices";
import Store from "@/components/Store/Store";
import {CartIcon} from "@/icons/CartIcon";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Арт-объединение VOSTORG'
}


export default async function Home() {
  const data = await getDataServices.getAll()
  return (
    <main>
      <Search />
      <SliderSlick props={data} />
    </main>
  )
}
