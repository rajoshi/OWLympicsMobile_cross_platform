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
(function() {
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
	});

	// homeWin.addEventListener('android:back', function() {
	// return false;
	// });

	var profileView = Titanium.UI.createView({
		// backgroundImage: './backgroundblue.jpeg',
		height : "100%",
		width : "100%",
		top : 0,
		left : 0,
	});
	var height1 = Ti.Platform.displayCaps.platformHeight, width1 = Ti.Platform.displayCaps.platformWidth;

	if (Ti.Platform.osname === 'android' && (width > 899 || height > 999)) {
		height1 = height1 / 2;
		width1 = width1 / 2;
		Ti.info("Its a Tablet");
	}

	var whatView = Ti.UI.createView({
		// backgroundImage: './backgroundblue.jpeg',
		height : height1 * 2.5,
		width : width1,
		top : 0,
		left : 0,
	});
	var vertiscroll = Ti.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : height1 * 2.5,
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		height : '100%',
		width : '100%'
	});
	vertiscroll.add(whatView);

	var scrollable = Titanium.UI.createScrollableView({
		views : [profileView, vertiscroll],
		showPagingControl : true,
	});
	homeWin.add(scrollable);

	/*buttons*/
	var ratingLabel = Ti.UI.createLabel({
		text : 'How active did you feel?',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '5%',
		left : '10%',

	});
	whatView.add(ratingLabel);

	var exrate, haprate;
	var rstar1 = Ti.UI.createButton({
		top : '7%',
		left : '3%',
		color : 'white',
		width : 55,
		height : 55,
		backgroundImage : './images/goldstar.png',
	});

	rstar1.addEventListener('click', function(e) {
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/dullstar.png';
		rstar3.backgroundImage = './images/dullstar.png';
		rstar4.backgroundImage = './images/dullstar.png';
		rstar5.backgroundImage = './images/dullstar.png';
		exrate = 1;
	});
	var rstar2 = Ti.UI.createButton({
		top : '7%',
		left : '22%',
		color : 'white',
		width : 55,
		height : 55,
		backgroundImage : './images/goldstar.png',
	});
	rstar2.addEventListener('click', function(e) {
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/goldstar.png';
		rstar3.backgroundImage = './images/dullstar.png';
		rstar4.backgroundImage = './images/dullstar.png';
		rstar5.backgroundImage = './images/dullstar.png';
		exrate = 2;
	});
	var rstar3 = Ti.UI.createButton({
		top : '7%',
		left : '41%',
		color : 'white',
		width : 55,
		height : 55,
		backgroundImage : './images/goldstar.png',
	});
	rstar3.addEventListener('click', function(e) {
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/goldstar.png';
		rstar3.backgroundImage = './images/goldstar.png';
		rstar4.backgroundImage = './images/dullstar.png';
		rstar5.backgroundImage = './images/dullstar.png';
		exrate = 3;
	});
	var rstar4 = Ti.UI.createButton({
		top : '7%',
		left : '60%',
		color : 'white',
		width : 55,
		height : 55,
		backgroundImage : './images/dullstar.png',
	});
	rstar4.addEventListener('click', function(e) {
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/goldstar.png';
		rstar3.backgroundImage = './images/goldstar.png';
		rstar4.backgroundImage = './images/goldstar.png';
		rstar5.backgroundImage = './images/dullstar.png';
		exrate = 4;
	});
	var rstar5 = Ti.UI.createButton({
		top : '7%',
		left : '79%',
		color : 'white',
		width : 55,
		height : 55,
		backgroundImage : './images/dullstar.png',
	});
	rstar5.addEventListener('click', function(e) {
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/goldstar.png';
		rstar3.backgroundImage = './images/goldstar.png';
		rstar4.backgroundImage = './images/goldstar.png';
		rstar5.backgroundImage = './images/goldstar.png';
		exrate = 5;
	});
	whatView.add(rstar1);
	whatView.add(rstar2);
	whatView.add(rstar3);
	whatView.add(rstar4);
	whatView.add(rstar5);

	var selectlabel = Ti.UI.createLabel({
		text : 'Which exercise did you do?',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '13%',
		left : '10%',

	});
	whatView.add(selectlabel);

	var activitybtn1 = Ti.UI.createButton({
		title : 'Run',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '15%',
		left : '10%',
		width : 75,
		height : 75,
		backgroundImage : './images/grey.png',
		backgroundSelectedImage : './images/green.png',
	});

	whatView.add(activitybtn1);
	var activitybtn2 = Ti.UI.createButton({
		title : 'Walk',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '15%',
		left : '36%',
		width : 75,
		height : 75,
		backgroundImage : './images/grey.png',
		backgroundSelectedImage : './images/green.png',
	});

	whatView.add(activitybtn2);

	var activitybtn3 = Ti.UI.createButton({
		title : 'Swim',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '15%',
		left : '62%',
		width : 75,
		height : 75,
		backgroundImage : './images/grey.png',
		backgroundSelectedImage : './images/green.png',
	});

	whatView.add(activitybtn3);

	var activitybtn4 = Ti.UI.createButton({
		title : 'Cycle',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '21%',
		left : '20%',
		width : 75,
		height : 75,
		backgroundImage : './images/grey.png',
		backgroundSelectedImage : './images/green.png',
	});

	whatView.add(activitybtn4);

	var activitybtn5 = Ti.UI.createButton({
		title : 'Weights',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '21%',
		left : '52%',
		width : 75,
		height : 75,
		backgroundImage : './images/grey.png',
		backgroundSelectedImage : './images/green.png',
	});

	whatView.add(activitybtn5);

	var activitybtn6 = Ti.UI.createButton({
		title : 'Enter',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '27%',
		left : '67%',
		width : 75,
		height : 75,
		backgroundImage : './images/grey.png',
		backgroundSelectedImage : './images/green.png',
	});
	whatView.add(activitybtn6);

	var othertxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
		},
		top : '28%',
		left : '15%',
		width : 160,
		height : 65,
		backgroundColor : 'white',
	});

	whatView.add(othertxt);
	var timelabel = Ti.UI.createLabel({
		text : 'How long did you exercise? (in minutes)',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '34%',
		left : '15%',
	});
	whatView.add(timelabel);

	var lowLabel = Ti.UI.createLabel({
		text : 'LOW',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '37%',
		left : '20%',
	});

	whatView.add(lowLabel);

	var medLabel = Ti.UI.createLabel({
		text : 'MED',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '37%',
		left : '45%',
	});

	whatView.add(medLabel);

	var highLabel = Ti.UI.createLabel({
		text : 'HIGH',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '37%',
		left : '70%',
	});

	whatView.add(highLabel);
	var lowtxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
		},
		top : '39%',
		left : '15%',
		width : 75,
		height : 60,
		backgroundColor : 'white',
		keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
	});
	whatView.add(lowtxt);

	var medtxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 20,
		},
		top : '39%',
		left : '42%',
		width : 75,
		height : 60,
		backgroundColor : 'white',
		keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
	});

	whatView.add(medtxt);

	var hightxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
		},
		top : '39%',
		left : '67%',
		width : 75,
		height : 60,
		backgroundColor : 'white',
		keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
	});
	whatView.add(hightxt);

	var socialLabel = Ti.UI.createLabel({
		text : 'Number of participants',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '46%',
		left : '15%',
	});
	whatView.add(socialLabel);
	var socialtxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
		},
		top : '45%',
		left : '70%',
		width : 75,
		height : 60,
		backgroundColor : 'white',
		keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
		text : '0',
	});
	whatView.add(socialtxt);

	var todaybtn = Ti.UI.createButton({
		title : 'Today',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '50%',
		left : '35%',
		width : 110,
		height : 55,
		backgroundImage : './images/greyrect.png',
		backgroundSelectedImage : './images/greenrect.png',
	});

	whatView.add(todaybtn);

	var yestbtn = Ti.UI.createButton({
		title : 'Yesterday',
		color : 'white',
		top : '54%',
		left : '35%',
		width : 110,
		height : 55,
		backgroundImage : './images/greyrect.png',
	});

	whatView.add(yestbtn);

	// Taking Screen Width
	var screenWidth = width1;

	// Main Window of the Month View.
	var calview = Ti.UI.createView({
		top : '59%',
		width : width1,
		height : 330,
	});
	whatView.add(calview);

	// Previous Button - Tool Bar
	var prevMonth = Ti.UI.createButton({
		left : '25dp',
		width : 40,
		height : 40,
		title : '<'
	});

	// Next Button - Tool Bar
	var nextMonth = Ti.UI.createButton({
		right : '25dp',
		width : 40,
		height : 40,
		title : '>'
	});

	// Month Title - Tool Bar
	var monthTitle = Ti.UI.createLabel({
		width : '200dp',
		height : '24dp',
		textAlign : 'center',
		color : '#000000',
		font : {
			fontSize : 16,
			fontWeight : 'bold'
		}
	});

	// Tool Bar
	var toolBar = Ti.UI.createView({
		top : '0dp',
		width : '322dp',
		height : '50dp',
		backgroundColor : '#00cc66',
		layout : 'vertical'
	});

	// Tool Bar - View which contain Title Prev. & Next Button
	var toolBarTitle = Ti.UI.createView({
		top : '3dp',
		width : '322dp',
		height : '24dp'
	});

	toolBarTitle.add(prevMonth);
	toolBarTitle.add(monthTitle);
	toolBarTitle.add(nextMonth);

	// Tool Bar - Day's
	var toolBarDays = Ti.UI.createView({
		top : '2dp',
		width : '322dp',
		height : '22dp',
		layout : 'horizontal',
		//left : '-1dp'
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
				fontSize : 16,
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

	// Calendar Main Function
	var calView = function(a, b, c) {
		var nameOfMonth = monthName(b);

		//create main calendar view
		var mainView = Ti.UI.createView({
			layout : 'horizontal',
			width : width1,
			height : '100%',
			left : '10%',
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
				color : '#8e959f',
				current : 'no',
				dayOfMonth : ''
			}));
			dayNumber++;
		};

		// reset day number for current month
		dayNumber = 1;

		//get this month's days
		for ( i = 0; i < daysInMonth; i++) {
			var newDay = new dayView({
				day : dayNumber,
				color : '#3a4756',
				current : 'yes',
				dayOfMonth : dayOfMonth
			});
			mainView.add(newDay);
			if (newDay.text == dayOfMonth) {
				newDay.color = 'white';
				newDay.backgroundColor = '#00cc66';
				var oldDay = newDay;
			}

			if (i + 1 > dayOfMonth) {
				newDay.color = '#8e959f';
			}

			dayNumber++;
		};
		dayNumber = 1;

		//get remaining month's days
		for ( i = 0; i > daysInNextMonth; i--) {
			mainView.add(new dayView({
				day : dayNumber,
				color : '#8e959f',
				current : 'no',
				dayOfMonth : ''
			}));
			dayNumber++;
		};

		// this is the new "clicker" function, although it doesn't have a name anymore, it just is.
		mainView.addEventListener('click', function(e) {

			yestbtn.backgroundImage = './images/greyrect.png';
			todaybtn.backgroundImage = './images/greyrect.png';
			if (e.source.current == 'yes') {

				// RESET last day selected
				if (oldDay.text == dayOfMonth) {
					oldDay.color = 'white';
					oldDay.backgroundColor = '#00cc66';
				} else if (oldDay.text < dayOfMonth) {
					oldDay.color = '#3a4756';
					oldDay.backgroundColor = '#DCDCDF';
				}
				oldDay.backgroundPaddingLeft = '0dp';
				oldDay.backgroundPaddingBottom = '0dp';

				// set characteristic of the day SELECTED
				if (e.source.text == dayOfMonth) {
					e.source.backgroundColor = '#333333';
					day = c;
					mon = b + 1;
					year = a;
				} else if (e.source.text < dayOfMonth) {
					e.source.backgroundColor = '#333333';
					day = e.source.text;
					mon = b + 1;
					year = a;
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
		prevCalendarView = calView(a - 1, 11, c);
	} else {
		prevCalendarView = calView(a, b - 1, c);
	}
	prevCalendarView.left = (screenWidth * -1) + 'dp';

	var nextCalendarView = null;
	if (b == 0) {
		nextCalendarView = calView(a + 1, 0, c);
	} else {
		nextCalendarView = calView(a, b + 1, c);
	}
	nextCalendarView.left = screenWidth + 'dp';

	var thisCalendarView = calView(a, b, c);

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
			thisCalendarView.animate(slideNext);
			nextCalendarView.animate(slideReset);

			setTimeout(function() {
				thisCalendarView.left = (screenWidth * -1) + 'dp';

				nextCalendarView.left = '-1dp';

				prevCalendarView = thisCalendarView;
				thisCalendarView = nextCalendarView;
				if (b == 11) {
					nextCalendarView = calView(a + 1, 0, c);
				} else {
					nextCalendarView = calView(a, b + 1, c);
				}
				monthTitle.text = monthName(b) + ' ' + a;
				nextCalendarView.left = screenWidth + 'dp';
				calview.add(nextCalendarView);
			}, 500);
			prevflag = 0;
		}
	});

	// Previous Month Click Event
	prevMonth.addEventListener('click', function() {
		var prevDate = new Date();
		prevDate.setDate(mydate.getDate() - 7);
		if (prevDate.getMonth() != b && prevflag == 0) {

			if (b == 0) {
				b = 11;
				a--;
			} else {
				b--;
			}
			thisCalendarView.animate(slidePrev);
			prevCalendarView.animate(slideReset);
			setTimeout(function() {
				thisCalendarView.left = screenWidth + 'dp';
				prevCalendarView.left = '-1dp';
				nextCalendarView = thisCalendarView;
				thisCalendarView = prevCalendarView;
				if (b == 0) {
					prevCalendarView = calView(a - 1, 11, c);
				} else {
					prevCalendarView = calView(a, b - 1, c);
				}
				monthTitle.text = monthName(b) + ' ' + a;
				prevCalendarView.left = (screenWidth * -1) + 'dp';
				calview.add(prevCalendarView);
			}, 500);
			prevflag = 1;
		}
	});
	//
	//
	//

	var ratingLabel = Ti.UI.createLabel({
		text : 'How happy did you feel?',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '82%',
		left : '10%',

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
		left : '70%',
		color : 'white',
		font : {
			fontSize : 16,
		},
		width : 80,
		height : 80,
		title : 'Submit',
		backgroundImage : './images/grey.png',
		backgroundSelectedImage : './images/green.png',

	});

	whatView.add(submit);

	var email = Ti.UI.createTextField({
		height : '40dp',
		width : '150dp',
		top : '10%',
		left : '40%',
		color : 'white',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType : Titanium.UI.KEYBOARD_EMAIL
	});

	var password = Ti.UI.createTextField({
		height : '40dp',
		width : '150dp',
		top : '30%',
		left : '40%',
		color : 'white',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask : 'True'
	});

	//profilewin

	//Get information for profile

	var levelLabel = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 16
		},
		text : 'Current Level:',
		top : '10%',
		left : '50%',
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
		backgroundColor : 'grey'
	});
	track.add(progress);
	profileView.add(track);
	var pointLabel = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 16
		},
		text : 'Points Earned:',
		top : '18%',
		left : '50%',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	/* Set up profile view */

	profileView.add(levelLabel);
	profileView.add(pointLabel);

	var recentLabel = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 16
		},
		text : 'Recent Activities:',
		top : '10%',
		left : '10%',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	profileView.add(recentLabel);

	var refresh = Ti.UI.createButton({
		top : '70%',
		left : '15%',
		color : 'white',
		width : 100,
		title : 'Refresh',
		backgroundImage : './images/greyrect.png',
		backgroundImageSelected : './images/greenrect.png',
	});
	profileView.add(refresh);

	var deauth = Ti.UI.createButton({
		top : '70%',
		left : '48%',
		color : 'white',
		width : 110,
		title : 'Log out',
		backgroundImage : './images/greyrect.png',
		backgroundImageSelected : './images/greenrect.png',
	});

	/* Set up labels */

	var emaillabel = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 20
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
			fontSize : 20
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
		title : 'Register',
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
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/goldstar.png';
		rstar3.backgroundImage = './images/goldstar.png';
		rstar4.backgroundImage = './images/dullstar.png';
		rstar5.backgroundImage = './images/dullstar.png';

		hstar1.backgroundImage = './images/goldstar.png';
		hstar2.backgroundImage = './images/goldstar.png';
		hstar3.backgroundImage = './images/goldstar.png';
		hstar4.backgroundImage = './images/dullstar.png';
		hstar5.backgroundImage = './images/dullstar.png';
	}

	initialise();

	todaybtn.addEventListener('click', function(e) {
		todaybtn.backgroundImage = './images/greenrect.png';
		yestbtn.backgroundImage = './images/greyrect.png';
		day = mydate.getDate();
		mon = mydate.getMonth() + 1;
		// convention : jan = 01
		year = mydate.getFullYear();
	});

	yestbtn.addEventListener('click', function(e) {
		yestbtn.backgroundImage = './images/greenrect.png';
		todaybtn.backgroundImage = './images/greyrect.png';
		var prevDate = new Date();
		prevDate.setDate(mydate.getDate() - 1);
		day = prevDate.getDate();
		mon = prevDate.getMonth() + 1;
		// convention : jan = 01
		year = prevDate.getFullYear();
	});

	activitybtn1.addEventListener('click', function(e) {
		useractivity = "Running";
		activitybtn1.backgroundImage = './images/green.png';
		activitybtn2.backgroundImage = './images/grey.png';
		activitybtn3.backgroundImage = './images/grey.png';
		activitybtn4.backgroundImage = './images/grey.png';
		activitybtn5.backgroundImage = './images/grey.png';
		activitybtn6.backgroundImage = './images/grey.png';

	});

	activitybtn2.addEventListener('click', function(e) {
		useractivity = "Walking";
		activitybtn1.backgroundImage = './images/grey.png';
		activitybtn2.backgroundImage = './images/green.png';
		activitybtn3.backgroundImage = './images/grey.png';
		activitybtn4.backgroundImage = './images/grey.png';
		activitybtn5.backgroundImage = './images/grey.png';
		activitybtn6.backgroundImage = './images/grey.png';

	});

	activitybtn3.addEventListener('click', function(e) {
		useractivity = "Swimming";
		activitybtn1.backgroundImage = './images/grey.png';
		activitybtn2.backgroundImage = './images/grey.png';
		activitybtn3.backgroundImage = './images/green.png';
		activitybtn4.backgroundImage = './images/grey.png';
		activitybtn5.backgroundImage = './images/grey.png';
		activitybtn6.backgroundImage = './images/grey.png';

	});

	activitybtn4.addEventListener('click', function(e) {
		useractivity = "Cycling";
		activitybtn1.backgroundImage = './images/grey.png';
		activitybtn2.backgroundImage = './images/grey.png';
		activitybtn3.backgroundImage = './images/grey.png';
		activitybtn4.backgroundImage = './images/green.png';
		activitybtn5.backgroundImage = './images/grey.png';
		activitybtn6.backgroundImage = './images/grey.png';

	});

	activitybtn5.addEventListener('click', function(e) {
		useractivity = "Weights";
		activitybtn1.backgroundImage = './images/grey.png';
		activitybtn2.backgroundImage = './images/grey.png';
		activitybtn3.backgroundImage = './images/grey.png';
		activitybtn4.backgroundImage = './images/grey.png';
		activitybtn5.backgroundImage = './images/green.png';
		activitybtn6.backgroundImage = './images/grey.png';

	});

	activitybtn6.addEventListener('click', function(e) {
		if (othertxt.value == '') {
			alert('Please type the exercise or click on the options above');
		} else {
			useractivity = othertxt.value;
			othertxt.blur();
			activitybtn1.backgroundImage = './images/grey.png';
			activitybtn2.backgroundImage = './images/grey.png';
			activitybtn3.backgroundImage = './images/grey.png';
			activitybtn4.backgroundImage = './images/grey.png';
			activitybtn5.backgroundImage = './images/grey.png';
			activitybtn6.backgroundImage = './images/green.png';

		}
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
	});

	socialtxt.addEventListener('return', function(e) {
		if (Titanium.Platform.name == 'android') {
			// Android stuff
			Ti.UI.Android.hideSoftKeyboard();
		} else
			socialtxt.blur();
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

	/* Set up fields for submission */

	var submitReq = Titanium.Network.createHTTPClient();

	submit.addEventListener('click', function(e) {
		submitReq = Titanium.Network.createHTTPClient();
		submitReq.open("POST", "http://owlympics.ecg.rice.edu:81/mobile/submit");
		submitinfo();

		submitReq.onload = function() {
			alert(this.responseText);
			if (this.responseText == 'Activity submission succeeded') {
				alert("Congratulations! Your hardwork earned you " + Math.floor(100 * (lowtxt.value / 45 + medtxt.value / 30 + hightxt.value / 20) + 10 * (socialtxt.value > 0)) + " points!");
				profileUpdate();
				scrollable.scrollToView(profileView);
				initialise();

			} else {
				alert(this.responseText);
			}

		};
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

	profileReq.onload = function() {
		alert(this.responseText);
		for (var d in profileView.children) {
			if (profileView.children.hasOwnProperty(d)) {
				profileView.remove(profileView.children[d]);
			}
		}
		profileView.add(refresh);
		profileView.add(deauth);
		profileView.add(refresh);
		track.add(progress);
		profileView.add(track);
		profileView.add(levelLabel);
		profileView.add(pointLabel);
		profileView.add(recentLabel);

		//Parse JSON file
		var profileJSON = JSON.parse(this.responseText);
		//Use values to generate progress bar and labels for current level and recent activities
		userPoints = profileJSON[0].points;
		progress.width = 180 * userPoints / 400;
		userLevel = 'Current Level: ';
		userLevel = userLevel + profileJSON[0].level;

		for ( i = 0; i < profileJSON[0].acts.length; i++) {

			var activity1 = Ti.UI.createLabel({
				color : 'white',
				font : {
					fontSize : 16
				},
				text : 'Exercise',
				top : 170 + 20 * i,
				left : '10%',
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE
			});

			profileView.add(activity1);

			var activity1string = '';
			activity1string = activity1string + profileJSON[0].acts[i].name + ' for ' + profileJSON[0].acts[i].newpoints + ' points on ' + profileJSON[0].acts[i].month + '/' + profileJSON[0].acts[i].day + '/' + profileJSON[0].acts[i].year;
			activity1.setText(activity1string);
		}

		levelLabel.setText(userLevel);
		point = 'Points Earned : ' + userPoints;
		pointLabel.setText(point);

	};

	function profileUpdate() {
		profileReq.open("POST", "http://owlympics.ecg.rice.edu:81/mobile/profile");
		var params = {
			uuid : Titanium.Platform.id,
		};
		profileReq.send(params);
	}

	if (Ti.App.Properties.hasProperty('loggedBefore')) {
		//profileUpdate();
	};

	refresh.addEventListener('click', function(e) {
		profileUpdate();
	});

	var deauthReq = Titanium.Network.createHTTPClient();

	deauthReq.onload = function() {
		if (this.responseText == 'Deauthorization succeeded') {
			alert("Phone successfully deauthorized.");
			Ti.App.Properties.removeProperty('loggedBefore');
			win2.open();
			homeWin.close();
		} else {
			alert(this.responseText);
		}
	};

	deauth.addEventListener('click', function(e) {
		deauthReq.open("POST", "http://owlympics.ecg.rice.edu:81/mobile/detach");
		var params = {
			uuid : Titanium.Platform.id
		};
		deauthReq.send(params);
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

	if (1) {//Ti.App.Properties.hasProperty('loggedBefore')) {
		homeWin.open();
		scrollable.scrollToView(vertiscroll);

		if (Titanium.Platform.name == 'android') {
			// Android stuff
			Ti.UI.Android.hideSoftKeyboard();
		}
	} else {
		win2.open();
	}

	scrollable.addEventListener('doubletap', function() {
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

	});

})();

