import {Metadata} from "next";
import HomePageComponent from "@/components/HomePageComponent/HomePageComponent";


export const metadata: Metadata = {
    title: 'Арт-объединение VOSTORG'
}

export default async function Home() {

  return (
    <main style={{marginTop: '83px'}} className='container'>
        <HomePageComponent />
    </main>
  )
}
