//Initialization
var pointlat = new Array();
var pointlong = new Array();
var accur = new Array();
var count = 0;
//unit in meters
var centerRadius = 20;
var coords = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'coords.txt');
var enterfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'enterflag.txt');
var stayfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'stayflag.txt');
var stampfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'stamp.txt');
var points = new Array();
for ( i = 0; i < coords.read().text.split(',').length; i++) {
	points[i] = parseFloat(coords.read().text.split(',')[i]);
}
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

if (Ti.Geolocation.locationServicesEnabled) {
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HUNDRED_METERS;
	Ti.Geolocation.distanceFilter = 5;
	Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_PROVIDER_NETWORK;
	Ti.Geolocation.addEventListener('location', function(e) {
		if (e.error) {
			// alert('Error: ' + e.error);
		} else {
			var enterflag = new Array();
			var stayflag = new Array();
			var stamp = new Array();
			var point_dist = 0;
			for ( i = 0; i < enterfile.read().length - 1; i++) {
				enterflag[i] = parseFloat(enterfile.read().text.split(',')[i]);
				stayflag[i] = parseFloat(stayfile.read().text.split(',')[i]);
				stamp[i] = parseFloat(stampfile.read().text.split(',')[i]);
				point_dist = distance(e.coords.latitude, e.coords.longitude, points[2 * i], points[2 * i + 1]);
				if (point_dist < centerRadius) {
					if (!enterflag[i]) {
						enterflag[i] = 1;
						stamp[i] = e.coords.timestamp;
					} else {
						if ((e.coords.timestamp - stamp[i]) > 1000) {
							stayflag[i] = 1;
						}
					}
				} else if (enterflag[i]) {
					var t1 = new Date;
					enterflag[i] = 0;
					if (stayflag[i]) {
						hour = Math.floor((e.coords.timestamp - stamp[i]) / 3600000);
						min = Math.floor((e.coords.timestamp - stamp[i]) / 60000) - hour * 60000;
						// if (min > 1)
						// alert(t1.getHours() + ':' + t1.getMinutes() + '|Report your activities for ' + hour + 'hours and ' + min + ' mins' + '?');
						// else
						alert('blah'+ count);
						var notification = Ti.App.iOS.scheduleLocalNotification({
							alertBody : 'Report your activities?', //t1.getHours() + ':' + t1.getMinutes() + '|Report your activities for ' + min + ' mins' + '?' + ' Distance =' + point_dist,
							alertAction : "Re-Launch!",
							userInfo : {
								"hello" : "world"
							},
							sound : "pop.caf",
							date : new Date(new Date().getTime()), // 3 seconds after backgrounding
							hasAction : true,
						});
						stayflag[i] = 0;
					}
				}
			}
			enterfile.deleteFile();
			enterfile.createFile();
			stayfile.deleteFile();
			stayfile.createFile();
			stampfile.deleteFile();
			stampfile.createFile();
			for ( i = 0; i < enterflag.length; i++) {
				enterfile.write(enterflag[i] + ',', true);
				stampfile.write(stamp[i] + ',', true);
				stayfile.write(stayflag[i] + ',', true);
			}
			pointlat[count] = e.coords.latitude;
			pointlong[count] = e.coords.longitude;
			accur[count] = point_dist;

			Ti.App.fireEvent('Gvariables', {
				blahlat : pointlat,
				blahlong : pointlong,
				length : count,
				accuracy : accur,
			});
			count = count + 1;

			var notification = Ti.App.iOS.scheduleLocalNotification({
				alertAction : "Re-Launch!",
				userInfo : {
					"hello" : "world"
				},
				date : new Date(new Date().getTime())
			});
		}
	});
} else {
	alert('Please enable location services');
}

function checkFeed() {
	Ti.API.info('hi, I m alive');
}

var timer1 = setInterval(checkFeed, 599000);
//600000 is 10 mins
