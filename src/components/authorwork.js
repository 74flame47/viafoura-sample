import React, {useState} from "react";
//Components
import AuthorBookTile from "./authorbooktile";
//Css
import '../css/authorWork.css';

//Images
import LogoSample from "../imgs/logo-sample.png";





const AuthorWorkComp = ({authorWorkList,currentAuthorData}) => {

    
    const shortenName = () =>{
        let name = currentAuthorData.name
        if(name.length ){

        }
    }



    return(<div id="authorWork_container">
                <h1>{currentAuthorData.name}</h1>
                <div className="tiles_book_container">
                    {/* THis is the loader for the worklist */}
                    {authorWorkList == null ?<img id="logo_loader" src={LogoSample} alt="logo sample"/>:null}
                    {authorWorkList !== null ? authorWorkList.entries.map((element , i) => {

                        

                        let tileData = {
                            title: null,
                            authors: null,
                            created: null,
                            description: null,
                            last_modified: null,
                            subjects: null,
                            latest_revision: null,
                            revision: null,
                            edition: null,
                            published: null

                        }

                        

                        const attributes = ["title",
                                            "authors",
                                            "created",
                                            "description",
                                            "last_modified",
                                            "subjects",
                                            "latest_revision",
                                            "revision",
                                            "edition",
                                            "published"];

                        // This functions chechs if there is an attribute for the datastructure then
                        // saves it to a var
                        const checkAttributes = () =>{
                            attributes.map(async (att,i) => {
                                if(element.hasOwnProperty(att)){
                                    tileData[att] = element[att];
                                //    await console.log(`${att} is an attribute!`)
                                //    await console.log(tileData);
                                }
                            })
                        }

                         checkAttributes();


                        let img;

                        if(element.hasOwnProperty('covers')){
                            img = element.covers[0]
                        }else{
                            img = null
                        }



                        return <div key={i}
                                    className="book_tile"><AuthorBookTile   tileData={tileData}
                                                                                cover={img}/>
                                    
                                </div>
                    }): null}
                </div>
                

                


                

            </div>)
}


export default AuthorWorkComp;

