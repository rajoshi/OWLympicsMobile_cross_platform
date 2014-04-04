/*
* Code developed by Rajoshi Biswas
* Starting 4th February 2014 for ELEC 419 OWLympics project
* Rice University
* Go OWLympics!
* Single Window Application Template:
* A basic starting point for your application.  Mostly a blank canvas.
* In app.js, we generally take care of a few things:
* - Bootstrap the application with any data we need
* - Check for dependencies like device type, platform version or network connection
* - Require and open our top-level UI component
*
*/

//bootstrap and check dependencies
if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

Titanium.UI.setBackgroundColor('#000');
// This is a single context application with multiple windows in a stack

//render appropriate components based on the platform and form factor
var osname = Ti.Platform.osname, version = Ti.Platform.version, height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
//yourself what you consider a tablet form factor for android
var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));

/* windows and views */
var homeWin = Titanium.UI.createWindow({
	title : 'OWLympics',
	backgroundImage : './images/thisbackground.jpg',
	orientationModes : [Titanium.UI.PORTRAIT],
	statusBarStyle : Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
});

Ti.Geolocation.purpose = 'Smart Reminders';
// homeWin.addEventListener('android:back', function() {
// return false;
// });

var profileView = Titanium.UI.createView({
	top : 20,
	height : "100%",
	width : "100%",
	top : 0,
	left : 0,
});
var profilechildView = Titanium.UI.createView({
	top : 150,
	height : "50%",
	width : "100%",
	left : 0,
});
profileView.add(profilechildView);
var height1 = Ti.Platform.displayCaps.platformHeight, width1 = Ti.Platform.displayCaps.platformWidth;

if (Ti.Platform.osname === 'android' && (width > 899 || height > 999)) {
	height1 = height1 / 2;
	width1 = width1 / 2;
	Ti.info("Its a Tablet");
}

var whatView = Ti.UI.createView({
	height : height1 * 2.5,
	width : width1,
	top : 0,
	left : 0,
});
var vertiscroll = Ti.UI.createScrollView({
	top : 20,
	contentWidth : 'auto',
	contentHeight : height1 * 2.5,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : false,
	height : '100%',
	width : '100%'
});
vertiscroll.add(whatView);
var MapModule = require('ti.map');
var mapview = MapModule.createView({
	mapType : MapModule.NORMAL_TYPE,
	region : {
		latitude : 29.719728,
		longitude : -95.399029,
	},
	animate : true,
	regionFit : true,
	userLocation : false,
	height : '70%',
	top : '20%',
	width : Ti.UI.FILL - 10,
	left : 5,
});
var view3 = Ti.UI.createView({
	backgroundImage : './images/thisbackground.jpg',
	height : '100%',
	width : '100%',
	top : 0,
	left : 0,
});
homeWin.add(view3);
view3.hide();
var scrollable = Titanium.UI.createScrollableView({
	views : [profileView, vertiscroll, mapview],
	showPagingControl : true,
});
homeWin.add(scrollable);
var more = Ti.UI.createButton({
	top : '0%',
	left : '87.5%',
	width : 40,
	height : 40,
	backgroundImage : './images/more.png',
	backgroundSelectedImage : './images/morecopy.png',
});
var more1 = Ti.UI.createButton({
	top : '0%',
	left : '75%',
	text : '                   ',
	width : 40,
	height : 40,
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
});
var morelabel = Ti.UI.createLabel({
	text : 'Options',
	font : {
		fontSize : 15,
	},
	top : '1%',
	left : '75%',
	color : 'gray',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
});
whatView.add(more);
whatView.add(more1);
whatView.add(morelabel);
more.addEventListener('click', function(e) {
	view3.show();
	scrollable.hide();
});
more1.addEventListener('click', function(e) {
	more.backgroundImage = './images/morecopy.png';
	view3.show();
	scrollable.hide();
	more.backgroundImage = './images/more.png';

});
homeWin.add(scrollable);
var back = Ti.UI.createButton({
	title : 'Back',
	color : 'gray',
	top : '5%',
	left : '5%',
	width : 80,
	height : 30,
	// backgroundImage : './images/iosback.png',
});

view3.add(back);
back.addEventListener('click', function(e) {
	view3.hide();
	scrollable.show();
	scrollable.scrollToView(vertiscroll);
});

/*buttons*/
var exrate = 1, haprate = 1;
// var ratingLabel = Ti.UI.createLabel({
// text : 'How active did you feel?',
// color : 'white',
// font : {
// fontSize : 20,
// },
// top : '5%',
// textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
//
// });
// whatView.add(ratingLabel);
//

// var rstar1 = Ti.UI.createButton({
// top : '7%',
// left : '3%',
// color : 'white',
// width : 55,
// height : 55,
// backgroundImage : './images/goldstar.png',
// });
//
// rstar1.addEventListener('click', function(e) {
// rstar1.backgroundImage = './images/goldstar.png';
// rstar2.backgroundImage = './images/dullstar.png';
// rstar3.backgroundImage = './images/dullstar.png';
// rstar4.backgroundImage = './images/dullstar.png';
// rstar5.backgroundImage = './images/dullstar.png';
// exrate = 1;
// });
// var rstar2 = Ti.UI.createButton({
// top : '7%',
// left : '22%',
// color : 'white',
// width : 55,
// height : 55,
// backgroundImage : './images/goldstar.png',
// });
// rstar2.addEventListener('click', function(e) {
// rstar1.backgroundImage = './images/goldstar.png';
// rstar2.backgroundImage = './images/goldstar.png';
// rstar3.backgroundImage = './images/dullstar.png';
// rstar4.backgroundImage = './images/dullstar.png';
// rstar5.backgroundImage = './images/dullstar.png';
// exrate = 2;
// });
// var rstar3 = Ti.UI.createButton({
// top : '7%',
// left : '41%',
// color : 'white',
// width : 55,
// height : 55,
// backgroundImage : './images/goldstar.png',
// });
// rstar3.addEventListener('click', function(e) {
// rstar1.backgroundImage = './images/goldstar.png';
// rstar2.backgroundImage = './images/goldstar.png';
// rstar3.backgroundImage = './images/goldstar.png';
// rstar4.backgroundImage = './images/dullstar.png';
// rstar5.backgroundImage = './images/dullstar.png';
// exrate = 3;
// });
// var rstar4 = Ti.UI.createButton({
// top : '7%',
// left : '60%',
// color : 'white',
// width : 55,
// height : 55,
// backgroundImage : './images/dullstar.png',
// });
// rstar4.addEventListener('click', function(e) {
// rstar1.backgroundImage = './images/goldstar.png';
// rstar2.backgroundImage = './images/goldstar.png';
// rstar3.backgroundImage = './images/goldstar.png';
// rstar4.backgroundImage = './images/goldstar.png';
// rstar5.backgroundImage = './images/dullstar.png';
// exrate = 4;
// });
// var rstar5 = Ti.UI.createButton({
// top : '7%',
// left : '79%',
// color : 'white',
// width : 55,
// height : 55,
// backgroundImage : './images/dullstar.png',
// });
// rstar5.addEventListener('click', function(e) {
// rstar1.backgroundImage = './images/goldstar.png';
// rstar2.backgroundImage = './images/goldstar.png';
// rstar3.backgroundImage = './images/goldstar.png';
// rstar4.backgroundImage = './images/goldstar.png';
// rstar5.backgroundImage = './images/goldstar.png';
// exrate = 5;
// });
// whatView.add(rstar1);
// whatView.add(rstar2);
// whatView.add(rstar3);
// whatView.add(rstar4);
// whatView.add(rstar5);

