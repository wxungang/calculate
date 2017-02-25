/**
 * Created by xiaogang on 2017/2/25.
 */
"use strict";

var flag=kehuduan();
if(flag){
    //客户端使用的

    //do  something
    other();
//@replaceStart
}else{
    //do  something
    other();
//@replaceEnd
}

function kehuduan() {
     return false;
};

function other() {
    //@replaceStart
    //@replaceEnd
}