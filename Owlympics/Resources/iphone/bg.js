var MapModule = require('ti.map');
//Initialization

//unit in meters
var centerRadius = 80;

var pointlat = new Array();
var pointlong = new Array();
var accur = new Array();
var count = 0;
var notification;

var coords = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'coords.txt');
var enterfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'enterflag.txt');
var stayfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'stayflag.txt');
var stampfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'stamp.txt');
var temp = coords.read();
var tempstream = Ti.Stream.createStream({
	source : temp,
	mode : Ti.Stream.MODE_READ
});
var points = Ti.createBuffer({
	length : (temp.length)
});
tempstream.read(points);
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

Ti.Geolocation.purpose = 'Smart Reminders';
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
					var notification = Ti.App.iOS.scheduleLocalNotification({
						//alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Were you in Duncan for ' + min + ' mins' + '? Do you want to log points?',
						alertBody : 'Report your activities?',
						alertAction : "Re-Launch!",
						userInfo : {
							"hello" : "world"
						},
						sound : "pop.caf",
						date : new Date(new Date().getTime()), // 3 seconds after backgrounding
						hasAction : true,
					});
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

			var notification = Ti.App.iOS.scheduleLocalNotification({
				// alertBody : 'Location update ' + e.coords.latitude + ',' + e.coords.longitude,
				alertAction : "Re-Launch!",
				userInfo : {
					"hello" : "world"
				},
				// sound : "pop.caf",
				date : new Date(new Date().getTime())
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
