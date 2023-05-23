let radius = document.getElementsById("radius");
	let volume = document.getElementsById("volume");
	let button = document.getElementsById("submit");

	function volume_sphere() {
    //Write your code here
	let ans = 4/3 * 3.14 * (radius * radius * radius);
	volume.append(ans);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
