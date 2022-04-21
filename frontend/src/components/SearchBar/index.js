// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { getAllVans } from '../../store/vans';
// import "./SearchBar.css"


// function SearchBar() {
//     const dispatch = useDispatch();
//     const allVans = useSelector(state => state?.vans?.listOfVans);
//     // console.log(allVans)
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState([]);

//     const allTitles = allVans.map(van => {
//         return van.title;
//     })

//     useEffect(() => {
//         setSearchTerm("")
//         // dispatch(getAllVans(allTitles))
//     }, [])

//     useEffect(() => {
//         dispatch(getAllVans(allVans))

//         if (searchTerm === "") {
//             return setSearchTerm("")
//         } else {
//             setSearchTerm(searchTerm)
//         }

//         const filteredResult = allTitles.filter(title => {
//             return (title.includes(searchTerm.toUpperCase()) || title.toUpperCase().includes(searchTerm.toUpperCase()))
//         })

//         const finalResult = filteredResult.slice(0, 5)

//         setSearchResults(finalResult)

//     }, [searchTerm, dispatch])


//     return (
//         <div className='search_container'>
//         <div className="search__bar">
//             <input type="text" value={searchTerm} placeholder="&#x1F50E;&#xFE0E; Search Nomadr..." onChange={(e)=>setSearchTerm(e.target.value)}></input>
//         </div>
//         <div id="search_results">
//             {searchTerm && (
//                 <>
//                 {searchResults.map((title) => (
//                     <>
//                     {console.log("WOOO", Object.values(searchResults))}
//                     {allVans.map(van => (
//                         <>
//                             { van.title === title ?
//                                 <NavLink onClick={() => setSearchTerm("")} className="test" to={`/vans/${van.id}`}> {title} </NavLink>
//                             :null }
//                         </>
//                     ))}
//                     </>
//                     ))}
//                 </>
//             )}
//         </div>
//         </div>
//     )
// }

// export default SearchBar;
