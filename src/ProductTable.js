import React from 'react';
import PropTypes from 'prop-types';


export const ProductTable=({products})=>{

    const productlist=products.length ? (products.map(
        el=>{
        return  <tr> 
                    <td>{el.price}</td>
                    <td>{el.name}</td> 
                    <td>{el.category}</td> 
                </tr>
          }
        
        )
        )

    :(<tr>
        <td colspan='3'>No products available</td>
     </tr>)

    return(
        <table className="table table-hover table-dark"  style={{width:500,height:200 ,textAlign:'center', borderRadius:20}}>
            <thead>
                <tr>
                    <th style={{color:'red'}}>Price</th>
                    <th style={{color:'red'}}>Name</th>
                    <th style={{color:'red'}}>Category</th>
                </tr>
            </thead>
            <tbody>
                {productlist}
            </tbody>
            
        </table> )
}

ProductTable.propTypes = {

    products: PropTypes.arrayOf(PropTypes.shape({
        price: PropTypes.number,
        name: PropTypes.string,
        category : PropTypes.oneOf(['clothes','electronics'])
      }))
    
  }
  