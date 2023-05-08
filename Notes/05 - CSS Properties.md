# CSS Properties

## CSS Colors

In CSS we can to add the color of differents ways, we can add using the name of the color, also using the hex code and the RGB colors. If we don't know that properties support colors we can to review what property we can use colors in the docs of mozilla mdn.

## Font Properties (Changing the appearance of text)

Besides to the property color we can to set other properties as font-size, font-weight and the font family.

The **font-size** allow to modifify the size of the text, this can to be in fixed measures or in relative measures; the fixed measures most used are the pixel (px) and the point, and the relative measeure often most used are the em and rem. The different betwen the 'em' and 'rem' is that 1em represent a 100% of his parent element and the 1rem represent the 100% of the root element (the tag html).

It is recommended to use "rem" like unit measure like good practice because is more consistent that the em.

The **font-weight** is a volume of the text and can to be set using keywords (normal, bold), relative to parent (ligther, bolder) and number (100 - 900).

The **font-family** can to set the type of font in your text. Is recomended to set several, fonts family because not all operating systems support the same font families and when your browser not support your main font family use the next as alternaive.

## CSS Inspection (Using the CSS Overview)

In Chrome browser we have the developer tools that are very useful in order to review, depuring and inspect our code. The developer tools can be open with 'command+ option + i' in Mac and 'control + shift + i' in windows and linux, also we can access it press right click of the mouse in the element that we want to inspect and left click on inspect button. The developer tools allow to modify our local copy of our website without affect the original file.

## The Box Model (Margin, Padding and Border)

The box model is the structure of the elements in HTML and CSS, in HTML exits elements inline and block and this block elements are comformed by (from external to internal) Margin, border, padding and the element.

- **Margin** is the external space add of the element, is used the property `margin: top-side right-side bottom-side left-side` in CSS and have four values that indicate the margin top, margin right, margin bottom and margin left, for example:

```css 
div {
	margin: 20px 10px 30px 5px;
}

element {
	margin: top right bottom left;
}
```

Also is possible to add only two values being the first value the margin top and bottom and the second value the margin right and left.

```css 
div {
	margin: 20px 40;
}

element {
	margin: top/bottom right/left;
}
```

Other way of set the margin for each side is using the property `margin-side`, for example: 

```css 
div {
	margin-top: 20px;
	margin-bottom: 20px;
	margin-right: 20px;
	margin-left: 20px;
}
```

- **Border** is the line that separate the margin of the padding and is used the property `border: size type color`  in it is indicate the size, the type and the color of the border, for example: 

```css 
div {
	border: 20px solid black;
}
```

- **Padding** is the internal space of the box and function of the same ways that the margin. 