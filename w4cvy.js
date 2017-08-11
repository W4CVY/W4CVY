if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML.toLowerCase();var last=tt.indexOf("w4cvy.js\"");if(last>0){var first=tt.lastIndexOf("\"",last);if(first>0&&first<last)loc=document.body.innerHTML.substr(first+1,last-first-1);}}}

var bd=2
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
var tr="filter:alpha(opacity=0);";if(IE5) tr="";
document.write(".w4cvy_menu {"+tr+"border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#a93200;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write("a.w4cvy_plain:link, a.w4cvy_plain:visited{text-align:left;background-color:#a93200;color:#ffffff;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:10pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("a.w4cvy_plain:hover, a.w4cvy_plain:active{background-color:#a9bcc5;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:10pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xa9bcc5;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("Buttons/w4cvy_top.gif",31,102,1,0,0);
mainMenuItem("Buttons/w4cvy_Home",".gif",31,102,loc+"index.htm","","CARC Home Page",2,2,"w4cvy_plain");
//mainMenuItem("Buttons/w4cvy_Membership",".gif",31,102,loc+"membership.htm","","Join or Renew CARC Membership",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Wiki",".gif",31,102,loc+"wordpress","","CARC Wiki",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Calendar",".gif",31,102,loc+"calendar.htm","","CARC Calendar of Ham Events",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Files",".gif",31,102,loc+"files","","CARC Files",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_CARC_Net",".gif",31,102,loc+"ournet.htm","","Our Weekly Net",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Area_Nets",".gif",31,102,loc+"areanets.htm","","Other Area Nets",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Repeaters",".gif",31,102,loc+"repeaters.htm","","Local Repeater Information",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Activities",".gif",31,102,loc+"activities.htm","","Club Activities",1,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Testing",".gif",31,102,loc+"testing.htm","","Testing Information",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Operations",".gif",31,102,loc+"operations.htm","","Club Operations",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Field_Day",".gif",31,102,loc+"Field Day 2015/index.html","","Field Day Information",1,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Officers",".gif",31,102,loc+"officers.htm","","Club Officers",2,2,"w4cvy_plain");
mainMenuItem("Buttons/w4cvy_Links",".gif",31,102,loc+"hamlinks.htm","","Links of Interest to Ham",1,2,"w4cvy_plain");
endMainMenu("Buttons/w4cvy_bottom.gif",31,102);

startSubmenu("Buttons/w4cvy_Activities","w4cvy_menu",204);
submenuItem("2009 Veteran's Day Special Event",loc+"Veterans Day 2009/index.html","","w4cvy_plain");
endSubmenu("Buttons/w4cvy_Activities");

startSubmenu("Buttons/w4cvy_Field_Day","w4cvy_menu",104);
submenuItem("2002 Field Day",loc+"Field Day 2002/index.html","","w4cvy_plain");
submenuItem("2004 Field Day",loc+"Field Day 2004/index.html","","w4cvy_plain");
submenuItem("2005 Field Day",loc+"Field Day 2005/index.html","","w4cvy_plain");
submenuItem("2007 Field Day",loc+"Field Day 2007/index.html","","w4cvy_plain");
submenuItem("2008 Field Day",loc+"Field Day 2008/index.html","","w4cvy_plain");
submenuItem("2009 Field Day",loc+"Field Day 2009/index.html","","w4cvy_plain");
submenuItem("2010 Field Day",loc+"Field Day 2010/index.html","","w4cvy_plain");
submenuItem("2011 Field Day",loc+"Field Day 2011/index.html","","w4cvy_plain");
submenuItem("2012 Field Day",loc+"Field Day 2012/index.html","","w4cvy_plain");
submenuItem("2013 Field Day",loc+"Field Day 2013/index.html","","w4cvy_plain");
submenuItem("2014 Field Day",loc+"Field Day 2014/index.html","","w4cvy_plain");
submenuItem("2015 Field Day",loc+"Field Day 2015/index.html","","w4cvy_plain");
endSubmenu("Buttons/w4cvy_Field_Day");

loc="";
