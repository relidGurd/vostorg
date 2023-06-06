import Image from 'next/image'
import SliderSlick from "@/components/SliderSlick/SliderSlick";
import Search from "@/components/SearchComponent/Search";
import { getDataServices} from "@/services/getDataServices";
import {Metadata} from "next";
import AddNews from "@/components/QuillAddNewsComponent/AddNews";


export const metadata: Metadata = {
    title: 'Арт-объединение VOSTORG'
}

export default async function Home() {

  return (
    <main>
      <Search />
      <SliderSlick />
      {/*<AddNews />*/}
    </main>
  )
}
