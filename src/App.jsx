import './App.css';
import GithubUser from "./GithubUser/GithubUser";
import SearchBar from "./SearchBar/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

const App = () => {

    const [ searchValue, setSearchValue ] = useState(null);

    const [ description, setDescription ] = useState('');

    return (
        <main>
            <Router>
                <header className="header">
                    <h1 className="title">GitHub Users</h1>
                    <SearchBar
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
                                        description={ description }
                                        setDescription={ setDescription }
                            />
                        } />

                    </Routes>
                </div>
            </Router>
        </main>
    );
}

export default App;
