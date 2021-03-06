    //判断输入的Phone格式
    const  IsPhone = function(field) {
        /*移动号段
        1706,853,1703,147,1705,184,178,182,183,187,188,157,158,159,150,151,152,134,135,136,137,138,139,148
        规则：可以以0开头+三位固定号段+8为数字*/
        var pattern1 = new RegExp(/^0{0,1}(13[4-9]|14[78]|15[0-2]|15[7-9]|170|178|18[2-4]|18[78]|853)[0-9]{8}$/);
        //var pattern1 = new RegExp(/^0{0,1}(13[4-9]|147|15[0-2]|15[7-9]|178|18[23478])[0-9]{8}$/);
        /*联通号段
        0,130,131,132,155,156,185,186,145,176,154,171,1704,1707,1708,1709,175
        */
        var pattern2 = new RegExp(/^0{0,1}(13[0-2]|145|15[4-6]|170|171|17[56]|18[56])[0-9]{8}$/);
        /*电信号段
        149,153,133,180,189,181,177,173,1701,1702,1700
        */
        var pattern3 = new RegExp(/^0{0,1}(133|149|153|170|173|177|18[01]|189)[0-9]{8}$/);

        /*座机号码
        */
        var pattern4 = /^[+]{0,1}(\d){1,4}[ ]{0,1}([-]{0,1}((\d)|[ ]){1,12})+$/;
        if (pattern1.test(field)) {
            //"移动";
            return 1;
        } else if (pattern2.test(field)) {
            //"联通";
            return 1;
        } else if (pattern3.test(field)) {
            //"电信";
            return 1;
            //        else if (pattern4.test(str)) {
            //            return 1;
            //        }
        } else {
            //"非手机号";
            return 0;
        }
    }
    const global = {
        address:'浙江省绍兴市柯桥区钱清工业园',
        tel:'15157573105',
        copyRight:'CopyRight©️2018',
        brand:'丝润墙布',
        IsPhone
    }
export default global;