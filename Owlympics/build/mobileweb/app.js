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
		backgroundColor : '#000000',
		orientationModes : [Titanium.UI.PORTRAIT],
	});

	homeWin.addEventListener('android:back', function() {
		return false;
	});

	var homeView = Ti.UI.createView({
		title : 'OWLympics',
		backgroundColor : '#000000',
		height : "100%",
		width : "100%",
		top : 0,
		left : 0,
	});
	homeWin.addEventListener('android:home', function() {
		Ti.API.log('HOME pressed');
		scrollable.scrollToView(homeView);
	});

	var whenView = Ti.UI.createView({
		backgroundColor : '#000000',
		height : "100%",
		width : "100%",
		top : 0,
		left : 0,
	});

	var whatView = Ti.UI.createView({
		backgroundColor : '#000000',
		height : "100%",
		width : "100%",
		top : 0,
		left : 0,
	});

	var timeView = Ti.UI.createView({
		backgroundColor : '#000000',
		height : "100%",
		width : "100%",
		top : 0,
		left : 0,
	});

	var scrollable = Titanium.UI.createScrollableView({
		views : [homeView, whenView, whatView, timeView],
		showPagingControl : false,
	});
	homeWin.add(scrollable);

	/*buttons*/

	var newactivitybtn = Ti.UI.createButton({
		title : 'NEW',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '30%',
		left : '40%',
		width : 80,
		height : 80,
		backgroundImage : './images/orange200.png',
		backgroundSelectedImage : './images/red200.png',
	});

	homeView.add(newactivitybtn);

	var viewactivitybtn = Ti.UI.createButton({
		title : 'VIEW',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '50%',
		left : '40%',
		width : 80,
		height : 80,
		backgroundImage : './images/orange200.png',
		backgroundSelectedImage : './images/red200.png',
	});
	newactivitybtn.addEventListener('click', function(e) {
		scrollable.scrollToView(whenView);
	});

	viewactivitybtn.addEventListener('click', function(e) {
		profileWin.open({
			activityEnterAnimation : Ti.Android.R.anim.none,
			activityExitAnimation : Ti.Android.R.anim.none
		});
		whichview = 0;
	});

	homeView.add(viewactivitybtn);
	var day, mon, year;
	var todaybtn = Ti.UI.createButton({
		title : 'Today',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '25%',
		left : '35%',
		width : 100,
		height : 50,
		backgroundImage : './images/CTS-green.png',
		backgroundSelectedImage : './images/red.jpg',
	});

	whenView.add(todaybtn);

	var yestbtn = Ti.UI.createButton({
		title : 'Yesterday',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '35%',
		left : '35%',
		width : 100,
		height : 50,
		backgroundImage : './images/CTS-green.png',
		backgroundSelectedImage : './images/red.jpg',
	});

	whenView.add(yestbtn);

	var choosebtn = Ti.UI.createButton({
		title : 'Choose',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '45%',
		left : '35%',
		width : 100,
		height : 50,
		backgroundImage : './images/CTS-green.png',
		backgroundSelectedImage : './images/red.jpg',
	});
	var pickdate = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE,
		maxDate : new Date,
		minDate : new Date(2014, 01, 01),
		top : '60%',
		left : '10%',
	});

	pickdate.addEventListener('change', function(e) {
		day = e.value.getDate();
		mon = e.value.getMonth() + 1;
		// convention : jan = 01
		year = e.value.getFullYear();
	});

	var dayindex;
	todaydate = new Date();
	todaybtn.addEventListener('click', function(e) {
		// todaybtn.backgroundImage = './images/red.jpg';
		// yestbtn.backgroundImage = './images/CTS-green.png';
		// choosebtn.backgroundImage = './images/CTS-green.png';
		dayindex = 1;
		scrollable.scrollToView(whatView);
	});

	yestbtn.addEventListener('click', function(e) {
		// todaybtn.backgroundImage = './images/CTS-green.png';
		// yestbtn.backgroundImage = './images/red.jpg';
		// choosebtn.backgroundImage = './images/CTS-green.png';
		dayindex = 0;
		scrollable.scrollToView(whatView);
	});
	choosebtn.addEventListener('click', function(e) {
		// todaybtn.backgroundImage = './images/CTS-green.png';
		// yestbtn.backgroundImage = './images/CTS-green.png';
		// choosebtn.backgroundImage = './images/red.jpg';

		scrollable.scrollToView(whatView);
	});

	whenView.add(choosebtn);
	whenView.add(pickdate);
	var useractivity;

	var activitybtn1 = Ti.UI.createButton({
		title : 'RUN',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '15%',
		left : '15%',
		width : 50,
		height : 50,
		backgroundImage : './images/green200.png',
		backgroundSelectedImage : './images/red200.png',
	});

	whatView.add(activitybtn1);
	var activitybtn2 = Ti.UI.createButton({
		title : 'WALK',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '15%',
		left : '41%',
		width : 50,
		height : 50,
		backgroundImage : './images/green200.png',
		backgroundSelectedImage : './images/red200.png',
	});

	whatView.add(activitybtn2);

	var activitybtn3 = Ti.UI.createButton({
		title : 'SWIM',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '15%',
		left : '67%',
		width : 50,
		height : 50,
		backgroundImage : './images/green200.png',
		backgroundSelectedImage : './images/red200.png',
	});

	whatView.add(activitybtn3);

	var activitybtn4 = Ti.UI.createButton({
		title : 'CYCLE',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '35%',
		left : '25%',
		width : 50,
		height : 50,
		backgroundImage : './images/green200.png',
		backgroundSelectedImage : './images/red200.png',
	});

	whatView.add(activitybtn4);

	var activitybtn5 = Ti.UI.createButton({
		title : 'WEIGHT',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '35%',
		left : '55%',
		width : 50,
		height : 50,
		backgroundImage : './images/green200.png',
		backgroundSelectedImage : './images/red200.png',
	});

	whatView.add(activitybtn5);

	var activitybtn6 = Ti.UI.createButton({
		title : 'OTHER',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '53%',
		left : '55%',
		width : 50,
		height : 50,
		backgroundImage : './images/green200.png',
		backgroundSelectedImage : './images/red200.png',
	});

	var othertxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '55%',
		left : '15%',
		width : 120,
		height : 50,
		backgroundColor : 'white',
	});

	whatView.add(othertxt);

	activitybtn1.addEventListener('click', function(e) {
		// activitybtn1.backgroundImage = './images/red200.png';
		// activitybtn2.backgroundImage = './images/green200.png';
		// activitybtn3.backgroundImage = './images/green200.png';
		// activitybtn4.backgroundImage = './images/green200.png';
		// activitybtn5.backgroundImage = './images/green200.png';
		// activitybtn6.backgroundImage = './images/green200.png';

		useractivity = "Running";
		scrollable.scrollToView(timeView);
	});

	activitybtn2.addEventListener('click', function(e) {
		// activitybtn1.backgroundImage = './images/green200.png';
		// activitybtn2.backgroundImage = './images/red200.png';
		// activitybtn3.backgroundImage = './images/green200.png';
		// activitybtn4.backgroundImage = './images/green200.png';
		// activitybtn5.backgroundImage = './images/green200.png';
		// activitybtn6.backgroundImage = './images/green200.png';
		useractivity = "Walking";
		scrollable.scrollToView(timeView);
	});

	activitybtn3.addEventListener('click', function(e) {
		// activitybtn1.backgroundImage = './images/green200.png';
		// activitybtn2.backgroundImage = './images/green200.png';
		// activitybtn3.backgroundImage = './images/red200.png';
		// activitybtn4.backgroundImage = './images/green200.png';
		// activitybtn5.backgroundImage = './images/green200.png';
		// activitybtn6.backgroundImage = './images/green200.png';
		useractivity = "Swimming";
		scrollable.scrollToView(timeView);
	});

	activitybtn4.addEventListener('click', function(e) {
		// activitybtn1.backgroundImage = './images/green200.png';
		// activitybtn2.backgroundImage = './images/green200.png';
		// activitybtn3.backgroundImage = './images/green200.png';
		// activitybtn4.backgroundImage = './images/red200.png';
		// activitybtn5.backgroundImage = './images/green200.png';
		// activitybtn6.backgroundImage = './images/green200.png';
		useractivity = "Cycling";
		scrollable.scrollToView(timeView);
	});

	activitybtn5.addEventListener('click', function(e) {
		// activitybtn1.backgroundImage = './images/green200.png';
		// activitybtn2.backgroundImage = './images/green200.png';
		// activitybtn3.backgroundImage = './images/green200.png';
		// activitybtn4.backgroundImage = './images/green200.png';
		// activitybtn5.backgroundImage = './images/red200.png';
		// activitybtn6.backgroundImage = './images/green200.png';
		useractivity = "Weight";
		scrollable.scrollToView(timeView);
	});

	activitybtn6.addEventListener('click', function(e) {
		// activitybtn1.backgroundImage = './images/green200.png';
		// activitybtn2.backgroundImage = './images/green200.png';
		// activitybtn3.backgroundImage = './images/green200.png';
		// activitybtn4.backgroundImage = './images/green200.png';
		// activitybtn5.backgroundImage = './images/green200.png';
		// activitybtn6.backgroundImage = './images/red200.png';
		useractivity = othertxt.value;
		othertxt.blur();
		scrollable.scrollToView(timeView);
	});

	othertxt.addEventListener('focus', function(e) {
		if (Titanium.Platform.name == 'android') {
			// Android stuff
			Ti.UI.Android.hideSoftKeyboard();
		}
	});

	whatView.add(activitybtn6);

	var lowLabel = Ti.UI.createLabel({
		text : 'LOW',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '10%',
		left : '22%',
	});

	timeView.add(lowLabel);

	var medLabel = Ti.UI.createLabel({
		text : 'MED',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '10%',
		left : '47%',
	});

	timeView.add(medLabel);

	var highLabel = Ti.UI.createLabel({
		text : 'HIGH',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '10%',
		left : '72%',
	});

	timeView.add(highLabel);

	var mycol = new Array();
	var i = 0;
	for ( i = 0; i < 50; i++) {
		var a = i * 5;
		mycol[i] = Titanium.UI.createPickerRow({
			title : a.toString()
		});
	}

	var lowpick = Titanium.UI.createPicker({
		top : '15%',
		left : '20%',
		width : 40,
		height : 40,
		useSpinner : true,
		selectionIndicator : true,
		type : Titanium.UI.PICKER_TYPE_PLAIN,
		softKeyboardOnFocus : true,

	});
	var medpick = Titanium.UI.createPicker({
		top : '15%',
		left : '45%',
		width : 40,
		height : 40,
		useSpinner : true,
		selectionIndicator : true,
		type : Titanium.UI.PICKER_TYPE_PLAIN,

	});

	var highpick = Titanium.UI.createPicker({
		top : '15%',
		left : '70%',
		width : 40,
		height : 40,
		useSpinner : true,
		selectionIndicator : true,
		type : Titanium.UI.PICKER_TYPE_PLAIN,

	});
	lowpick.add(mycol);
	medpick.add(mycol);
	highpick.add(mycol);

	var lowpicked = 0, medpicked = 0, highpicked = 0;
	lowpick.addEventListener('change', function(e) {
		lowpicked = parseInt(e.row.title);
	});

	medpick.addEventListener('change', function(e) {
		medpicked = parseInt(e.row.title);
	});

	highpick.addEventListener('change', function(e) {
		highpicked = parseInt(e.row.title);
		;
	});

	timeView.add(lowpick);
	timeView.add(medpick);
	timeView.add(highpick);

	var socialLabel = Ti.UI.createLabel({
		text : 'Number of participants',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '40%',
		left : '10%',
	});
	timeView.add(socialLabel);
	var socialtxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '40%',
		left : '65%',
		width : 30,
		height : 30,
		backgroundColor : 'white',
		keyboardType : Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	});
	timeView.add(socialtxt);
	socialtxt.addEventListener('focus', function(e) {
		if (Titanium.Platform.name == 'android') {
			// Android stuff
			Ti.UI.Android.hideSoftKeyboard();
		}
	});

	var exrate, haprate;
	var ratingLabel = Ti.UI.createLabel({
		text : 'How active did you feel?',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '50%',
		left : '10%',

	});
	timeView.add(ratingLabel);
	var rstar1 = Ti.UI.createButton({
		top : '55%',
		left : '10%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/dullstar.png',
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
		top : '55%',
		left : '25%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/dullstar.png',
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
		top : '55%',
		left : '40%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/dullstar.png',
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
		top : '55%',
		left : '55%',
		color : 'white',
		width : 30,
		height : 30,
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
		top : '55%',
		left : '70%',
		color : 'white',
		width : 30,
		height : 30,
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
	timeView.add(rstar1);
	timeView.add(rstar2);
	timeView.add(rstar3);
	timeView.add(rstar4);
	timeView.add(rstar5);

	var hapinessLabel = Ti.UI.createLabel({
		text : 'How happy did you feel?',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		top : '65%',
		left : '10%',
	});
	timeView.add(hapinessLabel);
	var hstar1 = Ti.UI.createButton({
		top : '70%',
		left : '10%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/dullstar.png',
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
		top : '70%',
		left : '25%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/dullstar.png',
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
		top : '70%',
		left : '40%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/dullstar.png',
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
		top : '70%',
		left : '55%',
		color : 'white',
		width : 30,
		height : 30,
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
		top : '70%',
		left : '70%',
		color : 'white',
		width : 30,
		height : 30,
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
	timeView.add(hstar1);
	timeView.add(hstar2);
	timeView.add(hstar3);
	timeView.add(hstar4);
	timeView.add(hstar5);
	/* Set up fields for submission */

	var email = Ti.UI.createTextField({
		height : '40dp',
		width : '200dp',
		top : '20dp',
		left : '110dp',
		color : '#222',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType : Titanium.UI.KEYBOARD_EMAIL
	});

	var password = Ti.UI.createTextField({
		height : '40dp',
		width : '200dp',
		top : '70dp',
		left : '110dp',
		color : '#222',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask : 'True'
	});

	var submit = Ti.UI.createButton({
		top : '80%',
		left : '70%',
		color : 'white',
		font : {
			fontSize : 16,
			fontFamily : 'Helvetica Neue'
		},
		width : 50,
		height : 50,
		title : 'Submit',
		backgroundImage : './images/blue200.png',
		backgroundSelectedImage : './images/orange200.png',

	});

	var submitReq = Titanium.Network.createHTTPClient();

	submitReq.onload = function() {
		if (this.responseText == 'Activity submission succeeded') {
			alert("Your exercise has been submitted!");
		} else {
			alert(this.responseText);
		}
	};
	var social = 1;
	var t = new Date();

	submit.addEventListener('click', function(e) {

		var todaydate = new Date;
		switch(dayindex) {
			case 1:
				day = todaydate.getDate();
				mon = todaydate.getMonth() + 1;
				// convention : jan = 01
				year = todaydate.getFullYear();
				break;
			case 0:
				todaydate = new Date(todaydate - 1000 * 60 * 60 * 24);
				day = todaydate.getDate();
				mon = todaydate.getMonth() + 1;
				// convention : jan = 01
				year = todaydate.getFullYear();
				break;
			case -1 :
				break;
		}

		var alert = Titanium.UI.createAlertDialog({
			title : 'Submit Data',
			message : ("Submit the following information? " + "\n" + "Date : " + mon + "-" + day + "-" + year + "\n" + "Activity : " + useractivity + " \nLow Intensity : " + lowpicked + " \nMed Intensity : " + medpicked + " \nHigh Intensity : " + highpicked + "\nNumber of Participants : " + socialtxt.value + "\nExercise rating : " + exrate + "\nHappiness after exercise:" + haprate),
			buttonNames : ['Yes', 'No'],
			cancel : 1
		});
		if (useractivity != '' && (lowpicked + medpicked + highpicked) > 0) {
			submitReq.open("POST", "http://54.213.204.182/mobile/submit");
			var params = {
				day : day,
				mon : mon,
				year : year,
				activity : useractivity,
				social : socialtxt.value,
				lowintensity : lowpicked,
				moderateintensity : medpicked,
				highintensity : highpicked,
				note : "",
				rate : social.value,
				hour : t.getHours(),
				min : t.getMinutes(),
				sec : t.getSeconds(),
				happiness : haprate,
				activeness : exrate,
				uuid : Titanium.Platform.id
			};
			alert.show();

		} else {
			alert("Please fill all fields. Time cannot be zero.");
		}
		alert.addEventListener('click', function(e) {
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
					scrollable.scrollToView(homeView);
					break;

				//This will never be reached, if you specified cancel for index 1
				case 1:
					Titanium.API.info('Clicked button 1 (NO)');
					break;

				default:
					break;
			}
		});
	});

	timeView.add(submit);
	//profilewin

	//Get information for profile

	var activity1 = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 17
		},
		text : 'Exercise',
		top : '170dp',
		left : '10dp',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var activity2 = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 17
		},
		text : 'Exercise',
		top : '200dp',
		left : '10dp',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var levelLabel = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 25
		},
		text : 'Current Level:',
		top : '25dp',
		left : '125dp',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var pb2 = Titanium.UI.createProgressBar({
		top : '50dp',
		left : '125dp',
		width : '175dp',
		height : 'auto',
		min : 0,
		max : 400,
		value : 25,
		color : '#fff',
		font : {
			fontSize : 20,
			color : 'white,'
		},
	});

	var profileReq = Titanium.Network.createHTTPClient();

	profileReq.onload = function() {
		//Parse JSON file
		var profileJSON = JSON.parse(this.responseText);
		//Use values to generate progress bar and labels for current level and recent activities
		userPoints = profileJSON[0].points;
		pb2.setValue(userPoints);
		userLevel = 'Current Level: ';
		userLevel = userLevel + profileJSON[0].level;
		var activity1string = '';
		activity1string = activity1string + profileJSON[0].acts[0].name + ' for ' + profileJSON[0].acts[0].newpoints + ' points on ' + profileJSON[0].acts[0].month + '/' + profileJSON[0].acts[0].day + '/' + profileJSON[0].acts[0].year;
		var activity2string = '';
		activity2string = activity2string + profileJSON[0].acts[1].name + ' for ' + profileJSON[0].acts[1].newpoints + ' points on ' + profileJSON[0].acts[1].month + '/' + profileJSON[0].acts[1].day + '/' + profileJSON[0].acts[1].year;
		activity1.setText(activity1string);
		activity2.setText(activity2string);
		levelLabel.setText(userLevel);

	};

	function profileUpdate() {
		profileReq.open("POST", "http://54.213.204.182/mobile/profile");
		var params = {
			uuid : Titanium.Platform.id,
		};
		profileReq.send(params);
	}

	if (Ti.App.Properties.hasProperty('loggedBefore')) {
		profileUpdate();
	};

	/* Set up profile window */

	var profileWin = Titanium.UI.createWindow({
		title : 'Profile',
		backgroundColor : '#2C2B3D',
		backgroundColor : '#2C2B3D',
		backgroundImage : 'images/triangular.png',
		backgroundRepeat : true,
	});

	profileWin.add(activity1);
	profileWin.add(activity2);
	profileWin.add(pb2);
	profileWin.add(levelLabel);

	var recentLabel = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 25
		},
		text : 'Recent Activities:',
		top : '125dp',
		left : '5dp',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	profileWin.add(recentLabel);

	var refresh = Ti.UI.createButton({
		top : '300dp',
		left : '70dp',
		title : 'Refresh',
	});

	refresh.addEventListener('click', function(e) {
		profileUpdate();
	});

	profileWin.add(refresh);

	var image = Ti.UI.createImageView({
		image : '/images/myimage.png',
		height : '100dp',
		width : '100dp',
		top : '5dp',
		left : '5dp',
	});

	profileWin.add(image);

	var deauth = Ti.UI.createButton({
		top : '300dp',
		left : '150dp',
		title : 'Deauthorize',
	});

	var deauthReq = Titanium.Network.createHTTPClient();

	deauthReq.onload = function() {
		if (this.responseText == 'Deauthorization succeeded') {
			alert("Phone successfully deauthorized.");
			Ti.App.Properties.removeProperty('loggedBefore');
			win2.open();
			mainTabGroup.hide();
		} else {
			alert(this.responseText);
		}
	};

	deauth.addEventListener('click', function(e) {
		deauthReq.open("POST", "http://54.213.204.182/mobile/detach");
		var params = {
			uuid : Titanium.Platform.id
		};
		deauthReq.send(params);
	});

	profileWin.add(deauth);

	/* Set up labels */

	var emaillabel = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 20
		},
		text : 'Username',
		top : '25dp',
		left : '10dp',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var passwordlabel = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 20
		},
		text : 'Password',
		top : '75dp',
		left : '10dp',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var win2 = Titanium.UI.createWindow({
		title : 'Register Phone',
		backgroundColor : '#2C2B3D',
		backgroundImage : 'images/triangular.png',
		backgroundRepeat : true,
	});

	/* Add labels to windows */

	win2.add(emaillabel);
	win2.add(passwordlabel);
	win2.add(password);
	win2.add(email);

	var register = Ti.UI.createButton({
		top : '300dp',
		title : 'register',
	});

	win2.add(register);

	var registerReq = Titanium.Network.createHTTPClient();

	registerReq.onload = function() {

		if (this.responseText == 'Authentication succeeded') {
			alert("Account successfully registered.");
			homeWin.open();
			win2.close();
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
			registerReq.open("POST", "http://owlympics.ecg.rice.edu/mobile/register");
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
		if (Titanium.Platform.name == 'android') {
			// Android stuff
			Ti.UI.Android.hideSoftKeyboard();
		}
	} else {
		win2.open();
	}

})();

