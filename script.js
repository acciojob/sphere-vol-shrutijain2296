
	function volume_sphere() {
    //Write your code here
	let radius = document.getElementsById("radius");
	let ans = (4/3) * (22/7) * Math.pow(radius, 3);
	let volume = document.getElementById("volume");
	volume.value = ans;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
