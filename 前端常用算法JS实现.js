var ids = [11,22,333];
(function sendRequest(){
	var id = shift();
	if(id){
		$.ajax({url:"/get",data:{id}}).always(function(){
			//do sth
            console.log("finished");
            sendRequest();
		});
	}else {
        console.log("finished");
    }
})();

//递归实现串行请求不堵塞

function getElementById(node,id){
    if(!node) return null;
    if(node.id === id) return node;
    for (var i = 0; index < node.childNodes.length; i++) {
        var found = getElementById(node.childNodes[i],id);
        if(found) return found;       
    }
    return null;
}

//深度优先地递归遍历DOM树查找id

function getElementById(node,id){
    // 遍历所有的Node
    while(node){
        if(node.id === id) return node;
        node = nextElement(node);
    }
    return null;
}
function nextElement(node){
    if(node.children.length) {
        return node.children[0];
    }
    if(node.nextElementSibling){
        return node.nextElementSibling;
    }
    while(node.parentNode){
        if(node.parentNode.nextElementSibling);
    }
    while(node.parentNode){
        if(node.parentNode.nextElementSibling) {
            return node.parentNode.nextElementSibling;
        }
        node = node.parentNode;
    }
    return null;
}

//深度优先地非递归遍历DOM树查找id

function bubbleSort(arr){
    var i = 0,
        j = 0;
    for (var i = 1; i < arr.length; i++) {
      for (j=0; j<=arr.length-i; j++){
        var temp = 0;
        // ">"从小到大排序
        // "<"从大到小排序
        if(arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
      }
    }
    return arr;
}

// 冒泡排序

function quick(arr,l,r){
    if(l < r){
        var i = l,j = r,x = arr[i];
        while(i<j){
            while(i<j && arr[j]>x)
            j--;

            if(i<j)
              //这里用i++，被换过来的必然比x小，赋值后直接让i自加，不用再比较，可以提高效率
              arr[i++] = arr[j];

            while(i<j && arr[i]<x)
                i++;

            if(i<j)
              //这里用j--，被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
              arr[j--] = arr[i];
        }
        arr[i] = x;

        quickSort(arr,l,i-1);
        quickSort(arr,i+1,r);
    }
}

//快速排序

function palindrome(str) {
    return str === str.split('').reverse().join('')
}

function palindrome(str) {
    // \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
    var re = /[\W_]/g;
    // 将字符串变成小写字符,并干掉除字母数字外的字符
    var lowRegStr = str.toLowerCase().replace(re,'');
     // 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
    if(lowRegStr.length===0) return true;
    // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
    if(lowRegStr[0]!=lowRegStr[lowRegStr.length-1]) return false;
    //递归
    return palindrome(lowRegStr.slice(1,lowRegStr.length-1));
}

// 判断回文字符串