var whereLabel = Ti.UI.createLabel({
	text : 'Where did you exercise?',
	color : 'white',
	font : {
		fontSize : 20,
	},
	top : '3%',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,

});
whatView.add(whereLabel);

var here = Ti.UI.createButton({
	top : '5%',
	left : '15%',
	color : 'black',
	font : {
		fontSize : 20,
	},
	width : 100,
	title : 'Here',
	backgroundImage : './images/grayrect.png',
	backgroundImageSelected : './images/greenrect.png',
});
whatView.add(here);

var maploc = Ti.UI.createButton({
	top : '5%',
	left : '55%',
	color : 'black',
	font : {
		fontSize : 20,
	},
	width : 100,
	title : 'Map',
	backgroundImage : './images/grayrect.png',
	backgroundImageSelected : './images/greenrect.png',
});
whatView.add(maploc);

var otherloc = Ti.UI.createTextField({
	color : 'black',
	font : {
		fontSize : 20,
	},
	top : '8.7%',
	width : 250,
	height : 65,
	backgroundColor : 'white',
	backgroundImage : 'none',
	textAlign : 'center',
	value : 'Type here...'
});
whatView.add(otherloc);
var workoutlat, workoutlong;

var selectlabel = Ti.UI.createLabel({
	text : 'Which exercise did you do?',
	color : 'white',
	font : {
		fontSize : 20,
	},
	top : '14%',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,

});
whatView.add(selectlabel);

var activitybtn1 = Ti.UI.createButton({
	title : 'Run',
	color : 'black',
	font : {
		fontSize : 18,
	},
	top : '17%',
	left : '10%',
	width : 80,
	height : 80,
	backgroundImage : './images/gray.png',
	backgroundSelectedImage : './images/green.png',
});

whatView.add(activitybtn1);
var activitybtn2 = Ti.UI.createButton({
	title : 'Walk',
	color : 'black',
	font : {
		fontSize : 18,
	},
	top : '17%',
	left : '38.1%',
	width : 80,
	height : 80,
	backgroundImage : './images/gray.png',
	backgroundSelectedImage : './images/green.png',
});

whatView.add(activitybtn2);

var activitybtn3 = Ti.UI.createButton({
	title : 'Swim',
	color : 'black',
	font : {
		fontSize : 18,
	},
	top : '17%',
	left : '66%',
	width : 80,
	height : 80,
	backgroundImage : './images/gray.png',
	backgroundSelectedImage : './images/green.png',
});

whatView.add(activitybtn3);

var activitybtn4 = Ti.UI.createButton({
	title : 'Cycle',
	color : 'black',
	font : {
		fontSize : 19,
	},
	top : '24%',
	left : '23%',
	width : 80,
	height : 80,
	backgroundImage : './images/gray.png',
	backgroundSelectedImage : './images/green.png',
});

whatView.add(activitybtn4);

var activitybtn5 = Ti.UI.createButton({
	title : 'Weight',
	color : 'black',
	font : {
		fontSize : 19,
	},
	top : '24%',
	left : '54%',
	width : 80,
	height : 80,
	backgroundImage : './images/gray.png',
	backgroundSelectedImage : './images/green.png',
});

whatView.add(activitybtn5);

var othertxt = Ti.UI.createTextField({
	color : 'black',
	font : {
		fontSize : 20,
	},
	top : '31%',
	width : 160,
	height : 65,
	backgroundColor : 'white',
	backgroundImage : 'none',
	textAlign : 'center',
	value : 'Enter...',
});

whatView.add(othertxt);
var timelabel = Ti.UI.createLabel({
	text : 'Exercise duration in minutes:',
	color : 'white',
	font : {
		fontSize : 20,
	},
	top : '39%',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
});
whatView.add(timelabel);

var lowLabel = Ti.UI.createLabel({
	text : 'Low',
	color : 'white',
	font : {
		fontSize : 20,
	},
	top : '42%',
	left : '15%',
});

whatView.add(lowLabel);

var medLabel = Ti.UI.createLabel({
	text : 'Med',
	color : 'white',
	font : {
		fontSize : 20,
	},
	top : '42%',
	left : '42%',
});

whatView.add(medLabel);

var highLabel = Ti.UI.createLabel({
	text : 'High',
	color : 'white',
	font : {
		fontSize : 20,
	},
	top : '42%',
	left : '67%',
});

whatView.add(highLabel);
var lowtxt = Ti.UI.createTextField({
	color : 'black',
	font : {
		fontSize : 20,
	},
	top : '44%',
	left : '10%',
	width : 75,
	height : 60,
	backgroundColor : 'white',
	backgroundImage : 'none',
	keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
});
whatView.add(lowtxt);

var medtxt = Ti.UI.createTextField({
	color : 'black',
	font : {
		fontSize : 20,
	},
	top : '44%',
	left : '37.5%',
	width : 75,
	height : 60,
	backgroundColor : 'white',
	backgroundImage : 'none',
	keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
});

whatView.add(medtxt);

var hightxt = Ti.UI.createTextField({
	color : 'black',
	font : {
		fontSize : 20,
	},
	top : '44%',
	left : '65%',
	width : 75,
	height : 60,
	backgroundColor : 'white',
	backgroundImage : 'none',
	keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
});
whatView.add(hightxt);

var socialLabel = Ti.UI.createLabel({
	text : 'Number of participants',
	color : 'white',
	font : {
		fontSize : 20,
	},
	top : '52%',
	left : '5%',
});
whatView.add(socialLabel);
var socialtxt = Ti.UI.createTextField({
	color : 'black',
	font : {
		fontSize : 20,
	},
	top : '51%',
	left : '70%',
	width : 70,
	height : 60,
	backgroundColor : 'white',
	backgroundImage : 'none',
	keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
	text : '0',
});
whatView.add(socialtxt);

// Taking Screen Width
var screenWidth = width1;

// Main Window of the Month View.
var calview = Ti.UI.createView({
	top : '58%',
	width : '322dp',

	height : 330,
});
whatView.add(calview);

// Previous Button - Tool Bar
var prevMonth = Ti.UI.createButton({
	left : '25dp',
	width : 40,
	height : 40,
	font : {
		fontSize : 25,
		fontWeight : 'bold'
	},
	title : '<'
});

// Next Button - Tool Bar
var nextMonth = Ti.UI.createButton({
	right : '25dp',
	width : 40,
	height : 40,
	font : {
		fontSize : 25,
		fontWeight : 'bold'
	},
	title : '>'
});

// Month Title - Tool Bar
var monthTitle = Ti.UI.createLabel({
	width : '200dp',
	height : '24dp',
	textAlign : 'center',
	color : '#000000',
	font : {
		fontSize : 20,
		fontWeight : 'bold'
	}
});

// Tool Bar
var toolBar = Ti.UI.createView({
	top : '0dp',
	width : '322dp',
	height : '50dp',
	backgroundColor : '#848485',
	layout : 'vertical'
});

// Tool Bar - View which contain Title Prev. & Next Button
var toolBarTitle = Ti.UI.createView({
	top : '3dp',
	width : '322dp',
	height : '24dp'
});

toolBarTitle.add(monthTitle);

// Tool Bar - Day's
var toolBarDays = Ti.UI.createView({
	top : '2dp',
	width : '322dp',
	height : '22dp',
	layout : 'horizontal',
	left : '-1dp'
});

toolBarDays.sunday = Ti.UI.createLabel({
	left : '0dp',
	height : '20dp',
	text : 'Sun',
	width : '46dp',
	textAlign : 'center',
	font : {
		fontSize : 12,
		fontWeight : 'bold'
	},
	color : '#3a4756'
});

