$(document).ready(function(){
				
					//alert("hello world"); 
					var canvas = $("#Project2");
					var context = canvas.get(0).getContext("2d");
					var canvasWidth = 500;
					var canvasHeight = 500;
					var xPos=100;
					var speed = .3;
					var frameRate = 28;
					var numOfShapes = 800;
					var rdnColor = Math.random()*200;
					var numOfObject = 1000;
					var sizeOfObject = 12;
					
					var cr = 'rgb('+
								  Math.floor(Math.random()*256)+','+
								  Math.floor(Math.random()*256)+','+
								  Math.floor(Math.random()*256)+')';
				
					
					//object
					var Shape = function(x,y,width,height,cxt)
					{
						this.x =x;
						this.y=y;
						this.width = width;
						this.height = height;
						this.reverseX = false;
						this.reverseY = false;
						this.cxt = cxt;
					};
					// array of shapes
					var shapes = new Array();
					
					for(var i=0; i < numOfObject ; i++)
					{
						x = Math.random()*canvasWidth;
						y = Math.random()*canvasHeight;
						width = Math.random()*sizeOfObject;
						height = width;
						cxt = 'rgb('+
								  Math.floor(Math.random()*256)+','+
								  Math.floor(Math.random()*256)+','+
								  Math.floor(Math.random()*256)+')';
						shapes.push(new Shape(x,y,width,height,cxt));
					};
					
					
					function animate()
					{
						
						xPos+=5;
						context.clearRect(0,0,canvasWidth,canvasHeight);
						x+=5;
						
						for(var j=0;j<shapes.length;j++)
						{
							var tmpShape = shapes[j];
							
							
							
							
							if(!tmpShape.reverseX)
							{
								tmpShape.x+=speed*tmpShape.width;
							}else{
								tmpShape.x-=speed*tmpShape.width;
							};
							
							if(!tmpShape.reverseY)
							{
								tmpShape.y+=speed*tmpShape.height;
							}else{
								tmpShape.y-=speed*tmpShape.height;
							};
							/*var cr = 'rgb('+
								  Math.floor(Math.random()*256)+','+
								  Math.floor(Math.random()*256)+','+
								  Math.floor(Math.random()*256)+')';*/

									context.fillStyle = tmpShape.cxt;
							context.fillRect(tmpShape.x,tmpShape.y,tmpShape.width,tmpShape.height);
							
							
							
							if(tmpShape.x<0)
							{
								tmpShape.reverseX = false;
							};
							
							
							if(tmpShape.x + tmpShape.width> canvasWidth)
							{
								tmpShape.reverseX = true;
							};
							
							if(tmpShape.y < 0)
							{
								tmpShape.reverseY = false;
							}
							
							if(tmpShape.y + tmpShape.height > canvasHeight)
							{
								tmpShape.reverseY = true;
							
							};
							
							
							
							
						}
						
						
							
							
							
							
						
						setTimeout(animate,frameRate);
					}
					
					animate();
					
					
					
				
				
				
				
				
				
				});
			