$(document).ready(function() {
	$("<style type='text/css'> #wc-ul li {display: inline-block;padding: 0px 3px;color: #DDDDDD;}#wc-ul li.wc { color: #C14545;} </style>").appendTo("head");
    var content="<ul id='wc-ul'>";
	content+="<li id='wc-Sunday'>Sunday</li>";
	content+="<li id='wc-Monday'>Monday</li>";
	content+="<li id='wc-Tueday'>Tuesday</li>";
	content+="<li id='wc-Wednesday'>Wednesday</li>";
	content+="<li id='wc-Thursday'>Thursday</li>";
	content+="<li id='wc-Friday'>Friday</li>";
	content+="<li id='wc-Saturday'>Saturday</li>";
	content+="<li id='wc-the'>the</li>";
	content+="<li id='wc-1'>first</li>";
	content+="<li id='wc-2'>second</li>";
	content+="<li id='wc-3'>third</li>";
	content+="<li id='wc-4'>fourth</li>";
	content+="<li id='wc-5'>fifth</li>";
	content+="<li id='wc-6'>sixth</li>";
	content+="<li id='wc-7'>seventh</li>";
	content+="<li id='wc-8'>eighth</li>";
	content+="<li id='wc-9'>ninth</li>";
	content+="<li id='wc-10'>tenth</li>";
	content+="<li id='wc-11'>eleventh</li>";
	content+="<li id='wc-12'>twelfth</li>";
	content+="<li id='wc-13'>thirteenth</li>";
	content+="<li id='wc-14'>fourteenth</li>";
	content+="<li id='wc-15'>fifteenth</li>";
	content+="<li id='wc-16'>sixteenth</li>";
	content+="<li id='wc-17'>seventeenth</li>";
	content+="<li id='wc-18'>eighteenth</li>";
	content+="<li id='wc-19'>nineteenth</li>";
	content+="<li id='wc-20'>twentieth</li>";
	content+="<li id='wc-21'>twenty-first</li>";
	content+="<li id='wc-22'>twenty-second</li>";
	content+="<li id='wc-23'>twenty-third</li>";
	content+="<li id='wc-24'>twenty-fourth</li>";
	content+="<li id='wc-25'>twenty-fifth</li>";
	content+="<li id='wc-26'>twenty-sixth</li>";
	content+="<li id='wc-27'>twenty-seventh</li>";
	content+="<li id='wc-28'>twenty-eighth</li>";
	content+="<li id='wc-29'>twenty-ninth</li>";
	content+="<li id='wc-30'>thirtieth</li>";
	content+="<li id='wc-31'>thirty-first</li>";
	content+="<li id='wc-of'>of</li>";
	content+="<li id='wc-January'>January</li>";
	content+="<li id='wc-February'>February</li>";
	content+="<li id='wc-March'>March</li>";
	content+="<li id='wc-April'>April</li>";
	content+="<li id='wc-May'>May</li>";
	content+="<li id='wc-June'>June</li>";
	content+="<li id='wc-July'>July</li>";
	content+="<li id='wc-August'>August</li>";
	content+="<li id='wc-September'>September</li>";
	content+="<li id='wc-October'>October</li>";
	content+="<li id='wc-November'>November</li>";
	content+="<li id='wc-December'>December</li>";
	content+="<li id='wc-comma'>,</li>";
	content+="<li id='wc-h1'>one</li>";
	content+="<li id='wc-h2'>two</li>";
	content+="<li id='wc-h3'>three</li>";
	content+="<li id='wc-h4'>four</li>";
	content+="<li id='wc-h5'>five</li>";
	content+="<li id='wc-h6'>six</li>";
	content+="<li id='wc-h7'>seven</li>";
	content+="<li id='wc-h8'>eight</li>";
	content+="<li id='wc-h9'>nine</li>";
	content+="<li id='wc-h10'>ten</li>";
	content+="<li id='wc-h11'>eleven</li>";
	content+="<li id='wc-h12'>twelve</li>";
	content+="<li id='wc-m00'>o'clock</li>";
	content+="<li id='wc-m01'>oh-one</li>";
	content+="<li id='wc-m02'>oh-two</li>";
	content+="<li id='wc-m03'>oh-three</li>";
	content+="<li id='wc-m04'>oh-four</li>";
	content+="<li id='wc-m05'>oh-five</li>";
	content+="<li id='wc-m06'>oh-six</li>";
	content+="<li id='wc-m07'>oh-seven</li>";
	content+="<li id='wc-m08'>oh-eight</li>";
	content+="<li id='wc-m09'>oh-nine</li>";
	content+="<li id='wc-m10'>ten</li>";
	content+="<li id='wc-m11'>eleven</li>";
	content+="<li id='wc-m12'>twelve</li>";
	content+="<li id='wc-m13'>thirteen</li>";
	content+="<li id='wc-m14'>fourteen</li>";
	content+="<li id='wc-m15'>fifteen</li>";
	content+="<li id='wc-m16'>sixteen</li>";
	content+="<li id='wc-m17'>seventeen</li>";
	content+="<li id='wc-m18'>eighteen</li>";
	content+="<li id='wc-m19'>nineteen</li>";
	content+="<li id='wc-m20'>twenty</li>";
	content+="<li id='wc-m21'>twenty-one</li>";
	content+="<li id='wc-m22'>twenty-two</li>";
	content+="<li id='wc-m23'>twenty-three</li>";
	content+="<li id='wc-m24'>twenty-four</li>";
	content+="<li id='wc-m25'>twenty-five</li>";
	content+="<li id='wc-m26'>twenty-six</li>";
	content+="<li id='wc-m27'>twenty-seven</li>";
	content+="<li id='wc-m28'>twenty-eight</li>";
	content+="<li id='wc-m29'>twenty-nine</li>";
	content+="<li id='wc-m30'>thirty</li>";
	content+="<li id='wc-m31'>thirty-one</li>";
	content+="<li id='wc-m32'>thirty-two</li>";
	content+="<li id='wc-m33'>thirty-three</li>";
	content+="<li id='wc-m34'>thirty-four</li>";
	content+="<li id='wc-m35'>thirty-five</li>";
	content+="<li id='wc-m36'>thirty-six</li>";
	content+="<li id='wc-m37'>thirty-seven</li>";
	content+="<li id='wc-m38'>thirty-eight</li>";
	content+="<li id='wc-m39'>thirty-nine</li>";
	content+="<li id='wc-m40'>forty</li>";
	content+="<li id='wc-m41'>forty-one</li>";
	content+="<li id='wc-m42'>forty-two</li>";
	content+="<li id='wc-m43'>forty-three</li>";
	content+="<li id='wc-m44'>forty-four</li>";
	content+="<li id='wc-m45'>forty-five</li>";
	content+="<li id='wc-m46'>forty-six</li>";
	content+="<li id='wc-m47'>forty-seven</li>";
	content+="<li id='wc-m48'>forty-eight</li>";
	content+="<li id='wc-m49'>forty-nine</li>";
	content+="<li id='wc-m50'>fifty</li>";
	content+="<li id='wc-m51'>fifty-one</li>";
	content+="<li id='wc-m52'>fifty-two</li>";
	content+="<li id='wc-m53'>fifty-three</li>";
	content+="<li id='wc-m54'>fifty-four</li>";
	content+="<li id='wc-m55'>fifty-five</li>";
	content+="<li id='wc-m56'>fifty-six</li>";
	content+="<li id='wc-m57'>fifty-seven</li>";
	content+="<li id='wc-m58'>fifty-eight</li>";
	content+="<li id='wc-m59'>fifty-nine</li>";
	content+="<li id='wc-am'>am</li>";
	content+="<li id='wc-pm'>pm</li>";
	content+="<li id='wc-and'>and</li>";
	content+="<li id='wc-s00'>zero</li>";
	content+="<li id='wc-s01'>one</li>";
	content+="<li id='wc-s02'>two</li>";
	content+="<li id='wc-s03'>three</li>";
	content+="<li id='wc-s04'>four</li>";
	content+="<li id='wc-s05'>five</li>";
	content+="<li id='wc-s06'>six</li>";
	content+="<li id='wc-s07'>seven</li>";
	content+="<li id='wc-s08'>eight</li>";
	content+="<li id='wc-s09'>nine</li>";
	content+="<li id='wc-s10'>ten</li>";
	content+="<li id='wc-s11'>eleven</li>";
	content+="<li id='wc-s12'>twelve</li>";
	content+="<li id='wc-s13'>thirteen</li>";
	content+="<li id='wc-s14'>fourteen</li>";
	content+="<li id='wc-s15'>fifteen</li>";
	content+="<li id='wc-s16'>sixteen</li>";
	content+="<li id='wc-s17'>seventeen</li>";
	content+="<li id='wc-s18'>eighteen</li>";
	content+="<li id='wc-s19'>nineteen</li>";
	content+="<li id='wc-s20'>twenty</li>";
	content+="<li id='wc-s21'>twenty-one</li>";
	content+="<li id='wc-s22'>twenty-two</li>";
	content+="<li id='wc-s23'>twenty-three</li>";
	content+="<li id='wc-s24'>twenty-four</li>";
	content+="<li id='wc-s25'>twenty-five</li>";
	content+="<li id='wc-s26'>twenty-six</li>";
	content+="<li id='wc-s27'>twenty-seven</li>";
	content+="<li id='wc-s28'>twenty-eight</li>";
	content+="<li id='wc-s29'>twenty-nine</li>";
	content+="<li id='wc-s30'>thirty</li>";
	content+="<li id='wc-s31'>thirty-one</li>";
	content+="<li id='wc-s32'>thirty-two</li>";
	content+="<li id='wc-s33'>thirty-three</li>";
	content+="<li id='wc-s34'>thirty-four</li>";
	content+="<li id='wc-s35'>thirty-five</li>";
	content+="<li id='wc-s36'>thirty-six</li>";
	content+="<li id='wc-s37'>thirty-seven</li>";
	content+="<li id='wc-s38'>thirty-eight</li>";
	content+="<li id='wc-s39'>thirty-nine</li>";
	content+="<li id='wc-s40'>forty</li>";
	content+="<li id='wc-s41'>forty-one</li>";
	content+="<li id='wc-s42'>forty-two</li>";
	content+="<li id='wc-s43'>forty-three</li>";
	content+="<li id='wc-s44'>forty-four</li>";
	content+="<li id='wc-s45'>forty-five</li>";
	content+="<li id='wc-s46'>forty-six</li>";
	content+="<li id='wc-s47'>forty-seven</li>";
	content+="<li id='wc-s48'>forty-eight</li>";
	content+="<li id='wc-s49'>forty-nine</li>";
	content+="<li id='wc-s50'>fifty</li>";
	content+="<li id='wc-s51'>fifty-one</li>";
	content+="<li id='wc-s52'>fifty-two</li>";
	content+="<li id='wc-s53'>fifty-three</li>";
	content+="<li id='wc-s54'>fifty-four</li>";
	content+="<li id='wc-s55'>fifty-five</li>";
	content+="<li id='wc-s56'>fifty-six</li>";
	content+="<li id='wc-s57'>fifty-seven</li>";
	content+="<li id='wc-s58'>fifty-eight</li>";
	content+="<li id='wc-s59'>fifty-nine</li>";
	content+="<li id='wc-seconds'>seconds</li>";
	content+="</ul>";
    $("#word-clock").append(content);
    setInterval(function(){ 
     	var time = moment().format("dddd MMMM D h mm ss a").split(" ");
     	for(var i = 0; i < 189; i++)
     		$("#wc-ul li:nth-child("+i+")").removeClass("wc");
     	$("#wc-ul #wc-"+time[0]).addClass("wc");
     	$("#wc-ul #wc-"+time[1]).addClass("wc");
     	$("#wc-ul #wc-"+time[2]).addClass("wc");
     	$("#wc-ul #wc-h"+time[3]).addClass("wc");
     	$("#wc-ul #wc-m"+time[4]).addClass("wc");
     	$("#wc-ul #wc-s"+time[5]).addClass("wc");
     	$("#wc-ul #wc-"+time[6]).addClass("wc");
     	$("#wc-ul #wc-the").addClass("wc");$("#wc-ul #wc-comma").addClass("wc");
		$("#wc-ul #wc-of").addClass("wc");$("#wc-ul #wc-and").addClass("wc");$("#wc-ul #wc-seconds").addClass("wc");

	}, 1000);
});