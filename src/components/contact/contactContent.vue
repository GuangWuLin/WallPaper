<template>
    <section class="main-container">
        <Row :gutter='20'>
            <Col span='12'>
            <div class="contact-describle">
                <span>墙纸十大品牌，无缝墙布，提花壁布，刺绣墙布</span>
                <div>
                    <span>地址：四川省遂宁市射洪县太和镇</span>
                    <span>电话：13000000000</span>
                    <span>座机：0825-6688888</span>
                    <img src="../../../static/img/location.jpg" alt="">
                </div>
            </div>
            </Col>
            <Col span='12' style="height:400px;">
            <div id="container"></div>
            <div id="panel"></div>
            </Col>
        </Row>
    </section>
</template>
<script>
export default {
    methods: {
        initMap() {
            // 构造地图对象的方法一：使用地图容器ID创建
            var map = new AMap.Map('container');
            // 构造地图对象的方法二：使用地图容器对象创建
            // var map = new AMap.Map(document.getElementById("container"));
            // 创建一个 Marker 实例：
            var marker = new AMap.Marker({
                position: new AMap.LngLat(104.06, 30.67),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: '青青子衿'
            });
            // 将创建的点标记添加到已有的地图实例：
            marker.setTitle("HelloKitty");
            // 设置label标签
            marker.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
                offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
                content: "HelloKitty"
            });
            AMap.plugin(['AMap.ToolBar', 'AMap.Driving'], function() {//异步加载插件
                var toolbar = new AMap.ToolBar();
                map.addControl(toolbar);
                var driving = new AMap.Driving({
                    policy: AMap.DrivingPolicy.LEAST_TIME
                }); //构造驾车导航类
                driving.search([{ keyword: '广都地铁站' }, { keyword: '射洪金龙市场' }], function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        (new Lib.AMap.DrivingRender()).autoRender({
                            data: result,
                            map: map,
                            panel: "panel"
                        });
                    } else {
                        alert(result);
                    }
                })
            });

            // AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {
            //     var infoWindow = new SimpleInfoWindow({
            //         infoTitle: '<strong>点击这里</strong>',
            //         infoBody: '<p class="my-desc">点击这里</p><button class="mybtn">点击这里</button>',
            //         //基点指向marker的头部位置
            //         // offset: new AMap.Pixel(0, 0)
            //     });
            //     infoWindow.get$Container().on('click', function(event) {
            //         alert('Click infoWindow');
            //     });
            //     infoWindow.get$InfoTitle().on('click', function(event) {
            //         //阻止冒泡
            //         event.stopPropagation();
            //         alert('Click infoTitle');
            //     });
            //     infoWindow.get$InfoBody().on('click', '.mybtn', function(event) {
            //         //阻止冒泡
            //         event.stopPropagation();
            //         alert('Click .mybtn of infoBody');
            //     });
            //     infoWindow.open(map, map.getCenter());
            // });
            map.add(marker);

        }
    },
    mounted() {
        this.initMap();
    }
}
</script>
<style lang="less" scoped>
.main-container {
    width: 100%;
    height: 400px;
    overflow: hidden;
    margin: 10px auto;
    #container {
        width: 100%;
        height: 100%;
    }
    #panel {
        z-index: 999;
        position: absolute;
        background-color: white;
        max-height: 100%;
        overflow-y: auto;
        right: 0;
        width: 280px;
    } // p.my-desc {
    //     margin: 5px 0;
    //     line-height: 150%;
    // }
    .contact-describle {
        padding: 20px;
        text-align: left;
        &>span {
            font-size: 30px;
            font-weight: bold;
        }
        div {
            margin-top: 20px;
            span {
                display: block;
                font-size: 20px;
                line-height: 30px;
            }
            img {
                width: 100%;
                height: 30%;
            }
        }
    }
}
</style>

