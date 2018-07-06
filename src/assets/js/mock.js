var Mock = require('mockjs');


// 产品分类
Mock.mock(/api\/GetInfo/, {
  success: true,
  msg: '',
  'data|4': [
    { "title":"@cname" , "name|+1": 1,"category":'product' }
  ]
});
// 四个圈圈 加四行描述
Mock.mock(/api\/GetCircleInfo/, {
  success: true,
  msg: '',
  'data|4': [
    { "title":"@cname" , "describe|4": ['精品语文班','精品作业A班','英语班','语文班'],"img":'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3133337892,2886046925&fm=173&app=25&f=JPEG?w=640&h=360&s=C4DA33C2484AAB599C58BD1E0100C0C0' }
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

// 轮播图的浮层文字
Mock.mock(/api\/GetBlockInfo/, {
  success: true,
  msg: '',
  'data|4': [
    { "title":"@cname","describe":"@cparagraph"}
  ]
});

