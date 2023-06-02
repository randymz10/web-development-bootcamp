# Grid

## Display: Grid

**Grid** is another way to design our web layouts in 2 dimension. In combination with flexbox are a powerfull tools for web design. Commonly we are going to see both too working together, flebox for unidimensional design and grid for bidimensional design.

In order to do a grid container we must to set the property `display` like `grid` (`display: grid`) and define the template colummms and rows:

```css
.container{
    display: grid;
    grid-template-columns: 1fr 2fr ;
    grid-template-rows: 1fr 2fr;
}
```

`fr` is a number of fractions in a template.

## Grid Sizing (How to Size Columns and Rows)

About the template grid we can to set the stablish the size  of our columns and rows using fixed values like `px` and `rem`, for example:

```css
.container {
    display: grid;
    grid-template-columns: 100px 200px ;
    grid-template-rows: 2rem 3rem;
}
```

When we set a fixed template cannot be changed, that is, we cannot set a height or a width and it is not responsive.

A shorthand to write the colummns and rows is using the keyword `grid-template` separanding the columns by the row with a `/` between, for example:

```css
.container {
    display: grid;
    grid-template: 200px 400px / 100px 300px;
}
```

It isn't no recomended to use this shorthand when we are learning because can be confusing use it.

Another unit sizing commonly used is the fraction `fr` that define the different areas of our lyout with ratios for sizes.

Also we can to limit the size of our template using the keyword `minmax(min-value, max-value)` or set automactly with the keyword `auto`, for example:

```css
.container {
    display: grid;
    grid-template-columns: 100px auto minmax(200px, 400px) ;
}
```

When the quantity of elements of our grid layout exceed the rows ans columns we can to set the size of them using the property `grid-auto-rows`.

For more information visit [css-tricks](https://css-tricks.com/snippets/css/complete-guide-grid/).
