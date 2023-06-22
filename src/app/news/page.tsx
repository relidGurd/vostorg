import {getDataServices} from "@/services/getDataServices";
import ReactMarkdown from "react-markdown";
import styles from './news.module.css'
import {PostComponent} from "@/components/PostComponent/PostComponent";


const NewsPage = async () => {
    const {data} = await getDataServices.getPosts()

    return (
        <main className={`container ${styles.postsListContainer}`} style={{marginTop: '90px'}}>
            {data.map(post => <PostComponent id={post.id} title={post.attributes.title} text={post.attributes.description} img={post.attributes.preview.data.attributes.url} tags={'dfsfdsf'} />)}
        </main>
    );
};


export default NewsPage