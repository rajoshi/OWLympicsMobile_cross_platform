//Initialization
var count = 0;
//unit in meters
var centerRadius = 40;
var coords = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'coords.txt');
var enterfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'enterflag.txt');
var stampfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'stamp.txt');
var enterflag;
var stamp;
enterflag = parseFloat(enterfile.read().text.split(',')[0]);
stamp = parseFloat(stampfile.read().text.split(',')[0]);

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
	//ACCURACY_HUNDRED_METERS;
	Ti.Geolocation.distanceFilter = 5;
	Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_PROVIDER_NETWORK;
	Ti.Geolocation.addEventListener('location', function(e) {
		if (e.error) {
		} else {

			var point_dist = 0;
			point_dist = distance(e.coords.latitude, e.coords.longitude, parseFloat(coords.read().text.split(',')[0]), parseFloat(coords.read().text.split(',')[1]));
			if (point_dist < centerRadius) {
				if (!enterflag) {
					enterflag = 1;
					stamp = e.coords.timestamp;
				}
			} else {
				if (enterflag) {
					var t1 = new Date;
					enterflag = 0;
					if (e.coords.timestamp - stamp > 1000) {
						hour = Math.floor((e.coords.timestamp - stamp) / 3600000);
						min = Math.floor((e.coords.timestamp - stamp) / 60000) - hour * 60000;
						if (hour > 1) {
							var notification = Ti.App.iOS.scheduleLocalNotification({
								alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Report your activities?',//  for ' + hour + 'hours and ' + min + ' mins' + '?' + ' Distance =' + point_dist,
								alertAction : "Re-Launch!",
								userInfo : {
									"hello" : "world"
								},
								sound : "pop.caf",
								date : new Date(new Date().getTime()), // 3 seconds after backgrounding
								hasAction : true,
							});
						} else {
							var notification = Ti.App.iOS.scheduleLocalNotification({
								alertBody : t1.getHours() + ':' + t1.getMinutes() + '|Report your activities?',//  for ' + min + ' mins' + '?' + ' Distance =' + point_dist,
								alertAction : "Re-Launch!",
								userInfo : {
									"hello" : "world"
								},
								sound : "pop.caf",
								date : new Date(new Date().getTime()), // send immediately
								hasAction : true,
							});
						}
					}
				}
			}
			enterfile.deleteFile();
			enterfile.createFile();
			stampfile.deleteFile();
			stampfile.createFile();
			enterfile.write(enterflag + ',', true);
			stampfile.write(stamp + ',', true);
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
