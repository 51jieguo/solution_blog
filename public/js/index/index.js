var pageSize = 10;
var urlnewQuestion = "/cachedata/newquestioncache.json";
var urlhotQuestion = "/cachedata/hotquestioncache.json";
var indexTagData = "/cachedata/indexCacheFile";
var url = "";
var init = function (index, type) {
    if (type == 1) {
        url = urlnewQuestion
    } else {
        if (type == 2) {
            url = urlhotQuestion
        }
    }
    soaryang.getAjax(url, {}, function (data) {
        console.log(data);
        var html = "";
        if (data != null) {
            var count = data.count;
            var questionArray = data.questionList;
            if (questionArray != null) {
                $("#pagePlugId").html("");
                var array = questionArray.slice((index - 1) * pageSize, index * pageSize);
                for (var i = 0; i < array.length; i++) {
                    var questionObject = array[i];
                    html+='<div class="topic-list b-20">';
                    html+='<div class="clearfix">';
                    html+='<div class="span1 pull-left">';
                    html+='<a href="javascript:;" rel="bookmark" title="标题标题标题标题1" target="_blank">';
                    html+='<img class="lazyloadimg" alt="标题标题" src="images/i2.jpg"/>';
                    html+='</a>';
                    html+='</div>';
                    html+='<div class="offset1 intro">';
                    html+='<h1><a href="javascript:;" title="标题" rel="bookmark" target="_blank">'+questionObject.name+'</a>';
                    html+='<br/>';
                    html+='<a class="ie6png" href="javascript:void(0);" title="277次浏览">日期:'+$.dateFormat(questionObject.createTime)+'</a>';
                    html+='<a class="ie6png" href="javascript:void(0);" title="277次浏览">&nbsp;'+questionObject.tagName+'</a>';
                    html+='</h1>';
                    html+='</div>';
                    html+='</div>';
                    html+='</div>';
                }
                $(".questionList").html(html);
            }
        }
    }, function (data) {
    })
};
init(1, 1);