toolBarDays.monday = Ti.UI.createLabel({
	left : '0dp',
	height : '20dp',
	text : 'Mon',
	width : '46dp',
	textAlign : 'center',
	font : {
		fontSize : 12,
		fontWeight : 'bold'
	},
	color : '#3a4756'
});

toolBarDays.tuesday = Ti.UI.createLabel({
	left : '0dp',
	height : '20dp',
	text : 'Tue',
	width : '46dp',
	textAlign : 'center',
	font : {
		fontSize : 12,
		fontWeight : 'bold'
	},
	color : '#3a4756'
});

toolBarDays.wednesday = Ti.UI.createLabel({
	left : '0dp',
	height : '20dp',
	text : 'Wed',
	width : '46dp',
	textAlign : 'center',
	font : {
		fontSize : 12,
		fontWeight : 'bold'
	},
	color : '#3a4756'
});

toolBarDays.thursday = Ti.UI.createLabel({
	left : '0dp',
	height : '20dp',
	text : 'Thu',
	width : '46dp',
	textAlign : 'center',
	font : {
		fontSize : 12,
		fontWeight : 'bold'
	},
	color : '#3a4756'
});

toolBarDays.friday = Ti.UI.createLabel({
	left : '0dp',
	height : '20dp',
	text : 'Fri',
	width : '46dp',
	textAlign : 'center',
	font : {
		fontSize : 12,
		fontWeight : 'bold'
	},
	color : '#3a4756'
});

toolBarDays.saturday = Ti.UI.createLabel({
	left : '0dp',
	height : '20dp',
	text : 'Sat',
	width : '46dp',
	textAlign : 'center',
	font : {
		fontSize : 12,
		fontWeight : 'bold'
	},
	color : '#3a4756'
});

toolBarDays.add(toolBarDays.monday);
toolBarDays.add(toolBarDays.tuesday);
toolBarDays.add(toolBarDays.wednesday);
toolBarDays.add(toolBarDays.thursday);
toolBarDays.add(toolBarDays.friday);
toolBarDays.add(toolBarDays.saturday);
toolBarDays.add(toolBarDays.sunday);

// Adding Tool Bar Title View & Tool Bar Days View
toolBar.add(toolBarTitle);
toolBar.add(toolBarDays);

// Function which create day view template
dayView = function(e) {
	var label = Ti.UI.createLabel({
		current : e.current,
		width : '46dp',
		height : '44dp',
		backgroundColor : '#DCDCDF',
		text : e.day,
		textAlign : 'center',
		color : e.color,
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		}
	});
	return label;
};

monthName = function(e) {
	switch(e) {
		case 0:
			e = 'January';
			break;
		case 1:
			e = 'February';
			break;
		case 2:
			e = 'March';
			break;
		case 3:
			e = 'April';
			break;
		case 4:
			e = 'May';
			break;
		case 5:
			e = 'June';
			break;
		case 6:
			e = 'July';
			break;
		case 7:
			e = 'August';
			break;
		case 8:
			e = 'September';
			break;
		case 9:
			e = 'October';
			break;
		case 10:
			e = 'November';
			break;
		case 11:
			e = 'December';
			break;
	};
	return e;
};
var oldDay = 1;
// Calendar Main Function
var calView = function(a, b, c, f) {
	var nameOfMonth = monthName(b);

	//create main calendar view
	var mainView = Ti.UI.createView({
		layout : 'horizontal',
		width : '322dp',
		height : 'auto',
		top : '50dp'
	});

	//set the time
	var daysInMonth = 32 - new Date(a, b, 32).getDate();
	var dayOfMonth = new Date(a, b, c).getDate();
	var dayOfWeek = new Date(a, b, 1).getDay();
	var daysInLastMonth = 32 - new Date(a, b - 1, 32).getDate();
	var daysInNextMonth = (new Date(a, b, daysInMonth).getDay()) - 6;

	//set initial day number
	var dayNumber = daysInLastMonth - dayOfWeek + 1;

	//get last month's days
	for ( i = 0; i < dayOfWeek; i++) {
		mainView.add(new dayView({
			day : dayNumber,
			color : '#8e959f', //light gray color
			current : 'no',
			dayOfMonth : ''
		}));
		dayNumber++;
	};

	// reset day number for current month
	dayNumber = 1;

	//get this month's days
	if (!f) {
		for ( i = 0; i < daysInMonth; i++) {
			var newDay = new dayView({
				day : dayNumber,
				color : '#3a4756', //dark gray color
				current : 'yes',
				dayOfMonth : dayOfMonth
			});
			mainView.add(newDay);

			if (newDay.text == dayOfMonth) {
				newDay.color = 'white';
				newDay.backgroundColor = '#00cc66';
				// green today date colot
				oldDay = newDay;
			}

			if (i + 1 > dayOfMonth) {
				newDay.color = '#8e959f';
				// light gray color
			}
			dayNumber++;
		};
		dayNumber = 1;

		//get remaining month's days
		for ( i = 0; i > daysInNextMonth; i--) {
			mainView.add(new dayView({
				day : dayNumber,
				color : '#8e959f', //light gray color
				current : 'no',
				dayOfMonth : ''
			}));
			dayNumber++;
		};
	} else {
		for ( i = 0; i < daysInMonth; i++) {
			var newDay = new dayView({
				day : dayNumber,
				color : '#8e959f', //light gray color
				current : 'yes',
				dayOfMonth : dayOfMonth
			});
			mainView.add(newDay);

			if (i + 1 > daysInMonth - 14 + dayOfMonth) {
				newDay.color = '#3a4756';
				// dark gray color
			}
			dayNumber++;
		};
		dayNumber = 1;
		oldDay = 0;
		//get remaining month's days
		for ( i = 0; i > daysInNextMonth; i--) {
			mainView.add(new dayView({
				day : dayNumber,
				color : '#8e959f', //light gray color
				current : 'no',
				dayOfMonth : ''
			}));
			dayNumber++;
		};
	}
	// this is the new "clicker" function, although it doesn't have a name anymore, it just is.
	mainView.addEventListener('click', function(e) {
		if (e.source.current == 'yes') {
			if (!f) {

				// RESET last day selected
				if (oldDay.text == dayOfMonth) {
					oldDay.color = 'white';
					oldDay.backgroundColor = '#333333';
					//dark gray
				} else if (oldDay.text < dayOfMonth) {
					oldDay.color = '#3a4756';
					oldDay.backgroundColor = '#DCDCDF';
					// light light gray (deselects the number)
				}
				oldDay.backgroundPaddingLeft = '0dp';
				oldDay.backgroundPaddingBottom = '0dp';

				// set characteristic of the day SELECTED
				if (e.source.text == dayOfMonth) {
					e.source.backgroundColor = '#00cc66';
					day = c;
					mon = b + 1;
					year = a;
				} else if (e.source.text < dayOfMonth) {
					e.source.backgroundColor = '#00cc66';
					day = e.source.text;
					mon = b + 1;
					year = a;
				}

			} else {
				if (oldDay != 0) {
					if (oldDay.text > daysInMonth - 14 + dayOfMonth) {
						oldDay.color = '#3a4756';
						oldDay.backgroundColor = '#DCDCDF';
						// light light gray (deselects the number)
					}
					oldDay.backgroundPaddingLeft = '0dp';
					oldDay.backgroundPaddingBottom = '0dp';
				}
				// set characteristic of the day SELECTED
				if (e.source.text > daysInMonth - 14 + dayOfMonth) {
					e.source.backgroundColor = '#00cc66';
					day = e.source.text;
					mon = b + 1;
					year = a;
				}
			}

			e.source.backgroundPaddingLeft = '1dp';
			e.source.backgroundPaddingBottom = '1dp';
			if (e.source.text <= dayOfMonth)
				e.source.color = 'white';
			//this day becomes old :(
			oldDay = e.source;
		}
	});

	return mainView;
};

