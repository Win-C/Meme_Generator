window.onload = function(){
    let memeForm = document.getElementById("newMemeForm");
    let meme = document.getElementById("meme");

    memeForm.addEventListener("submit", function(event){
        event.preventDefault();

        let newMeme = document.createElement("div");
        newMeme.setAttribute("class", "container");

        let newImage = document.createElement("img");
        let imageURL = document.getElementById("imgMeme").value;
        newImage.src= imageURL;
        newImage.height = 500;
        newImage.width = 500;
        newImage.alt = "Image can't be shown"
        newImage.setAttribute("class", "picture")

        let newTop = document.createElement("div");
        newTop.innerText = document.getElementById("top").value;
        newTop.setAttribute("class", "topLine");

        let newBottom = document.createElement("div");
        newBottom.innerText = document.getElementById("bottom").value;
        newBottom.setAttribute("class", "bottomLine");

        let removeButton = document.createElement("button");
        removeButton.setAttribute("class", "button");
        removeButton.innerHTML = "X";

        meme.appendChild(newMeme);
        newMeme.appendChild(newImage);
        newMeme.appendChild(newTop);
        newMeme.appendChild(newBottom);
        newMeme.appendChild(removeButton);

        memeForm.reset();
    })

    meme.addEventListener("click", function(event){
        event.target.parentNode.remove();
    })

}
