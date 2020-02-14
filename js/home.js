//折线图
var myChart1 = echarts.init(document.getElementsByClassName('char1')[0]);
// 指定图表的配置项和数据
var option1 = {
    legend: {
        left: 'left',
        data: ['Order volume','delay']
    },
    xAxis: [{
        type: 'category',
        boundaryGap : false,
        show:  true,//根据需要关闭打开
        data: ["2019-1", "2019-2", "2019-3", "2019-4", "2019-5", "2019-6", "2019-7", "2019-8", "2019-9", "2019-10", "2019-11", "2019-12"]
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name:'Order volume',
        type:'line',
        smooth: true,
        areaStyle: {
            normal: {
                color: '#2b99ff',
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                color: '#2b99ff',
            }
        },
        data: [100, 301, 200, 500, 100, 3000, 4000, 3500, 6000, 9000, 8000, 8500]
    }, {

        name:'delay',
        type:'line',
        smooth: true,
        areaStyle: {
            normal: {
                color: '#c00',
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                color: '#c00',
            }
        },
        data: [300, 500, 200, 100, 600, 700, 900, 1000, 500, 800, 2000, 1500]
    }]
};
myChart1.setOption(option1);
//饼图1
var myChart2 = echarts.init(document.getElementsByClassName('char2')[0]);
var option2 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b} {d}%"
    },
    legend: {
        orient: 'vertical',
        bottom: 100,
        left: 'center',
        data: ['ship on time','delay']
    },
    series : [{
        name: 'Delay Analyze',
        type: 'pie',
        radius : '88%',
        center: ['50%', '35%'],
        label:{
            show:false,
            position: 'inside'
        },
        data:[
            {value:95, name:'ship on time'},
            {value:5, name:'delay'}
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }
    ]
};
myChart2.setOption(option2);
//饼图2
var myChart3 = echarts.init(document.getElementsByClassName('char3')[0]);
var option3 = {
    title: {
        text: 'Delay Analyze',
        textStyle:{
            fontSize:14,
            color: '#3D5170'
        },
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b} {d}%"
    },
    legend: {
        orient: 'vertical',
        bottom: 100,
        left: 'center',
        data: ['Payment delay','Approval delay','Manufacturing delay']
    },
    series : [
        {
            name: 'Delay Analyze',
            type: 'pie',
            radius : '88%',
            center: ['50%','35%'],
            label:{
                show:false,
                position: 'inside'
            },
            data:[
                {value:55, name:'Payment delay'},
                {value:40, name:'Approval delay'},
                {value:5, name:'Manufacturing delay'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart3.setOption(option3);