// what's today's date?
var mydate = new Date();
a = mydate.getFullYear();
b = mydate.getMonth();
c = mydate.getDate();

// add the three calendar views to the window for changing calendars with animation later

var prevCalendarView = null;
if (b == 0) {
	prevCalendarView = calView(a - 1, 11, c, 1);
} else {
	prevCalendarView = calView(a, b - 1, c, 1);
}
prevCalendarView.left = (screenWidth * -1) + 'dp';

var nextCalendarView = null;
if (b == 0) {
	nextCalendarView = calView(a + 1, 0, c, 0);
} else {
	nextCalendarView = calView(a, b + 1, c, 0);
}
nextCalendarView.left = screenWidth + 'dp';

var thisCalendarView = calView(a, b, c, 0);

thisCalendarView.left = '-1dp';

monthTitle.text = monthName(b) + ' ' + a;

// add everything to the window
calview.add(toolBar);
calview.add(thisCalendarView);
calview.add(nextCalendarView);
calview.add(prevCalendarView);
// calview.add(backButton);

var slideNext = Titanium.UI.createAnimation({
	// left : '-322',
	duration : 500
});

slideNext.left = (screenWidth * -1);

var slideReset = Titanium.UI.createAnimation({
	// left : '-1',
	duration : 500
});

slideReset.left = '-1';

var slidePrev = Titanium.UI.createAnimation({
	// left : '322',
	duration : 500
});

slidePrev.left = screenWidth;
var prevflag = 0;
// Next Month Click Event
nextMonth.addEventListener('click', function() {

	if (prevflag == 1) {
		if (b == 11) {
			b = 0;
			a++;
		} else {
			b++;
		}
		if (oldDay != 0) {
			oldDay.color = '#3a4756';
			oldDay.backgroundColor = '#DCDCDF';
			// light light gray (deselects the number)
		}
		oldDay.backgroundPaddingLeft = '0dp';
		oldDay.backgroundPaddingBottom = '0dp';
		day = 0;
		mon = 0;
		year = 0;
		thisCalendarView.animate(slideNext);
		nextCalendarView.animate(slideReset);
		toolBarTitle.remove(nextMonth);
		toolBarTitle.add(prevMonth);

		setTimeout(function() {
			thisCalendarView.left = (screenWidth * -1) + 'dp';

			nextCalendarView.left = '-1dp';

			prevCalendarView = thisCalendarView;
			thisCalendarView = nextCalendarView;
			if (b == 11) {
				nextCalendarView = calView(a + 1, 0, c, 0);
			} else {
				nextCalendarView = calView(a, b + 1, c, 0);
			}
			monthTitle.text = monthName(b) + ' ' + a;
			nextCalendarView.left = screenWidth + 'dp';
			calview.add(nextCalendarView);
		}, 500);
		prevflag = 0;
	}
});
toolBarTitle.add(prevMonth);

// Previous Month Click Event
prevMonth.addEventListener('click', function() {
	var prevDate = new Date();
	prevDate.setDate(mydate.getDate() - 14);
	if (prevDate.getMonth() != b && prevflag == 0) {

		if (b == 0) {
			b = 11;
			a--;
		} else {
			b--;
		}
		if (oldDay != 0) {
			oldDay.color = '#3a4756';
			oldDay.backgroundColor = '#DCDCDF';
			// light light gray (deselects the number)
		}
		oldDay.backgroundPaddingLeft = '0dp';
		oldDay.backgroundPaddingBottom = '0dp';
		day = 0;
		mon = 0;
		year = 0;
		thisCalendarView.animate(slidePrev);
		prevCalendarView.animate(slideReset);
		toolBarTitle.add(nextMonth);
		toolBarTitle.remove(prevMonth);

		setTimeout(function() {
			thisCalendarView.left = screenWidth + 'dp';
			prevCalendarView.left = '-1dp';
			nextCalendarView = thisCalendarView;
			thisCalendarView = prevCalendarView;
			if (b == 0) {
				prevCalendarView = calView(a - 1, 11, c, 1);
			} else {
				prevCalendarView = calView(a, b - 1, c, 1);
			}
			monthTitle.text = monthName(b) + ' ' + a;
			prevCalendarView.left = (screenWidth * -1) + 'dp';
			calview.add(prevCalendarView);
		}, 500);
		prevflag = 1;
	}
});

var ratingLabel = Ti.UI.createLabel({
	text : 'How happy did you feel?',
	color : 'white',
	font : {
		fontSize : 20,
	},
	top : '82%',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,

});
whatView.add(ratingLabel);
var hstar1 = Ti.UI.createButton({
	top : '85%',
	left : '3%',
	color : 'white',
	width : 55,
	height : 55,
	backgroundImage : './images/goldstar.png',
});

hstar1.addEventListener('click', function(e) {
	hstar1.backgroundImage = './images/goldstar.png';
	hstar2.backgroundImage = './images/dullstar.png';
	hstar3.backgroundImage = './images/dullstar.png';
	hstar4.backgroundImage = './images/dullstar.png';
	hstar5.backgroundImage = './images/dullstar.png';
	haprate = 1;
});
var hstar2 = Ti.UI.createButton({
	top : '85%',
	left : '22%',
	color : 'white',
	width : 55,
	height : 55,
	backgroundImage : './images/goldstar.png',
});
hstar2.addEventListener('click', function(e) {
	hstar1.backgroundImage = './images/goldstar.png';
	hstar2.backgroundImage = './images/goldstar.png';
	hstar3.backgroundImage = './images/dullstar.png';
	hstar4.backgroundImage = './images/dullstar.png';
	hstar5.backgroundImage = './images/dullstar.png';
	haprate = 2;
});
var hstar3 = Ti.UI.createButton({
	top : '85%',
	left : '41%',
	color : 'white',
	width : 55,
	height : 55,
	backgroundImage : './images/goldstar.png',
});
hstar3.addEventListener('click', function(e) {
	hstar1.backgroundImage = './images/goldstar.png';
	hstar2.backgroundImage = './images/goldstar.png';
	hstar3.backgroundImage = './images/goldstar.png';
	hstar4.backgroundImage = './images/dullstar.png';
	hstar5.backgroundImage = './images/dullstar.png';
	haprate = 3;
});
var hstar4 = Ti.UI.createButton({
	top : '85%',
	left : '60%',
	color : 'white',
	width : 55,
	height : 55,
	backgroundImage : './images/dullstar.png',
});
hstar4.addEventListener('click', function(e) {
	hstar1.backgroundImage = './images/goldstar.png';
	hstar2.backgroundImage = './images/goldstar.png';
	hstar3.backgroundImage = './images/goldstar.png';
	hstar4.backgroundImage = './images/goldstar.png';
	hstar5.backgroundImage = './images/dullstar.png';
	haprate = 4;
});
var hstar5 = Ti.UI.createButton({
	top : '85%',
	left : '79%',
	color : 'white',
	width : 55,
	height : 55,
	backgroundImage : './images/dullstar.png',
});
hstar5.addEventListener('click', function(e) {
	hstar1.backgroundImage = './images/goldstar.png';
	hstar2.backgroundImage = './images/goldstar.png';
	hstar3.backgroundImage = './images/goldstar.png';
	hstar4.backgroundImage = './images/goldstar.png';
	hstar5.backgroundImage = './images/goldstar.png';
	haprate = 5;
});
whatView.add(hstar1);
whatView.add(hstar2);
whatView.add(hstar3);
whatView.add(hstar4);
whatView.add(hstar5);

