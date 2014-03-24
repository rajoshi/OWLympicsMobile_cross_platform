var MapModule = require('ti.map');
//Initialization
// var centerLng = -95.3994;
// var centerLat = 29.71985;

const gymlong = -95.403823;
const gymlat = 29.718173;
const intra2long = -95.405475;
const intra2lat = 29.717662;
const intra1long = -95.405786;
const intra1lat = 29.718491;
const oconnorlong = -95.405121;
const oconnorlat = 29.719190;
const duncanlong = -95.399057;
const duncanlat = 29.719971;
//unit in meters
var centerRadius = 80;
var enterflag1 = 0;
var stayflag1 = 0;
var stamp1;
var enterflag2 = 0;
var stayflag2 = 0;
var stamp2;
var enterflag3 = 0;
var stayflag3 = 0;
var stamp3;
var enterflag4 = 0;
var stayflag4 = 0;
var stamp4;
var enterflag5 = 0;
var stayflag5 = 0;
var stamp5;
var pointlat = new Array();
var pointlong = new Array();
var accur = new Array();
var count = 0;
var notification;
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

// Ti.App.addEventListener('location_variables_appside', function(event) {
// // alert(stamp5 + ' bg');
// enterflag1 = event.enterflag1;
// stayflag1 = event.stayflag1;
// stamp1 = event.stamp1;
// enterflag2 = event.enterflag2;
// stayflag2 = event.stayflag2;
// stamp2 = event.stamp2;
// enterflag3 = event.enterflag3;
// stayflag3 = event.stayflag3;
// stamp3 = event.stamp3;
// enterflag4 = event.enterflag4;
// stayflag4 = event.stayflag4;
// stamp4 = event.stamp4;
// enterflag5 = event.enterflag5;
// stayflag5 = event.stayflag5;
// stamp5 = event.stamp5;
// });

