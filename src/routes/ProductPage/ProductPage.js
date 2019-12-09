import React from "react"
import Product from "../../components/Product"
import {connect} from "dva"

 class IndexPage extends React.Component{
    render(){
        console.log(this.props)
        const { productList,dispatch} = this.props;
        return(
            <div>
                IndexPage product
                <Product history = {this.props.history} dispatch={dispatch}  title="商品类型" productList = {productList} />
            </div>
        )
    }
}

const matStateToProps = (state) =>{
    return {
        productList:state.product
    }
}

export default connect(matStateToProps)(IndexPage)