var submit = Ti.UI.createButton({
	top : '91%',
	left : '40%',
	color : 'black',
	font : {
		fontSize : 20,
	},
	width : 80,
	height : 80,
	title : 'Submit',
	backgroundImage : './images/gray.png',
	backgroundSelectedImage : './images/green.png',

});

whatView.add(submit);

var email = Ti.UI.createTextField({
	height : '40dp',
	width : '150dp',
	top : '10%',
	left : '40%',
	color : 'black',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType : Titanium.UI.KEYBOARD_EMAIL
});

var password = Ti.UI.createTextField({
	height : '40dp',
	width : '150dp',
	top : '30%',
	left : '40%',
	color : 'black',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask : 'True'
});

//profilewin

//Get information for profile

var levelLabel = Ti.UI.createLabel({
	color : 'white',
	font : {
		fontSize : 20,
	},
	text : 'Current Level:',
	top : '10%',
	left : '40%',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE
});

var track = Ti.UI.createView({
	top : '15%',
	left : '40%',
	width : 180,
	height : '2%',
	backgroundColor : 'red'
});
var progress = Ti.UI.createView({
	top : '0',
	left : '0',
	width : '5%',
	height : '100%',
	backgroundColor : 'green'
});
track.add(progress);
profileView.add(track);
var pointLabel = Ti.UI.createLabel({
	color : 'white',
	font : {
		fontSize : 20,
	},
	text : 'Points Earned:',
	top : '18%',
	left : '40%',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE
});

/* Set up profile view */

profileView.add(levelLabel);
profileView.add(pointLabel);

var recentLabel = Ti.UI.createLabel({
	color : 'white',
	font : {
		fontSize : 20,
	},
	text : 'Recent Activities:',
	top : '23%',
	left : '8%',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE
});

profileView.add(recentLabel);

var refresh = Ti.UI.createButton({
	top : '70%',
	left : '15%',
	color : 'black',
	font : {
		fontSize : 20,
	},
	width : 100,
	title : 'Refresh',
	backgroundImage : './images/grayrect.png',
	backgroundImageSelected : './images/greenrect.png',
});
profileView.add(refresh);

var deauth = Ti.UI.createButton({
	top : '70%',
	left : '50%',
	color : 'black',
	width : 100,
	font : {
		fontSize : 20,
	},
	title : 'Log out',
	backgroundImage : './images/grayrect.png',
	backgroundImageSelected : './images/greenrect.png',
});

/* Set up labels */

var emaillabel = Ti.UI.createLabel({
	color : 'white',
	font : {
		fontSize : 20,
	},
	text : 'Username',
	top : '10%',
	left : '10%',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE
});

var passwordlabel = Ti.UI.createLabel({
	color : 'white',
	font : {
		fontSize : 20,
	},
	text : 'Password',
	top : '30%',
	left : '10%',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE
});

var win2 = Titanium.UI.createWindow({
	title : 'Register Phone',
	backgroundColor : 'black',
	backgroundRepeat : true,
});

/* Add labels to windows */

win2.add(emaillabel);
win2.add(passwordlabel);
win2.add(password);
win2.add(email);

var register = Ti.UI.createButton({
	top : '40%',
	title : 'Log in',
	color : 'black',
	width : 100,
	font : {
		fontSize : 20,
	},
	title : 'Log in',
	backgroundImage : './images/grayrect.png',
	backgroundImageSelected : './images/greenrect.png',
});

win2.add(register);

//
var day, mon, year;

// var lowtxt, medtxt, hightxt;

var useractivity;

function initialise() {
	socialtxt.value = '0';
	lowtxt.value = '0';
	medtxt.value = '0';
	hightxt.value = '0';
	othertxt.value = '';
	mydate = new Date();
	day = mydate.getDate();
	mon = mydate.getMonth() + 1;
	// convention : jan = 01
	year = mydate.getFullYear();
	a = mydate.getFullYear();
	b = mydate.getMonth();
	c = mydate.getDate();

	useractivity = '';

	exrate = 3, haprate = 3;
	// rstar1.backgroundImage = './images/goldstar.png';
	// rstar2.backgroundImage = './images/goldstar.png';
	// rstar3.backgroundImage = './images/goldstar.png';
	// rstar4.backgroundImage = './images/dullstar.png';
	// rstar5.backgroundImage = './images/dullstar.png';
	here.backgroundImage = 'images/greenrect.png';
	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (e.success) {
			// do stuff
			workoutlat = e.coords.longitude;
			workoutlong = e.coords.latitude;

		} else
			here.backgroundImage = 'images/grayrect.png';
	});

	hstar1.backgroundImage = './images/goldstar.png';
	hstar2.backgroundImage = './images/goldstar.png';
	hstar3.backgroundImage = './images/goldstar.png';
	hstar4.backgroundImage = './images/dullstar.png';
	hstar5.backgroundImage = './images/dullstar.png';
}

initialise();
here.addEventListener('click', function(e) {
	here.backgroundImage = 'images/greenrect.png';
	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (e.success) {
			// do stuff
			workoutlat = e.coords.longitude;
			workoutlong = e.coords.latitude;

		} else {
			alert('Could not find your current location, please try again');
			here.backgroundImage = 'images/grayrect.png';
		}
	});
	maploc.backgroundImage = 'images/grayrect.png';
	otherloc.backgroundColor = 'white';
	otherloc.value = '';
});
maploc.addEventListener('click', function(e) {
	here.backgroundImage = 'images/grayrect.png';
	maploc.backgroundImage = 'images/greenrect.png';
	otherloc.backgroundColor = 'white';
	otherloc.value = '';
	scrollable.scrollToView(mapview);
});
otherloc.addEventListener('click', function(e) {
	here.backgroundImage = 'images/grayrect.png';
	maploc.backgroundImage = 'images/grayrect.png';
					otherloc.value = '';
	
});
otherloc.addEventListener('return', function(e) {
	if (otherloc.value != '') {
		var addreq = Titanium.Network.createHTTPClient();
		if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE) {
			alert('Error. Please check internet connection.');
			otherloc.value = '';
		} else {
			url1 = 'http://maps.google.com/maps/api/geocode/json?address=' + address.value + '&sensor=true';
			addreq.open("GET", url1);
			addreq.send();
			addreq.onload = function(g) {
				if (this.responseText != '') {
					var addJSON = JSON.parse(this.responseText);
					workoutlat = addJSON.results[0].geometry.location.lat;
					workoutlong = addJSON.results[0].geometry.location.lng;
					otherloc.backgroundColor = 'green';
				} else {
					otherloc.value = 'Type here...';
					alert('Could not find the location');
				}
			};

		}
	}
});
activitybtn1.addEventListener('click', function(e) {
	useractivity = "Running";
	othertxt.value = '';
	othertxt.backgroundColor = 'white';
	activitybtn1.backgroundImage = './images/green.png';
	activitybtn2.backgroundImage = './images/gray.png';
	activitybtn3.backgroundImage = './images/gray.png';
	activitybtn4.backgroundImage = './images/gray.png';
	activitybtn5.backgroundImage = './images/gray.png';

});

activitybtn2.addEventListener('click', function(e) {
	useractivity = "Walking";
	othertxt.value = '';
	othertxt.backgroundColor = 'white';
	activitybtn1.backgroundImage = './images/gray.png';
	activitybtn2.backgroundImage = './images/green.png';
	activitybtn3.backgroundImage = './images/gray.png';
	activitybtn4.backgroundImage = './images/gray.png';
	activitybtn5.backgroundImage = './images/gray.png';

});

