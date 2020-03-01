var baseUrl="http:www.baidu.com/";

/**
 * get 请求
 * @param {Object} method
 * @param {Object} sucallback
 * @param {Object} errcallback
 */
function getRequest(method,sucallback,errcallback){
	baseRequest(method,"GET",null,sucallback,errcallback);
}

/**
 * post 请求
 * @param {Object} method
 * @param {Object} postData
 * @param {Object} sucallback
 * @param {Object} errcallback
 */
function postRequest(method,postData,sucallback,errcallback){
	baseRequest(method,"POST",postData,sucallback,errcallback);
}


/**
 * @param {Object} method 请求的方法
 * @param {Object} type post,get
 * @param {Object} data 用于post请求的数据
 * @param {Object} sucallback 成功回调
 * @param {Object} errcallback 失败回调
 */
function baseRequest(method,type,postData,sucallback,errcallback){
	var url=baseUrl+method;
	$.ajax({
	     url: url,
	     data: type=="GET"?{} : postData,
		 contentType : 'application/json;charset=utf-8', //设置请求头信息
		 timeout:30000,
		 cache:false,
	     type: type,
	     dataType: "json",
	     success: function(data) {
			  sucallback(data);
	     },
		 error:function(data) {
			 errcallback(data)
	     }
	});
}