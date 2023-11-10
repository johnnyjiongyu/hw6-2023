var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);

	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		console.log("play the video");
	});

	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("pause the video");
	});

	var slowDownCount = 0;
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate -= 0.1;
		slowDownCount++;
		console.log("slow down the video to " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate += (0.1 * video.slowDownCount);
		console.log("speed up the video to " + video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 < video.duration) {
			video.currentTime += 10;
		}
		else {
			video.currentTime = 0;
		}
		console.log("skip ahead to " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
			console.log("unmute the video");
		}
		else {
			video.muted = true;
			document.querySelector("#mute").innerHTML = "Unmute";
			console.log("mute the video");
		}
	});

	document.querySelector("#slider").addEventListener("change", function() {
		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = this.value + "%";
		console.log("change the volume to " + video.volume);
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("change the video style to old school");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("change the video style to original");
	});
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });