# xche2349_9103_tut6
# Applying userinput to our work 
## **Interaction Instructions**
To engage with the animation, move your mouse across the canvas to trigger color changes for the small dots. For more dynamic interaction:

- Press the Space key to initiate a special drawing sequence with expanding circles.
- Press the Enter key to reset the animation back to its initial state.

Each interaction, whether through mouse movement or keypress, modifies the visual output to create a lively, randomized art experience.

## **Personal Approach to the Animation Code**
In crafting this code, I aimed to blend interactivity with procedural randomness. By using a mix of mouse interactions and keyboard events, the code creates a dynamic and immersive visual experience. The use of randomly generated colors for each small circle and a rotating sequence of circles in different locations adds complexity and encourages exploration of the canvas.

## **Chosen Animation Drivers: Interaction and Time**
My primary drivers in this animation are user interaction and timed intervals. Mouse actions trigger random color changes, while timed intervals manage the expansion of concentric circles. This choice allows the artwork to evolve over time, with user input serving as an additional layer of control.

## **Animated Image Properties**

**1.Color Change**: The small dots change color when the mouse is clicked, adding a randomized visual element.

**2.Expanding Circles**: Upon pressing the Space key, circles begin to expand at set intervals, creating a growing pattern across the canvas.

**3.Particle Movement**: Particles are animated to move across the screen, disappearing once they reach the edge, which maintains a clean and ongoing flow of new elements.

**Difference in Animation with Group Member**: Another group member's animation visually emphasizes randomness and variability, creating a richer dynamic effect through time control and mouse interaction. In contrast, my animation mainly relies on direct key input, providing more user-driven control but with less visual randomness and variation.

## **inspiration sources**
The primary inspiration for my animation’s extended effects came from Erik Söderberg's Geometric GIFs. His looping art pieces, featuring various geometric shapes and patterns, demonstrate how shapes can transform into mesmerizing cyclic visuals. This inspired me to incorporate similar circular expansions and rotations in my animation. His GIFs possess a visually immersive quality, with layered elements and rotational effects, which led me to recreate this complexity by combining layered particle movements and rotations with different colors.

[Söderberg's Geometric web]（https://www.ignant.com/2016/01/05/geometric-gifs-by-erik-soderberg/）

[Söderberg's Geometric work] (https://i.pinimg.com/originals/db/04/21/db0421f62db187166d05455fb9febf53.gif)

## **My coding process**（The following content was crafted with assistance from ChatGPT to enhance language clarity and logic.）

**Setup and Initializing Colors**:

In the setup function, I created a 750x750 canvas and used the random function to generate a random color for the CircleColor array, which is used to color the shapes drawn later.

**Drawing Circles and Small Circles**:
The drawAllCircle function uses drawSmallCircle to place multiple small circles at different locations on the canvas, creating a dotted effect. Each small circle is colored using CircleColor, and when wantColor is set to true, it introduces slight shifts to simulate a trembling effect.
The drawCircle function draws a large circle, where smaller circles and rectangles create a fading effect inside. The colors are controlled by the color1, color2, and color3 parameters. Each frame adjusts the circle's size and position slightly, giving it a dynamic appearance.

**Particle Animation with Mouse Events**:
When the mouse is pressed, the mousePressed function is triggered, creating multiple instances of the Particle class and storing them in the particles array. Each Particle object has a random initial position, size, speed, and transparency, which determine its movement path and gradual fading effect.
In the draw function, I loop through the particles array, calling each particle's update and show methods to display and update their positions on the screen. If a particle's transparency is below a threshold, it is removed from the array to maintain smooth particle animations.

**Interactive Features**:
The wantColor variable is updated to true or false when the mouse is pressed or released, controlling color changes and trembling effects of the shapes.

**The keyPressed function monitors keyboard input**: 
pressing the spacebar activates the startDraw function, which controls the cycle of expansion and contraction effects using TWO_PI_Number. Pressing Enter clears the animation by resetting TWO_PI_Number.

**Timer Loop**:
In the startDraw function, I use setInterval to control the increase and decrease of TWO_PI_Number, creating a looping animation effect. When TWO_PI_Number reaches a threshold, the interval switches direction, repeating the cycle.