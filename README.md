inputLabel
==========

Input placeholder

Example 1
```
<input id="name" value="" placeholder="First Name" autocomplete="off"/>

$(function () {	
	$("[placeholder]").inputLabel();	
});
```
Example 2
```javascript
<input id="name" value="" lbl="First Name" class="inputLbl" autocomplete="off"/>


$(function () {
	$(".inputLbl").inputLabel({
		placeholderAttr: 'lbl'
	});
});
```