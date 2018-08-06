

var animalButtons = [
    "bear", "deer", "cow", "cat", "dog", "headgehog",
    "seal", "otter", "dolphin", "whale", "monkey",
    "bird", "eagle", "lion", "elephant", "cheetah"
];



function createButton (array){
    for(var i = 0; i < animalButtons.length; i++){
        var button = $("<button>");
        button.addClass("btn btn-primary animalButton")
        button.text(animalButtons[i]);
        button.attr("data-type", animalButtons[i]);
        $("#animalButtons").append(button);
    }
};
createButton();

$("#submitButton").on("click", function(event){
    event.preventDefault();
    var button = $("<button>");
    var buttonVal = $("#input").val();
    button.addClass("btn btn-primary animalButton")
    button.text(buttonVal);
    $("#animalButtons").append(button);
});

$(".animalButton").on("click", function(event){
    var animalName = $(this).attr("data-type");
    console.log(animalName);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=hTA82gqP6q3Eh42hGajihS4IHv66v6CX";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        for(var i = 0; i<response.length; i++){
        var animalDiv = $("<div class=\"animal-item\">");
        var animalGifs = response.data;
        var animated = results[i].images.fixed_height;
        var still = results[i].images.fixed_height_still;

        var animalImage = $("<img>");
        animalImage.attr("src", still);
        animalImage.attr("data-still", still);
        animalImage.attr("data-animate", animated);
        animalImage.attr("data-state", "still");
        animalImage.addClass("animal-image");

        animalDiv.append(animalImage);

        $("#animalGifs").append(animalDiv);

        }


    })

})






