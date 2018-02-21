$(document).ready(function()
{
    $("#neighborhoodMap").hover(
        function()
        {
            $(this).attr("src", "images/Neighborhood_Map_Gif.gif");
        },
        function()
        {
            $(this).attr("src", "images/Neighborhood_Map_Image.jpg");
        });

      $("#matchGame").hover(
          function()
          {
              $(this).attr("src", "images/Matching_Game_Gif.gif");
          },
          function()
          {
              $(this).attr("src", "images/Memory_Game_Image.jpg");
          });

      $("#arcadeGame").hover(
          function()
          {
              $(this).attr("src", "images/Arcade_Game_Gif.gif");
          },
          function()
          {
              $(this).attr("src", "images/Arcade_Game.jpg");
          });
});
