module.exports = {
    "GET /api/product":(req,res)=>{
        const params = req.query
        console.log(params.id)
        res.send(
            {name:"接口请求的数据kk"}
        )

    }
}