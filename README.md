inputLabel
==========

Input placeholder

Example 1
```html
<input id="name" value="" placeholder="First Name" autocomplete="off"/>
```
```javascript
$(function () {	
	$("[placeholder]").inputLabel();	
});
```
Example 2
```html
<input id="name" value="" lbl="First Name" class="inputLbl" autocomplete="off"/>
```
```javascript
$(function () {
	$(".inputLbl").inputLabel({
		placeholderAttr: 'lbl'
	});
});
```