activitybtn3.addEventListener('click', function(e) {
	useractivity = "Swimming";
	othertxt.value = '';
	othertxt.backgroundColor = 'white';
	activitybtn1.backgroundImage = './images/gray.png';
	activitybtn2.backgroundImage = './images/gray.png';
	activitybtn3.backgroundImage = './images/green.png';
	activitybtn4.backgroundImage = './images/gray.png';
	activitybtn5.backgroundImage = './images/gray.png';

});

activitybtn4.addEventListener('click', function(e) {
	useractivity = "Cycling";
	othertxt.value = '';
	othertxt.backgroundColor = 'white';
	activitybtn1.backgroundImage = './images/gray.png';
	activitybtn2.backgroundImage = './images/gray.png';
	activitybtn3.backgroundImage = './images/gray.png';
	activitybtn4.backgroundImage = './images/green.png';
	activitybtn5.backgroundImage = './images/gray.png';

});

activitybtn5.addEventListener('click', function(e) {
	useractivity = "Weights";
	othertxt.value = '';
	othertxt.backgroundColor = 'white';
	activitybtn1.backgroundImage = './images/gray.png';
	activitybtn2.backgroundImage = './images/gray.png';
	activitybtn3.backgroundImage = './images/gray.png';
	activitybtn4.backgroundImage = './images/gray.png';
	activitybtn5.backgroundImage = './images/green.png';

});

lowtxt.addEventListener('return', function(e) {
	if (Titanium.Platform.name == 'android') {
		// Android stuff
		Ti.UI.Android.hideSoftKeyboard();
	} else
		lowtxt.blur();
});

medtxt.addEventListener('return', function(e) {
	if (Titanium.Platform.name == 'android') {
		// Android stuff
		Ti.UI.Android.hideSoftKeyboard();
	} else
		medtxt.blur();
});

hightxt.addEventListener('return', function(e) {
	if (Titanium.Platform.name == 'android') {
		// Android stuff
		Ti.UI.Android.hideSoftKeyboard();
	} else
		hightxt.blur();
});

othertxt.addEventListener('return', function(e) {
	if (Titanium.Platform.name == 'android') {
		// Android stuff
		Ti.UI.Android.hideSoftKeyboard();
	}
	othertxt.blur();
	useractivity = othertxt.value;
});

socialtxt.addEventListener('return', function(e) {
	if (Titanium.Platform.name == 'android') {
		// Android stuff
		Ti.UI.Android.hideSoftKeyboard();
	} else
		socialtxt.blur();
});
othertxt.addEventListener('change', function(e) {
	activitybtn1.backgroundImage = './images/gray.png';
	activitybtn2.backgroundImage = './images/gray.png';
	activitybtn3.backgroundImage = './images/gray.png';
	activitybtn4.backgroundImage = './images/gray.png';
	activitybtn5.backgroundImage = './images/gray.png';
});
othertxt.addEventListener('singletap', function(e) {
	othertxt.value = '';
});

lowtxt.addEventListener('singletap', function(e) {
	lowtxt.value = '';
});
medtxt.addEventListener('singletap', function(e) {
	medtxt.value = '';
});
hightxt.addEventListener('singletap', function(e) {
	hightxt.value = '';
});
socialtxt.addEventListener('singletap', function(e) {
	socialtxt.value = '';
});

lowtxt.addEventListener('focus', function(e) {
	if (lowtxt.value == '0' || lowtxt.value == '')
		lowtxt.value = '';

});
medtxt.addEventListener('focus', function(e) {
	if (medtxt.value == '0' || medtxt.value == '')
		medtxt.value = '';
});
hightxt.addEventListener('focus', function(e) {
	if (hightxt.value == '0' || hightxt.value == '')
		hightxt.value = '';
});
socialtxt.addEventListener('focus', function(e) {
	if (socialtxt.value == '0' || socialtxt.value == '')
		socialtxt.value = '';
});

/* Set up fields for submission */

var submitReq = Titanium.Network.createHTTPClient();

submit.addEventListener('click', function(e) {
	submit.backgroundImage = './images/green.png';

	submitReq = Titanium.Network.createHTTPClient();
	submitReq.open("POST", "http://owlympics.ecg.rice.edu:81/mobile/submit");
	submitinfo();

	submitReq.onload = function() {
		// alert(this.responseText);
		if (this.responseText == 'Activity submission succeeded') {
			alert("Congratulations! Your hardwork earned you " + Math.floor(100 * (lowtxt.value / 45 + medtxt.value / 30 + hightxt.value / 20) + 10 * (socialtxt.value > 0)) + " points!");
			profileUpdate();
			scrollable.scrollToView(profileView);
			initialise();

		} else {
			alert(this.responseText);
		}

	};
	submit.backgroundImage = './images/gray.png';
});

function submitinfo() {

	if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE)
		alert('Could not submit, Please check internet connection.');
	else {
		if (lowtxt.value == '')
			lowtxt.value = '0';
		if (medtxt.value == '')
			medtxt.value = '0';
		if (hightxt.value == '')
			hightxt.value = '0';
		// if (othertxt != '')
		// useractivity = othertxt.value;
		var alert1 = Titanium.UI.createAlertDialog({
			title : 'Submit Data',
			message : ("Submit the following information? " + "\n" + "Date : " + mon + "-" + day + "-" + year + "\n" + "Activity : " + useractivity + " \nLow Intensity : " + lowtxt.value + " \nMed Intensity : " + medtxt.value + " \nHigh Intensity : " + hightxt.value + "\nNumber of Participants : " + socialtxt.value + "\nExercise rating : " + exrate + "\nHapiness rating : " + haprate),
			buttonNames : ['Yes', 'No'],
			cancel : 1
		});

		if (useractivity != '' && (lowtxt.value + medtxt.value + hightxt.value) > 0) {

			var params = {
				day : day.toString(),
				mon : mon.toString(),
				year : year.toString(),
				activity : useractivity,
				social : socialtxt.value,
				lowintensity : lowtxt.value,
				moderateintensity : medtxt.value,
				highintensity : hightxt.value,
				note : "",
				rate : '1',
				hour : mydate.getHours().toString(),
				min : mydate.getMinutes().toString(),
				sec : mydate.getSeconds().toString(),
				happy : haprate.toString(),
				activeness : exrate.toString(),
				uuid : Titanium.Platform.id
			};
			alert1.show();

		} else {
			alert("Please fill all fields. Time cannot be zero.");
		}
		alert1.addEventListener('click', function(e) {
			Titanium.API.info('e = ' + JSON.stringify(e));
			//Clicked cancel, first check is for iphone, second for android
			if (e.cancel === e.index || e.cancel === true) {
				return;
			}

			//now you can use parameter e to switch/case

			switch (e.index) {
				case 0:
					Titanium.API.info('Clicked button 0 (YES)');
					submitReq.send(params);
					break;

				//This will never be reached, if you specified cancel for index 1
				case 1:
					Titanium.API.info('Clicked button 1 (NO)');
					break;

				default:
					break;
			}
		});
	}
}

