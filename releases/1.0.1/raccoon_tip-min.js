if(typeof(RaccoonTip)=="undefined"){var scriptElement=(function deriveScriptElement(){var c="tu_dummy_script";document.write('<script id="'+c+'"><\/script>');var b=document.getElementById(c);var a=b.previousSibling;b.parentNode.removeChild(b);return a}());var scriptHost=(function deriveScriptHost(){var a=scriptElement.getAttribute("src");return a&&a.match(/^\w+\:\/\//)?a.match(/^\w+\:\/\/[^\/]*\//)[0]:""}());RaccoonTip=(function(){var g='<div id="raccoon_tip" style="display: none"><div class="rt_tip"></div><div class="rt_content"></div></div>';var i="<style>#raccoon_tip{*padding:14px;position:absolute;z-index:9999}#raccoon_tip .rt_tip{width:0;font-size:0;line-height:0;position:absolute;filter:chroma(color=pink)}#raccoon_tip.rt_bottom_right{margin-left:-28px;padding-top:14px}#raccoon_tip.rt_bottom_right .rt_tip{top:0;left:14px;border-bottom-width:14px;border-bottom-style:solid;border-bottom-color:#f9e98e;border-right-width:14px;border-right-style:solid;border-right-color:transparent;*border-right-color:pink}#raccoon_tip.rt_bottom_middle{padding-top:14px}#raccoon_tip.rt_bottom_middle .rt_tip{top:0;left:50%;margin-left:-7px;border-bottom-width:14px;border-bottom-style:solid;border-bottom-color:#f9e98e;border-left-width:7px;border-left-style:solid;border-left-color:transparent;*border-left-color:pink;border-right-width:7px;border-right-style:solid;border-right-color:transparent;*border-right-color:pink}#raccoon_tip.rt_bottom_left{margin-left:28px;padding-top:14px}#raccoon_tip.rt_bottom_left .rt_tip{top:0;right:14px;border-bottom-width:14px;border-bottom-style:solid;border-bottom-color:#f9e98e;border-left-width:14px;border-left-style:solid;border-left-color:transparent;*border-left-color:pink}#raccoon_tip.rt_middle_left{margin-left:-7px;padding-right:14px}#raccoon_tip.rt_middle_left .rt_tip{top:50%;right:0;margin-top:-7px;border-left-width:14px;border-left-style:solid;border-left-color:#f9e98e;border-top-width:7px;border-top-style:solid;border-top-color:transparent;*border-top-color:pink;border-bottom-width:7px;border-bottom-style:solid;border-bottom-color:transparent;*border-bottom-color:pink}#raccoon_tip.rt_top_left{margin-left:28px;padding-bottom:14px}#raccoon_tip.rt_top_left .rt_tip{bottom:0;right:14px;border-top-width:14px;border-top-style:solid;border-top-color:#f9e98e;border-left-width:14px;border-left-style:solid;border-left-color:transparent;*border-left-color:pink}#raccoon_tip.rt_top_middle{padding-bottom:14px}#raccoon_tip.rt_top_middle .rt_tip{bottom:0;left:50%;margin-left:-7px;border-top-width:14px;border-top-style:solid;border-top-color:#f9e98e;border-left-width:7px;border-left-style:solid;border-left-color:transparent;*border-left-color:pink;border-right-width:7px;border-right-style:solid;border-right-color:transparent;*border-right-color:pink}#raccoon_tip.rt_top_right{margin-left:-28px;padding-bottom:14px}#raccoon_tip.rt_top_right .rt_tip{bottom:0;left:14px;border-top-width:14px;border-top-style:solid;border-top-color:#f9e98e;border-right-width:14px;border-right-style:solid;border-right-color:transparent;*border-right-color:pink}#raccoon_tip.rt_middle_right{margin-left:7px;padding-left:14px}#raccoon_tip.rt_middle_right .rt_tip{top:50%;left:0;margin-top:-7px;border-right-width:14px;border-right-style:solid;border-right-color:#f9e98e;border-top-width:7px;border-top-style:solid;border-top-color:transparent;*border-top-color:pink;border-bottom-width:7px;border-bottom-style:solid;border-bottom-color:transparent;*border-bottom-color:pink}#raccoon_tip .rt_content{padding:6px 12px 8px 12px;overflow:hidden;background:#fbf7aa;border-width:10px;border-style:solid;border-color:#f9e98e;*border-width:7px;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px}#raccoon_tip .rt_content,#raccoon_tip .rt_content a{color:#a27d35;text-shadow:none}#raccoon_tip .rt_content a{outline:0}</style>";var e={event:"click",duration:"fast",position:"bottom_right",beforeShow:function(){},afterHide:function(){}},a=null;var m=false,o=false;var n=function(t,r,q){var s=$.inArray(q.event||e.event,["focus"])==-1?"live":"bind";$(t)[s]((q||{}).event||"click",function(u){u.preventDefault();k(u.target,r,q)})};var k=function(s,r,q){m=true;d();j(s,r,q);l();m=false};var p=function(){h()};var d=function(){if(!$("#raccoon_tip").length){$("body").mouseup(function(q){if(!m&&!o){h()}});if(!$("head").length){$(document.body).before("<head></head>")}$(i).prependTo("head");$(g).appendTo("body").find(".rt_content").mouseenter(function(){o=true}).mouseleave(function(){o=false})}else{h()}};var j=function(q,r,s){a=$.extend({},e,s,{target:$(q),content:$(r)})};var l=function(){c();b();f();$("#raccoon_tip").data("rt_options",a).show(a.duration)};var c=function(){var q=a.beforeShow.apply(a.target,[a.content,a]);if(q){$.extend(a,q)}};var b=function(){a.content=$(a.content);if(a.content.length){var q=null;if(a.content.context){q=$('<span class=".rt_marker"></span>');a.content.before(q)}a.content.appendTo("#raccoon_tip .rt_content");$("#raccoon_tip").data("rt_marker",q)}else{$("#raccoon_tip .rt_content").html(a.content.selector)}};var f=function(){var t=$("#raccoon_tip"),q=null,r=null;var s=function(){t.attr("class","rt_"+a.position);q=a.position.split("_");r=[null,null];switch(q[0]){case"top":t.css({top:a.target.offset().top-t.outerHeight()-7});break;case"middle":t.css({top:a.target.offset().top+(a.target.outerHeight()/2)-(t.outerHeight()/2)});break;case"bottom":t.css({top:a.target.offset().top+a.target.outerHeight()+7});break}if(parseInt(t.css("top"),10)<$(window).scrollTop()){r[0]="bottom"}if(parseInt(t.css("top"),10)+t.outerHeight()>$(window).scrollTop()+$(window).height()){r[0]="top"}switch(q[1]){case"left":t.css({left:a.target.offset().left-t.outerWidth()});break;case"middle":t.css({left:a.target.offset().left+(a.target.outerWidth()/2)-(t.outerWidth()/2)});break;case"right":t.css({left:a.target.offset().left+a.target.outerWidth()});break}if(parseInt(t.css("left"),10)<$(window).scrollLeft()){r[1]="right"}if(parseInt(t.css("left"),10)+t.outerWidth()>$(window).scrollLeft()+$(window).width()){r[1]="left"}};s();if(r[0]||r[1]){a.position=[r[0]||q[0],r[1]||q[1]].join("_");s()}};var h=function(){var q=$("#raccoon_tip").data("rt_options");$("#raccoon_tip").hide(0);q.afterHide.apply(q.target,[q.content,q]);if($("#raccoon_tip").data("rt_marker")){$("#raccoon_tip").data("rt_marker").before($("#raccoon_tip .rt_content").children()).remove()}};return{version:"1.0.1",init:function(){},register:n,display:k,close:p}}());(function(){var b=[];if(typeof(jQuery)=="undefined"){b.push("core")}if(b.length==0){RaccoonTip.init()}else{var a=scriptElement.getAttribute("src").replace(/(development\/)?raccoon_tip(\-min)?\.js.*$/,"jquery/"+b.sort().join(".")+".js");document.write('<script src="'+a+'" type="text/javascript" onload="RaccoonTip.init()" onreadystatechange="RaccoonTip.init()"><\/script>')}}())};