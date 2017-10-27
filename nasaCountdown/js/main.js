// NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)

var x = 60;

while (x >= 0) {
	if (x === 50) {
		console.log("T-" + x + " seconds. Orbiter transfers from ground to internal power");
	} else if (x === 31) {
		console.log("T-" + x + " seconds. Ground launch sequencer is go for auto sequence start");
	} else if (x === 16) {
		console.log("T-" + x + " seconds. Activate launch pad sound suppression system");
	} else if (x === 10) {
		console.log("T-" + x + " seconds. Activate main engine hydrogen burnoff system");
	} else if (x === 6) {
		console.log("T-" + x + " seconds. Main engine start");
	} else if (x === 0) {
		console.log("T-" + x + " seconds. Solid rocket booster ignition and liftoff!");
	} else {
		console.log("T-" + x + " seconds.");
	}
	x--;
}