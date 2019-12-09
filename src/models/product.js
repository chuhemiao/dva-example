import * as api from "../services/example.js"
export default{
    namespace: "product",
    state:{
        productList:[
            {
                name:"doudou",
            },
            {
                name:"cook",
            }
        ]
    },
    reducers:{
        updateList(state,action){
            let currentProductList = deepClone(state);
            currentProductList.productList.push(action.payload);
            return currentProductList;
        }
    },
    effects:{
        //*号 是 es6新特性 
        //dva 的 effects 是通过 generator 组织的。Generator 返回的是迭代器，通过 yield 关键字实现暂停功能。

        // 这是一个典型的 dva effect，通过 yield 把异步逻辑通过同步的方式组织起来。

        *updateListAsync({ payload },{ call,put })  {
            yield put({
                type:"updateList",
                payload

            })
        },
        *updateListHttp({payload},{call,put}){
            // 定义网络请求
            const result =  yield call(api.getProduct,payload);
            const data =  result.data
            if(data){
                yield put({
                    type:"updateList",
                    payload:data
                })
            }
        }
    },
    subscriptions: {
        // setup({ dispatch,  history}) {
        //     const currentProduct = {
        //         name :"doudou",
        //     }
        //     window.onresize = () =>{
        //         // console.log(dispatch)
        //         dispatch({
        //             // 不需要命名空间
        //             type:"updateList",
        //             payload:currentProduct
        //         })
        //     }
        // },
        setupHistory({dispatch,history}){
            history.listen((location)=>{
                console.log(location)
            })
        }
    }
}

// 深度克隆

function deepClone(arr){
    let _obj = JSON.stringify(arr),
        objClone = JSON.parse(_obj);
    return objClone;
}