var canvas=new fabric.Canvas("myCanvas");
block_image_width=500;
block_image_height=500;
block_image_object="";
block_y=1;
 block_x=1;

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: block_y,
            left: block_x
        });
        canvas.add(block_image_object);
        
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == '65') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
      block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == "82") {
		block_x = 1;
        new_img("rr.jpg");
        console.log("r");
    }

    if (keyPressed == "71") {
		block_x = 200;
        new_img("gr.png");
        console.log("g");
    }

    if (keyPressed == "89") {
		block_x =350;
        new_img("yr.png");
        console.log("y");;
    }

    if (keyPressed == "80") {
		block_x = 600;
        new_img("pr.png");
        console.log("p");
    }

    if (keyPressed == "66") {
        new_img("br.png");
        console.log("b");}
}

function one()
{
	window.alert("Agni - Red Ranger-R, Juvenile - Green Ranger-G, Happy - Yellow Ranger-Y, Amity - Pink Ranger-P and Aman - Blue Ranger-B")
}