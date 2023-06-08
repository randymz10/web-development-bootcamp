# Flexbox

## Display: Flex

**Flexbox** is a new system to design elements in CSS, this is declared using the keyword `display: flex`. It cover the elements inside of a container and this elements cover the 100% of the width, one each other. Each element in CSS is `block` or `inline` but inside a flex container each element to have the width of they content.

Also exist the property `inline-flex`, which encompasses they content by the width of they element inside, don't encompasses the 100% of the width.

## Flex Direction (Row and Column Layouts)

The `flex-direction` property indicate the direction of the main axis inside of flex container, by default this is `row`, but can be modified by `column`.

## Flexible Layout (Order, Align, Justify and Wrap)

It's important know the difference between properties of the child elements of the parent element.

A property of the child elemenst is `order` that indicate que order of the childs elements inside of a flex container, the default behavior of this property for all child elements is `0`.

The next property is the `flex-wrap` a property applied on the parent element, by default the behavior is set as `nowrap` that mean that elements are pushed until they run out of space, so that this does not happen we must to set as `wrap` for that the elements continue in the next line.

Other property is the `justify-content` that justify the content in the main axis, this can be `flex-start`, `flex-end`, `center`, `space-around` or `space-beetwen`.

A similar property is `align-items` that align the items in the across axiss, for that is neceessary to set the property `height` in the parent element otherwise it doesn't work, also it doesn't work if the flex wrap set `wrap`. This can be set as `flex-start`, `flex-end`, `center`, `baseline` or `stretch`.

When we want to align just one child element we can use `align-self` instead `align-items`.

The last property is `align-content` this is used when the `flex-wrap` is set to `wrap` al allow to the content instead the `align-items`.

For more information visit [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox).
