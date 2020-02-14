    $(function () {
        //pc点击事件公用
        clickEvent();
        //手机版点击事件公用
        mobileClickEvent();
    });

    function clickEvent() {
        //产品详情页js
        $(".product-list-label").click(function () {
            var flag = $(this).next().hasClass("product-list-data");
            var dis = $(this).next().css("display")
            if (flag && dis == "none") {
                $(this).children().eq(0).prop("class", "ico-li-bottom");
                $(this).next().css("display", "block");
            } else if (flag && dis == "block") {
                $(this).children().eq(0).prop("class", "ico-li-right");
                $(this).next().css("display", "none");
            }
        });

        //acctounting列表页js
        $(".order-table-cross").click(function () {
            var flag = $(this).next().hasClass("order-table-data");
            var dis = $(this).next().css("display");
            if (flag && dis == "none") {
                $(this).children().eq(0).find("i").prop("class", "ico-li-bottom");
                $(this).next().css("display", "table-row");
            } else if (flag && dis == "table-row") {
                $(this).children().eq(0).find("i").prop("class", "ico-li-right");
                $(this).next().css("display", "none");
            }
        });

        //shipping列表页js
        function shippingTableCross() {
            $(".shipping-table-cross").click(function () {
                var flag = $(this).next().hasClass("shipping-table-data");
                var dis = $(this).next().css("display");
                if (flag && dis == "none") {
                    $(this).children().eq(0).find("i").prop("class", "ico-li-bottom");
                    $(this).next().slideToggle("fast");
                } else if (flag && dis == "table-row") {
                    $(this).children().eq(0).find("i").prop("class", "ico-li-right");
                    $(this).next().slideToggle("fast");
                }
            });
        }

        //首页home-line-li3
        $(".home-line-li3 li").click(function () {
            var flag = $(this).next().hasClass("home-li3-date");
            var dis = $(this).next().css("display");
            if (flag && dis == "none") {
                $(this).children().eq(0).find("i").prop("class", "ico-li-bottom");
                $(this).next().slideToggle("fast");
            } else if (flag && dis == "block") {
                $(this).children().eq(0).find("i").prop("class", "ico-li-right");
                $(this).next().slideToggle("fast");
            }
        });

        $('.header-logout').click(function () {
            alert("退出登录");
        });

        //shipping列表页js
        shippingTableCross();

        //shipping-Tracking Number-点击查看物流
        $(".shipping-table-cross td a").click(function () {
            //获取点中的td
            var trackNumb = $(this).text();
            var top = getOffsetTop(this), left = getOffsetLeft(this);
            var tdObj = $(this).parent();
            var tdSeq = tdObj.parent().find("td").index(tdObj[0]);
            if (tdSeq == 1) {
                showLogistics(null);
                $(".track-time-line").css({
                    "top": top + 30,
                    "left": "37%"
                });
            }
        });

        $(".order-table-panel td a").click(function () {
            //获取点中的td
            var trackNumb = $(this).text();
            var top = getOffsetTop(this), left = getOffsetLeft(this);
            var tdObj = $(this).parent();
            var tdSeq = tdObj.parent().find("td").index(tdObj[0]);
            if (tdSeq == 5) {
                showLogistics(null);
                $(".track-time-line").css({
                    "top": top + 30,
                    "left": "37%"
                });
            }
        });

        // 时间轴跳转统一链接
        let stepUrlArr = ['catalogs2_add.html', 'catalogs3_add.html', 'catalogs4_add.html', 'catalogs5_add.html'];
        // 时间轴点击事件
        $('.layui-timeline li').unbind().click(function () {
            let isOver = $(this).find('i').hasClass('layui-timeline-axis-over');
            if (isOver) {
                location.href = stepUrlArr[$(this).index()];
            }
        });

        function orderDetail() {
            $('.order-menu').remove();
            let html = '<div class="bg-model">' +
                '<div class="bg-model-info">' +
                '<div class="bg-model-left">' +
                '<div class="bg-model-left-info">' +
                '<div><span>Sales Number : </span>20993029</div>' +
                '<div><span>Order Number : </span>blk-20993029</div>' +
                '<div><span>Logo/Team : </span>New york univeersity</div>' +
                '<div><span>Est.Shipping Date : </span>APRIL 30,3019</div>' +
                '</div>' +
                '<div class="bg-model-left-img">' +
                '<div class="bg-model-left-img-title1">Baseball/ Dinger Short Sleeve 2 button</div>' +
                '<div class="bg-model-left-img-title2"><span>Part #: BA-JS-115</span><span>Gender: Menus</span></div>' +
                '<div class="bg-model-left-img-model"><img src="img/info-3.png"></div>' +
                '<div>Item Description</div>' +
                '<div class="bg-model-left-img-item">' +
                '<span>S/S women volley jersey S/S women volley jersey</span>' +
                '<span>S/S women volley jersey S/S women volley jersey</span>' +
                '<span>S/S women volley jersey S/S women volley jersey</span>' +
                '</div>' +
                '</div>' +
                '<div class="bg-model-left-item"></div>' +
                '</div>' +
                '<div class="bg-model-right">' +
                '<span class="bg-model-close">&times;</span>' +
                '<div class="bg-model-right-title">Delivery Info:</div>' +
                '<form class="am-form bg-model-right-from">' +
                '<div><span>Contact Person : </span> Peter Smith</div>' +
                '<div><span>Street : </span> No.100 King Street</div>' +
                '<div><span>City : </span> Gold Coast</div>' +
                '<div><span>State : </span> Queenland</div>' +
                '<div><span>Zip code : </span> 14555</div>' +
                '<div><span>Country : </span> Australia</div>' +
                '<div><span>Shipping Method : </span> DHL Pre-Paid,Account #1231231 </div>' +
                '<div><warn>* Select a Reason</warn></div>' +
                '<div><select> <option>Input wrong order information</option></select></div>' +
                '<div><warn>* Notes</warn></div>' +
                '<div><textarea placeholder="1234567890"></textarea></div>' +
                '</form>' +
                '</div>' +
                '<div style="clear: both"></div>' +
                '<div class="bg-model-btn-model"><button class="am-btn">REQUIRE TO CANCEL</button></div>' +
                '<div>' +
                '</div>'
            $('body').append(html);
            $('.bg-model-close').click(function () {
                $('.bg-model').remove();
            });
        }

        function getOffsetTop(el) {
            return el.offsetParent ? el.offsetTop + getOffsetTop(el.offsetParent) : el.offsetTop
        }

        function getOffsetLeft(el) {
            return el.offsetParent ? el.offsetLeft + getOffsetTop(el.offsetParent) : el.offsetLeft
        }

        //传入对象动态加载数据
        $(".order-detail-model").unbind().click(function () {
            let html = '<div class="order-menu">' +
                '<div> <i class="ico-li-order-find"></i> Find Associatiations</div>' +
                '<div><i class="ico-li-order-associate"></i> Creat Associate Order</div>' +
                '<div> <i class="ico-li-order-edit"></i> Edit Order Details</div>' +
                '<div> <i class="ico-li-order-cancel"></i> Cancel</div>' +
                '</div>';
            +
                '</div>';
            $('.order-menu').remove();
            var top = getOffsetTop(this), left = getOffsetLeft(this);
            $('body').append(html);
            $(".order-menu").css({
                "top": top + 30,
                "left": left
            });

            $('.order-menu div').unbind().click(function () {
                let index = $(this).index();
                if (index == 0) {
                    
                } else if (index == 3) {
                    orderDetail();
                }
            });
        });

        var showFlag = true;

        //传入对象动态加载数据
        function showLogistics(data) {
            var log = '<div class="track-time-line">' +
                '<div class="close-tip">× 关闭</div>' +
                '<div>' +
                '<span class="time-line-title1"><i class="am-icon-phone"></i> 电话：400-820-8388</span>' +
                '<span class="time-line-title2"><a>选择快递公司 </a><i class="am-icon-chevron-right"></i></span>' +
                '</div>' +
                '<ul class="time-vertical">' +
                '<li class="cur"><b></b><a>2019-06-05 22:41:40 ShangHai,China扫描</a></li>' +
                '<li><b></b><a>2019-06-05 22:41:40 JaXing,China扫描</a></li>' +
                '<li><b></b><a>2019-06-05 22:41:40 JaXing,China扫描</a></li>' +
                '<li><b></b><a>2019-06-05 22:41:40 订单已经处理：为ups准备就绪</a></li>' +
                '</ul>' +
                '</div>';

            if (showFlag) {
                $('body').append(log);
                showFlag = false;
                $(".shipping-table-cross").unbind();
            }

            $(".close-tip").click(function () {
                showFlag = true;
                $(".track-time-line").remove();
            });

        }
    }

        //移动端适配js
        function mobileClickEvent() {
            $(".header-switch-button").click(function () {
                var left = $(".header-fluid").css("margin-left");
                left = left.replace(/[^\d]/g, "");
                if (left > 0) {
                    $(".header-fluid").css("margin-left", "0px");
                    $(".left-sidebar,.left-from").css("display", "none");
                    $(".header-msg-left,.header-logout").css("display", "block");
                } else {
                    $(".header-fluid").css("margin-left", "285px");
                    $(".left-sidebar,.left-from").css("display", "block");
                    $(".header-msg-left,.header-logout").css("display", "none");
                }
            });
        }

    //获取时间
    function getDate(number){
        //昨天的时间
        let today = new Date();
        today.setDate(today.getDate() + number);
        let str = today.format("yyyy-MM-dd");
        return str;
    }

    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
