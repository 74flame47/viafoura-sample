
//Components
import AuthorTileComp from "./authortile";

//Css
import '../css/authorList.css';


//Images
import LogoSample from "../imgs/logo-sample.png";






const AuthorListComp = ({authorList,setCurrentAuthor,addWorks,submitting}) => {

    // This sets the current author to true which will I can use to render the author work list
    const currentAutherHolder = () => {
        setCurrentAuthor(true)
        
    }

    return(<div id="authorList_container" >
        
        <div id="authorsList_inner_container">
            <h1>Authors</h1>
            <div className="authorsList_inner2_container">
                {authorList !== null ? authorList.docs.map((element , i) => {
                     
                    return (<div onClick={currentAutherHolder} key={i}><AuthorTileComp  authorname={element.name} authorId={element.key} addWorks={addWorks}/></div>)
                }): null}
                {submitting?<img id="logo_loader" src={LogoSample} alt="logo sample"/>:null}
            </div>
            
            
        </div>
    </div>)
}


export default AuthorListComp;