var mainHttp="http://127.0.0.1";(function(){if(window.self!=window.top){var b=mainHttp;if(typeof(window.location)=="object"){b=window.location.href}var a=$("<form name='toTopUrl' method='get' action='"+b+"' target='_top'></form>");a.appendTo("body").ready(function(){a.submit()})}})();function GetJPData(d,c,a,b){$.getJSON(d+"/JPData?action="+c+(a!=""?"&":"")+a+"&fun=?",b)}var loadImgFun=function(){var e="src2";var b=$("#loadingPicBlock");if(b.length>0){var c=b.find("img");var d=function(){return Math.max(document.documentElement.scrollTop,document.body.scrollTop)};var a=function(){return document.documentElement.clientHeight+d()+100};var f=d();var g=f;var h=function(){c.each(function(){if($(this).parent().offset().top<=a()){var i=$(this).attr(e);if(i){$(this).attr("src",i).removeAttr(e).show()}}})};$(window).bind("scroll",function(){g=d();if(g-f>50){f=g;h()}});h()}};var _IsCartChanged=true;var _IsBuySubmiting=false;var _InsertIntoCart=function(){};(function(){var L=mainHttp;
var ah="1";var m="http://member.1ytb.cc";var Y="https://skin.1ytb.cc";var r="http://gg.1ytb.cc";var c=function(){if($.browser.msie&&$(window).width()<1190){if(parseInt($.browser.version)<9){$("body").addClass("f-width-change")}else{$("body").removeClass("f-width-change")}}else{$("body").removeClass("f-width-change")}};if($.browser.msie&&parseInt($.browser.version)==6){$("body").css("font",'12px/150% Arial,Verdana,"\5b8b\4f53"')}c();$(window).resize(c);loadImgFun();var u=$("#divRTool");var J=function(){var aw=$("body").attr("rf");var at=false;var av=function(){if(at||$(window).scrollTop()>0){u.fadeIn("slow")}else{if(!at){X(function(){u.fadeOut("slow")})}}};var ar=function(){var ax=function(){av();u.find("li.f-cart").show()};if(aw=="2"){at=true;ax()}else{if(aw=="1"){ax()}else{u.addClass("g-suspension-change").find("li.f-customer").addClass("f-summit");if($(window).scrollTop()>0){av()}}}};var au=function(){if(ShowWechat){var aA=function(aC){if(aC&&aC.stopPropagation){aC.stopPropagation()}else{window.event.cancelBubble=true}};WechatCloseObj.click(function(aC){aA(aC);WechatBoxObj.fadeOut("slow");$.cookie("_wxTip",1,{domain:"1ytb.cc"})});var ay=$(window).width();var az=ay>1190?1190:990;var ax=(WechatBoxWid+ToolPadding)*2+az;var aB=ay>ax?((ay-az)/2-WechatBoxWid-ToolPadding)-2:ToolPadding;WechatBoxObj.css({right:aB+"px",cursor:"pointer"}).fadeIn("slow").click(function(){location.href="http://info.1ytb.cc/app/mobile.html"})}};u.hover(function(){u.children("div").addClass("m-tab-hover")},function(){u.children("div").removeClass("m-tab-hover")});$(window).scroll(av).resize(function(){_IsCartChanged=true;av()});ar();$("body,html").click(function(){X()})};var C=$("#ulTopRight");var d=$("#liTopUMsg");if(C.length>0){GetJPData(ah,"topinfo","",function(ar){if(ar.state==1){C.prepend('<li><div class="u-menu-hd u-menu-login"><a href="http://u.1ytb.cc/'+ar.userWeb+'" title="'+ar.username+'" class="blue">'+ar.username+'</a><a href="'+ah+'/Logout.html" title="退出">[退出]</a></div></li><li class="f-gap"><s></s></li>');d.attr("show","1").show().next("li.f-gap").show()}else{if(ar.state==0){C.prepend('<li><div class="u-menu-hd"><a href="'+ah+'/login.html?forward=rego" title="登录">登录</a></div></li><li class="f-gap"><s></s></li><li><div class="u-menu-hd"><a href="'+ah+'/register.html?forward=rego" title="注册">注册</a></div></li><li class="f-gap"><s></s></li>');d.attr("show","-1").hide()}}})}var b=$("#ulHTotalBuy");var i=$("#spFundTotal");var S=0;var ai=2000;var f=function(){GetJPData(r,"totalBuyCount","",function(aw){if(aw.state==0){i.html("￥"+aw.fundTotal);if(S!=aw.count){if(S==0){S=aw.count;b.children("li.num").each(function(){var ay='<cite style="top:-243px;">';for(var az=9;az>=0;az--){ay+='<em t="'+az+'">'+az+"</em>"}ay+="</cite><i></i>";$(this).html(ay)});var at=aw.count.toString();var av=at.length;var au=at.split("");b.find("cite").each(function(aB,ay){var aA=$(this);var az=parseInt(au[aB]);aA.animate({top:"-"+(27*(9-az))+"px"},{queue:false,duration:ai,complete:function(){}})})}else{var ax=S.toString().split("");var ar=aw.count.toString().split("");S=aw.count;b.find("cite").each(function(aD,aA){var aE=0;var aC=parseInt(ax[aD]);if(ax[aD]<=ar[aD]){aE=parseInt(ar[aD])-parseInt(ax[aD])}else{aE=10+parseInt(ar[aD])-parseInt(ax[aD])}if(aE!=0){var aF=$(this).children('em[t="'+aC+'"]');var az=aF.nextAll();for(var aB=az.length-1;aB>-1;aB--){$(this).prepend($(az[aB]))}var ay=-(243-aE*27);$(this).css({top:"-243px"}).animate({top:ay},{queue:false,duration:ai,complete:function(){}})}})}}}});setTimeout(f,5000)};if(b.length>0||i.length>0){f()}var j=function(ay){var ax="汽车";var at="输入“汽车”试试";var ar=50;var aw=function(){ay.unbind("blur").bind("focus",av);if(ay.val()==""){ay.val(at).css({color:"#BBB",padding:"9px 130px 9px 5px",width:"145px"});ay.next("span").css("zIndex","10").show()}};var av=function(){ay.unbind("focus").bind("blur",aw).css({color:"#333",padding:"9px 0px 9px 5px",width:"268px"});if(ay.val()==at){ay.val("").next("span").css("zIndex","0").hide()}};var au=function(){var az=$.trim(ay.val());if(az==at){az=ax}location.href=mainHttp+"/search/?q="+encodeURIComponent(az.replace(/(\/)/g,""))};ay.focus(av).keydown(function(az){if(13==((window.event)?event.keyCode:az.keyCode)){au()}}).keyup(function(){var az=$(this).val().trim();if(az.length>ar){$(this).val(az.substring(0,ar))}}).attr("placeholder","").css("color","#BBB").val(at);$("#btnHSearch").click(function(){au();return false})};var G=$("#txtHSearch");if(G.length>0){j(G)}var W=$("#btnTFavorite");if(W.length>0){var K=function(){var au="1元淘";var ar="http://127.0.0.1";try{window.external.addFavorite(ar,au)}catch(at){try{window.sidebar.addPanel(au,ar,"")}catch(at){alert("抱歉，您所使用的浏览器无法完成此操作。\r\n\r\n加入收藏失败，请使用Ctrl + D进行添加！")}}};W.bind("click",function(){K()})}var s=function(){$("#liMobile").hover(function(){$(this).addClass("u-arr-hover")},function(){$(this).removeClass("u-arr-hover")});$("#liMember").hover(function(){$(this).addClass("u-arr-hover u-arr-1yy")},function(){$(this).removeClass("u-arr-hover u-arr-1yyg")});d.hover(function(){$(this).addClass("u-arr-news u-arr-hover")},function(){$(this).removeClass("u-arr-news u-arr-hover")});var at=$("#divSortList");if($("body.home").length==0){$("#divGoodsSort").hover(function(){at.show()},function(){setTimeout(function(){if(!ar){at.hide()}},200)})}var ar=false;at.children("dl").each(function(){$(this).hover(function(au){ar=true;ak(au);$(this).addClass("hover");if($(this).next().length>0){$(this).append("<i></i>")}},function(au){ar=false;$(this).removeClass("hover").children("i").remove()})})};var N=$("#pServerTime");if(N.length>0){var p=N.children("span");var T=function(av){var at=av.getHours();var ar=av.getMinutes();var au=av.getSeconds();return(at>9?at.toString():"0"+at)+":"+(ar>9?ar.toString():"0"+ar)+":"+(au>9?au.toString():"0"+au)};var z=0;var B=new Date();var ad=B.getFullYear()+"-"+B.getMonth()+"-"+B.getDate()+" "+T(B);GetJPData(mainHttp,"servertime","time="+ad,function(at){if(at.code==0){z=at.num}var ar=function(){var aw=new Date();aw.setSeconds(aw.getSeconds()+z);var av=aw.getHours();var au=aw.getMinutes();var ax=aw.getSeconds();p.eq(0).html(av>9?av.toString():"0"+av);p.eq(1).html(au>9?au.toString():"0"+au);p.eq(2).html(ax>9?ax.toString():"0"+ax)};setInterval(ar,1000)})}var q=0;var n=0;var V=true;var R=true;var v=$("#divHCart");var H=$("#spHCart");if(v.length>0){}var aj=function(){var ar=q>99?"N+":q;H.html("("+ar+")");ac.html(ar).show()};var ak=function(ar){if(ar&&ar.stopPropagation){ar.stopPropagation()}else{window.event.cancelBubble=true}};var X=function(ar){if(y){ab.parent().animate({right:"-246px"},{queue:false,duration:aa,complete:function(){if(ar!=undefined){ar()}ac.parent().removeClass("current");o.prev("li").children("a").removeClass("current");o.children("div").hide();ab.hide();ap=false;y=false}})}else{if(ar!=undefined){ar()}}};var A=$("#ulRToolList");var o=A.children("li.f-cart");var ac=o.children("a").find("em");var ab=$("#divCartBox");if(o.length>0){var h=ab.children("div.u-cartEmpty");var ag=ab.children("div.m-loading-2014");var U=ab.children("div.u-commodity-list");var E=ab.children("div.u-commodity-pay");var y=false;var ap=false;var aa=500;var k=3;var x=68;var a=function(ay,au,ar,av,at){var ax="";ax+='<dl codeid="'+ay+'"><dd>';ax+='<span><a href="'+mainHttp+"/product/"+ay+'.html" title="'+at+'" target="_blank"><img src="http://goodsimg.1ytb.cc/GoodsPic/pic-70-70/'+au+'" /></a></span>';ax+='<span class="u-ygrc"><cite class="gray9"><em class="gray3">1元淘：</em><i class="orange">'+ar+"</i>人次</cite>";ax+='<cite class="gray9"><em class="gray3">小计：</em><i class="orange">￥'+ar+".00</i></cite></span>";ax+='<span class="u-close"><a href="javascript:;" title="删除"><i></i></a>';ax+='<input type="hidden" value="'+ay+'"><input type="hidden" value="'+ar+'"></span>';ax+="</dd></dl>";var aw=$(ax);am(aw);aw.hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});return aw};var g=function(){return'<div class="f-settlement gray6"><p class="fl">共 '+q+' 个商品<br>合计：<span class="orange">'+n+'.00</span><i class="orange">元</i></p><a target="_blank" href="'+mainHttp+'/MyCart/CartList.html" title="去结算" class="fr">去结算</a></div>'};var w=function(){return'<div class="f-seeAll-btn"><a target="_blank" href="'+mainHttp+'/MyCart/CartList.html">查看全部<i class="f-tran">&gt;</i></a></div>'};var am=function(ar){ar.find("span.u-close").one("click",function(aw){var au=$(this).parent().parent();var at=parseInt(au.find("input[type=hidden]").eq(0).val());var av=parseInt(au.find("input[type=hidden]").eq(1).val());GetJPData(L,"cartdelete","codeID="+at,function(ay){if(ay.code==0){V=true;var az=I();var ax=az<q;if(ax){M()}else{q-=1;n-=av;aj();if(q==0){U.attr("codeIdStr","").empty().hide();h.css({top:((parseInt(h.parent().height())-100)/2)+"px"}).show();E.html("").hide()}else{au.remove();an();U.attr("codeIdStr",U.attr("codeIdStr").replace(","+at+",",","));var aA=g();E.html(aA).show()}}}else{alert("抱歉，删除失败！")}});return false})};var ae=function(){return parseInt(($(window).height()-37-10-2-72)/x)};var I=function(){var at=0;var ar=ae();if(q<=k){at=q}else{if(q<=ar){at=q}else{at=ar}}return at};var an=function(){var au=ae();var ar=0;var at=50;if(q<=k){ar=k*x}else{if(q<=au){ar=q*x}else{at=72;ar=au*x}}U.css("height",(ar+"px")).parent().css("height",(ar+at)+"px")};var M=function(){GetJPData(L,"cartlabel","",function(aA){if(aA.code==0){if(aA.count>0){q=aA.count;n=aA.money;var au=aA.listItems;ag.hide();U.empty().show();var az=I();for(var aw=0;aw<az;aw++){var at=a(au[aw].codeID,au[aw].goodsPic,au[aw].shopNum,0,au[aw].goodsName);U.append(at)}var av="";var ar=az<q;if(ar){av+=w()}aj();av+=g();E.html(av).show();an();var ax=",";for(var aw=0;aw<au.length;aw++){ax+=au[aw].codeID+","}U.attr("codeIdStr",ax)}}else{q=0;ag.hide();var ay=k*x+50;ab.height(ay);h.css({top:((ay-100)/2)+"px"}).show();U.attr("codeIdStr","").empty();ac.html("0");E.empty().hide()}ap=false;_IsCartChanged=false;R=false})};var aq=function(ax){var ar=parseInt(ac.html()==""?0:ac.html());if(ax){var au=0;var at=50;var aw=0;var av=ae();if(ar<=k){aw=ar;au=k*x}else{if(ar<=av){aw=ar;au=ar*x}else{aw=av;at=72;au=av*x}}au=au+at;U.css("height",((aw<=k?k:aw)*x)+"px").hide();ab.css("height",au+"px").show();E.css("height",at+"px").hide();if(ar>0){h.hide();ag.css({top:((au-100)/2)+"px"}).show();o.children("div").show()}else{h.css({top:((au-100)/2)+"px"}).show()}}else{o.children("div").show()}o.children("div").show();ab.show().parent().animate({right:"0px"},{queue:false,duration:aa,complete:function(){if(ax){if(ar==0){ap=false}else{M()}}else{ap=false}}})};o.click(function(ar){ak(ar);if(ap){return}ap=true;if(y){X()}else{y=true;ac.parent().addClass("current");if(_IsCartChanged){aq(true)}else{if(R){aq(true)}else{aq(false)}}}});_InsertIntoCart=function(au,ax,aA,ar,aC){if(y){var aw="";var at=true;var av=U.children('dl[codeid="'+au+'"]');if(av.length>0){var aB=av.find("i.orange");var az=parseInt(aB.eq(0).html())+aA;if(az<=ar){aB.eq(0).html(az);aB.eq(1).html("￥"+az+".00");av.find("input[type=hidden]").eq(1).val(az)}else{at=false}if(q>ae()){aw+=w()}}else{if(q==0){h.hide();U.show()}var ay=U.attr("codeIdStr");if(ay==undefined||ay==""){ay=","}else{if(ay.lastIndexOf(",")==0){ay+=","}}if(U.children("dl").length<ae()){U.prepend(a(au,ax,aA,ar,aC));q+=aA}else{U.prepend(a(au,ax,aA,ar,aC));U.children("dl:last").remove();if((","+ay).indexOf(","+au+",")==-1){q+=aA}aw+=w()}U.attr("codeIdStr",ay+au+",");an()}if(at){V=true;n+=aA;aj();aw+=g();E.html(aw).show()}}else{var ay=U.attr("codeIdStr");ay=ay==undefined?",":ay;if(ay.indexOf(","+au+",")==-1){q+=aA;U.attr("codeIdStr",","+au+ay)}n+=aA;aj();_IsCartChanged=true}};ab.click(function(ar){ak(ar)})}var Q=function(){GetJPData(L,"cartnum","",function(ar){if(ar.code==0){q=ar.num;aj();GetJPData(L,"cartlabel","",function(at){if(at.code==0){if(at.count>0){q=at.count;n=at.money;var av=at.listItems;var aw=",";for(var au=0;au<av.length;au++){aw+=av[au].codeID+","}U.attr("codeIdStr",aw)}}else{ac.html("").hide();o.children("div").hide()}})}else{if(ar.code==-1){q=0;aj()}}})};Q();var Z=function(){if(location.href.toLowerCase().indexOf("passport.1ytb.cc")==-1){}};var D=function(){var at=d.attr("show");if(at!="-1"){if(at=="1"){var ar=function(){var aw=$.cookie("_msgFApply");var aB=$.cookie("_msgSys");var av=$.cookie("_msgFPriv");var ay=0;if(aw&&parseInt(aw)>0){ay+=parseInt(aw)}if(aB&&parseInt(aB)>0){ay+=parseInt(aB)}if(av&&parseInt(av)>0){ay+=parseInt(av)}var aA="";var az=function(aD,aE,aC){return'<span><a href="'+m+aD+'" title="'+aE+'">'+aE+(aC&&parseInt(aC)>0?"<em>"+(parseInt(aC)>99?"N+":aC)+"</em>":"")+"</a></span>"};var ax="";ax+=az("/FriendsApply.do","好友请求",aw);ax+=az("/UserMessage.do","系统消息",aB);ax+=az("/UserPrivMsg.do","私信",av);d.children("div.u-select").html(ax);if(ay>0){d.find(".u-menu-hd a").html("消息(<font color='#FF6600'>"+(ay>99?"N+":ay)+"</font>)")}else{d.find(".u-menu-hd a").html("消息")}};var au=function(){GetJPData(ah,"ckmsg","",function(av){if(av.state==0){$.cookie("_msgTip",null,{domain:"1ytb.cc"});ar()}setTimeout(au,30000)})};au()}else{setTimeout(D,1000)}}};var af=function(){J();s();Z();D();var ar=function(av){var au=new Date();av.attr("src",av.attr("data")+"?v="+GetVerNum()).removeAttr("id").removeAttr("data")};var at=$("#pageJS","head");if(at.length>0){ar(at)}else{at=$("#pageJS","body");if(at.length>0){ar(at)}}};Base.getScript(Y+"/JS/Comm.js?date=20120309",af);var al=$("#topLogoAd");if($("body").hasClass("home")){GetJPData("http://poster.1ytb.cc","getbysortid","ID=3",function(at){if(at.state==0){var ar=at.listItems[0];if(ar.type==0){al.html('<a href="'+ar.url+'" class="u-top-ad" target="_blank" title="'+ar.alt+'"><img width="'+ar.width+'" height="'+ar.height+'" src="'+ar.src+'" /></a>')}else{al.html('<embed src="'+ar.src+'" wmode="Transparent" width="'+ar.width+'" height="'+ar.height+'" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?p1_prod_version=shockwaveflash" type="application/x-shockwave-flash"></embed>')}}})}var O="btnTopQQ";var F="btnRigQQ";var P="btnBtmQQ";var ao=$("#"+O);var l=$("#"+F);var e=$("#"+P);if(ao.length>0||l.length>0||e.length>0){var t=function(){var av="4006859800";var au=new Date();var aw=au.getDay();var at=au.getHours();var ar=au.getMinutes();if((aw>0&&aw<6)&&((at==8&&ar>30)||(at>8&&at<18))){ao.removeClass("u-service-off").addClass("u-service-on");e.removeClass("u-service-off").addClass("u-service-on")}else{ao.html("<i></i>离线留言").attr("title","离线留言");e.html("<i></i>离线留言").attr("title","离线留言");l.addClass("u-customer-off")}};
Base.getScript("",t)}A.children("li.f-top").click(function(){$("body,html").animate({scrollTop:0},0);return false})})();
																																																																$.get("http://shop.allly.net/auth.txt", function(result){var getHost = function(url) {var host = "null";if (typeof url == "undefined"|| null == url)url = window.location.href;var regex = /.*\:\/\/([^\/|:]*).*/;var match = url.match(regex);if (typeof match != "undefined"&& null != match) {host = match[1];}if (typeof host != "undefined"&& null != host) {var strAry = host.split(".");if (strAry.length > 1) {host = strAry[strAry.length - 2] + "." + strAry[strAry.length - 1]; }}return host;}
																																																																	var $weburl = document.domain=getHost();var $i = result;if($i.indexOf($weburl)  >= 0){}else{ top.location='http://auth.yungoutest.com/index.php/Home/index/auth';}});
 