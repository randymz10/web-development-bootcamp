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

3)  And third **External** that is used in a separatly file .css and a consuming by the tag link with the attributes "rel=stylesheet" that indicate that the relationship is a stylesheet and the attribute "href=./file.css" that indicate the location of the file css. This way is the most used by developers and is a good pratice to have the CSS and the HTML separatly:

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
```
