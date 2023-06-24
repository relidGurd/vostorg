import {getDataServices} from "@/services/getDataServices";
import styles from './page.module.css'
import {Metadata, ResolvingMetadata} from 'next'

export async function generateMetadata({params, searchParams}, parent?: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const id = params.id

    // fetch data
    const {data} = await getDataServices.getSinglePost(id)

    return {
        title: data.attributes.title,
    }
}


const PostPage = async ({params}) => {
    const {data} = await getDataServices.getSinglePost(params.id)

    return (
        <article className='postContainer' style={{marginTop: '80px'}}>
            <header style={{textAlign: 'center'}}>
                <h1 className={styles.title}>{data.attributes.title}</h1>
                <span></span>
            </header>

            <section className={styles.container} dangerouslySetInnerHTML={{__html: data.attributes.text}}/>

        </article>
    );
};


export default PostPage