/* 
 * Widgets for Social Network photo stream.
 * 
 * Author: Pixel Industry
 * Website: http://pixel-industry.com
 * Version: 1.1
 *
 */
(function(e){e.fn.socialstream=function(t){var n={socialnetwork:"flickr",username:"pixel-industry",limit:6,overlay:true};var t=e.extend(n,t);return this.each(function(){var n=e(this);switch(t.socialnetwork){case"flickr":n.append('<ul class="flickr-list"></ul>');e.getJSON("http://api.flickr.com/services/rest/?method=flickr.people.findByUsername&username="+t.username+"&format=json&api_key=32ff8e5ef78ef2f44e6a1be3dbcf0617&jsoncallback=?",function(r){var i=r.user.nsid;e.getJSON("http://api.flickr.com/services/rest/?method=flickr.photos.search&user_id="+i+"&format=json&api_key=85145f20ba1864d8ff559a3971a0a033&per_page="+t.limit+"&page=1&extras=url_sq&jsoncallback=?",function(r){e.each(r.photos.photo,function(r,i){var s=i.owner;var o=i.title;var u=i.url_sq;var a=i.id;var f="http://www.flickr.com/photos/"+s+"/"+a;var l=e("<img/>").attr({src:u,alt:o});var c=e("<a/>").attr({href:f,target:"_blank",title:o});var h=e(c).append(l);if(t.overlay){var p=e("<div/>").addClass("img-overlay");e(c).append(p)}var d=e("<li/>").append(h);e("ul",n).append(d)})})});break;case"pinterest":var r="http://pinterest.com/"+t.username+"/feed.rss";var i="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(r)+"&num="+t.limit+"&output=json_xml";e.getJSON(i,function(r){if(r.responseStatus==200){var i=r.responseData.feed;var s="";if(!i){return false}var o='<ul class="pinterest-list">';for(var u=0;u<i.entries.length;u++){var a=i.entries[u];var f=e("<div></div>");f.append(a.content);var l="http://www.pinterest.com"+f.find("a").attr("href");var c=f.find("img").attr("src");var h=f.find("p:nth-child(2)").html();if(t.overlay){var s='<div class="img-overlay"></div>'}o+='<li><a target="_blank" href="'+l+'" title="'+h+'"><img src="'+c+'"/>'+s+"</a></li>"}o+="</ul>";e(n).append(o)}});break;case"instagram":n.append('<ul class="instagram-list"></ul>');var s="200718541.a4734ab.cc050fa16d6141bf8b709c97ab158f57";r="https://api.instagram.com/v1/users/search?q="+t.username+"&access_token="+s+"&count=1&callback=?";e.getJSON(r,function(i){e.each(i.data,function(i,o){var u=o.username;if(u==t.username){var a=o.id;if(a!=""){r="https://api.instagram.com/v1/users/"+a+"/media/recent/?access_token="+s+"&count="+t.limit+"&callback=?";e.getJSON(r,function(r){e.each(r.data,function(r,i){var s=i.images.thumbnail.url;var o=i.link;var u="";if(i.caption!=null){u=i.caption.text}var a=e("<img/>").attr({src:s,alt:u});var f=e("<a/>").attr({href:o,target:"_blank",title:u});var l=e(f).append(a);if(t.overlay){var c=e("<div/>").addClass("img-overlay");e(f).append(c)}var h=e("<li/>").append(l);e("ul",n).append(h)})})}}})});break;case"dribbble":n.append('<ul class="dribbble-list"></ul>');e.getJSON("http://dribbble.com/"+t.username+"/shots.json?callback=?",function(r){e.each(r.shots,function(r,i){if(r<t.limit){var s=i.title;var o=e("<img/>").attr({src:i.image_teaser_url,alt:s});var u=e("<a/>").attr({href:i.url,target:"_blank",title:s});var a=e(u).append(o);if(t.overlay){var f=e("<div/>").addClass("img-overlay");e(u).append(f)}var l=e("<li/>").append(a);e("ul",n).append(l)}})});break;case"deviantart":var r="http://backend.deviantart.com/rss.xml?type=deviation&q=by%3A"+t.username+"+sort%3Atime+meta%3Aall";var i="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(r)+"&num="+t.limit+"&output=json_xml";e.getJSON(i,function(r){if(r.responseStatus==200){var i=r.responseData.feed;var s="";if(!i){return false}var o='<ul class="deviantart-list">';for(var u=0;u<i.entries.length;u++){var a=i.entries[u];var f=e("<div></div>");f.append(a.content);var l=a.link;var c=f.find("img").attr("src");var h=a.title;if(t.overlay){var s='<div class="img-overlay"></div>'}o+='<li><a target="_blank" href="'+l+'" title="'+h+'"><img src="'+c+'"/>'+s+"</a></li>"}o+="</ul>";e(n).append(o)}});break;case"picasa":var r="https://picasaweb.google.com/data/feed/base/user/"+t.username+"?alt=rss&kind=photo&hl=en_US&imgmax="+t.limit+"&thumbsize=48c";var i="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(r)+"&num="+t.limit+"&output=json_xml";e.getJSON(i,function(r){if(r.responseStatus==200){var i=r.responseData.feed;var s="";if(!i){return false}var o='<ul class="picasa-list">';for(var u=0;u<i.entries.length;u++){var a=i.entries[u];var f=e("<div></div>");f.append(a.content);var l=a.link;var c=f.find("img").attr("src");var h=a.title;if(t.overlay){var s='<div class="img-overlay"></div>'}o+='<li><a target="_blank" href="'+l+'" title="'+h+'"><img src="'+c+'"/>'+s+"</a></li>"}o+="</ul>";e(n).append(o)}});break;case"youtube":var r="https://gdata.youtube.com/feeds/api/users/"+t.username+"/uploads";var i="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(r)+"&num="+t.limit+"&output=json_xml";e.getJSON(i,function(r){if(r.responseStatus==200){var i=r.responseData.feed;var s="";if(!i){return false}var o='<ul class="youtube-list">';for(var u=0;u<i.entries.length;u++){var a=i.entries[u];var f=e("<div></div>");f.append(a.content);var l=a.link;var c=l.match("[\\?&]v=([^&#]*)");var h=c[1];var p="http://img.youtube.com/vi/"+h+"/2.jpg";var d=a.title;if(t.overlay){var s='<div class="img-overlay"></div>'}o+='<li><a target="_blank" href="'+l+'" title="'+d+'"><img src="'+p+'"/>'+s+"</a></li>"}o+="</ul>";e(n).append(o)}});break;case"newsfeed":var i="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(t.username)+"&num="+t.limit+"&output=json_xml";e.getJSON(i,function(r){if(r.responseStatus==200){var i=r.responseData.feed;var s="";if(!i){return false}var o='<ul class="social-feed">';for(var u=0;u<i.entries.length;u++){var a=i.entries[u];var f=e("<div></div>");f.append(a.content);var l=a.link;var c=f.find("img").attr("src");var h=a.title;if(t.overlay){var s='<div class="img-overlay"></div>'}o+='<li><a target="_blank" href="'+l+'" title="'+h+'"><img src="'+c+'"/>'+s+"</a></li>"}o+="</ul>";e(n).append(o)}});break}})}})(jQuery)