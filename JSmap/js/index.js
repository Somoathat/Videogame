//const myElement = document.getElementById("demo");

//function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     myElement.innerHTML = "Geolocation is not supported by this browser.";
//   }
//}

//import ReactSelectAsync, { AsyncProps } from "react-select/async";
//import { GroupBase } from "react-select";

//interface CustomSelectAsyncProps {
  //additionalCustomProp: number;
//}

//function SelectAsync<
  //OptionType,
  //IsMulti extends boolean = false,
  //GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
//>({
  //additionalCustomProp,
  //...props
//}: AsyncProps<OptionType, IsMulti, GroupType> & CustomSelectAsyncProps) {
  //return <ReactSelectAsync {...props} />;
//}

//export default SelectAsync;

 var map = L.map('mapDiv').setView([51.505, -0.09], 13);

 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();


//     const x = document.getElementById("demo");
//     function getLocation() {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//       } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//       }
//     }
    
//     function showPosition(position) {
//       x.innerHTML = "Latitude: " + position.coords.latitude +
//       "<br>Longitude: " + position.coords.longitude;
//     }
function captureChoice(){
    const choice= document.getElementById('place-selector').value
    console.log(choice)
}