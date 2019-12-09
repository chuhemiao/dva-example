import React from "react"
import { withRouter, Link,routerRedux  } from "dva/router"
import  * as api from "../services/example"
import {productUpdateList,productUpdateListSync,productUpdateListHttp} from "../actions"

class Product extends React.Component{

    componentDidMount(){
        // api.getProduct()
        // .then(res=>{
        //     console.log(res)
        // })
        api.posts()
        .then(res=>{
            console.log(res.data)
        })
    }

    clickProductList = (event) =>{
        const currentProduct = {
            name :"doudou",
        }
        // this.props.dispatch({
        //     type:"product/updateList",
        //     payload:currentProduct
        // })
        this.props.dispatch(productUpdateList(currentProduct));
    }
    clickProductListAsync = (event) =>{
        const currentProduct = {
            name :"doudou2",
        }
        // this.props.dispatch({
        //     type:"product/updateListAsync",
        //     payload:currentProduct
        // })
        this.props.dispatch(productUpdateListSync(currentProduct));
    }
    clickGoHttp = (event) =>{
        // this.props.dispatch({
        //     type:"product/updateListHttp",
        //     payload:{
        //         id:'1001'
        //     }
        // })
        // actions传递参数模式 直接使用json结构
        this.props.dispatch(productUpdateListHttp({ id: '1001111' }));
    }
    
    clickGoToHander = (event) =>{
        console.log(this.props.history)
        this.props.history.push("/")
    }
    
    clickGoReduxHander = (event) =>{
        this.props.dispatch(routerRedux.push("/"))
    }
  
    render(){
        const {  productList }  = this.props.productList
        console.log(this.props.dispatch)
        return (
            <div>
                product商品：556{this.props.title}
                <ul>
                    {
                        productList.map((ele,index) => {
                            return <li key={index}>{ele.name}</li>
                        })
                    }
                </ul>
                <button onClick={this.clickProductList}>获取商品列表</button>
                <button onClick={this.clickProductListAsync}>获取商品列表Async</button>
                {/* 路由跳转页面的方式  link视图方式 */}
                <Link to="/">去首页</Link> 
                <button onClick={  this.clickGoToHander }>去首页2</button>
                <button onClick={  this.clickGoReduxHander }>去首页3</button>
                <button onClick={  this.clickGoHttp }>api请求</button>
            </div>
        )
    }
}


export default withRouter(Product)