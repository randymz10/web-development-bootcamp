# Advanced CSS

## CSS Display (Block, Inline and Inline-Block)

Exits many different ways to show the elements in the screen with the property display, the most used are:

- **Block**: that like its name say block the entire width, occupying whole these space and is possible to set the height and the width.
- **Inline**: this elements are in the same line until that the width of the screen finish and have the same width of the element. In the inline elements cannot set the height and width.
- **Inline-block**: This is a mix of the previous elements explained this are inline elements with the different that is possible to set the height and width.
- **None**: with this value the property display hide the element on the screen like if dispear.

## CSS Float (Wrapping text using float and clear)

The float property serve to wrap elements and the clear property to clear a wrapping element. Is recommended to use only the float property in order to wrap images with text, in modern web development exist best tools and practice in order to achieve a good design of our website.

- **Float** generally use the values left and right.
- **Clear** generally use the values left, right and both.

## Responsive Websites (Making websites look good on all screen sizes)

Today we have many devices in order to consuming websites as Desktops, Laptops, Tablets and smartphones, responsive is responding to different screens size. We have four ways to do our website responsive:

- Media Queries
- CSS Grid
- CSS Flexbox
- External Frameworks e.g. Bootstrap

## Media Queries (adding breakpoints to define responsive layouts)

The media queries are rules applied putting the max and the min width. This is used establishing different width screen. A media queries is written as follows:

```css
@media (max-width:900px){
 /* CSS Rules */
}
```

The max and min width can be combine with the and operator:

```css
@media (min-width:900px) and (max-width:600px){
 /*CSS Rules*/
}

@media (max-width:600px) and (min-width:900px){
 /* CSS Rules */
}
```
