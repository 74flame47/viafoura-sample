
//Css
import '../css/authorTile.css';




const AuthorTileComp = ({authorname,authorId,addWorks,authorData,getCurrentAuthorData}) => {

    const getWorks = async () => {
        // console.log(authorname)

        const authorWorksUrl = (authorId) => `https://openlibrary.org/authors/${authorId}/works.json`;
        const searchWorks = await fetch(authorWorksUrl(authorId));
        const searchWorksResults = await searchWorks.json()

        await addWorks(searchWorksResults);
        // await console.log(searchWorksResults);

        await getCurrentAuthorData(authorData)
    }


    return(<div onClick={getWorks} className="name_tile" >
            <div>{authorname}</div>
    </div>)
}


export default AuthorTileComp;