if (Ti.Geolocation.locationServicesEnabled) {
	Ti.Geolocation.purpose = 'Get Current Location';
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HUNDRED_METERS;
	Ti.Geolocation.distanceFilter = 10;
	Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_PROVIDER_NETWORK;
	// Ti.setPauseLocationUpdateAutomatically(true);
	Ti.Geolocation.addEventListener('location', function(e) {
		if (e.error) {
			alert('Error: ' + e.error);
		} else {

			var mydist1 = distance(e.coords.latitude, e.coords.longitude, gymlat, gymlong);
			// var mydist2 = distance(e.coords.latitude, e.coords.longitude, intra2lat, intra2long);
			// var mydist3 = distance(e.coords.latitude, e.coords.longitude, intra1lat, intra1long);
			// var mydist4 = distance(e.coords.latitude, e.coords.longitude, oconnorlat, oconnorlong);
			var mydist5 = distance(e.coords.latitude, e.coords.longitude, duncanlat, duncanlong);
			// if (mydist1 < centerRadius) {
			// if (!enterflag1) {
			// enterflag1 = 1;
			// stamp1 = e.coords.timestamp;
			// } else {
			// if ((e.coords.timestamp - stamp1) > 600000) {
			// stayflag1 = 1;
			// }
			// }
			// } else if (enterflag1) {
			// var t1 = new Date;
			// enterflag1 = 0;
			// if (stayflag1) {
			// hour = Math.floor((e.coords.timestamp - stamp1) / 3600000);
			// min = Math.floor((e.coords.timestamp - stamp1) / 60000) - hour * 60000;
			// if (hour > 1)
			// var notification = Ti.App.iOS.scheduleLocalNotification({
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you at the Gym for ' + hour + 'hours and ' + min + ' mins' + '? Do you want to log points?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime() + 3000) // 3 seconds after backgrounding
			// });
			// else
			// var notification = Ti.App.iOS.scheduleLocalNotification({
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you at the Gym for ' + min + ' mins' + '? Do you want to log points?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime() + 3000) // 3 seconds after backgrounding
			// });
			// stayflag1 = 0;
			// }
			// }

			// if (mydist2 < centerRadius) {
			// if (!enterflag2) {
			// enterflag2 = 1;
			// stamp2 = e.coords.timestamp;
			// } else {
			// if ((e.coords.timestamp - stamp2) > 1200000) {
			// stayflag2 = 1;
			// }
			// }
			// } else if (enterflag2) {
			// var t1 = new Date;
			// enterflag2 = 0;
			// if (stayflag2) {
			// hour = Math.floor((e.coords.timestamp - stamp2) / 3600000);
			// min = Math.floor((e.coords.timestamp - stamp2) / 60000) - hour * 60000;
			// if (hour > 1)
			// notification = Ti.App.iOS.scheduleLocalNotification({
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you exercising outdoors for ' + hour + 'hours and ' + min + ' mins' + '? Do you want to log points?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime() + 3000) // 3 seconds after backgrounding
			// });
			// else
			// notification = Ti.App.iOS.scheduleLocalNotification({
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you exercising outdoors for ' + min + ' mins' + '? Do you want to log points?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime() + 3000) // 3 seconds after backgrounding
			// });
			// stayflag2 = 0;
			// }
			// }
			// if (mydist3 < centerRadius) {
			// if (!enterflag3) {
			// enterflag3 = 1;
			// stamp3 = e.coords.timestamp;
			// } else {
			// if ((e.coords.timestamp - stamp3) > 1200000) {
			// stayflag3 = 1;
			// }
			// }
			// } else if (enterflag3) {
			// var t1 = new Date;
			// enterflag3 = 0;
			// if (stayflag3) {
			// hour = Math.floor((e.coords.timestamp - stamp3) / 3600000);
			// min = Math.floor((e.coords.timestamp - stamp3) / 60000) - hour * 60000;
			// if (hour > 1)
			// notification = Ti.App.iOS.scheduleLocalNotification({
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you exercising outdoors for ' + hour + 'hours and ' + min + ' mins' + '? Do you want to log points?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime() + 3000) // 3 seconds after backgrounding
			// });
			// else
			// notification = Ti.App.iOS.scheduleLocalNotification({
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you exercising outdoors for ' + min + ' mins' + '? Do you want to log points?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime() + 3000) // 3 seconds after backgrounding
			// });
			// stayflag3 = 0;
			// }
			// }
			// if (mydist4 < centerRadius) {
			// if (!enterflag4) {
			// enterflag4 = 1;
			// stamp4 = e.coords.timestamp;
			// } else {
			// if ((e.coords.timestamp - stamp4) > 1200000) {
			// stayflag4 = 1;
			// }
			// }
			// } else if (enterflag4) {
			// var t1 = new Date;
			// enterflag4 = 0;
			// if (stayflag4) {
			// hour = Math.floor((e.coords.timestamp - stamp4) / 3600000);
			// min = Math.floor((e.coords.timestamp - stamp4) / 60000) - hour * 60000;
			// if (hour > 1)
			// notification = Ti.App.iOS.scheduleLocalNotification({
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you exercising outdoors for ' + hour + 'hours and ' + min + ' mins' + '? Do you want to log points?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime() + 3000) // 3 seconds after backgrounding
			// });
			// else
			// notification = Ti.App.iOS.scheduleLocalNotification({
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you exercising outdoors for ' + min + ' mins' + '? Do you want to log points?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime() + 3000) // 3 seconds after backgrounding
			// });
			// stayflag4 = 0;
			// }
			// }

			// alert(mydist5 + ', ' + enterflag5 + ', ' + stayflag5+ ' bg1');
			// var t1 = new Date;
			// if (mydist1 < 30) {
				// if (!enterflag5) {
					// enterflag5 = 1;
					// stayflag5 = 0;
					// var notification = Ti.App.iOS.scheduleLocalNotification({
						// //alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you in Duncan for ' + min + ' mins' + '? Do you want to log points?',
						// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Did you just enter Gym?',
						// alertAction : "Re-Launch!",
						// userInfo : {
							// "hello" : "world"
						// },
						// sound : "pop.caf",
						// date : new Date(new Date().getTime()), // 3 seconds after backgrounding
						// hasAction : true,
					// });
				// }
			// }
			// if (mydist1 > 100) {
				// if (!stayflag5) {
					// stayflag5 = 1;
					// var notification = Ti.App.iOS.scheduleLocalNotification({
						// //alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you in Duncan for ' + min + ' mins' + '? Do you want to log points?',
						// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Report your activities at Gym?',
						// alertAction : "Re-Launch!",
						// userInfo : {
							// "hello" : "world"
						// },
						// sound : "pop.caf",
						// date : new Date(new Date().getTime()), // 3 seconds after backgrounding
						// hasAction : true,
					// });
					// enterflag5 = 0;
				// }
			// }

			// stamp5 = e.coords.timestamp;
			// var notification = Ti.App.iOS.scheduleLocalNotification({
			// //alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you in Duncan for ' + min + ' mins' + '? Do you want to log points?',
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Are you in CMC?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime()), // 3 seconds after backgrounding
			// hasAction : true,
			// });
			// } else {
			// if ((e.coords.timestamp - stamp5) > 1000) {
			// stayflag5 = 1;
			// }
			// }
			// } else if (mydist5 > 10) {
			// var notification = Ti.App.iOS.scheduleLocalNotification({
			// //alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you in Duncan for ' + min + ' mins' + '? Do you want to log points?',
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Did you just exit CMC?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime()), // 3 seconds after backgrounding
			// hasAction : true,
			// });
			// if (enterflag5) {
			// // var t1 = new Date;
			// enterflag5 = 0;
			// if (stayflag5) {
			// hour = Math.floor((e.coords.timestamp - stamp5) / 3600000);
			// min = Math.floor((e.coords.timestamp - stamp5) / 60000) - hour * 60000;
			// if (hour > 1)
			// var notification = Ti.App.iOS.scheduleLocalNotification({
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you in Duncan for ' + hour + 'hours and ' + min + ' mins' + '? Do you want to log points?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime()) // 3 seconds after backgrounding
			// });
			// else {
			// var notification = Ti.App.iOS.scheduleLocalNotification({
			// //alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you in Duncan for ' + min + ' mins' + '? Do you want to log points?',
			// alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Did you just exit CMC?',
			// alertAction : "Re-Launch!",
			// userInfo : {
			// "hello" : "world"
			// },
			// sound : "pop.caf",
			// date : new Date(new Date().getTime()), // 3 seconds after backgrounding
			// hasAction : true,
			// });
			// // alert(t1.getHours() + ':' + t1.getMinutes() + '|Were you in Duncan for ' + min + ' mins' + '? Do you want to log points?');
			// }
			// stayflag5 = 0;
			// }
			// }
			// }

			// alert(mydist5 + ', ' + enterflag5 + ', ' + stayflag5+ ' bg2');

			pointlat[count] = e.coords.latitude;
			pointlong[count] = e.coords.longitude;
			accur[count] = e.coords.accuracy;

			Ti.App.fireEvent('Gvariables', {
				blahlat : pointlat,
				blahlong : pointlong,
				length : count,
				accuracy : accur,
			});

			// Ti.App.fireEvent('location_variables_seviceside', {
			//
			// enterflag1 : enterflag1,
			// stayflag1 : stayflag1,
			// stamp1 : stamp1,
			// enterflag2 : enterflag2,
			// stayflag2 : stayflag2,
			// stamp2 : stamp2,
			// enterflag3 : enterflag3,
			// stayflag3 : stayflag3,
			// stamp3 : stamp3,
			// enterflag4 : enterflag4,
			// stayflag4 : stayflag4,
			// stamp4 : stamp4,
			// enterflag5 : enterflag5,
			// stayflag5 : stayflag5,
			// stamp5 : stamp5,
			//
			// });
			// alert(e.coords.timestamp + '  ' + mydist1 + ',' + mydist2 + ',' + mydist3);
			// var msg = JSON.stringify(e.coords);
			var notification = Ti.App.iOS.scheduleLocalNotification({
				// alertBody : 'Location update ' + e.coords.latitude + ',' + e.coords.longitude,
				alertAction : "Re-Launch!",
				userInfo : {
					"hello" : "world"
				},
				// sound : "pop.caf",
				date : new Date(new Date().getTime()) // 3 seconds after backgrounding
			});

			count = count + 1;

		}
	});
} else {
	alert('Please enable location services');
}

function checkFeed() {

	// var notification2 = Ti.App.iOS.scheduleLocalNotification({
	// alertBody : 'hi, i m alive',
	// alertAction : "Re-Launch!",
	// userInfo : {
	// "hello" : "world"
	// },
	// sound : "pop.caf",
	// date : new Date(new Date().getTime() + 3000) // 3 seconds after backgrounding
	// });
	Ti.API.info('hi, I m alive');
}

var timer1 = setInterval(checkFeed, 599000);
//600000 is 10 mins
