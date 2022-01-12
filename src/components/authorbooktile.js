
import React, {useState, useEffect} from "react";
import '../css/authorBookTile.css';

import LogoSample from "../imgs/logo-sample.png";





const AuthorBookTile = ({title,cover,authors,created,description,subjects}) => {



    const [tileActive, setTileActive] = useState(false);
    const [coverImg, setCoverImg] = useState(null);





    const coverImgFilter = async (coverID) => {
        let coverURL = (id) => `https://covers.openlibrary.org/b/id/${id}-L.jpg`;

        if(coverID !== null){
            let coverLocation =  coverURL(coverID);
        //    await console.log(`There was a cover, here's the url: ${coverLocation}`)
            await setCoverImg(coverLocation)
        }else{
        //    await console.log("There was nothing")
        //    await console.log(coverID)
        }
        

    }


    useEffect( () =>{
        coverImgFilter(cover)
    },[])














    let inactive = {
        backgroundColor:"#00000079",
        height:"100%",
        position:"absolute",
        top:"0",
        padding:"40px 10px 10px 10px",
        opacity:"1",
                }

    let active = {
        backgroundColor:"#00000079",
                    height:"100%",
                    position:"absolute",
                    top:"100px",
                    padding:"40px 10px 10px 10px",
                    opacity:"0",
    }
    









    const tileToggle = async () => {
        await setTileActive(!tileActive)
    }

    return(<div onClick={tileToggle} style={{overflow:"hidden"}}>
                <div style={tileActive? inactive: active}>


                    <p className="bootTile_created">Created:</p>
                    <h2 className="bootTile_title">{title}</h2>
                    <p className="bootTile_addition">Addition:</p>
                    <p className="bootTile_published">Published:</p>
                    <p  className="bootTile_authors">Authors:</p>
                    <p  className="bootTile_description_header">Description:</p>
                    <p className="bootTile_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div>
                        <p className="bootTile_subject">Subject:</p>
                    </div>

                </div>
                
            { coverImg == null ? null: <img src={coverImg} alt="book cover" style={{width:"100%"}}/> }
            
            {coverImg == null ? <div>
                <h3 style={tileActive? {opacity:'0'}: {opacity:'1'}} className="title_noIMG">{title}</h3>
                <img src={LogoSample} alt="logo sample" style={tileActive? {opacity:'0'}: {opacity:'1'}} className="tile_logo_noIMG"/>
            </div> : null}                                                            
                

            </div>)
}


export default AuthorBookTile;
