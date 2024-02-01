function volume_sphere() {
    //Write your code here
	let r=document.getElementById("radius").value;
	let v=document.getElementById("volume").value;
	let pi=Math.PI;
	let volume=Math.floor(4/3)*Math.pi*r**3;
     v=volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
