function tab(times){
	var tab="";
	for(var a=0;a<times;a++){
		tab+="&emsp;&emsp;&emsp;";
	}
	return tab;
}

function languageDataTable(){
	var langData="<tr><td><u>Language</u></td><td><u>Type</u></td><td><u>Description</u></td></tr>";
	langData+="<tr><td>C</td><td>Procedural</td><td>The progenitor of all C-Based languages. Long ago, all programs were made with Assembly languages. This all changed when Dennis Ritchie created a program called a <i>compiler</i>. This program could convert C (a language made by Dennis) into any of several Assembly codes. Thus was born the most popular early high-level language.</td></tr>";
	langData+="<tr><td>HTML</td><td>Markup</td><td>HTML provides the bare bones of every webpage. HTML's tags store data for the basic elements of a webpage, such as text, pictures or <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">links</a>. HTML tags can be visually altered by CSS. Javascript can be used to code functionality that interacts with HTML tags.</td></tr>";
	langData+="<tr><td>HTML5</td><td>Markup</td><td>HTML5 is essentially the same language as HTML. The only difference is that HTML5's compiler was written to process new Javascript functions. These functions were designed to allow for more direct graphical manipulation on the webpage (the <code>canvas</code> tag).</td></tr>";
	langData+="<tr><td>Javascript</td><td>Object-Oriented, C-based</td><td>Javascript is like every programmer's common language. It is flexible, and is used to add functionality to every webpage on the internet. Like all C-based languages, Javascript has an extensive library dedicated to processing numerical data. In recent years HTML has been updated to allow for game creation with Javascript.</td></tr>";
	langData+="<tr><td>CSS</td><td>Procedural</td><td>CSS is a very unique language, designed specifically for its task. CSS is used only to alter the styling on HTML tags. With CSS, you can create <i>stylesheets</i>. Stylesheets are like a set of artistic rules that can be easily applied to multiple webpages.</td></tr>";
	langData+="<tr><td>XML</td><td>Markup</td><td>XML is often used to store data in a very orderly fashion. Javascript is used to access or alter the data stored in XML tags. XML is more of a way to store information rather than a full-fledged programming language.</td></tr>";
	langData+="<tr><td>PHP</td><td>Procedural</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>jQuery</td><td>Procedural</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Actionscript</td><td>Object-Oriented, C-based</td><td>Flash programs (like games or cool internet animations) are written in Actionscript. The latest version of the language is Actionscript 3. Flash programming is often not as secure as Java, and so is vulnerable to viruses. Actionscript has many built-in visual or gaming-focused functionalities.</td></tr>";
	langData+="<tr><td>C#</td><td>Object-Oriented, C-based</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>C++</td><td>Object-Oriented, C-based</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Objective C</td><td>Object-Oriented, C-based</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Ruby</td><td>Object-Oriented</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Python</td><td>Multi-Paradigm</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Perl</td><td>Multi-Paradigm</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Applescript</td><td>Natural</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Swift</td><td>Object-Oriented, C-Based</td><td>Coming soon...</td></tr>";
	return langData;
}
var lessons=[
	{
		"name":"Javascript",
		"suggested":["Concepts","HTML"],
		"text":["<heading><u>Variables</u></heading></br></br>We covered variables in our concepts lesson. If you read through that, then you would know that variables are a way to store information within your code. ",
		"To create a variable in Javascript (no matter what type) just code something like this: <code>var health=100;</code> or this: <code>var name=\"Alex Lugo\";</code></br>",
		"While most languages require you to declare the data type that the variable stores (Like in Java or the C languages), Javascript is a bit more chill. Just use the <code>var</code> keyword, and your program will know that you're creating a variable. ",
		"Also, in any language, once you've created a variable, you no longer need to use the <code>var</code> keyword. Your program remembers that you created the variable.</br></br>",
		"<heading><u>Functions</u></heading></br></br>",
		"Functions are essentially little snippets of code that you save in your programs. ",
		"Think of them as custom commands you can create and then tell the program to do later. ",
		"This is called <i>defining</i> and <i>calling</i> a function. ",
		"In programming, most of the code you write will be within functions. Let's take a look a function, shall we?</br></br>",
		"<code>function hello(){</br>"+tab(1)+"alert(\"Was gucci?\");</br>}</code></br></br>",
		"The word <i>function</i> there lets the program know that you're about to create a function. The word <i>hello</i> is what I decided to call it, or the <i>name</i> of the function. ",
		"The parenthesis are, in fact, completely necessary to a function. Some functions use <i>parameters</i>, but this one doesn't. ",
		"Parameters are written in those parenthesis, but this function still needs parenthesis despite not having parameters. ",
		"Next we get on to the curly brackets. These are necessary too. All the code within the curly brackets is what will get run when you call the function. ",
		"<i>alert</i> is a function built in to Javascript, that pops up an alert box with text that matches the parameter inside it. ",
		"This is actually an example of calling a function with parameters. (See how they're written within the parenthesis?)</br></br>",
		"If you copied this code into a website and opened it up, it wouldn't do anything. Why? Because you haven't called the function <i>hello</i> yet. ",
		"To call a function, just write its name, open parenthesis, any parameters it might have, close parenthesis, and a semicolon. ",
		"Not all languages require a semicolon at the end of a line, but many do, so its a good habit to have.</br></br>",
		"<code>hello();</code></br></br>",
		"If we add the above line to our code, outside of the <i>hello</i> function, the function will <i>run</i>. ",
		"This means that the code within the function will do whatever it does. In this case, an alert box with a particulary DMV greeting should pop up. ",
		"Now, to make things more interesting, let's rewrite our hello function to add a parameter to the function.</br></br>",
		"<code>function hello(text){</br>"+tab(1)+"alert(text);</br>}</code></br></br>",
		"Now when we call this function, we can actually tell it what text to put into the alert box. ",
		"Note how the parameter in the function's parenthesis matches the parameter I placed in the <i>alert</i> function. ",
		"This means that whatever we enter the parameter as when we call the function is going to be the text passed into the <i>alert</i> function. ",
		"Also note: Now that our function requires a parameter, we cannot run it with <i>hello();</i>, since that passes no parameter to the function. Try this, instead:</br></br>",
		"<code>hello(\"Hello,\");</br>hello(\"It's me.\");</code></br></br>",
		"Now that I've had my fun with Adele references, let's get into function return types...</br>",
		"You may be thinking <i>\"Functions can do stuff, but can I get data from them?\"</i>. As a matter of fact, you can! ",
		"The <i>return</i> keyword in Javascript ends the function, as well as replaces the call with some data. Its easier if I just show you, so I will:</br></br>",
		"<code>function fromTheWindow(){</br>"+tab(1)+"return \"To the wall\";</br>}</br>alert(fromTheWindow());</code></br></br>",
		"You see how <i>fromTheWindow()</i> returns \"To the wall\", right? Well, that means that whenever we call <i>fromTheWindow</i>, ",
		"our program will replace it with what it returns. So when we pass it as <i>alert()</i>'s parameter, \"To the wall\" appears in a pop-up box. ",
		"Whelp, that's basically the basics of functions. Many programming languages use them, so they're crucial to know. Here are a few other functions that come built in to Javascript:</br></br>",
		"•<i>console.log(text);</i>"+tab(2)+"Prints <i>text</i> to the console</br>",
		"•<i>Math.random();</i>"+tab(2)+"Returns a random decimal from 0 to 1</br>",
		"•<i>Math.round(number);</i>"+tab(2)+"Returns <i>number</i>, but rounded to the nearest ones place</br>",
		"•<i>Math.floor(number);</i>"+tab(2)+"Like <i>Math.round(number)</i>, but it'll only round down</br>",
		"•<i>Math.ceil(number);</i>"+tab(2)+"Like <i>Math.round(number)</i>, but it'll only round up</br></br>",
		"<heading><u>Classes</u></heading></br></br>A class is essentially a type of object. Objects in programming are entities, or groups of data, that you can create and manipulate within the code. If the universe truly is just a computer simulation, then we'd all be objects of the Human class, reading this email from objects of the Computer class. ",
		"Creating a class in javascript is similar to making a function, although in most other languages there's more differentiation. Here's how you code a class:</br>",
		"<code>function Player(name){</br>"+tab(2)+"this.name=name;</br>"+tab(2)+"this.x=0;</br>"+tab(2)+"this.y=0;</br>"+tab(2)+"this.width=100;</br>"+tab(2)+"this.height=100;</br>"+tab(1)+"}</code></br>",
		"Classes don't have to capitalized, as Player is, but it'll help you differentiate between what is a function and what is a class. Most of the physics in my engine are designed to work on classes with x, y, width, and height variables, as this example has, so don't forget to add those to any classes you make that will use the engine's functionality. ",
		"Also, the word name within parenthesis is what's called a parameter. This means that when you create a new object of class Player, you can add data to it, and it will store that data with the this.name=name command. Now let's say you wanted to create a new player object so it can interact with the rest of the code. ",
		"Like functions, classes don't do anything unless they're called. Unlike functions, which are basically a set of instructions that run, objects are entities that live on in your code for as long as they are needed by it. This means that you can have multiple objects of the same class at a time. To make a new object, just do this:</br>",
		"<code>var alexLugo=new Player(\"Alex Lugo\");</code></br>This will create a new Player object with name \"Alex Lugo\", because that is the data that I passed into the name parameter."]
	},
	{
		"name":"Languages",
		"suggested":["Concepts"],
		"text":["<heading><u>Types of Languages</u></heading></br></br>Over the years, humans have created hundreds of different programming languages. ",
		"Some languages are similar to each other in syntax (~grammar or structure) and vocabulary, forming parallels to real-world language families. That is to say, there are lots of different types of languages. ",
		"Before I describe some of the hundreds of programming languages out there, let me first describe some of the types of languages that exist.</br>"+tab(1)+"• ",
		"Procedural: The first programming languages were <i>procedural</i>. Programmers created variables and functions all in one huge file. There was no creation or destruction of data (you did not create a new instance of a class, there were no classes). ",
		"These languages were not as dynamic as their successors, Object-Oriented languages.</br>"+tab(1)+"• Object-Oriented: Object-Oriented and Procedural languages are the two main types of programming languages. There are tons of smaller families that exist under these two categories. ",
		"Object-Oriented programming was developed in response to Procedural limitations. With Object-Oriented programming, the programmer can create <i>classes</i>, which are like the outline for a custom object. ",
		"An <i>object</i> is basically a collection of data (variables and functions), which makes data manipulation easier to understand by the programmer. Object-Oriented languages are more widely used today than Procedural languages.</br>"+tab(1)+"• ",
		"Multi-Paradigm: Programming paradigms are essentially styles of programming. Two popular paradigms are Procedural and Object-Oriented. Multi-Paradigm is exactly what the name suggests - a mix of two or more paradigms.</br>"+tab(1)+"• ",
		"C-based: This is the most common type of language for functional programming. Java, Javascript, Actionscript, are members of this language type. Some are procedural, some are object-oriented. ",
		"These languages are primarily math-based, so they are mainly used for storing/manipulating data (thus making them essential tools for game creation).</br>"+tab(1)+"• Markup: Markup languages include HTML and XML (which is more of a way to write data than an actual programming language). ",
		"Basically anything that ends in ML (\"Markup Language\") is part of this family. Members of this family do not use any math, and so cannot be used to make a game without assistance from a more math-based language. ",
		"Markup languages primarily use <i>tags</i> instead of variables or functions to store data. The prupose of Markup languages is to store data for use by more complex languages.</br>"+tab(1)+"• ",
		"Assembly Languages/Machine Code: Long ago, when the first computers were built, programmers used to write their code directly in binary (simply 1's and 0's). ",
		"This process was difficult to master, took a long time, and was very expensive. To fix this, programmers began to develop the first programming languages, called Assembly languages. ",
		"Assembly languages are all procedural, and are a step up from pure binary code in complexity. Assembly languages were the first of a type of language called \"Low Level\" programming languages. ",
		"This means that every type of CPU has its own Assembly language associated with it. Assembly languages are extremely simple math-based languages that can directly manipulate computer memory and other hardware.</br>"+tab(1)+"• ",
		"Natural: Natural languages are modeled after human speech, such as English. One example of a natural programming language is LiveCode.</br></br>",
		"<heading><u>Encyclopedia of Languages</u></heading></br></br>",
		"<table style=\"position:relative;width:90%;text-align:center;\"><tbody>"+languageDataTable()+"</tbody></table>"]
	},
	{
		"name":"Keyboard Controls",
		"suggested":["Javascript","HTML","Clicking"],
		"text":["<heading><u>The HTML Part</u></heading></br></br>There are two parts you have to code fi you want keyboard input functionality in your game. ",
		"One of these parts is written in html, the other is written in Javascript. For the html code, you'll want to add an <code>onkeypress</code> attribute to your <code>canvas</code> tag. ",
		"Give the attribute a javascript function as a value, with <code>event</code> passed in it as a parameter (something like <code>onclick(event)</code>). The onkeypress attribute in html adds an <i>event listener</i> to the canvas tag. ",
		"An event listener is a part of the program that waits for a certain event to happen (such as a key being pressed or the mouse being clicked). When you press a key, the onkeypress attribute calls the Javascript function you passed as its value. ",
		"Now, let's get to coding the Javascript portion of your keyboard input code.</br></br><heading><u>The Javascript Part</u></heading></br></br>",
		"So you have a function like this:</br><code>onclick(e){}</code></br><code>e</code> is the parameter for the function <code>onclick</code>. ",
		"In the html portion of your code, you pass <code>event</code> as the parameter of e. This function will run whenever you press a key on the keyboard. ",
		"Many games utilize keyboard controls, be they arrow keys for movement or the z button for special attacks. However, you would want a way to see which button specifically was pressed. ",
		"To find which button was pressed, you can run this code snippet: <code>e.keyCode</code>. <code>e.keyCode</code> returns the <i>key code</i> of whichever key was pressed last. ",
		"The <code>event</code> keyword that you passed into the onclick(e) function in the onkeypress attribute contains all the data of the pressed key. ",
		"This includes the key code of the event. Each key on the keyboard is represented by a unique number (its key code). To see which key was pressed, just use a simple <code>if</code> statement. like so:</br>"+tab(1)+"<code>",
		"if(e.keyCode==39){</br>"+tab(2)+"//right arrow key was pressed. Move player right</br>"+tab(1)+"}</br>39 is the key code for the right arrow key. ",
		"<a href=\"http://www.cambiaresearch.com/articles/15/javascript-key-codes\">Here is a list</a> of all the keycodes on the keyboard."]
	},
	{
		"name":"Useful Code",
		"suggested":["Javascript"],
		"text":["<heading><u>Random Number Generator</u></heading></br></br>Random number generators (or RNGs) are integral to many facets of game deisgn. ",
		"Perhaps you want an enemy that moves randomly across the screen, or you want semi-randomized dungeon design for better replayability in your game. At any rate, you want to be able to write code that can generate a random number between a specified minimum and maximum. Here is some simple code that does just that: </br>"+tab(1)+"<code>function ",
		"random(min,max){</br>"+tab(2)+"return Math.round(Math.random()*(max-min))+min;</br>"+tab(1)+"}</code></br>Let's take a look at this code piece by piece. This function returns a random whole number between <code>min</code> and <code>max</code>. <code>Math.random()</code> returns a random decimal from 0 to 1. ",
		"Multiplying this random number by another number, like <code>(max-min)</code> (<i>x</i> for short), will change the value generated to 0 to x. Let's say 0 was generated by <code>Math.random</code>. Zero times x is still zero. If a 1 was generated, 1 times x is x. ",
		"This is why multiplying the random number by a constant changes the maximum value generated. This value, however, is still a decimal. <code>Math.round()</code> fixes that by rounding the value to the closest whole number. After a whole number is randomly generated, it is added to <code>min</code>, the minimum value desired by the coder. ",
		"If zero is returned, zero plus minimum is the minimum value specified by the coder. If x is returned (x in this case is <code>(max-min)</code>) then minimum is added to that. Max minus min plus min is equal to max, the maximum value desired by the coder."]
	},
	{
		"name":"Physics",
		"suggested":["Javascript"],
		"text":["<heading><u>Physics</u></heading></br></br>Physics. That 7-letter word that gives all s/t juniors nightmares and high anxiety. In games, however, physics can be a bit more manageable. If you’ve never heard of a \”Physics engine,\” then you probably don’t know why you need to understand physics to make games. Actually, you only need to understand the physics that will feature in your game world. You don’t need to be a quantum mechanics major to make Candy Crush. You don’t even need to know how gravity works to make Tetris. In the real world, trillions upon trillions of atoms interact with force fields emitted by specialized particles. On our scale, this causes things like friction, magnetism, gravity, and electricity. In a game world, you can almost always simplify these things, depending on the kind of world you want to create.</br></br>",
			"<heading><u>Collision Detection</u></heading></br></br>Collision detection is probably the most confusing topic in this section. It’s simple to do, but the way it is explained can be abstract and difficult to visualize for some people. Anyway, here goes. Imagine a box surrounding each character on the screen. Each object you create in your code that you want to physically interact with other objects should have four variables: x, y, width and height. Now back to the box surrounding that character. Where is the box? Well, its left side is at the character’s x value. It’s right side is at x+width. It’s top is at y, and its bottom is at y+height. These boxes don’t really need to be programmed, they’re just a visualization. Since these boxes follow an object and share its dimensions, the box is essentially a representation of the object, right? And the best way to see if two objects are colliding is to check whether or not their boxes overlap. It’s easy to see when boxes overlap for us humans, but computers don’t think like us. They use math and numbers, so how can you tell when two boxes overlap using math? Well, if the right side of box 1 (x+width) is greater than box 2’s left side, but box 1’s left side (x) is less than box 2’s left side (I told you this was gonna get confusing), then they’re overlapping along the y axis. But what if the situation is reversed? What if box 1’s left side is less than box 2’s right side, and box 1’s right side is greater than box 2’s right side? Well, they’re still overlapping on the y axis in that case. That means that there’s two cases for you to check for. But what about overlapping on the x axis? Well, just take the mathematical process I described above and replace all x’s with y’s, and all width’s with height’s. That is how you check for an overlap along the x axis. Now, if box 1 and box 2 overlap along both the x and y axes, then they are touching and the two objects they represent are colliding with one another.",
			"</br>Now, there is more than just one way to check for collision. What I detailed above was one of the simplest yet functional collision detection algorithms. In some projects, you may only want to test collision on one or two sides of a character. Or, you may want to know what side(s) in particular two objects are colliding on. I plan on doing a mini-lesson series about more minute details of game creation, and the first will go more in-depth on this topic. Until then, see what you can do with a simple yes or no collision detection algorithm.",
			"</br></br><heading><u>Gravity</u></heading></br></br>In our world, gravity causes objects to accelerate towards the earth. Unless you’re making a game like Super Mario Galaxy, all you need to do is move characters downward at increasing speed to achieve realistic (or semi-realistic) gravity. To do this, just have yAcceleration and ySpeed variables for each character. Each frame, decrease the ySpeed variable by the yAcceleration variable, and increase the character’s y position by its ySpeed. Of course if the character’s feet are on the ground you probably want to set both yAcceleration and ySpeed to zero so the character won’t fall through the earth into the deep dark abyss that I call home ._.",
			"</br></br><heading><u>MLG Legit College Graduate Physics</u></heading></br></br>I’ve explained physics to enough of my classmates already, so if you want to do really real physics for your game I hope you have a background in physics already. Essentially, things move because forces are applied on them. F=ma, so the sum of all forces divided by the mass of an object is how fast they accelerate. As you know, you change your speed by an acceleration value, and you change your position by a speed value. Also good to remember is that forces, acceleration, and speed aren’t just just magnitudes, but directions as well. They are vectors. With a simple coordinate or magnitude and angle, you can store the data for a vector in your code. For gravity and such, one problem I used to run into was this: How do I use F=ma to get normal force to keep the characters from falling through the floor? The answer is simple. When a character lands on or jumps off of the ground, he/she exerts a force on the ground. Well, not just the ground, but the entire earth. The earth, according to Newton’s third law, exerts an equal force back at the character. That force is enough to launch the character up into the air (or at least counteract gravity, causing the player to not phase through the ground), but when divided by the earth’s colossal mass, it barely does anything to it. To have your characters jump using realistic physics, just have them exert a force on the ground sprite, whose mass should be immense (enough to make any force exerted on it yield a negligibly tiny decimal acceleration)."]
	}
]
