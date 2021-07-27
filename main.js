var images = [
    "https://image.shutterstock.com/image-vector/cute-little-girl-spring-260nw-337904864.jpg"
    ,
    "https://thumbs.dreamstime.com/b/hipster-mom-baby-pretty-young-style-mother-glasses-holding-hugging-her-cute-little-daughter-laughing-38641979.jpg"
    ,
    "https://c8.alamy.com/comp/W3KX0F/family-single-father-with-little-daughter-cartoon-W3KX0F.jpg"
    ,
    "https://c8.alamy.com/comp/H5C8YD/parents-and-daughter-family-design-H5C8YD.jpg"
  ];
  
  var i = 0;
  function nextslide()
  { 
    if(i>3)
    { 
      i=0; 
    }
    document.getElementById("album").src = images[i];
    i++;
}