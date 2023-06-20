import {getDataServices} from "@/services/getDataServices";
import ReactMarkdown from "react-markdown";
import styles from './news.module.css'

const NewsPage = async() => {
    const {data} = await getDataServices.getPosts()

    const renderers = {
        image: ({ src, alt }) => {
            return (
                <div>
                    <img src={src} alt={alt}/>
                </div>
            )
        }
    }

    return (
        <div className='container' style={{marginTop: '80px'}}>
            <div style={{textAlign: 'center'}}>
                <h1>{data.attributes.title}</h1>
                <p>{data.attributes.description}</p>
            </div>
            <ReactMarkdown renderers={renderers}>{data.attributes.text}</ReactMarkdown>
        </div>
    );
};



export default NewsPage