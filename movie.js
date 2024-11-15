 //Declares the function showInfo and the function showInfo is going to be called when it's ready. 
 const showInfo = () => {
 
  //The function setUpBoxes is called and helps display the boxes on the webpage.
    setUpBoxes(); 
    //jQuery.each helps iterates over each item.
    //Helps display each movie's release date.
     jQuery.each($(".box"), releaseDate);
  
     //Event Handler added to mouseover the elements with the class box.
     $(".box").on("mouseover", function () {
       
      //index of the item of the matched set 
      //index is used for the movies array
       let indexOfMovie = $(".box").index(this);
   
       $(this) //This helps the item; which is the synopsis, be the target of the mouseover event.
         .find("p.info")
         .text(
         movies[indexOfMovie].synopsis
         );
     });
   
     //Event Handler added to mouseout the elements with the class box.
     $(".box").on("mouseout", function () {

      //index of the item of the matched set 
      //index is used for the movies array
       let indexOfMovie = $(".box").index(this);
   
       $(this).find("p.info")//Displays the items from the movie array;
      //the movie's name and release date is displayed when the mouse moves out 
       .text(
        movies[indexOfMovie].movie_name + " - " + movies[indexOfMovie].release);
     });
   };
 
   const releaseDate = (index) => {
    console.log(movies[index].release);
    console.log(movies[index].movie_name);

    //Helps display the text content of the movie name and the release together.
    //This method gets the element at the specified index from the jQuery collection of elements with the class info.
    $(".info").eq(index).text(movies[index].movie_name + " - " + movies[index].release);
  };
  const setUpBoxes = ()=> {
    //Uses jQuery to select the element with the class .wrapper and assigns it to the variable wrapperRef.
    //wrapperRef variable references new elements that's going to be in the wrapper.
    let wrapperRef = $('.wrapper');
    movies.forEach((movie)=>{ //Use forEach to iterate over each element from the movies array.

    //Helps contain the different class elements for the content of each movie, including the images, paragraph, and style.
        let boxMarkup= ` <div class="box">
        <img class="images" src="./images/${movie.movie_name.toLowerCase()}.jpeg" />
        <p class="info"></p>
      </div>`;

      //Appends the boxMarkup string, which is a jquery object, to the wrapperRef element, adding it to the DOM.
      let appendedStyle = $(boxMarkup).appendTo(wrapperRef);
      //Style added for the images using jQuery
      appendedStyle.find(".images").css({ "width": "285px", "height": "310px", });
    }
    );
}
//Calls the showInfo function when the document is ready to load.
  $(document).ready(showInfo); 