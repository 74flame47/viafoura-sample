import React, {useState} from 'react';

//Components
import AuthorListComp from './components/authorlist';
import AuthorWorkComp from './components/authorwork';

//Css
import './App.css';


//Images
// import LogoSample from "./imgs/logo-sample.png";










const App = () => {
//I used this to determine if the component is loading the data
  const [submitting, setSubmitting] = useState(false);


//This is the value that will be used in the query for authors
  const [searchValue, setSearchValue] = useState("");


//This is used to dynamicly render the different components {author list | author work}
  const [currentAuthor, setCurrentAuthor] = useState(false);
  const [currentAuthorData, setCurrentAuthorData] = useState({});


//This will store the author list data after the fetch
  const [authorList, setAuthorList] = useState(null);


//This will store the author work list data after the fetch
  const [authorWorkList, setAuthorWorkList] = useState(null);











  //This is the function to submit the input values
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

//This is the function to submit the input values with the enter key
const enterBtnSubmit = (event) => {
  let enterKey = event.charCode
  if(enterKey == 13){
    submitSearch()
  }
  console.log(enterKey)
}







//This function saves the author's work list results to the state in the App.js component
const addWorks = async (works) => {
  await setAuthorWorkList(works)
}

//This function saves the input value to the state
 const addAuthor = async (event) => {
  let currentValue = event.target.value



    // if (event.keyCode === 13) {
    //   console.log("Enter key is pressed");
    //   return true;
    // }

  await setSearchValue(currentValue)

  console.log(currentValue)

 }

 const getCurrentAuthorData = async(authorData) =>{
  await setCurrentAuthorData(authorData)
 }


 //This function resets the values in the state so that the search results are cleared
 const resetFilter = async() =>{
  await setSearchValue("");
  await setCurrentAuthor(false);
  await setAuthorList(null)
  await setAuthorWorkList(null)
 }

//This function add the input value above the search bar
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
      <div id="results_container">
              {currentAuthor? <AuthorWorkComp authorWorkList={authorWorkList}
                                              currentAuthorData={currentAuthorData}
                                              /> : <AuthorListComp  authorList={authorList}
                                                                    setCurrentAuthor={setCurrentAuthor}
                                                                    addWorks={addWorks}
                                                                    getCurrentAuthorData={getCurrentAuthorData}
                                                                    submitting={submitting}/>}
      </div>

      <div id="search_container">
        <div className="search_inner_container">
          <div id="search_bar_filter_container">
            <span style={{color:"#ffffff"}}>clear search:    </span>
            {addFilter(searchValue)}
          </div>
          <input type="text"
                 placeholder="Search for authors"
                 name="search_bar" 
                 id="search_bar"
                 value={searchValue} 
                 onChange={addAuthor}
                 onKeyPress={enterBtnSubmit}/>
          <button onClick={submitSearch}>submit</button>
          {/* <img className="logo_searchBar" src={LogoSample} alt="logo sample" /> */}
        </div>
        
      </div>

      
      {/* <button onClick={ () =>{console.log(currentAuthorData)}} style={{position:"fixed",right:"50vw",top:"10vh"}}>Check tile data in booktile</button>  */}
    </div>
  );
}

export default App;
