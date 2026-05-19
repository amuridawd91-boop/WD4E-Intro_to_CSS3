



function setImages(){
const options = ["fort_in_woods.png" ,"huron_river_cascades.JPG","lake_view.JPG", "mist_over_huron_river.JPG" ,"munising.jpg" , "reflected_tree.JPG" ] 
 const currentImages = document.querySelectorAll(".flex img");
 for (let i=0; i< currentImages.length; i++){
    console.log ("Image " + i);
    let randomImg = "../CSS-week1-HW1/images/" + options[Math.floor(Math.random() * options.length)];
    currentImages[i].src = randomImg;
    currentImages[i].setAttribute("tabindex", "0");
}

  

}