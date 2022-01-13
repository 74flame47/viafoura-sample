
import React, {useState, useEffect} from "react";
//Css
import '../css/authorBookTile.css';
//Images
import LogoSample from "../imgs/logo-sample.png";





const AuthorBookTile = ({cover,tileData}) => {


//This is used to determine if the book tile is active 
const [tileActive, setTileActive] = useState(false);


//This is the cover image I saved to the state for easy of use and rendering
const [coverImg, setCoverImg] = useState(null);




//This function determines if the cover is a null or not so that it can be used
    const coverImgFilter = async (coverID) => {
        let coverURL = (id) => `https://covers.openlibrary.org/b/id/${id}-L.jpg`;

        if(coverID !== null){
            let coverLocation =  coverURL(coverID);
            await setCoverImg(coverLocation)
        }
        

    }


    useEffect( () =>{
        coverImgFilter(cover)
    },[])













//These vars are used to set the styling for the tiles for dynamic rendering
    let inactive = {
        backgroundColor:"#00000079",
        height:"100%",
        width:"100%",
        position:"absolute",
        top:"0",
        padding:"40px 10px 10px 10px",
        opacity:"1",
                }

    let active = {
        backgroundColor:"#00000079",
                    height:"100%",
                    width:"100%",
                    position:"absolute",
                    top:"100px",
                    padding:"40px 10px 10px 10px",
                    opacity:"0",
    }
    

//This is use to convert the date data into something more readable
    let createdTime = new Date(tileData.created.value)





//This switched between active and inactive states for rendering
    const tileToggle = async () => {
        await setTileActive(!tileActive)
    }










    return(<div onClick={tileToggle} style={{overflow:"hidden", height:"100%",width:"100%"}}>
                <div style={tileActive? inactive: active}>


                    <p className="bootTile_created">Created: {tileData.created == null? "_/_/_":createdTime.toDateString()}</p>
                    <h2 className="bootTile_title">{tileData.title}</h2>
                    <p className="bootTile_addition">Edition:{tileData.edition  == null? "unavailable": tileData.edition}</p>
                    <p className="bootTile_published">Published:{tileData.published  == null? "unavailable": tileData.published}</p>
                    <p  className="bootTile_authors">Authors: </p>
                    <p  className="bootTile_description_header">Description:</p>
                    <p className="bootTile_description">{tileData.description == null? "There is no description at this time.":tileData.description.value}</p>
                    <div  className="bootTile_subject" >
                        <p>Subject: {tileData.subjects == null? <span>unavailable</span>: tileData.subjects.map((sub,i) =>{
                            return <span key={i} className="book_subject">{sub}</span>
                            })}</p>
                    </div>

                </div>
                
            { coverImg == null ? null: <img src={coverImg} alt="book cover" style={{width:"100%"}}/> }
            
            {coverImg == null ? <div>
                <h3 style={tileActive? {opacity:'0'}: {opacity:'1'}} className="title_noIMG">{tileData.title}</h3>
                <img src={LogoSample} alt="logo sample" style={tileActive? {opacity:'0'}: {opacity:'1'}} className="tile_logo_noIMG"/>
            </div> : null}                                                            
                
                
            </div>)
}


export default AuthorBookTile;
