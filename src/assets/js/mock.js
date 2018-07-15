var Mock = require('mockjs');


// 产品分类
Mock.mock(/api\/getProducts/, {
  success: true,
  msg: '',
  'data|4': [
    { "label":"@cname" , "value":'@tld',"name":"product" }
  ]
});

// 产品某一类所有的产品
Mock.mock(/api\/getAllProducts/, {
  success: true,
  msg: '',
  'data|10':[
    {"title":"@cname" ,"img":'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3133337892,2886046925&fm=173&app=25&f=JPEG?w=640&h=360&s=C4DA33C2484AAB599C58BD1E0100C0C0' }
  ]
});

// 四个圈圈 加四行描述
Mock.mock(/api\/getProfessional/, {
  success: true,
  msg: '',
  'data|4': [
    { "title":"@cname" , "describe|4": ['精品语文班','精品作业A班'],"img":'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3133337892,2886046925&fm=173&app=25&f=JPEG?w=640&h=360&s=C4DA33C2484AAB599C58BD1E0100C0C0' }
  ]
});
// 轮播图的浮层文字
Mock.mock(/api\/GetBlock/, {
  success: true,
  msg: '',
  'data|6-8': [
    { "title":"@cname"}
  ]
});

// 获取成功案例信息
Mock.mock(/api\/getSuccessCase/, {
  success: true,
  msg: '',
  'data|5': [
    { "title":"@cname","describe":"@cparagraph","img":'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3133337892,2886046925&fm=173&app=25&f=JPEG?w=640&h=360&s=C4DA33C2484AAB599C58BD1E0100C0C0' }
  ]
});

// 获取业绩工程
Mock.mock(/api\/getProjects/, {
  success: true,
  msg: '',
  'data|4': [
    { "label":"@cname","value|1-100":1,"name":"project"}
  ]
});

// 工程某一区域所有的业绩
Mock.mock(/api\/getAllProjects/, {
  success: true,
  msg: '',
  'data|10':[
    {"title":"@cname" ,"img":'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3133337892,2886046925&fm=173&app=25&f=JPEG?w=640&h=360&s=C4DA33C2484AAB599C58BD1E0100C0C0',"id|1-100":1 }
  ]
});

// 知识园地
Mock.mock(/api\/getKnowledges/, {
  success: true,
  msg: '',
  'data|10':[
    {"title":"@cname" ,"img":'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3133337892,2886046925&fm=173&app=25&f=JPEG?w=640&h=360&s=C4DA33C2484AAB599C58BD1E0100C0C0',"id|1-100":1 }
  ]
});

// 专卖店形象
Mock.mock(/api\/getShopImage/, {
  success: true,
  msg: '',
  'data|10':[
    {"title":"@cname" ,"img":'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3133337892,2886046925&fm=173&app=25&f=JPEG?w=640&h=360&s=C4DA33C2484AAB599C58BD1E0100C0C0',"id|1-100":1 }
  ]
});