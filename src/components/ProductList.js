import React from 'react';
import Product from './Product';
import {products} from './ProductsData';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
width: 700px;
margin: auto;
@media screen and (max-width:786px){
 flex-direction:column-reverse;
 width:100%;
}

`;
const WrapperLeft = styled.div`

display:flex;
flex-direction:column;
max-width:900px;
margin:auto;

@media screen and (max-width:786px){
  
    
    width: 100%;
    padding: 0 2rem;
}

`;
const WrapperRight = styled.div`

display:flex;
flex-direction:column;
justify-content:flex-start;
max-width:900px;

padding:1rem;
@media screen and (max-width:786px){
   
}

`;
const InfoWrapper = styled.div`
    padding: 1rem;
    background: #222;
    color: white;
    min-width: 200px;
    border-radius: 10px;
    position: fixed;
    @media screen and (max-width:786px){
     margin:auto;
     position:relative;
    }
`;





class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products :[],
            maxVote :0,
            totalVote:0
        };
       this.handleProductUpVote = this.handleProductUpVote.bind(this);
       this.handleProductDecrementVote = this.handleProductDecrementVote.bind(this);
    }
    componentDidMount(){
       
      
       this.setState({products:this.state.products.concat(products)})
       
    }
    handleProductUpVote(productId){
     let result = this.state.products.map((product) =>{
        if(product.id === productId){
           return Object.assign({},product,{votes:product.votes + 1});
       }else{
           return product;
       }
    
     });
        this.setState({products:result})
    }
    handleProductDecrementVote(productId){
        let result = this.state.products.map((product) =>{
           if(product.id === productId){
              return Object.assign({},product,{votes:product.votes - 1});
          }else{
              return product;
          }
       
        });
           this.setState({products:result})
       }
    // Link with max fote
    maxVote() {
        let voteList =  this.state.products.map(({votes}) => votes);
        let maxVote = Math.max(...voteList);
        return maxVote;
    }
    minVote() {
        let voteList =  this.state.products.map(({votes}) => votes);
        let minVote = Math.min(...voteList);
        return minVote;
    }
    totalVote(){
        
        let voteList =  this.state.products.map(({votes}) => votes);
        let totalVote = voteList.reduce((a,b) => a+b,0);
        return totalVote;
        
    }
    
    render(){
        // sort porduct using votes as reference
        const sortedProduct   = this.state.products.sort((a,b)=>b.votes -a.votes);

        // total Vote component
        const TolalVote = () => {return <p>Total votes : {this.totalVote()}</p>};

        // LinkWithMaxVote component to show the Max vote
        const LinkWithMaxVote = () =>{return <p>Max Vote : {this.maxVote()}</p>};
        const LinkWithMinVote = () =>{return <p>Min Vote : {this.minVote()}</p>};

       
        const ProductComponent = () => sortedProduct.map(product =>{
        
           
           return  <Product 
              key= {"product-"+product.id}
              id = {product.id}
              title = {product.title}
              description = {product.description}
              url = {product.url}
              votes = {product.votes}
              avatarUrl = {product.submitterAvatarUrl}
              productImageUrl ={product.productImageUrl} 
              authorName={product.submitterName}
              incrementVote={this.handleProductUpVote}
              decrementVote={this.handleProductDecrementVote}
              />
            }
        )


        return( 
            
             <Wrapper>
                <WrapperLeft>
                     <ProductComponent />
                </WrapperLeft>
                <WrapperRight>
                    <InfoWrapper>
                        <TolalVote />
                        <LinkWithMaxVote />
                        <LinkWithMinVote />
                    </InfoWrapper>
                </WrapperRight>
               
               
            </Wrapper>
            ) 
     
    }
}

export default ProductList;