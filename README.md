# MY PORTFOLIO WEBSITE

# Installation 

1. For this project, one option is to use "npx create-react-app my-app to 
   create your React app. But this method installs unnecessary files not useful for this project. Instead, clone the repository and select your folder path (.) as shown below :

        --single-branch -b react-mini https://github.com/safak/youtube.git .

2. Proceed to install npm packages with "npm install". You should see the 
    node_modules folder at the top.

3. Create an image folder under src and move the relevant images there.

4. Select your preferred Google fonts from Google fonts and paste them into your html file.

5. To use the font, provide it to your CSS file. Copy the CSS rules from Google fonts, then paste it to the style link in your html file. You should notice a font change in your React app.

# Creating your Personal Information Component

1. Start by creating a components>>intro folder under src. Then create an intro.css and intro.jsx file in the intro folder.

2. Use the "rafce" shortcut to create a quick React component. Install the ES7 React-Redux extension to enable such shortcuts.

3. Write 'this is intro' within the div in Intro.jsx then call the component  within the return div in App.jsx. This will automatically import the componet from the component's folder

4. Once you test to see your components are working, divide your Intro.jsx component into two pieces. To do this, define a class name called 'i' then create two divs with two class names; i-left and i-right.

# CSS styling

1. Import your intro.css so you can style your class names. set the flex to 1 for both classess i.e. 50% of the component is on the left side while 50% of the other component is on the right side. 

2. Set your components to full screen with 100vh.

3. wrap (i-left-wrapper) this introclass with 50px padding

4. Split the font size for your intros to:
 - i-intro-30px for the whole intro with a weight of 300
 - i-name- 60px for the name
  - i-title- set the job titles to a 50px height

5. For the animation effect, use the 'overflow: hidden' style to hide all other titles.
The use animation: move 10s ease-in-out infinite alternate.

This style feature let's you create a continous animation effect on your job titles.

6. React was used to import the img folder and image file (className -i-img)-see intro.jsx, line 83.
  
     ``` 
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={me} alt="" className="i-img"/> right</div>
      ``` 

# Creating an about React component 
1. Under the components folder, create an about foloder, then create two files: 
  - about.css
  - About.jsx (note the capital letter)

2. Create an About constant then add a className "a".

3. Import about.css.

4. within the "a" className, add an a-left and a-right className.

5. Within the a-left className, create two cards; one for the image and onther one for the image's background:
      
          `
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                    src={random} 
                    alt=""
                    className="a-img"/>
                </div>
            </div>
          `
6. Proceed to style the classess in about.css (.a-card.bg to .a-img)

