import React, {useState} from 'react';

//Components
import AuthorListComp from './components/authorlist';
import AuthorWorkComp from './components/authorwork';

//Css
import './App.css';


//Images
import LogoSample from "./imgs/logo-sample.png";










const App = () => {

  const [submitting, setSubmitting] = useState(false);

  const [searchValue, setSearchValue] = useState(null);
  const [currentAuthor, setCurrentAuthor] = useState(false);
  const [authorList, setAuthorList] = useState(null);
  const [authorWorkList, setAuthorWorkList] = useState(null);











  
  const submitSearch = async () => {

    //This code is used to create the loading gif
    await setSubmitting(true);



    

   


    //This ensures that there is an author defined before making the request.
    if(searchValue == null || searchValue.length < 1){
      console.log("nothing to see here")
    }else{

      const authorSearchURL = (query) => `https://openlibrary.org/search/authors.json?q=${query.trim()}`;
      const searchAuthor = await fetch(authorSearchURL(searchValue));
      const searchResults = await searchAuthor.json();

      await setAuthorList(searchResults);

      await console.log("We have an author")
      
    }


    await setSubmitting(false);

     

 }




const addWorks = async (works) => {
  await setAuthorWorkList(works)
}


 const addAuthor = async (event) => {
  let currentValue = event.target.value

  await setSearchValue(currentValue)

  console.log(currentValue)

 }

 const resetFilter = async() =>{
  await setSearchValue(null);
  await setCurrentAuthor(false);
  await setAuthorList(null)
  await setAuthorWorkList(null)
 }


 const addFilter =  (value) => {

    if(value == null || value.length < 1){
      return null
    }else{
      return(<div className="filter_item">
                <div onClick={resetFilter} className="filter_close_btn">x</div>
                {value}
              </div>)
    }
  

 }




  return (
    <div className="app_container">
{/* <button onClick={ () =>{console.log(currentAuthor)}} style={{position:"fixed",right:"50vw",top:"10vh"}}>Check currentAuthor in App</button> */}
      <div id="results_container">
              {currentAuthor? <AuthorWorkComp authorWorkList={authorWorkList}
                                              currentAuthor={currentAuthor}/> : <AuthorListComp  authorList={authorList}
                                                                                  setCurrentAuthor={setCurrentAuthor}
                                                                                  addWorks={addWorks}
                                                                                  submitting={submitting}/>}
      </div>

      <div id="search_container">
        <div className="search_inner_container">
          <div id="search_bar_filter_container">
            {addFilter(searchValue)}
          </div>
          <input type="text" placeholder="Search for authors" name="search_bar" id="search_bar" onChange={addAuthor}/>
          <button onClick={submitSearch}>submit</button>
          <img className="logo_searchBar" src={LogoSample} alt="logo sample" />
        </div>
        
      </div>

      

    </div>
  );
}

export default App;
