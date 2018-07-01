import React , { Component } from 'react';
import styled from 'styled-components';


const style = {
    CaretUp:`
        &:after{
            content:'\f0d8';
        }`,
    CaretDown:`
        &:after{
            content:'\f0d7';
        }
    `

    
}
const ProductItem = styled.div`
    display: flex;
    margin: 1em 0em;
    width: 100%;
    min-height: 0px;
    background:white;
    padding: 0em;
    border: none;
    border-radius: 2rem;
    overflow:hidden;
    box-shadow: 0 0 20px 1px #d5d5d5;
    transition:300ms;
    &:hover{
        transform: scale(1.05);
    }
    
`;
const ItemImage = styled.div`
    width:150px;

`;
const Image = styled.img`
    width:100%;
    height:100%;

`;
const ItemBody = styled.div`
 display:flex;
 flex-direction:column;
 padding :  0.5rem;
 flex-grow: 1;
 justify-content: space-between;
`;
const ItemDesc = styled.div`
margin-top: 0.5rem;
text-align:left;
color:#777;
 > a{
     font-size:1rem;
 }
 > p{
     font-size:0.8rem;
 }
`;
const ItemAuthor = styled.div`
    display: flex;
    align-items: center;
`;
const AuthorImage = styled.img`
    margin: 0 .5em;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    box-shadow: 0 0 0px 2px #d7d5d6;
`;

const AuthorName = styled.span`
  font-size:0.8rem;
  color:#777;
`;

const ItemFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
    border-radius: 0 10px 10px 0;
    justify-content center;
    background: transparent;
    border-left: solid 1px #ddd;
    color:#777;
`;
const Btn = styled.a`
  cursor:pointer;
  width:25px;
  height:25px;
  display:flex;
  
  &:hover:hover{
      color:orange;
  }
`;

const Icon =styled.i`
    display: inline-block;
    margin:auto;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
${({CaretUp})=> CaretUp && style.CaretUp}
${({CaretDown})=> CaretDown && style.CaretDown}
  
`;

class Product extends Component{
      constructor(props){
          super(props);
          this.handleUpVote = this.handleUpVote.bind(this);
          this.handleDecrementVote = this.handleDecrementVote.bind(this);
      }
      handleUpVote(){
       this.props.incrementVote(this.props.id)
         
      }
      handleDecrementVote(){
        this.props.decrementVote(this.props.id);
       }
      render(){
         
             return (
             <ProductItem>
                 <ItemImage>
                     <Image src={this.props.productImageUrl} alt=" product" />
                  </ItemImage> 
                  
                    <ItemBody>
                        <ItemDesc >
                            <a>{this.props.title} </a>
                            <p>{this.props.description}</p>
                            
                        </ItemDesc>
                        <ItemAuthor>
                            
                            <AuthorImage  src={this.props.avatarUrl} alt="avatar user"/>
                            <AuthorName> {this.props.authorName}</AuthorName>
                        </ItemAuthor>
                    </ItemBody>
                    <ItemFooter>
                    
                         <Btn onClick={this.handleUpVote}><Icon CaretUp/> </Btn>
                            {this.props.votes}
                         <Btn  onClick={this.handleDecrementVote}><Icon CaretDown/> </Btn >

                    </ItemFooter>
             </ProductItem>
             
          );
      }
}
export default Product;