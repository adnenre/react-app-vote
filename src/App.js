import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import ProductList from './components/ProductList'

const Title = styled.div`
  padding:1rem;
  font-size:2rem;
  margin:2rem 0 4rem 0;
`;
const RibbonLink = styled.a`
 
  position:absolute;
  top:0;
  right:0;
  width:150px;
  height:150px;
  
`;

class App extends Component {
  render() {
    const repoUrl = "https://adnenre.github.io";
    const GithubRepoLink =() => {
       return  < RibbonLink href={repoUrl} target="_blank">
                      <img src="images/githubRibbon.png" alt="github link" />
              </ RibbonLink>
    }



    return (
      <div className="App">
            <GithubRepoLink />
            <Title> Product Votes App</Title>
             <ProductList />
      </div>
    );
  }
}

export default App;
