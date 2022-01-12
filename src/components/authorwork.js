import React, {useState} from "react";
import AuthorBookTile from "./authorbooktile";

import '../css/authorWork.css';

import LogoSample from "../imgs/logo-sample.png";





const AuthorWorkComp = ({authorWorkList}) => {
    const [currentAuthorWork, setCurrentAuthorWork] = useState(null);




    // console.log(currentAuthorWork);

    return(<div id="authorWork_container">
                <h1>Author Place holder</h1>
                <div className="tiles_book_container">
                    {/* <img id="logo_loader" src={LogoSample} alt="logo sample"/> */}
                    {authorWorkList == null ?<img id="logo_loader" src={LogoSample} alt="logo sample"/>:null}
                    {authorWorkList !== null ? authorWorkList.entries.map((element , i) => {

                        const pushCurrentWork = async () => {

                            await setCurrentAuthorWork(element)
                            await console.log(element)
                            
                        }


                        // console.log(element.covers[0] !== undefined? element.covers[0] : "This was undefined")
                        let img;

                        if(element.hasOwnProperty('covers')){
                            // console.log("Covers is there")
                            img = element.covers[0]
                        }else{
                            // console.log("Covers is MISSING!!!!!!!!!!")
                            img = null
                        }

                        return <div key={i}
                                    className="book_tile"
                                    onClick={pushCurrentWork}><AuthorBookTile   title={element.title}
                                                                                cover={img}/></div>
                    }): null}
                </div>
                

                


                

            </div>)
}


export default AuthorWorkComp;