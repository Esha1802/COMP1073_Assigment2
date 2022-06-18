// Fetching all thumbnail using class name
var thumbnails = document.getElementsByClassName("thumbnail");

// Thumbnail click function will be called when we click on small image (thumbnail)
var thumbnailClick = function() {
    // We are fetching clicked image src attribute - This will return a valid path of thumbnail image
    const imagePath = this.getAttribute('src').replace('small','large');
    // As all image have similar name we will replace small word with large so we will get correct path
    document.getElementById('mainFrame').setAttribute("src", imagePath);

    // In all image we have caption so this will fetch clicked image's caption
    const caption = this.getAttribute('data-caption');
    // this line will set image caption
    document.getElementById('imageCaption').innerHTML = caption;
};

// for all class adding click event
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', thumbnailClick, false);
}