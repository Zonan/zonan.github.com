
function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}

function move(obj,json,complete){
    clearInterval(obj.timer);
    complete=complete||{};
    complete.time=complete.time||1000;
    complete.easeing=complete.easeing||'linear';
    var start={};
    var dis={};
    for(var name in json){
        start[name]=parseFloat(getStyle(obj,name));
        dis[name]=json[name]-start[name];
    }
    var count=parseInt(complete.time/30);
    var n=0;
    timer=setInterval(function(){
        n++;
        for(var name in json){
            switch(complete.easeing){
                case 'linear':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a=1-n/count;
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
            }
            if(name=='opacity'){
                obj.style.opcity=cur;
                obj.style.filter='alpha(opacity:'+cur*100+')';
            }else{
                obj.style[name]=cur+'px';
            }   
        }
        if(n==count){
            clearInterval(obj.timer);
            complete.fn&&complete.fn();
        }
    },30);
}
