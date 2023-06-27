import styles from "./Post.module.css";
import Link from "next/link";
import {defaultImageUrl} from "@/constants/constans";



export const PostComponent = ({title, text, img, tags, id}) => {


    return (
        <div className={styles.container}>

            <Link href={`/news/${id}`}>
                <div className={styles.postImageContainer}>
                    <img className={styles.postImage} src={`${defaultImageUrl}${img}`} alt=""/>
                </div>
                {
                    tags && (
                        <h2 style={{fontSize: "20px", margin: "10px 0"}}>{tags}</h2>
                    )
                }
                <h1>
                    {title}
                </h1>
                <p>
                    {text.length > 100 ? `${text.slice(0, 50)}...` : text}
                </p>
            </Link>
        </div>
    )
}