var profileReq = Titanium.Network.createHTTPClient();
var activityflag = 0;
var activity1 = new Array();
profileReq.onload = function() {
	// alert(this.responseText);
	// for (var d in profilechildView.children) {
	// if (profileView.children.hasOwnProperty(d)) {
	// profileView.remove(profilechildView.children[d]);
	// }
	// }
	// profileView.remove(profilechildView);
	//Parse JSON file
	var profileJSON = JSON.parse(this.responseText);
	//Use values to generate progress bar and labels for current level and recent activities
	userPoints = profileJSON[0].points;
	if (userPoints == 0)
		progress.width = '5%';
	else {
		if (userPoints >= 400)
			progress.width = 180;
		else
			progress.width = 180 * userPoints / 400;
	}
	userLevel = 'Current Level: ';
	userLevel = userLevel + profileJSON[0].level;
	for ( i = 0; i < activityflag; i++) {
		profilechildView.remove(activity1[i]);
	}

	for ( i = 0; i < profileJSON[0].acts.length; i++) {

		activity1[i] = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : 20
			},
			text : 'Exercise',
			top : 50 * i,
			left : '10%',
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE
		});
		activityflag = profileJSON[0].acts.length;
		profilechildView.add(activity1[i]);

		var activity1string = '';
		activity1string = activity1string + profileJSON[0].acts[i].name + ' for ' + profileJSON[0].acts[i].newpoints + ' points on ' + profileJSON[0].acts[i].month + '/' + profileJSON[0].acts[i].day + '/' + profileJSON[0].acts[i].year;
		activity1[i].setText(activity1string);
	}

	levelLabel.setText(userLevel);
	point = 'Points Earned : ' + userPoints;
	pointLabel.setText(point);
	// profileView.add(profilechildView);
	// profileView.add(refresh);
	// profileView.add(deauth);
	// track.add(progress);
	// profileView.add(track);
	// profileView.add(levelLabel);
	// // profileView.add(pointLabel);
	// profileView.add(recentLabel);

};

function profileUpdate() {
	if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE)
		alert('Could not refresh activities, Please check internet connection.');
	else {
		profileReq.open("POST", "http://owlympics.ecg.rice.edu:81/mobile/profile");
		var params = {
			uuid : Titanium.Platform.id,
		};
		profileReq.send(params);
	}
}

if (Ti.App.Properties.hasProperty('loggedBefore')) {
	profileUpdate();
};

refresh.addEventListener('click', function(e) {
	profileUpdate();
});

var deauthReq = Titanium.Network.createHTTPClient();

deauthReq.onload = function() {
	if (this.responseText == 'Deauthorization succeeded') {
		alert("Log out successful!");
		Ti.App.Properties.removeProperty('loggedBefore');
		win2.open();
		homeWin.close();
	} else {
		alert(this.responseText);
	}
};

deauth.addEventListener('click', function(e) {
	if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE)
		alert('Could not Log out, Please check internet connection.');
	else {
		deauthReq.open("POST", "http://owlympics.ecg.rice.edu:81/mobile/detach");
		var params = {
			uuid : Titanium.Platform.id
		};
		deauthReq.send(params);
	}
});

profileView.add(deauth);

var registerReq = Titanium.Network.createHTTPClient();

registerReq.onload = function() {

	if (this.responseText == 'Authentication succeeded') {
		alert("Account successfully registered.");
		homeWin.open();
		scrollable.scrollToView(vertiscroll);
		win2.close();
		//profileUpdate();
		if (Titanium.Platform.name == 'android') {
			// Android stuff
			Ti.UI.Android.hideSoftKeyboard();
		}
		Ti.App.Properties.setInt('loggedBefore', 1);

	} else {
		alert(this.responseText);
	}
};

register.addEventListener('click', function(e) {
	if (email.value != '' && password.value != '') {
		registerReq.open("POST", "http://owlympics.ecg.rice.edu:81/mobile/register");
		var params = {
			username : email.value,
			password : password.value,
			uuid : Titanium.Platform.id
		};
		registerReq.send(params);
	} else {
		alert("Username/Password are required");
	}
});

if (Ti.App.Properties.hasProperty('loggedBefore')) {
	homeWin.open();
	scrollable.scrollToView(vertiscroll);

	if (Titanium.Platform.name == 'android') {
		// Android stuff
		Ti.UI.Android.hideSoftKeyboard();
	}
} else {
	win2.open();
}

scrollable.addEventListener('singletap', function() {
	if (Titanium.Platform.name == 'android') {
		// Android stuff
		Ti.UI.Android.hideSoftKeyboard();
	} else {
		othertxt.blur();
		lowtxt.blur();
		medtxt.blur();
		hightxt.blur();
		socialtxt.blur();
	}
	if (othertxt.value != '')
		othertxt.backgroundColor = '00cc66';
	else
		othertxt.backgroundColor = 'white';

	if (lowtxt.value != '0' && lowtxt.value != '')
		lowtxt.backgroundColor = '00cc66';
	else
		lowtxt.backgroundColor = 'white';
	if (medtxt.value != '0' && medtxt.value != '')
		medtxt.backgroundColor = '00cc66';
	else
		medtxt.backgroundColor = 'white';
	if (hightxt.value != '0' && hightxt.value != '')
		hightxt.backgroundColor = '00cc66';
	else
		hightxt.backgroundColor = 'white';
	if (socialtxt.value != '0' && socialtxt.value != '')
		socialtxt.backgroundColor = '00cc66';
	else
		socialtxt.backgroundColor = 'white';
});
// register a background service. this JS will run when the app is backgrounded
var service = Ti.App.iOS.registerBackgroundService({
	url : 'bg.js'
});

var coords = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'coords.txt');
if (coords.exists() && coords.writeable) {
	coords.deleteFile();
	coords.createFile();
}

var enterfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'enterflag.txt');
if (enterfile.exists() && enterfile.writeable) {
	enterfile.deleteFile();
	enterfile.createFile();
}
var stayfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'stayflag.txt');
if (stayfile.exists() && stayfile.writeable) {
	stayfile.deleteFile();
	stayfile.createFile();
}
var stampfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'stamp.txt');
if (stampfile.exists() && stampfile.writeable) {
	stampfile.deleteFile();
	stampfile.createFile();
}
//Initialization

var currentlocation = new Array();
currentlocation[0] = 0;
currentlocation[1] = 0;

var addlabel = Ti.UI.createLabel({
	top : '15%',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	color : 'white',
	text : 'Setting Geofence \nType the address without pin-code and press RETURN',
	font : {
		fontSize : 20
	},
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
});
var address = Ti.UI.createTextField({
	height : '160dp',
	width : '300dp',
	top : '30%',
	left : '3%',
	color : 'black',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
});
var addbutton = Ti.UI.createButton({
	top : '70%',
	left : '20back%',
	color : 'black',
	font : {
		fontSize : 20,
	},
	width : 200,
	title : 'Current Location',
	backgroundImage : './images/grayrect.png',
	backgroundImageSelected : './images/greenrect.png',
});
view3.add(addbutton);
addbutton.addEventListener('click', function(e) {
	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (e.success) {
			// do stuff
			currentlocation[0] = e.coords.longitude;
			currentlocation[1] = e.coords.latitude;
			coords.write(currentlocation[0] + ',' + currentlocation[1] + ',', true);
			for ( i = 0; i < coords.read().text.split(',').length; i++) {
				points[i] = parseFloat(coords.read().text.split(',')[i]);
			}
			enterfile.write('0,', true);
			stayfile.write('0,', true);
			stampfile.write('0,', true);
			Ti.Geolocation.forwardGeocoder(address.value, function(e) {
				var t1 = new Date();
				var add = MapModule.createAnnotation({
					latitude : currentlocation[0],
					longitude : currentlocation[1],
					title : 'Current location at' + t1.getHours() + ':' + t1.getMinutes(),
					pincolor : MapModule.ANNOTATION_GREEN,
				});
				mapview.addAnnotation(add);
			});
			// alert('Map shows your current location as a green pin');
			alert('Setting geofence of 80m around current location');
			view3.hide();
			scrollable.show();
			scrollable.scrollToView(mapview);
		} else
			alert('Current Location not updated, try again');
	});
});

