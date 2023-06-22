import {getDataServices} from "@/services/getDataServices";
import styles from './page.module.css'

const PostPage = async ({params}) => {
    const {data} = await getDataServices.getSinglePost(params.id)

    return (
        <article className='blogContainer' style={{marginTop: '80px'}}>
            <header style={{textAlign: 'center'}}>
                <h1>{data.attributes.title}</h1>
            </header>

            <section className={styles.container} dangerouslySetInnerHTML={{__html: data.attributes.text}} />

        </article>
    );
};


export default PostPage