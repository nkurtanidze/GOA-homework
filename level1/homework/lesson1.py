from turtle import *
#we wont to point a house

#step 1 : draw a square
speed(30)
width(7)
color ("purple")
forward (200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)      #height of the door
right(90)    
forward(60)      
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(0, 100)
pendown()

color("black")
begin_fill()
left(120)
forward(30)
left(90)
forward(40)
left(90)
forward(30)
end_fill()

penup()
goto(200, 100)
pendown()

begin_fill()
forward(30)
right(90)
forward(40)
right(90)
forward(30)
end_fill()

exitonclick ()