
	function volume_sphere() {
    //Write your code here
	// let radius = parseFloat(document.getElementById("radius").value);
	let radius = document.getElementById("radius").value;

	let volume = document.getElementById("volume");
	volume.value = ((4/3) * Math.PI * (radius*radius*radius)).toFixed(2);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
