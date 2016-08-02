var css = css || {};
css.sheet = null;
css.media = null;

css.init = function() {
    if (!document.styleSheets) return;
    if (document.getElementsByTagName('head').length == 0) return;
    if (document.styleSheets.length > 0) {
        for (var i = 0, l = document.styleSheets.length; i < l; i++) {
            if (document.styleSheets[i].disabled) continue;
            var media = document.styleSheets[i].media;
            this.media = typeof media;
            if (this.media === 'string') {
                if (media === '' || (media.indexOf('screen') !== -1))
                    this.sheet = document.styleSheets[i];
            }
            else if (this.media=='object') {
                if (media.mediaText === '' || (media.mediaText.indexOf('screen') !== -1))
                    this.sheet = document.styleSheets[i];
            }
            if (typeof this.sheet !== 'undefined') break;
        }
    }
    if (typeof this.sheet === 'undefined') {
        var styleSheetElement = document.createElement('style');
        styleSheetElement.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(styleSheetElement);
        for (i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].disabled) continue;
            this.sheet = document.styleSheets[i];
        }
        this.media = typeof this.sheet.media;
    }
};

css.addRule = function (selector, style) {
    if (this.media === 'string') {
        for (var i = 0, l = this.sheet.rules.length; i < l; i++) {
            if(this.sheet.rules[i].selectorText
                && this.sheet.rules[i].selectorText.toLowerCase()==selector.toLowerCase()) {
                this.sheet.rules[i].style.cssText = style;
                return;
            }
        }
        this.sheet.addRule(selector,style);
    } else if (this.media === 'object') {
        var styleSheetLength = (this.sheet.cssRules) ? this.sheet.cssRules.length : 0;
        for (var i = 0; i < styleSheetLength; i++) {
            if (this.sheet.cssRules[i].selectorText
                && this.sheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
                this.sheet.cssRules[i].style.cssText = style;
                return;
            }
        }
        this.sheet.insertRule(selector + '{' + style + '}', styleSheetLength);
    }
};

$(function(){
    css.init()
    var floors = $(".level");
    for (var i = 0; i < floors.length; i++) {
        var l = i + 1;
        var css_class = "level--" + l;
        var l_selector = "." + css_class;
        if (l > 1) {
            var h = i * (60 / floors.length);
            css.addRule(l_selector, "-webkit-transform: translateZ(" + h + "vmin); transform: translateZ(" + h + "vmin);");
            for(var j=i; j > 0; j--) {
                css.addRule(".levels--selected-"+l+" .level--"+j, "-webkit-transform: translateZ(-60vmin); transform: translateZ(-60vmin);")
            }
        }
        css.addRule(l_selector + "::after", "content: 'L" + l + "';");
        css.addRule(".levels--selected-" + l + " .level:not(.level--" + l + ")", "opacity: 0;"); /* fade out all others */
        css.addRule(".levels--selected-" + l, "-webkit-transition-delay: 0.25s; transition-delay: 0.25s;"); /* Delays */
        $(floors[i]).addClass(css_class);
    }
});