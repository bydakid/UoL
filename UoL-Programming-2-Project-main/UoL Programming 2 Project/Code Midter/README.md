Extensions :

1) Spectrum extension - DONE

-   Side Spectrum: - DONE

    i. Add a yMirror variable wich mirror the var y
    ii. Add a 2de rectangle and fill the 2de parameter with yMirror

-   Bottom Spectrum: - DONE

    i. Use the same for loop as the side spectrum but place the spectrum at the bottom of the screen
    ii. Create 3 new variables like the previous y, w and yMirror variables but changed the parameter from height to width, to make sure the spectrum is placed on the bottom screen.
    iii. Change the color of this spectrum to blue
    iv. Create 2 rectangles and add the new variables as parameters
    v. Also add a ellipse shape in the middle of the screen that goes all the way to the right of the screen

2) Face WavePattern extension - DONE

-   Add the amplitude sound shapes: - DONE

    i. Add the amp variable
    ii. Assigne p5.amplitude to amp variable in setup
    iii. Add vol variable in wavePattern.js and assingne it to amp.getLevel()
    iv. Add 2D shapes with vol in the parameters

-   Use the ellipse shape to create the lips of the face and use the fourier.waveform() - DONE

3) Needles Extensions - DONE

4) Disco extension - DONE

-   Add the shapes: - DONE

    i. Assign a for loop with var x and a value o, it should take the width of the screen and need increment of 100 in x.
    ii. In the x for loop, assign another for loop with var y and a value o, it should take the height of the screen and need increment of 50 in x.
    iii. Give the shapes a random color
    iv. Add the shape with the value x and y as positions

-   Add the sound effect to the shapes: - DONE

    i. Create a var vol and assign it to amp.GetLevel()
    ii. Create a var named hertz and assign it to freq.getFreq()
    iii. Add the vol in the ellipse for the width and height of the shape
    iv. Add the freq in the fill of the rectangle shape

5) Red Pill extension

-   Create a circle: - DONE

    i. Add a variable named spectrum and assign it to fourier.analyze();
    ii. Add a for loop until the length of spectrum
    iii. Inside the for loop add variable amp with the value of spectrum[i]
    iv. Inside the for loop add a variable circle and assign it to map(amp)
    v. Create 2 more variables for x and y that is assign to circle and the sinus and cosinus.
    vi. Add a stroke for the color of the circle and lines
    vii. Add lines
    viii. Add the colorMode(HSB)

6) Matrix extension

-   Create white circle: - DONE

    i. Add a translate to align the shape in the center of the webpage
    ii. Call the fourier.waveform and assign it to the variable siri
    iii. Create s foor loops, for the circle
    iv. Use vertex and assign its values to the variables x and y

-   Create outer and inner circle: - DONE

    i. Do the same as the main circle except change the circle height and width to make it bigger or smaller
    ii. Change the vertex to point
    iii. Add a stroke color to the points

-   Create a color inside the circle: - DONE

    i. Call the amp.getLevel and assign it to variable level
    ii. Create a if statment and assign it that level is true if the value is higher than 0.055
    iii. Add a fill in the if statment and give it random values

7) Art Music extension

-   Add background effect - DONE

-   Create a Sun: - DONE

    i. Create a vol variable and assign it to amp.getLevel()
    ii. Create a sun variable and assign its value to vol
    iii. Add a color yellow
    iv. Create a ellipse and add the sun to its width parameter

-   Create Stardust: - DONE

    i. Create a level variable and assign it to amp.getLevel()
    ii. Add an if statement that says var level is bigger than 0.06
    iii. Add a for loop in the if statement and increment it until the value is 7
    iv. Add a fill and ellipse for the stardust and add some random values to it

-   Create a Spectrum open door: - DONE

    i. Add a spectrum but place the spectrum at the bottom of the screen
    ii. Change the color of this spectrum to blue and green
    iii. Create 2 rectangles and add the new variables as parameters, but move 1 rectangle 30px to the left and the other 30px to the right

-   Create Red Pill and Blue Pill eyes: - DONE

    i. Create 2 Pills, one red and the other blue. And make sure that fourier.analyze() are being used on the Pills.
    ii. Place to 2 Pills side by side another, but make sure they are place on the canvas so that they look like the eyes of the art piece.
    iii. In each fill of the Pills, for the green value assign one to variable x and the other to variable y

-   Create Matrix text: - DONE

    i. Add a main matrix text on the top of the screen, use a array and assign the variable to words. Inside the array add the letters of the words.
    ii. Then create another variable matrixWords and assign it to random(words)
    iii. Then use the text function with value matrixWords and make it appear randomly on the width of the canvas and y-value 50
    iv. Now do the same for the matrixTruth and matrixEnd but make it so that it only appears on the screen when the amplitude of the sound is above 0.05 and place them below the Pills

8) Design + 1Extra :

1) Proper Code

-   Clean the code and make it more readable and easy

2) User Friendly Project

-   Make the visuals and usage of the project more user-friendly

i. Add a welcome message with info - DONE

3) Adjust Volume - DONE

4) Add the Frequency - DONE

-   Create a freq variable in the sketch.js and assign freq to new p5.Oscillator() - DONE
