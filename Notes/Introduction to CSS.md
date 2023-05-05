## Why do we need CSS?

CSS means  **Cascading Style Sheets** because is a markup language that function to similar a cascading, that is, it goes from the most general to he most especific element. CSS was created to add styles in our HTML from separate a file and so avoid that ou HTML to be with many lines of code and seems very messy.

## How to add CSS

Exist 3 way to apply CSS in a document HTML:

1) First **Inline** using the **style** attribute in the opening tag of the HTML element and generally is used to test some style or when only need to add style in one element :  

 ````html
 <h1 style: "color:blue">Hello word</h1>

`````

2) Second **Internal** using **style** tag put anywhere of the HTML document, however, it is a good practice put the style tag in the head of the document. This generally is used when we need only one document HTML:

 ````html
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <style>
     h1 {
       color: red;
     }
   </style>
   <title>Internal</title>
 </head>
 
 <body>
  <h1>Style Me in Red!</h1>
 </body>
 </html>
 `````

3) And third **External** that is used in a separatly file .css and a consuming by the tag link with the attributes "rel=stylesheet" that indicate that the relationship is a stylesheet and the attribute "href=./file.css" that indicate the location of the file css. This way is the most used by developers and is a good pratice to have the CSS and the HTML separatly:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./style.css">
  <title>External</title>
</head>

<body>
  <h1>Style Me in Green</h1>
</body>
</html>
```

````CSS
h1 {
    color: green;
}
````

## CSS Selectors

The selector is a first part of a CSS rule and allow to modify the styles in a HTML element. The syntax of a CSS rule is as follows:

```css
selector {
 property: value;
}
````

Exist several types of CSS selectors:

1) First we have the **Element Selector** that allow to apply rules CSS in all HTML element that are selecting, for example, ````h2 {color: blue}```` apply a text color blue in all h2 element in your HTML.

2) Second we have the **Class Selector** that apply CSS rules to all HTML elements that to have the same value in the attribute **class**; the class is a HTML attribute that is applicable in all HTML elements and allow to group various HTML elements in order ti apply the same rule; in CSS when we want to apply CSS rules in a class we put a dot before to class. For example:

 ```html
 <h2 class="red">Title</h2>
 
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed fermentum
 libero, nec pharetra ex. Sed viverra erat ut elit rhoncus, sit amet ultricies
 nisi condimentum. Donec dapibus bibendum velit in egestas. Integer id congue
 quam, ac varius nunc.</p>
 
 <p class="red">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
 sed fermentum libero, nec pharetra ex. Sed viverra erat ut elit rhoncus, sit
 amet ultricies nisi condimentum. Donec dapibus bibendum velit in egestas.
 Integer id congue quam, ac varius nunc. </p>
````

```css
 .red {
  color: red; 
 }
````

In the example above we can to see that the CSS rule apply only into the elements that to have the attribute `class="red"` .

3) Third we have the **ID Selector** that apply CSS rules in a HTML element by his id; the id is a HTML attribute that function as a identifier in the HTML element, this id is unique and can't to be aplicable in other HTML elements, for example, `<div id="main">Something here's</div>` , this example indicate that element div to have a identifier with the value main; in CSS we put a hash tag before to the id element. For example:

```html
<div id="main">
 something here's
</div>
````

````css
#main {
 font-size: 20px;
}
````

4) Four we have the **Atribute Selector** that apply CSS rules in all elements selected by his element with attributes( ```element[attribute]{ property:value }```).

5) And five the **Universal Selector** this is represented by the asterick * and select all elements in a HTML document, for example:

```css
*{
 margin: 0;
}
```

In the example above apply a margin of zero pixel in all elements of the HTML document.
