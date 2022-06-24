import './App.css';
import GithubUser from "./GithubUser/GithubUser";
import SearchBar from "./SearchBar/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

const App = () => {

    const [ searchValue, setSearchValue ] = useState(null);



    return (
        <main>
            <Router>
                <header className="header">
                    <h1 className="title">GitHub Users</h1>
                    <SearchBar
                        searchValue={ searchValue }
                        setSearchValue={ setSearchValue }
                    />
                </header>
                <div className="user">
                    <Routes>
                        <Route path='/'
                               element={
                                   <span className="description">
                                       Type GitHub user name to search
                                   </span>
                               }
                        />
                        <Route path="/:userId" element={
                            <GithubUser searchValue={ searchValue }
                            />
                        } />

                    </Routes>
                </div>
            </Router>
        </main>
    );
}

export default App;