var points = new Array();
address.addEventListener('return', function(e) {

	if (address.value != '') {
		var addreq = Titanium.Network.createHTTPClient();
		if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE)
			alert('Error. Please check internet connection.');
		else {
			url1 = 'http://maps.google.com/maps/api/geocode/json?address=' + address.value + '&sensor=true';
			addreq.open("GET", url1);
			addreq.send();
			addreq.onload = function(e) {
				if (this.responseText != '') {
					var addJSON = JSON.parse(this.responseText);
					coords.write(addJSON.results[0].geometry.location.lat + ',' + addJSON.results[0].geometry.location.lng + ',', true);
					for ( i = 0; i < coords.read().text.split(',').length; i++) {
						points[i] = parseFloat(coords.read().text.split(',')[i]);
					}
					enterfile.write('0,', true);
					stayfile.write('0,', true);
					stampfile.write('0,', true);
					Ti.Geolocation.forwardGeocoder(address.value, function(e) {
						var addannot = MapModule.createAnnotation({
							latitude : addJSON.results[0].geometry.location.lat,
							longitude : addJSON.results[0].geometry.location.lng,
							title : address.value,
							pincolor : MapModule.ANNOTATION_GREEN,
						});
						mapview.addAnnotation(addannot);
					});
					// alert('Map shows your set location as a green pin');
					alert('Setting geofence of 80m around ' + address.value);
					view3.hide();
					scrollable.show();
					scrollable.scrollToView(mapview);
				};

			};
		}
	}

});
view3.add(address);
view3.add(addlabel);
//unit in meters
var centerRadius = 80;

// calculate distance between two locations, distance unit in meters
function distance(lat1, lon1, lat2, lon2) {

	var radlat1 = Math.PI * lat1 / 180;
	var radlat2 = Math.PI * lat2 / 180;
	var radlon1 = Math.PI * lon1 / 180;
	var radlon2 = Math.PI * lon2 / 180;
	var theta = lon1 - lon2;
	var radtheta = Math.PI * theta / 180;
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = dist * 180 / Math.PI;
	dist = dist * 60 * 1.1515;
	dist = dist * 1.609344 * 1000;
	return dist;
};

var hour, min;
var enterflag = new Array();
var stayflag = new Array();
var stamp = new Array();
var dist = new Array();

if (Ti.Geolocation.locationServicesEnabled) {
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HUNDRED_METERS;
	Ti.Geolocation.distanceFilter = 5;
	Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_PROVIDER_NETWORK;
	// Ti.setPauseLocationUpdateAutomatically(true);
	Ti.Geolocation.addEventListener('location', function(e) {
		if (e.error) {
			// alert('Error: ' + e.error);
		} else {
			currentlocation[0] = e.coords.latitude;
			currentlocation[1] = e.coords.longitude;
			for ( i = 0; i < enterfile.read().length - 1; i++) {
				// enterflag[i] = parseFloat(enterfile.read().text.split(',')[i]);
				// stayflag[i] = parseFloat(stayfile.read().text.split(',')[i]);
				// stamp[i] = parseFloat(stampfile.read().text.split(',')[i]);
				dist[i] = distance(e.coords.latitude, e.coords.longitude, points[2 * i], points[2 * i + 1]);
				if (dist[i] < centerRadius) {
					// if (!enterflag[i]) {
					// enterflag[i] = 1;
					// stamp[i] = e.coords.timestamp;
					// } else {
					// if ((e.coords.timestamp - stamp[i]) > 1000) {
					// stayflag[i] = 1;
					// }
					// }
					// } else if (enterflag[i]) {
					// var t1 = new Date;
					// enterflag[i] = 0;
					// if (stayflag[i]) {
					// hour = Math.floor((e.coords.timestamp - stamp[i]) / 3600000);
					// min = Math.floor((e.coords.timestamp - stamp[i]) / 60000) - hour * 60000;
					// if (hour > 1)
					// alert(t1.getHours() + ':' + t1.getMinutes() + '|Report your activities for ' + hour + 'hours and ' + min + ' mins' + '?');
					// else
					// alert(t1.getHours() + ':' + t1.getMinutes() + '|Report your activities for ' + min + ' mins' + '?');
					// stayflag[i] = 0;
					// }
					alert('Report your activities?');
				}
				// alert('blah');
				// var temp = Ti.createBuffer({
				// length : enterflag.length,
				// });
				// alert('blah1');
				// for ( i = 0; i < enterflag.length; i++)
				// temp[i] = enterflag[i];
				// alert('blah2');
				// enterfile.write(temp.toBlob(), false);
				// alert('blah3');
				// var temp = Ti.createBuffer({
				// length : stayflag.length,
				// });
				// for ( i = 0; i < enterflag.length; i++)
				// temp[i] = stayflag[i];
				// stayfile.write(temp.toBlob(), false);
				// var temp = Ti.createBuffer({
				// length : stamp.length,
				// });
				// for ( i = 0; i < enterflag.length; i++)
				// temp[i] = stamp[i];
				// stampfile.write(temp.toBlob(), false);
				// alert(enterflag);
			}

			// alert(mydist5 + ', '+ enterflag5+ ', '+ stayflag5+ ' fg1');

			// if (mydist5 < 30) {
			// if (!enterflag5) {
			// enterflag5 = 1;
			// stamp5 = e.coords.timestamp;
			// } else {
			// if ((e.coords.timestamp - stamp5) > 6000) {
			// stayflag5 = 1;
			// }
			// }
			// } else if (enterflag5) {
			// var t1 = new Date;
			// enterflag5 = 0;
			// if (stayflag5) {
			// hour = Math.floor((e.coords.timestamp - stamp5) / 3600000);
			// min = Math.floor((e.coords.timestamp - stamp5) / 60000) - hour * 60000;
			// if (hour > 1)
			// alert(t1.getHours() + ':' + t1.getMinutes() + '|Were you at Duncan Hall ' + hour + 'hours and ' + min + ' mins' + '? Do you want to log points?');
			// else
			// alert(t1.getHours() + ':' + t1.getMinutes() + '|Were you at Duncan Hall for ' + min + ' mins' + '? Do you want to log points?');
			// stayflag5 = 0;
			// }
			// }

			// alert(mydist5 + ', '+ enterflag5+ ', '+ stayflag5+ ' fg2');

			var annot = MapModule.createAnnotation({
				latitude : e.coords.latitude,
				longitude : e.coords.longitude,
				// title : e.coords.accuracy,
				pincolor : MapModule.ANNOTATION_RED,
			});
			mapview.addAnnotation(annot);
			annot.addEventListener('click', function(e) {
				workoutlat = getLatitude(e);
				workoutlong = getLongitude(e);
				alert(workoutlat + ',' + workoutlong);
				scrollable.scrollToView(vertiscroll);
			});
		}
	});
} else {
	alert('Please enable location services');
}

Ti.App.addEventListener('resume', function(e) {
	var pointlat = new Array();
	var pointlong = new Array();
	var accur = new Array();
	var leng;
	Ti.App.addEventListener('Gvariables', function(event) {
		pointlat = event.blahlat;
		pointlong = event.blahlong;
		leng = event.length;
		accur = event.accuracy;
		for ( i = 0; i <= leng; i++) {
			var annot1 = MapModule.createAnnotation({
				latitude : pointlat[i],
				longitude : pointlong[i],
				// title : accur[i].toString(),
				animate : true,
				pincolor : MapModule.ANNOTATION_RED,
			});
			mapview.addAnnotation(annot1);
			annot1.addEventListener('click', function(e) {
				workoutlat = getLatitude(e);
				workoutlong = getLongitude(e);
				alert(workoutlat + ',' + workoutlong);
				scrollable.scrollToView(vertiscroll);
			});
		}

	});
});

