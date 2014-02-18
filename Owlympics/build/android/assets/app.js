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

	homeWin.addEventListener('android:back', function() {
		return false;
	});

	var profileView = Titanium.UI.createView({
		// backgroundImage: './backgroundblue.jpeg',
		height : "100%",
		width : "100%",
		top : 0,
		left : 0,
	});
	var whenView = Ti.UI.createView({
		// backgroundImage: './backgroundblue.jpeg',
		height : "100%",
		width : "100%",
		top : 0,
		left : 0,
	});

	var whatView = Ti.UI.createView({
		// backgroundImage: './backgroundblue.jpeg',
		height : "100%",
		width : "100%",
		top : 0,
		left : 0,
	});

	// var timeView = Ti.UI.createView({
	// backgroundColor : '#000000',
	// height : "100%",
	// width : "100%",
	// top : 0,
	// left : 0,
	// });

	var scrollable = Titanium.UI.createScrollableView({
		views : [profileView, whatView, whenView],
		showPagingControl : true,
	});
	homeWin.add(scrollable);

	/*buttons*/

	var lowLabel = Ti.UI.createLabel({
		text : 'LOW',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '10%',
		left : '22%',
	});

	whenView.add(lowLabel);

	var medLabel = Ti.UI.createLabel({
		text : 'MED',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '10%',
		left : '47%',
	});

	whenView.add(medLabel);

	var highLabel = Ti.UI.createLabel({
		text : 'HIGH',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '10%',
		left : '72%',
	});

	whenView.add(highLabel);

	var lowtxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
		},
		top : '15%',
		left : '20%',
		width : 45,
		height : 45,
		backgroundColor : 'white',
		keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
	});
	whenView.add(lowtxt);

	var medtxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
		},
		top : '15%',
		left : '45%',
		width : 45,
		height : 45,
		backgroundColor : 'white',
		keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
	});

	whenView.add(medtxt);

	var hightxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
		},
		top : '15%',
		left : '70%',
		width : 45,
		height : 45,
		backgroundColor : 'white',
		keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
	});
	whenView.add(hightxt);

	var socialLabel = Ti.UI.createLabel({
		text : 'Number of participants',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '30%',
		left : '15%',
	});
	whenView.add(socialLabel);
	var socialtxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
		},
		top : '30%',
		left : '70%',
		width : 45,
		height : 45,
		backgroundColor : 'white',
		keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
		text : '0',
	});
	whenView.add(socialtxt);
	var pickdate = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE,
		maxDate : new Date,
		minDate : new Date(2013, 01, 01),
		top : '45%',
		left : '10%',
		width : '80%',
		height : '50%',
	});

	whenView.add(pickdate);

	var activitybtn1 = Ti.UI.createButton({
		title : 'Run',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '30%',
		left : '15%',
		width : 70,
		height : 70,
		backgroundImage : './images/blackcircle.png',
		backgroundSelectedImage : './images/graycircle.png',
	});

	whatView.add(activitybtn1);
	var activitybtn2 = Ti.UI.createButton({
		title : 'Walk',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '30%',
		left : '41%',
		width : 70,
		height : 70,
		backgroundImage : './images/blackcircle.png',
		backgroundSelectedImage : './images/graycircle.png',
	});

	whatView.add(activitybtn2);

	var activitybtn3 = Ti.UI.createButton({
		title : 'Swim',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '30%',
		left : '67%',
		width : 70,
		height : 70,
		backgroundImage : './images/blackcircle.png',
		backgroundSelectedImage : './images/graycircle.png',
	});

	whatView.add(activitybtn3);

	var activitybtn4 = Ti.UI.createButton({
		title : 'Cycle',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '45%',
		left : '25%',
		width : 70,
		height : 70,
		backgroundImage : './images/blackcircle.png',
		backgroundSelectedImage : './images/graycircle.png',
	});

	whatView.add(activitybtn4);

	var activitybtn5 = Ti.UI.createButton({
		title : 'Weights',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '45%',
		left : '55%',
		width : 70,
		height : 70,
		backgroundImage : './images/blackcircle.png',
		backgroundSelectedImage : './images/graycircle.png',
	});

	whatView.add(activitybtn5);

	var activitybtn6 = Ti.UI.createButton({
		title : 'Enter',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '65%',
		left : '67%',
		width : 70,
		height : 70,
		backgroundImage : './images/blackcircle.png',
		backgroundSelectedImage : './images/graycircle.png',
	});
	whatView.add(activitybtn6);

	var othertxt = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : 'black',
		font : {
			fontSize : 16,
		},
		top : '68%',
		left : '15%',
		width : 160,
		height : 50,
		backgroundColor : 'white',
	});

	whatView.add(othertxt);
	var ratingLabel = Ti.UI.createLabel({
		text : 'How active did you feel?',
		color : 'white',
		font : {
			fontSize : 16,
		},
		top : '10%',
		left : '10%',

	});
	whatView.add(ratingLabel);
	var rstar1 = Ti.UI.createButton({
		top : '15%',
		left : '10%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/goldstar.png',
	});

	rstar1.addEventListener('click', function(e) {
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/graystar.png';
		rstar3.backgroundImage = './images/graystar.png';
		rstar4.backgroundImage = './images/graystar.png';
		rstar5.backgroundImage = './images/graystar.png';
		exrate = 1;
	});
	var rstar2 = Ti.UI.createButton({
		top : '15%',
		left : '25%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/goldstar.png',
	});
	rstar2.addEventListener('click', function(e) {
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/goldstar.png';
		rstar3.backgroundImage = './images/graystar.png';
		rstar4.backgroundImage = './images/graystar.png';
		rstar5.backgroundImage = './images/graystar.png';
		exrate = 2;
	});
	var rstar3 = Ti.UI.createButton({
		top : '15%',
		left : '40%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/goldstar.png',
	});
	rstar3.addEventListener('click', function(e) {
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/goldstar.png';
		rstar3.backgroundImage = './images/goldstar.png';
		rstar4.backgroundImage = './images/graystar.png';
		rstar5.backgroundImage = './images/graystar.png';
		exrate = 3;
	});
	var rstar4 = Ti.UI.createButton({
		top : '15%',
		left : '55%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/graystar.png',
	});
	rstar4.addEventListener('click', function(e) {
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/goldstar.png';
		rstar3.backgroundImage = './images/goldstar.png';
		rstar4.backgroundImage = './images/goldstar.png';
		rstar5.backgroundImage = './images/graystar.png';
		exrate = 4;
	});
	var rstar5 = Ti.UI.createButton({
		top : '15%',
		left : '70%',
		color : 'white',
		width : 30,
		height : 30,
		backgroundImage : './images/graystar.png',
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

	var submit = Ti.UI.createButton({
		top : '85%',
		left : '70%',
		color : 'white',
		font : {
			fontSize : 16,
		},
		width : 70,
		height : 70,
		title : 'Submit',
		backgroundImage : './images/redcircle.png',
		backgroundSelectedImage : './images/graycircle.png',

	});

	whenView.add(submit);
	//profilewin

	//Get information for profile

	var activity1 = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 16
		},
		text : 'Exercise',
		top : '30%',
		left : '10%',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var activity2 = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 16
		},
		text : 'Exercise',
		top : '35%',
		left : '10%',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var activity3 = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 16
		},
		text : 'Exercise',
		top : '40%',
		left : '10%',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var activity4 = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 16
		},
		text : 'Exercise',
		top : '45%',
		left : '10%',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	var activity5 = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 16
		},
		text : 'Exercise',
		top : '50%',
		left : '10%',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});
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
		backgroundColor : 'green'
	});
	track.add(progress);
	profileView.add(track);

	/* Set up profile view */

	profileView.add(activity1);
	profileView.add(activity2);
	profileView.add(activity3);
	profileView.add(activity4);
	profileView.add(levelLabel);

	var recentLabel = Ti.UI.createLabel({
		color : 'white',
		font : {
			fontSize : 16
		},
		text : 'Recent Activities:',
		top : '25%',
		left : '10%',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	profileView.add(recentLabel);

	var refresh = Ti.UI.createButton({
		top : '70%',
		left : '20%',
		title : 'Refresh',
	});
	profileView.add(refresh);

	var deauth = Ti.UI.createButton({
		top : '70%',
		left : '45%',
		title : 'Deauthorize',
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

	var useractivity;
	var date1;

	var exrate, haprate;
	function initialise() {
		socialtxt.value = '0';
		lowtxt.value = '0';
		medtxt.value = '0';
		hightxt.value = '0';
		othertxt.value = '';
		date1 = new Date();
		day = date1.getDate();
		mon = date1.getMonth() + 1;
		// convention : jan = 01
		year = date1.getFullYear();

		useractivity = '';

		exrate = 3, haprate = 3;
		rstar1.backgroundImage = './images/goldstar.png';
		rstar2.backgroundImage = './images/goldstar.png';
		rstar3.backgroundImage = './images/goldstar.png';
		rstar4.backgroundImage = './images/graystar.png';
		rstar5.backgroundImage = './images/graystar.png';

	}

	initialise();

	socialtxt.addEventListener('focus', function(e) {
		if (Titanium.Platform.name == 'android') {
			// Android stuff
			Ti.UI.Android.hideSoftKeyboard();
		}
	});
	var social = socialtxt.value;
	socialtxt.addEventListener('change', function(e) {
		social = socialtxt.value;
	});
	whenView.addEventListener('onload', function(e) {
		socialtxt.value = social;
	});

	pickdate.addEventListener('change', function(e) {
		day = e.value.getDate();
		mon = e.value.getMonth() + 1;
		// convention : jan = 01
		year = e.value.getFullYear();
	});

	activitybtn1.addEventListener('click', function(e) {
		useractivity = "Running";
		scrollable.scrollToView(whenView);
	});

	activitybtn2.addEventListener('click', function(e) {
		useractivity = "Walking";
		scrollable.scrollToView(whenView);
	});

	activitybtn3.addEventListener('click', function(e) {
		useractivity = "Swimming";
		scrollable.scrollToView(whenView);
	});

	activitybtn4.addEventListener('click', function(e) {
		useractivity = "Cycling";
		scrollable.scrollToView(whenView);
	});

	activitybtn5.addEventListener('click', function(e) {
		useractivity = "Weights";
		scrollable.scrollToView(whenView);
	});

	activitybtn6.addEventListener('click', function(e) {
		if (othertxt.value == '') {
			alert('Please type the exercise or click on the options above');
		} else {
			useractivity = othertxt.value;
			othertxt.blur();
			scrollable.scrollToView(whenView);
		}
	});

	othertxt.addEventListener('return', function(e) {
		if (Titanium.Platform.name == 'android') {
			// Android stuff
			Ti.UI.Android.hideSoftKeyboard();
		}
		othertxt.blur();
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

	submitReq.onload = function() {
		if (this.responseText == 'Activity submission succeeded') {
			alert("Congratulations! Your hardwork earned you " + Math.floor(100 * (lowtxt.value / 45 + medtxt.value / 30 + hightxt.value / 20) + 10 * (social > 0)) + " points!");
			profileUpdate();
			scrollable.scrollToView(profileView);
			initialise();

		} else {
			alert(this.responseText);
		}

	};

	submit.addEventListener('click', function(e) {
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
				message : ("Submit the following information? " + "\n" + "Date : " + mon + "-" + day + "-" + year + "\n" + "Activity : " + useractivity + " \nLow Intensity : " + lowtxt.value + " \nMed Intensity : " + medtxt.value + " \nHigh Intensity : " + hightxt.value + "\nNumber of Participants : " + socialtxt.value + "\nExercise rating : " + exrate ),
				buttonNames : ['Yes', 'No'],
				cancel : 1
			});

			if (useractivity != '' && (lowtxt.value + medtxt.value + hightxt.value) > 0) {

				submitReq.open("POST", "http://owlympics.ecg.rice.edu:81/mobile/submit");
				var params = {
					day : day.toString(),
					mon : mon.toString(),
					year : year.toString(),
					activity : useractivity,
					social : social,
					lowintensity : lowtxt.value,
					moderateintensity : medtxt.value,
					highintensity : hightxt.value,
					note : "",
					rate : '1',
					hour : date1.getHours().toString(),
					min : date1.getMinutes().toString(),
					sec : date1.getSeconds().toString(),
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
	});

	var profileReq = Titanium.Network.createHTTPClient();

	profileReq.onload = function() {
		//Parse JSON file
		var profileJSON = JSON.parse(this.responseText);
		//Use values to generate progress bar and labels for current level and recent activities
		userPoints = profileJSON[0].points;
		progress.width = 180 * userPoints / 400;
		userLevel = 'Current Level: ';
		userLevel = userLevel + profileJSON[0].level;
		var activity1string = '';
		activity1string = activity1string + profileJSON[0].acts[0].name + ' for ' + profileJSON[0].acts[0].newpoints + ' points on ' + profileJSON[0].acts[0].month + '/' + profileJSON[0].acts[0].day + '/' + profileJSON[0].acts[0].year;
		var activity2string = '';
		activity2string = activity2string + profileJSON[0].acts[1].name + ' for ' + profileJSON[0].acts[1].newpoints + ' points on ' + profileJSON[0].acts[1].month + '/' + profileJSON[0].acts[1].day + '/' + profileJSON[0].acts[1].year;
		activity1.setText(activity1string);
		activity2.setText(activity2string);
		var activity1string = '';
		activity1string = activity1string + profileJSON[0].acts[2].name + ' for ' + profileJSON[0].acts[2].newpoints + ' points on ' + profileJSON[0].acts[2].month + '/' + profileJSON[0].acts[2].day + '/' + profileJSON[0].acts[2].year;
		var activity2string = '';
		activity2string = activity2string + profileJSON[0].acts[3].name + ' for ' + profileJSON[0].acts[3].newpoints + ' points on ' + profileJSON[0].acts[3].month + '/' + profileJSON[0].acts[3].day + '/' + profileJSON[0].acts[3].year;
		activity3.setText(activity1string);
		activity4.setText(activity2string);
		levelLabel.setText(userLevel);

	};

	function profileUpdate() {
		profileReq.open("POST", "http://owlympics.ecg.rice.edu:81/mobile/profile");
		var params = {
			uuid : Titanium.Platform.id,
		};
		profileReq.send(params);
	}


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
			scrollable.scrollToView(whatView);
			win2.close();
			profileUpdate();
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
		scrollable.scrollToView(whatView);
		profileUpdate();

		if (Titanium.Platform.name == 'android') {
			// Android stuff
			Ti.UI.Android.hideSoftKeyboard();
		}
	} else {
		win2.open();
	}

})();

