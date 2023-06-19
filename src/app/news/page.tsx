import {getDataServices} from "@/services/getDataServices";


const NewsPage = async() => {
    const {data} = await getDataServices.getPosts()



    const renderPostTextWithImages = () => {
        const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
        let updatedPostText = data.attributes.postText;
        const imageMatches = updatedPostText.match(imageRegex);

        if (!imageMatches) {
            return <p>{updatedPostText}</p>;
        }

        imageMatches.forEach((match) => {
            const imageUrl = match.match(/\((.*?)\)/)[1];
            updatedPostText = updatedPostText.replace(
                match,
                `<div>
                          <img src="${imageUrl}" alt="Post Image" />      
                </div>
                `
            );
        });

        return <div dangerouslySetInnerHTML={{ __html: updatedPostText }} />;
    };

    return (
        <div>
            <h1>{data.attributes.title}</h1>
            <p>{data.attributes.description}</p>
            {renderPostTextWithImages()}
        </div>
    );
};



export default NewsPage