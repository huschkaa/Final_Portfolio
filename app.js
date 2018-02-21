$(document).ready(function()
{
    $("#neighborhoodMap").hover(
        function()
        {
            $(this).attr("src", "images/Neighborhood_Map_Gif.gif");
        },
        function()
        {
            $(this).attr("src", "images/Neighborhood_Map_Image.JPG");
        });

      $("#matchGame").hover(
          function()
          {
              $(this).attr("src", "images/Matching_Game_Gif.gif");
          },
          function()
          {
              $(this).attr("src", "images/Memory_Game_Image.JPG");
          });

      $("#arcadeGame").hover(
          function()
          {
              $(this).attr("src", "images/Arcade_Game_Gif.gif");
          },
          function()
          {
              $(this).attr("src", "images/Arcade_Game.JPG");
          });

      $("#pixelArt").hover(
          function()
          {
              $(this).attr("src", "images/PixelArtMaker_Gif.gif");
          },
          function()
          {
              $(this).attr("src", "images/PixelArtMaker_Image.JPG");
          });
});
