import React from 'react'
import ProductTable from './ProductTable';
import axios from 'axios';
import { Icon, Table, Button,Menu } from 'semantic-ui-react'
export class Products extends React.Component{


// constructor(props){
//     super(props);
    state={
           product:[],
           loading:false,

    }
    //this.fetchProductsDetails=this.fetchProductsDetails.bind(this);
// }




componentDidMount()
{
this.fetchProductsDetails();

}

fetchProductsDetails=()=>
{
    this.setState({loading:true})
axios.get('products/GetProduct')
.then(res=>
{ this.setState({loading:false})
    console.log(res.data);
    this.setState({product:res.data})

})
.catch(err=>{console.log(err)})

}


// componentDidUpdate()
// {



// }


// componentWillUnmount(){


// }



render(){
const {product}=this.state

console.log( product)

if(this.state.loading===true)
return(

    <div>loading....</div>
);
else{
return(

<React.Fragment>
    

    

<ProductTable value={product} fetchProductDetails={this.fetchProductsDetails} />
</React.Fragment>


);

}
}


} 
