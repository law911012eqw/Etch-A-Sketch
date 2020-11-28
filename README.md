# Etch-A-Sketch
Main Objective: To create a sketchpad-esque website version using the acquired js looping and DOM manimpulation methods from the previous assignments.

### Pseudocode (Required only)
Create a skeleton html | Prepare the learned debugging methods to effectively and efficiently solve the recurring issues.

Create a function that creates a 16 by 16 div grids with for loop.

    Make a nested for loops inside the function(Outer loop - Set of rows; Inner loop - div creattion in direction of rows)

        Declare variables(local or global??) and initialize the 
        default pixelated size of sketch pad (R x C)

        Set the variables as the condition for loops

    Initialize the DOM elements as an object

    Use a flexbox to arrange the groups of divs in precised positioning

    Set attributes for the container and the individual divs

Set up a hover effect that changes the color for each grid

    Implementing a ForEach method using the object initialized as a classes (but how?)

Settings: Add a button that clears the current grid then asks the user(popup) for squares per side to make the new grid

### Additional Features (to be added later)
There are two main sections for this mini-project: Settings and Sketchpad.
The settings section contains forms (button) that manipulates the existing condition of the sketchpad, in visual and interactive manner.
Some features to be added:
1. Two divided input forms that adjusts the size of pixelated grid and the size of its container with a slider.
2. RGB 255 black and whites e.g: rgb(214,214,214)
3. A grid toggle button feature (it can be a bit of performance problem above 70 px)
4. The results of hovering differs on how long the mouse is in the div. The longer it is the darker the output of color is. Maybe it could be a performance issue.
5. 8 different colors to choose on random rgb values overtime.
