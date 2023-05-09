## CSS Cascade (How to Competing Styles are Resolved)

The cascade it's only relevant when we think about multiple diferent conflicting CSS rules, if we have different rules that target the same element, for example the `h1` we have to determita wich on is higher up in the herarchy. For this CSS use the next herarchy:

- **Position**: refers about the position in the CSS document, the down property it's more relevant thath higher, for example:

```css 
li {
	color: red;
	color: blue
}
```

	   In the exampĺe above the blue it's apply over the red.

- **Specificity**: refers to how specific a selector is in terms of the elements that you're applying the CSS rule to. Assuming we have a `<li id="first-id class="first-class" draggable>`The especificity is the next:

	1. Element, for example `li {color: green;}`
	2. Class, for example: `.li {color: blue;}`
	3. Element with attribute, for example: `li[draggable] {color: purple;}`
	4. ID, for example: `#first-id {color: orange;}`
	
	The ID is more especific, therefore, will be apply that rule over others.
	
- **Type**: in CSS we can set the styles using a external file .css, internal with the `<style>` tag or inline with the `style=""` attribute, being the inline attribute the most especific. 

- **Importance**: It's posible to establish the importance using the keyword `!important` after to write the rule CSS. For example: 

```css 
	li {
	color: blue;
	color: red !important;
	color: green:
	}
```

   In the example above the red is applied over the rest.

## Combining CSS Selectors (How to target specific elements to style)

