/**  * kuaihuojian project - kuaihuojian project  */ "use strict";$(function(){var e=$(".customerCheckBox_all").checkbox({});$(".customerCheckBox").checkbox({parent:e});$("#rootTree").treeNav({isLink:!0,isToolBar:!0,maxLevel:2}),$(".records").height($(document).height()-184),$(window).resize(function(){$(".records").height($(document).height()-184)})});