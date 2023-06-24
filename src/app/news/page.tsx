import {getDataServices} from "@/services/getDataServices";
import styles from './news.module.css'
import {PostComponent} from "@/components/PostComponent/PostComponent";
import {Metadata} from "next";
import PaginationList from "@/components/PaginationList/PaginationList";



export const metadata: Metadata = {
    title: 'Новости VOSTORG'
}

const NewsPage = async ({searchParams}) => {

    const {data, meta} = await getDataServices.getPosts(`&pagination[pageSize]=3&pagination[page]=${searchParams.page ? searchParams.page : 1}`)

    return (
        <main className={`blogContainer ${styles.container}`} style={{marginTop: '90px'}}>
            <section className={styles.postsListContainer}>
                {data.map(post =>
                    <PostComponent id={post.id} title={post.attributes.title} text={post.attributes.description}
                                   img={post.attributes.preview.data.attributes.url} tags={'dfsfdsf'}/>
                )}
            </section>

            <section style={{width: "50%"}}>
                    <PaginationList data={meta}/>
            </section>

        </main>
    );
};


export default NewsPage