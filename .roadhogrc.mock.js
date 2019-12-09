
// export default {
//     // ... es新特性 扩展运算符 引入文件
//     ...require("./mock/product")
// };

// 流式读取mock下的所有文件

import fs from "fs"
import path from "path"

const mock  = {}

fs.readdirSync(path.join(__dirname+"/mock")).forEach(function (file){
    if(file.match(/\.js$/)) {
        Object.assign(mock,require("./mock/"+file))
    }
})

export default mock