const Mock = require("mockjs") 
module.exports = {
    "GET /api/posts":(req,res)=>{
        res.status(200).json({
            users:Mock.mock({
                'data|80-100':[
                    {
                        id:'@id',
                        name:'@name',
                        nickName:'@last',
                        address:'@country(true)',
                        isMale:'@boolean',
                        email:'@email',
                        createTime:'@createTime',
                    }
                ]
            })
        })
    }
}