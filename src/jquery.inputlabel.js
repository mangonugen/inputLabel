/*!	 
	v 1.0 - a jQuery plugin by Man Nguyen
	
	Licences: MIT & GPL
	Feel free to use or modify this plugin as far as my full name is kept
*/
(function ($) {
    $.fn.inputLabel = function (options) {
        var defaults = {
            placeholderAttr: "placeholder",
            wrapperClass: "inputContainer",
            labelClass: "divLabelHolder"
        };
        options = $.extend(defaults, options);

        return this.each(function () {
            var input = $(this),
                placeholder = input.attr(options.placeholderAttr),
                wrapper = $(this).wrap('<div class="' + options.wrapperClass + '" />').parent().css({ 'position': 'relative' }),
                placeholderSupport = ('placeholder' in document.createElement('input')),
                isDifHolderAttr = 'placeholder' !== options.placeholderAttr,
                //if placeholder attribute does not supported by browser or use different attribute than set input label
                label = (!placeholderSupport || isDifHolderAttr) ?
                $('<div class="' + options.labelClass + '" for="' + input.attr('id') + '">' + placeholder + '</div>').appendTo(wrapper) : false,
                labelStyle;

            // set input css
            input.css("padding-left", "5px");
			
			//issue with align label between browser
			//I'm not so good with css so this is like a quick fix
			var topLbl = '3px'
			if(/Firefox/i.test(navigator.userAgent)) 
				topLbl = '1px';
			if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()))
				topLbl = '5px';
			
            if (!placeholderSupport || isDifHolderAttr) {                                
                //This browser support the placeholder attribute                
                labelStyle = {
                    'display': 'block',
                    'color': 'rgb(170, 170, 170)',
                    'position': 'absolute',
                    'top': topLbl,
                    'left': '10px',
                    'width': (input.width() - 10) + 'px',
                    'padding': '0px',
                    'text-align': 'start',
                    'font-size': '.85em'
                };
                label.css(labelStyle);

                // remove the placeholder attribute to avoid conflicts
                input.removeAttr('placeholder');

                // prevent click/dblclick from selecting the label text
                label.bind('mousedown', function (e) {
                    input.focus();
                    e.preventDefault();
                });
            }

            // hide the placeholder if the input already has a value
            if (input.val() && label) {
                label.hide();
            }
                        
            input.bind('focusin', function (event) {
                if (label) {
                    ((label.is(':visible') && input.val()) || (!label.is(':visible') && input.val())) ? label.hide() : label.show();
                }
            })
            .bind('focusout', function (event) {
                if (label) {
                    (label.is(':visible') && !input.val()) ? label.show() : label.hide();
                }
            })            
            .bind('keyup', function (event) {
                if (label) {
                    (input.val()) ? label.hide() : label.show();
                }
            });
        });
    };
})(jQuery);