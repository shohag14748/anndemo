(function($){"use strict";$.fn.counterUp=function(options){var settings=$.extend({time:400,delay:10,offset:100,beginAt:0,formatter:false,context:"window",callback:function(){}},options),s;return this.each(function(){var $this=$(this),counter={time:$(this).data("counterup-time")||settings.time,delay:$(this).data("counterup-delay")||settings.delay,offset:$(this).data("counterup-offset")||settings.offset,beginAt:$(this).data("counterup-beginat")||settings.beginAt,context:$(this).data("counterup-context")||settings.context};var counterUpper=function(){var nums=[];var divisions=counter.time/counter.delay;var num=$(this).attr("data-num")?$(this).attr("data-num"):$this.text();var isComma=/[0-9]+,[0-9]+/.test(num);num=num.replace(/,/g,"");var decimalPlaces=(num.split(".")[1]||[]).length;if(counter.beginAt>num)counter.beginAt=num;var isTime=/[0-9]+:[0-9]+:[0-9]+/.test(num);if(isTime){var times=num.split(":"),m=1;s=0;while(times.length>0){s+=m*parseInt(times.pop(),10);m*=60}}for(var i=divisions;i>=counter.beginAt/num*divisions;i--){var newNum=parseFloat(num/divisions*i).toFixed(decimalPlaces);if(isTime){newNum=parseInt(s/divisions*i);var hours=parseInt(newNum/3600)%24;var minutes=parseInt(newNum/60)%60;var seconds=parseInt(newNum%60,10);newNum=(hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds)}if(isComma){while(/(\d+)(\d{3})/.test(newNum.toString())){newNum=newNum.toString().replace(/(\d+)(\d{3})/,"$1"+","+"$2")}}if(settings.formatter){newNum=settings.formatter.call(this,newNum)}nums.unshift(newNum)}$this.data("counterup-nums",nums);$this.text(counter.beginAt);var f=function(){if(!$this.data("counterup-nums")){settings.callback.call(this);return}$this.html($this.data("counterup-nums").shift());if($this.data("counterup-nums").length){setTimeout($this.data("counterup-func"),counter.delay)}else{$this.data("counterup-nums",null);$this.data("counterup-func",null);settings.callback.call(this)}};$this.data("counterup-func",f);setTimeout($this.data("counterup-func"),counter.delay)};$this.waypoint(function(direction){counterUpper();this.destroy()},{offset:counter.offset+"%",context:counter.context})})}})(jQuery);



(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});



/*global jQuery */
/*!	
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);


// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'inherit'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                padding =  s.stickyElement.innerWidth() - s.stickyElement.width();
                newWidth = $(s.getWidthFrom).width() - padding || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));





/*
 * textillate.js
 * http://jschr.github.com/textillate
 * MIT licensed
 *
 * Copyright (C) 2012-2013 Jordan Schroter
 */

(function ($) {
  "use strict";

  function isInEffect (effect) {
    return /In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0;
  };

  function isOutEffect (effect) {
    return /Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0;
  };


  function stringToBoolean(str) {
    if (str !== "true" && str !== "false") return str;
    return (str === "true");
  };

  // custom get data api method
  function getData (node) {
    var attrs = node.attributes || []
      , data = {};

    if (!attrs.length) return data;

    $.each(attrs, function (i, attr) {
      var nodeName = attr.nodeName.replace(/delayscale/, 'delayScale');
      if (/^data-in-*/.test(nodeName)) {
        data.in = data.in || {};
        data.in[nodeName.replace(/data-in-/, '')] = stringToBoolean(attr.nodeValue);
      } else if (/^data-out-*/.test(nodeName)) {
        data.out = data.out || {};
        data.out[nodeName.replace(/data-out-/, '')] =stringToBoolean(attr.nodeValue);
      } else if (/^data-*/.test(nodeName)) {
        data[nodeName.replace(/data-/, '')] = stringToBoolean(attr.nodeValue);
      }
    })

    return data;
  }

  function shuffle (o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }

  function animate ($t, effect, cb) {
    $t.addClass('animated ' + effect)
      .css('visibility', 'visible')
      .show();

    $t.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $t.removeClass('animated ' + effect);
        cb && cb();
    });
  }

  function animateTokens ($tokens, options, cb) {
    var that = this
      , count = $tokens.length;

    if (!count) {
      cb && cb();
      return;
    }

    if (options.shuffle) $tokens = shuffle($tokens);
    if (options.reverse) $tokens = $tokens.toArray().reverse();

    $.each($tokens, function (i, t) {
      var $token = $(t);

      function complete () {
        if (isInEffect(options.effect)) {
          $token.css('visibility', 'visible');
        } else if (isOutEffect(options.effect)) {
          $token.css('visibility', 'hidden');
        }
        count -= 1;
        if (!count && cb) cb();
      }

      var delay = options.sync ? options.delay : options.delay * i * options.delayScale;

      $token.text() ?
        setTimeout(function () { animate($token, options.effect, complete) }, delay) :
        complete();
    });
  };

  var Textillate = function (element, options) {
    var base = this
      , $element = $(element);

    base.init = function () {
      base.$texts = $element.find(options.selector);

      if (!base.$texts.length) {
        base.$texts = $('<ul class="texts"><li>' + $element.html() + '</li></ul>');
        $element.html(base.$texts);
      }

      base.$texts.hide();

      base.$current = $('<span>')
        .html(base.$texts.find(':first-child').html())
        .prependTo($element);

      if (isInEffect(options.in.effect)) {
        base.$current.css('visibility', 'hidden');
      } else if (isOutEffect(options.out.effect)) {
        base.$current.css('visibility', 'visible');
      }

      base.setOptions(options);

      base.timeoutRun = null;

      setTimeout(function () {
        base.options.autoStart && base.start();
      }, base.options.initialDelay)
    };

    base.setOptions = function (options) {
      base.options = options;
    };

    base.triggerEvent = function (name) {
      var e = $.Event(name + '.tlt');
      $element.trigger(e, base);
      return e;
    };

    base.in = function (index, cb) {
      index = index || 0;

      var $elem = base.$texts.find(':nth-child(' + ((index||0) + 1) + ')')
        , options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {})
        , $tokens;

      $elem.addClass('current');

      base.triggerEvent('inAnimationBegin');
      $element.attr('data-active', $elem.data('id'));

      base.$current
        .html($elem.html())
        .lettering('words');

      // split words to individual characters if token type is set to 'char'
      if (base.options.type == "char") {
        base.$current.find('[class^="word"]')
            .css({
              'display': 'inline-block',
              // fix for poor ios performance
              '-webkit-transform': 'translate3d(0,0,0)',
              '-moz-transform': 'translate3d(0,0,0)',
              '-o-transform': 'translate3d(0,0,0)',
              'transform': 'translate3d(0,0,0)'
            })
            .each(function () { $(this).lettering() });
      }

      $tokens = base.$current
        .find('[class^="' + base.options.type + '"]')
        .css('display', 'inline-block');

      if (isInEffect(options.in.effect)) {
        $tokens.css('visibility', 'hidden');
      } else if (isOutEffect(options.in.effect)) {
        $tokens.css('visibility', 'visible');
      }

      base.currentIndex = index;

      animateTokens($tokens, options.in, function () {
        base.triggerEvent('inAnimationEnd');
        if (options.in.callback) options.in.callback();
        if (cb) cb(base);
      });
    };

    base.out = function (cb) {
      var $elem = base.$texts.find(':nth-child(' + ((base.currentIndex||0) + 1) + ')')
        , $tokens = base.$current.find('[class^="' + base.options.type + '"]')
        , options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {})

      base.triggerEvent('outAnimationBegin');

      animateTokens($tokens, options.out, function () {
        $elem.removeClass('current');
        base.triggerEvent('outAnimationEnd');
        $element.removeAttr('data-active');
        if (options.out.callback) options.out.callback();
        if (cb) cb(base);
      });
    };

    base.start = function (index) {
      setTimeout(function () {
        base.triggerEvent('start');

        (function run (index) {
          base.in(index, function () {
            var length = base.$texts.children().length;

            index += 1;

            if (!base.options.loop && index >= length) {
              if (base.options.callback) base.options.callback();
              base.triggerEvent('end');
            } else {
              index = index % length;

              base.timeoutRun = setTimeout(function () {
                base.out(function () {
                  run(index)
                });
              }, base.options.minDisplayTime);
            }
          });
        }(index || 0));
      }, base.options.initialDelay);
    };

    base.stop = function () {
      if (base.timeoutRun) {
        clearInterval(base.timeoutRun);
        base.timeoutRun = null;
      }
    };

    base.init();
  }

  $.fn.textillate = function (settings, args) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('textillate')
        , options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), typeof settings == 'object' && settings);

      if (!data) {
        $this.data('textillate', (data = new Textillate(this, options)));
      } else if (typeof settings == 'string') {
        data[settings].apply(data, [].concat(args));
      } else {
        data.setOptions.call(data, options);
      }
    })
  };

  $.fn.textillate.defaults = {
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    in: {
      effect: 'fadeInLeftBig',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function () {}
    },
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function () {}
    },
    autoStart: true,
    inEffects: [],
    outEffects: [ 'hinge' ],
    callback: function () {},
    type: 'char'
  };

}(jQuery));



/*!
Waypoints - 4.0.0
Copyright Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();





/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'span',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<span>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'span', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);




/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};



// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.


/*! WOW - v0.1.6 - 2014-03-19
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),this.WOW=function(){function c(a){null==a&&(a={}),this.scrollCallback=b(this.scrollCallback,this),this.scrollHandler=b(this.scrollHandler,this),this.start=b(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults)}return c.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},c.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},c.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},c.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},c.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},c.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),a.setAttribute("style",this.customStyle(b,d,c,e))},c.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},c.prototype.customStyle=function(a,b,c,d){var e;return e=a?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",b&&(e+="-webkit-animation-duration: "+b+"; -moz-animation-duration: "+b+"; animation-duration: "+b+";"),c&&(e+="-webkit-animation-delay: "+c+"; -moz-animation-delay: "+c+"; animation-delay: "+c+";"),d&&(e+="-webkit-animation-iteration-count: "+d+"; -moz-animation-iteration-count: "+d+"; animation-iteration-count: "+d+";"),e},c.prototype.scrollHandler=function(){return this.scrolled=!0},c.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},c.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},c.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},c.prototype.util=function(){return this._util||(this._util=new a)},c.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},c}()}).call(this);





	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.

	var player;

	function onYouTubeIframeAPIReady() {
	    $(document).ready(function () {
	        $('.your-team .singleimage .item').on('click', function (e) {
	            e.preventDefault();
	            var id = $(this).children('.video').children('.vid').text();
	            player = new YT.Player('player', {
	                height: '390',
	                width: '640',
	                videoId: id,
	                events: {
	                    'onReady': onPlayerReady,
	                    'onStateChange': onPlayerStateChange
	                }
	            });
	        });

	        $('.testimonial-info-item .video i').on('click', function (e) {
	            e.preventDefault();
	            var id = $(this).siblings('.vid').text();
	            player = new YT.Player('player', {
	                height: '390',
	                width: '640',
	                videoId: id,
	                events: {
	                    'onReady': onPlayerReady,
	                    'onStateChange': onPlayerStateChange
	                }
	            });
	        });


	    });
	}

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
	    event.target.playVideo();
	}
	// 5. The API calls this function when the player's state changes.
	//    The function indicates that when playing a video (state=1),
	//    the player should play for six seconds and then stop.
	var done = false;

	function onPlayerStateChange(event) {
	    $(document).ready(function () {
	        if (event.data == 0) {
	            $('.your-team-popup').removeClass('open');
	            $('.your-team-popup .video').empty();
	            $('.testimonial-info-popup .video').empty();
	            $('.testimonial-info-popup').removeClass('testimonial-info-popup-open');
	        }
	    });
	}



		(function($) {

			'use strict';

			var has3d,

				hasRot,

				vendor = '',

				version = '4.1.0',

				PI = Math.PI,

				A90 = PI / 2,

				isTouch = 'ontouchstart' in window,

				mouseEvents = (isTouch) ? {
					down: 'touchstart',
					move: 'touchmove',
					up: 'touchend',
					over: 'touchstart',
					out: 'touchend'
				} : {
					down: 'mousedown',
					move: 'mousemove',
					up: 'mouseup',
					over: 'mouseover',
					out: 'mouseout'
				},

				// Contansts used for each corner
				//   | tl * tr |
				// l | *     * | r
				//   | bl * br |

				corners = {
					backward: ['bl', 'tl'],
					forward: ['br', 'tr'],
					all: ['tl', 'bl', 'tr', 'br', 'l', 'r']
				},

				// Display values

				displays = ['single', 'double'],

				// Direction values

				directions = ['ltr', 'rtl'],

				// Default options

				turnOptions = {

					// Enables hardware acceleration

					acceleration: true,

					// Display

					display: 'single',

					// Duration of transition in milliseconds

					duration: 600,

					// First page

					page: 1,

					// Enables gradients

					gradients: true,

					// Corners used when turning the page

					turnCorners: 'bl,br',

					// Events

					when: null
				},

				flipOptions = {

					// Size of the active zone of each corner

					cornerSize: 100

				},

				// Number of pages in the DOM, minimum value: 6

				pagesInDOM = 6,


				turnMethods = {

					// Singleton constructor
					// $('#selector').turn([options]);

					init: function(options) {

						// Define constants

						has3d = 'WebKitCSSMatrix' in window || 'MozPerspective' in document.body.style;
						hasRot = rotationAvailable();
						vendor = getPrefix();

						var i, that = this,
							pageNum = 0,
							data = this.data(),
							ch = this.children();

						// Set initial configuration

						options = $.extend({
							width: this.width(),
							height: this.height(),
							direction: this.attr('dir') || this.css('direction') || 'ltr'
						}, turnOptions, options);

						data.opts = options;
						data.pageObjs = {};
						data.pages = {};
						data.pageWrap = {};
						data.pageZoom = {};
						data.pagePlace = {};
						data.pageMv = [];
						data.zoom = 1;
						data.totalPages = options.pages || 0;
						data.eventHandlers = {
							touchStart: $.proxy(turnMethods._touchStart, this),
							touchMove: $.proxy(turnMethods._touchMove, this),
							touchEnd: $.proxy(turnMethods._touchEnd, this),
							start: $.proxy(turnMethods._eventStart, this)
						};



						// Add event listeners

						if (options.when)
							for (i in options.when)
								if (has(i, options.when))
									this.bind(i, options.when[i]);

						// Set the css

						this.css({
							position: 'relative',
							width: options.width,
							height: options.height
						});

						// Set the initial display

						this.turn('display', options.display);

						// Set the direction

						if (options.direction !== '')
							this.turn('direction', options.direction);

						// Prevent blue screen problems of switching to hardware acceleration mode
						// By forcing hardware acceleration for ever

						if (has3d && !isTouch && options.acceleration)
							this.transform(translate(0, 0, true));

						// Add pages from the DOM

						for (i = 0; i < ch.length; i++) {
							if ($(ch[i]).attr('ignore') != '1') {
								this.turn('addPage', ch[i], ++pageNum);
							}
						}

						// Event listeners

						$(this).bind(mouseEvents.down, data.eventHandlers.touchStart).
						bind('end', turnMethods._eventEnd).
						bind('pressed', turnMethods._eventPressed).
						bind('released', turnMethods._eventReleased).
						bind('flip', turnMethods._flip);

						$(this).parent().bind('start', data.eventHandlers.start);

						$(document).bind(mouseEvents.move, data.eventHandlers.touchMove).
						bind(mouseEvents.up, data.eventHandlers.touchEnd);

						// Set the initial page

						this.turn('page', options.page);

						// This flipbook is ready

						data.done = true;

						return this;
					},

					// Adds a page from external data

					addPage: function(element, page) {

						var currentPage,
							className,
							incPages = false,
							data = this.data(),
							lastPage = data.totalPages + 1;

						if (data.destroying)
							return false;

						// Read the page number from the className of `element` - format: p[0-9]+

						if ((currentPage = /\bp([0-9]+)\b/.exec($(element).attr('class'))))
							page = parseInt(currentPage[1], 10);

						if (page) {

							if (page == lastPage)
								incPages = true;
							else if (page > lastPage)
								throw turnError('Page "' + page + '" cannot be inserted');

						} else {

							page = lastPage;
							incPages = true;

						}

						if (page >= 1 && page <= lastPage) {

							if (data.display == 'double')
								className = (page % 2) ? ' odd' : ' even';
							else
								className = '';

							// Stop animations
							if (data.done)
								this.turn('stop');

							// Move pages if it's necessary
							if (page in data.pageObjs)
								turnMethods._movePages.call(this, page, 1);

							// Increase the number of pages
							if (incPages)
								data.totalPages = lastPage;

							// Add element
							data.pageObjs[page] = $(element).
							css({
								'float': 'left'
							}).
							addClass('page p' + page + className);

							if (!hasHardPage() && data.pageObjs[page].hasClass('hard')) {
								data.pageObjs[page].removeClass('hard');
							}

							// Add page
							turnMethods._addPage.call(this, page);

							// Remove pages out of range
							turnMethods._removeFromDOM.call(this);
						}

						return this;
					},

					// Adds a page

					_addPage: function(page) {

						var data = this.data(),
							element = data.pageObjs[page];

						if (element)
							if (turnMethods._necessPage.call(this, page)) {

								if (!data.pageWrap[page]) {

									// Wrapper
									data.pageWrap[page] = $('<div/>', {
										'class': 'page-wrapper',
										page: page,
										css: {
											position: 'absolute',
											overflow: 'hidden'
										}
									});

									// Append to this flipbook
									this.append(data.pageWrap[page]);

									if (!data.pagePlace[page]) {

										data.pagePlace[page] = page;
										// Move `pageObjs[page]` to wrapper
										data.pageObjs[page].appendTo(data.pageWrap[page]);

									}

									// Set the size of the page
									var prop = turnMethods._pageSize.call(this, page, true);
									element.css({
										width: prop.width,
										height: prop.height
									});
									data.pageWrap[page].css(prop);

								}

								if (data.pagePlace[page] == page) {

									// If the page isn't in another place, create the flip effect
									turnMethods._makeFlip.call(this, page);

								}

							} else {

								// Place
								data.pagePlace[page] = 0;

								// Remove element from the DOM
								if (data.pageObjs[page])
									data.pageObjs[page].remove();

							}

					},

					// Checks if a page is in memory

					hasPage: function(page) {

						return has(page, this.data().pageObjs);

					},

					// Centers the flipbook
					center: function(page) {

						var data = this.data(),
							size = $(this).turn('size'),
							left = 0;

						if (!data.noCenter) {
							if (data.display == 'double') {
								var view = this.turn('view', page || data.tpage || data.page);

								if (data.direction == 'ltr') {
									if (!view[0])
										left -= size.width / 4;
									else if (!view[1])
										left += size.width / 4;
								} else {
									if (!view[0])
										left += size.width / 4;
									else if (!view[1])
										left -= size.width / 4;
								}

							}

							$(this).css({
								marginLeft: left
							});
						}

						return this;

					},

					// Destroys the flipbook

					destroy: function() {

						var page,
							flipbook = this,
							data = this.data(),
							events = [
								'end', 'first', 'flip', 'last', 'pressed',
								'released', 'start', 'turning', 'turned',
								'zooming', 'missing'
							];

						if (trigger('destroying', this) == 'prevented')
							return;

						data.destroying = true;

						$.each(events, function(index, eventName) {
							flipbook.unbind(eventName);
						});

						this.parent().unbind('start', data.eventHandlers.start);

						$(document).unbind(mouseEvents.move, data.eventHandlers.touchMove).
						unbind(mouseEvents.up, data.eventHandlers.touchEnd);

						while (data.totalPages !== 0) {
							this.turn('removePage', data.totalPages);
						}

						if (data.fparent)
							data.fparent.remove();

						if (data.shadow)
							data.shadow.remove();

						this.removeData();
						data = null;

						return this;

					},

					// Checks if this element is a flipbook

					is: function() {

						return typeof(this.data().pages) == 'object';

					},

					// Sets and gets the zoom value

					zoom: function(newZoom) {

						var data = this.data();

						if (typeof(newZoom) == 'number') {

							if (newZoom < 0.001 || newZoom > 100)
								throw turnError(newZoom + ' is not a value for zoom');

							if (trigger('zooming', this, [newZoom, data.zoom]) == 'prevented')
								return this;

							var size = this.turn('size'),
								currentView = this.turn('view'),
								iz = 1 / data.zoom,
								newWidth = Math.round(size.width * iz * newZoom),
								newHeight = Math.round(size.height * iz * newZoom);

							data.zoom = newZoom;

							$(this).turn('stop').
							turn('size', newWidth, newHeight);
							/*.
							css({marginTop: size.height * iz / 2 - newHeight / 2});*/

							if (data.opts.autoCenter)
								this.turn('center');
							/*else
							  $(this).css({marginLeft: size.width * iz / 2 - newWidth / 2});*/

							turnMethods._updateShadow.call(this);

							for (var i = 0; i < currentView.length; i++) {
								if (currentView[i] && data.pageZoom[currentView[i]] != data.zoom) {

									this.trigger('zoomed', [
										currentView[i],
										currentView,
										data.pageZoom[currentView[i]],
										data.zoom
									]);

									data.pageZoom[currentView[i]] = data.zoom;
								}
							}

							return this;

						} else
							return data.zoom;

					},

					// Gets the size of a page

					_pageSize: function(page, position) {

						var data = this.data(),
							prop = {};

						if (data.display == 'single') {

							prop.width = this.width();
							prop.height = this.height();

							if (position) {
								prop.top = 0;
								prop.left = 0;
								prop.right = 'auto';
							}

						} else {

							var pageWidth = this.width() / 2,
								pageHeight = this.height();

							if (data.pageObjs[page].hasClass('own-size')) {
								prop.width = data.pageObjs[page].width();
								prop.height = data.pageObjs[page].height();
							} else {
								prop.width = pageWidth;
								prop.height = pageHeight;
							}

							if (position) {
								var odd = page % 2;
								prop.top = (pageHeight - prop.height) / 2;

								if (data.direction == 'ltr') {

									prop[(odd) ? 'right' : 'left'] = pageWidth - prop.width;
									prop[(odd) ? 'left' : 'right'] = 'auto';

								} else {

									prop[(odd) ? 'left' : 'right'] = pageWidth - prop.width;
									prop[(odd) ? 'right' : 'left'] = 'auto';

								}

							}
						}

						return prop;

					},

					// Prepares the flip effect for a page

					_makeFlip: function(page) {

						var data = this.data();

						if (!data.pages[page] && data.pagePlace[page] == page) {

							var single = data.display == 'single',
								odd = page % 2;

							data.pages[page] = data.pageObjs[page].
							css(turnMethods._pageSize.call(this, page)).
							flip({
								page: page,
								next: (odd || single) ? page + 1 : page - 1,
								turn: this
							}).
							flip('disable', data.disabled);

							// Issue about z-index
							turnMethods._setPageLoc.call(this, page);

							data.pageZoom[page] = data.zoom;

						}

						return data.pages[page];
					},

					// Makes pages within a range

					_makeRange: function() {

						var page, range,
							data = this.data();

						if (data.totalPages < 1)
							return;

						range = this.turn('range');

						for (page = range[0]; page <= range[1]; page++)
							turnMethods._addPage.call(this, page);

					},

					// Returns a range of pages that should be in the DOM
					// Example:
					// - page in the current view, return true
					// * page is in the range, return true
					// Otherwise, return false
					//
					// 1 2-3 4-5 6-7 8-9 10-11 12-13
					//   **  **  --   **  **

					range: function(page) {

						var remainingPages, left, right, view,
							data = this.data();

						page = page || data.tpage || data.page || 1;
						view = turnMethods._view.call(this, page);

						if (page < 1 || page > data.totalPages)
							throw turnError('"' + page + '" is not a valid page');


						view[1] = view[1] || view[0];

						if (view[0] >= 1 && view[1] <= data.totalPages) {

							remainingPages = Math.floor((pagesInDOM - 2) / 2);

							if (data.totalPages - view[1] > view[0]) {
								left = Math.min(view[0] - 1, remainingPages);
								right = 2 * remainingPages - left;
							} else {
								right = Math.min(data.totalPages - view[1], remainingPages);
								left = 2 * remainingPages - right;
							}

						} else {
							left = pagesInDOM - 1;
							right = pagesInDOM - 1;
						}

						return [Math.max(1, view[0] - left),
							Math.min(data.totalPages, view[1] + right)
						];

					},

					// Detects if a page is within the range of `pagesInDOM` from the current view

					_necessPage: function(page) {

						if (page === 0)
							return true;

						var range = this.turn('range');

						return this.data().pageObjs[page].hasClass('fixed') ||
							(page >= range[0] && page <= range[1]);

					},

					// Releases memory by removing pages from the DOM

					_removeFromDOM: function() {

						var page, data = this.data();

						for (page in data.pageWrap)
							if (has(page, data.pageWrap) &&
								!turnMethods._necessPage.call(this, page))
								turnMethods._removePageFromDOM.call(this, page);

					},

					// Removes a page from DOM and its internal references

					_removePageFromDOM: function(page) {

						var data = this.data();

						if (data.pages[page]) {
							var dd = data.pages[page].data();

							flipMethods._moveFoldingPage.call(data.pages[page], false);

							if (dd.f && dd.f.fwrapper)
								dd.f.fwrapper.remove();

							data.pages[page].removeData();
							data.pages[page].remove();
							delete data.pages[page];
						}

						if (data.pageObjs[page])
							data.pageObjs[page].remove();

						if (data.pageWrap[page]) {
							data.pageWrap[page].remove();
							delete data.pageWrap[page];
						}

						turnMethods._removeMv.call(this, page);

						delete data.pagePlace[page];
						delete data.pageZoom[page];

					},

					// Removes a page

					removePage: function(page) {

						var data = this.data();

						// Delete all the pages
						if (page == '*') {

							while (data.totalPages !== 0) {
								this.turn('removePage', data.totalPages);
							}

						} else {

							if (page < 1 || page > data.totalPages)
								throw turnError('The page ' + page + ' doesn\'t exist');

							if (data.pageObjs[page]) {

								// Stop animations
								this.turn('stop');

								// Remove `page`
								turnMethods._removePageFromDOM.call(this, page);

								delete data.pageObjs[page];

							}

							// Move the pages
							turnMethods._movePages.call(this, page, -1);

							// Resize the size of this flipbook
							data.totalPages = data.totalPages - 1;

							// Check the current view

							if (data.page > data.totalPages) {

								data.page = null;
								turnMethods._fitPage.call(this, data.totalPages);

							} else {

								turnMethods._makeRange.call(this);
								this.turn('update');

							}
						}

						return this;

					},

					// Moves pages

					_movePages: function(from, change) {

						var page,
							that = this,
							data = this.data(),
							single = data.display == 'single',
							move = function(page) {

								var next = page + change,
									odd = next % 2,
									className = (odd) ? ' odd ' : ' even ';

								if (data.pageObjs[page])
									data.pageObjs[next] = data.pageObjs[page].
								removeClass('p' + page + ' odd even').
								addClass('p' + next + className);

								if (data.pagePlace[page] && data.pageWrap[page]) {

									data.pagePlace[next] = next;

									if (data.pageObjs[next].hasClass('fixed'))
										data.pageWrap[next] = data.pageWrap[page].
									attr('page', next);
									else
										data.pageWrap[next] = data.pageWrap[page].
									css(turnMethods._pageSize.call(that, next, true)).
									attr('page', next);

									if (data.pages[page])
										data.pages[next] = data.pages[page].
									flip('options', {
										page: next,
										next: (single || odd) ? next + 1 : next - 1
									});

									if (change) {
										delete data.pages[page];
										delete data.pagePlace[page];
										delete data.pageZoom[page];
										delete data.pageObjs[page];
										delete data.pageWrap[page];
									}

								}

							};

						if (change > 0)
							for (page = data.totalPages; page >= from; page--)
								move(page);
						else
							for (page = from; page <= data.totalPages; page++)
								move(page);

					},

					// Sets or Gets the display mode

					display: function(display) {

						var data = this.data(),
							currentDisplay = data.display;

						if (display === undefined) {

							return currentDisplay;

						} else {

							if ($.inArray(display, displays) == -1)
								throw turnError('"' + display + '" is not a value for display');

							switch (display) {
								case 'single':

									// Create a temporal page to use as folded page

									if (!data.pageObjs[0]) {
										this.turn('stop').
										css({
											'overflow': 'hidden'
										});

										data.pageObjs[0] = $('<div />', {
											'class': 'page p-temporal'
										}).
										css({
											width: this.width(),
											height: this.height()
										}).
										appendTo(this);
									}

									this.addClass('shadow');

									break;
								case 'double':

									// Remove the temporal page

									if (data.pageObjs[0]) {
										this.turn('stop').css({
											'overflow': ''
										});
										data.pageObjs[0].remove();
										delete data.pageObjs[0];
									}

									this.removeClass('shadow');

									break;
							}


							data.display = display;

							if (currentDisplay) {
								var size = this.turn('size');
								turnMethods._movePages.call(this, 1, 0);
								this.turn('size', size.width, size.height).
								turn('update');
							}

							return this;

						}

					},

					// Gets and sets the direction of the flipbook

					direction: function(dir) {

						var data = this.data();

						if (dir === undefined) {

							return data.direction;

						} else {

							dir = dir.toLowerCase();

							if ($.inArray(dir, directions) == -1)
								throw turnError('"' + dir + '" is not a value for direction');

							if (dir == 'rtl') {
								$(this).attr('dir', 'ltr').
								css({
									direction: 'ltr'
								});
							}

							data.direction = dir;

							if (data.done)
								this.turn('size', $(this).width(), $(this).height());

							return this;
						}

					},

					// Detects animation

					animating: function() {

						return this.data().pageMv.length > 0;

					},

					// Gets the current activated corner

					corner: function() {

						var corner,
							page,
							data = this.data();

						for (page in data.pages) {
							if (has(page, data.pages))
								if ((corner = data.pages[page].flip('corner'))) {
									return corner;
								}
						}

						return false;
					},

					// Gets the data stored in the flipbook

					data: function() {

						return this.data();

					},

					// Disables and enables the effect

					disable: function(disable) {

						var page,
							data = this.data(),
							view = this.turn('view');

						data.disabled = disable === undefined || disable === true;

						for (page in data.pages) {
							if (has(page, data.pages))
								data.pages[page].flip('disable',
									(data.disabled) ? true : $.inArray(parseInt(page, 10), view) == -1);
						}

						return this;

					},

					// Disables and enables the effect

					disabled: function(disable) {

						if (disable === undefined) {
							return this.data().disabled === true;
						} else {
							return this.turn('disable', disable);
						}

					},

					// Gets and sets the size

					size: function(width, height) {

						if (width === undefined || height === undefined) {

							return {
								width: this.width(),
								height: this.height()
							};

						} else {

							this.turn('stop');

							var page, prop,
								data = this.data(),
								pageWidth = (data.display == 'double') ? width / 2 : width;

							this.css({
								width: width,
								height: height
							});

							if (data.pageObjs[0])
								data.pageObjs[0].css({
									width: pageWidth,
									height: height
								});

							for (page in data.pageWrap) {
								if (!has(page, data.pageWrap)) continue;

								prop = turnMethods._pageSize.call(this, page, true);

								data.pageObjs[page].css({
									width: prop.width,
									height: prop.height
								});
								data.pageWrap[page].css(prop);

								if (data.pages[page])
									data.pages[page].css({
										width: prop.width,
										height: prop.height
									});
							}

							this.turn('resize');

							return this;

						}
					},

					// Resizes each page

					resize: function() {

						var page, data = this.data();

						if (data.pages[0]) {
							data.pageWrap[0].css({
								left: -this.width()
							});
							data.pages[0].flip('resize', true);
						}

						for (page = 1; page <= data.totalPages; page++)
							if (data.pages[page])
								data.pages[page].flip('resize', true);

						turnMethods._updateShadow.call(this);

						if (data.opts.autoCenter)
							this.turn('center');

					},

					// Removes an animation from the cache

					_removeMv: function(page) {

						var i, data = this.data();

						for (i = 0; i < data.pageMv.length; i++)
							if (data.pageMv[i] == page) {
								data.pageMv.splice(i, 1);
								return true;
							}

						return false;

					},

					// Adds an animation to the cache

					_addMv: function(page) {

						var data = this.data();

						turnMethods._removeMv.call(this, page);
						data.pageMv.push(page);

					},

					// Gets indexes for a view

					_view: function(page) {

						var data = this.data();

						page = page || data.page;

						if (data.display == 'double')
							return (page % 2) ? [page - 1, page] : [page, page + 1];
						else
							return [page];

					},

					// Gets a view

					view: function(page) {

						var data = this.data(),
							view = turnMethods._view.call(this, page);

						if (data.display == 'double')
							return [(view[0] > 0) ? view[0] : 0,
								(view[1] <= data.totalPages) ? view[1] : 0
							];
						else
							return [(view[0] > 0 && view[0] <= data.totalPages) ? view[0] : 0];

					},

					// Stops animations

					stop: function(ignore, animate) {

						if (this.turn('animating')) {

							var i, opts, page,
								data = this.data();

							if (data.tpage) {
								data.page = data.tpage;
								delete data['tpage'];
							}

							for (i = 0; i < data.pageMv.length; i++) {

								if (!data.pageMv[i] || data.pageMv[i] === ignore)
									continue;

								page = data.pages[data.pageMv[i]];
								opts = page.data().f.opts;

								page.flip('hideFoldedPage', animate);

								if (!animate)
									flipMethods._moveFoldingPage.call(page, false);

								if (opts.force) {
									opts.next = (opts.page % 2 === 0) ? opts.page - 1 : opts.page + 1;
									delete opts['force'];
								}

							}
						}

						this.turn('update');

						return this;
					},

					// Gets and sets the number of pages

					pages: function(pages) {

						var data = this.data();

						if (pages) {

							if (pages < data.totalPages) {

								for (var page = data.totalPages; page > pages; page--)
									this.turn('removePage', page);

							}

							data.totalPages = pages;
							turnMethods._fitPage.call(this, data.page);

							return this;

						} else
							return data.totalPages;

					},

					// Checks missing pages

					_missing: function(page) {

						var data = this.data();

						if (data.totalPages < 1)
							return;

						var p,
							range = this.turn('range', page),
							missing = [];

						for (p = range[0]; p <= range[1]; p++) {
							if (!data.pageObjs[p])
								missing.push(p);
						}

						if (missing.length > 0)
							this.trigger('missing', [missing]);

					},

					// Sets a page without effect

					_fitPage: function(page) {

						var data = this.data(),
							newView = this.turn('view', page);

						turnMethods._missing.call(this, page);

						if (!data.pageObjs[page])
							return;

						data.page = page;

						this.turn('stop');

						for (var i = 0; i < newView.length; i++) {

							if (newView[i] && data.pageZoom[newView[i]] != data.zoom) {

								this.trigger('zoomed', [
									newView[i],
									newView,
									data.pageZoom[newView[i]],
									data.zoom
								]);

								data.pageZoom[newView[i]] = data.zoom;

							}
						}

						turnMethods._removeFromDOM.call(this);
						turnMethods._makeRange.call(this);
						turnMethods._updateShadow.call(this);
						this.trigger('turned', [page, newView]);
						this.turn('update');

						if (data.opts.autoCenter)
							this.turn('center');

					},

					// Turns the page

					_turnPage: function(page) {

						var current,
							next,
							data = this.data(),
							place = data.pagePlace[page],
							view = this.turn('view'),
							newView = this.turn('view', page);


						if (data.page != page) {

							var currentPage = data.page;

							if (trigger('turning', this, [page, newView]) == 'prevented') {

								if (currentPage == data.page && $.inArray(place, data.pageMv) != -1)
									data.pages[place].flip('hideFoldedPage', true);

								return;

							}

							if ($.inArray(1, newView) != -1)
								this.trigger('first');
							if ($.inArray(data.totalPages, newView) != -1)
								this.trigger('last');

						}

						if (data.display == 'single') {
							current = view[0];
							next = newView[0];
						} else if (view[1] && page > view[1]) {
							current = view[1];
							next = newView[0];
						} else if (view[0] && page < view[0]) {
							current = view[0];
							next = newView[1];
						}

						var optsCorners = data.opts.turnCorners.split(','),
							flipData = data.pages[current].data().f,
							opts = flipData.opts,
							actualPoint = flipData.point;

						turnMethods._missing.call(this, page);

						if (!data.pageObjs[page])
							return;

						this.turn('stop');

						data.page = page;

						turnMethods._makeRange.call(this);

						data.tpage = next;

						if (opts.next != next) {
							opts.next = next;
							opts.force = true;
						}

						this.turn('update');

						flipData.point = actualPoint;

						if (flipData.effect == 'hard')
							if (data.direction == 'ltr')
								data.pages[current].flip('turnPage',
									(page > current) ? 'r' : 'l');
							else
								data.pages[current].flip('turnPage',
									(page > current) ? 'l' : 'r');
						else {
							if (data.direction == 'ltr')
								data.pages[current].flip('turnPage',
									optsCorners[(page > current) ? 1 : 0]);
							else
								data.pages[current].flip('turnPage',
									optsCorners[(page > current) ? 0 : 1]);
						}

					},

					// Gets and sets a page

					page: function(page) {

						var data = this.data();

						if (page === undefined) {

							return data.page;

						} else {

							if (!data.disabled && !data.destroying) {

								page = parseInt(page, 10);

								if (page > 0 && page <= data.totalPages) {

									if (page != data.page) {
										if (!data.done || $.inArray(page, this.turn('view')) != -1)
											turnMethods._fitPage.call(this, page);
										else
											turnMethods._turnPage.call(this, page);
									}

									return this;

								} else {

									throw turnError('The page ' + page + ' does not exist');

								}

							}

						}

					},

					// Turns to the next view

					next: function() {

						return this.turn('page', Math.min(this.data().totalPages,
							turnMethods._view.call(this, this.data().page).pop() + 1));

					},

					// Turns to the previous view

					previous: function() {

						return this.turn('page', Math.max(1,
							turnMethods._view.call(this, this.data().page).shift() - 1));

					},

					// Shows a peeling corner

					peel: function(corner, animate) {

						var data = this.data(),
							view = this.turn('view');

						animate = (animate === undefined) ? true : animate === true;

						if (corner === false) {

							this.turn('stop', null, animate);

						} else {

							if (data.display == 'single') {

								data.pages[data.page].flip('peel', corner, animate);

							} else {

								var page;

								if (data.direction == 'ltr') {

									page = (corner.indexOf('l') != -1) ? view[0] : view[1];

								} else {

									page = (corner.indexOf('l') != -1) ? view[1] : view[0];

								}

								if (data.pages[page])
									data.pages[page].flip('peel', corner, animate);

							}
						}

						return this;

					},

					// Adds a motion to the internal list
					// This event is called in context of flip

					_addMotionPage: function() {

						var opts = $(this).data().f.opts,
							turn = opts.turn,
							dd = turn.data();

						turnMethods._addMv.call(turn, opts.page);

					},

					// This event is called in context of flip

					_eventStart: function(e, opts, corner) {

						var data = opts.turn.data(),
							actualZoom = data.pageZoom[opts.page];

						if (e.isDefaultPrevented()) {
							turnMethods._updateShadow.call(opts.turn);
							return;
						}

						if (actualZoom && actualZoom != data.zoom) {

							opts.turn.trigger('zoomed', [
								opts.page,
								opts.turn.turn('view', opts.page),
								actualZoom,
								data.zoom
							]);

							data.pageZoom[opts.page] = data.zoom;

						}

						if (data.display == 'single' && corner) {

							if ((corner.charAt(1) == 'l' && data.direction == 'ltr') ||
								(corner.charAt(1) == 'r' && data.direction == 'rtl')) {

								opts.next = (opts.next < opts.page) ? opts.next : opts.page - 1;
								opts.force = true;

							} else {

								opts.next = (opts.next > opts.page) ? opts.next : opts.page + 1;

							}

						}

						turnMethods._addMotionPage.call(e.target);
						turnMethods._updateShadow.call(opts.turn);
					},

					// This event is called in context of flip

					_eventEnd: function(e, opts, turned) {

						var that = $(e.target),
							data = that.data().f,
							turn = opts.turn,
							dd = turn.data();

						if (turned) {

							var tpage = dd.tpage || dd.page;

							if (tpage == opts.next || tpage == opts.page) {
								delete dd.tpage;

								turnMethods._fitPage.call(turn, tpage || opts.next, true);
							}

						} else {

							turnMethods._removeMv.call(turn, opts.page);
							turnMethods._updateShadow.call(turn);
							turn.turn('update');

						}

					},

					// This event is called in context of flip

					_eventPressed: function(e) {

						var page,
							data = $(e.target).data().f,
							turn = data.opts.turn,
							turnData = turn.data(),
							pages = turnData.pages;

						turnData.mouseAction = true;

						turn.turn('update');

						return data.time = new Date().getTime();

					},

					// This event is called in context of flip

					_eventReleased: function(e, point) {

						var outArea,
							page = $(e.target),
							data = page.data().f,
							turn = data.opts.turn,
							turnData = turn.data();

						if (turnData.display == 'single') {
							outArea = (point.corner == 'br' || point.corner == 'tr') ?
								point.x < page.width() / 2 :
								point.x > page.width() / 2;
						} else {
							outArea = point.x < 0 || point.x > page.width();
						}

						if ((new Date()).getTime() - data.time < 200 || outArea) {

							e.preventDefault();
							turnMethods._turnPage.call(turn, data.opts.next);

						}

						turnData.mouseAction = false;

					},

					// This event is called in context of flip

					_flip: function(e) {

						e.stopPropagation();

						var opts = $(e.target).data().f.opts;

						opts.turn.trigger('turn', [opts.next]);

						if (opts.turn.data().opts.autoCenter) {
							opts.turn.turn('center', opts.next);
						}

					},

					//
					_touchStart: function() {
						var data = this.data();
						for (var page in data.pages) {
							if (has(page, data.pages) &&
								flipMethods._eventStart.apply(data.pages[page], arguments) === false) {
								return false;
							}
						}
					},

					//
					_touchMove: function() {
						var data = this.data();
						for (var page in data.pages) {
							if (has(page, data.pages)) {
								flipMethods._eventMove.apply(data.pages[page], arguments);
							}
						}
					},

					//
					_touchEnd: function() {
						var data = this.data();
						for (var page in data.pages) {
							if (has(page, data.pages)) {
								flipMethods._eventEnd.apply(data.pages[page], arguments);
							}
						}
					},

					// Calculate the z-index value for pages during the animation

					calculateZ: function(mv) {

						var i, page, nextPage, placePage, dpage,
							that = this,
							data = this.data(),
							view = this.turn('view'),
							currentPage = view[0] || view[1],
							total = mv.length - 1,
							r = {
								pageZ: {},
								partZ: {},
								pageV: {}
							},

							addView = function(page) {
								var view = that.turn('view', page);
								if (view[0]) r.pageV[view[0]] = true;
								if (view[1]) r.pageV[view[1]] = true;
							};

						for (i = 0; i <= total; i++) {
							page = mv[i];
							nextPage = data.pages[page].data().f.opts.next;
							placePage = data.pagePlace[page];
							addView(page);
							addView(nextPage);
							dpage = (data.pagePlace[nextPage] == nextPage) ? nextPage : page;
							r.pageZ[dpage] = data.totalPages - Math.abs(currentPage - dpage);
							r.partZ[placePage] = data.totalPages * 2 - total + i;
						}

						return r;
					},

					// Updates the z-index and display property of every page

					update: function() {

						var page,
							data = this.data();

						if (this.turn('animating') && data.pageMv[0] !== 0) {

							// Update motion

							var p, apage, fixed,
								pos = this.turn('calculateZ', data.pageMv),
								corner = this.turn('corner'),
								actualView = this.turn('view'),
								newView = this.turn('view', data.tpage);

							for (page in data.pageWrap) {

								if (!has(page, data.pageWrap))
									continue;

								fixed = data.pageObjs[page].hasClass('fixed');

								data.pageWrap[page].css({
									display: (pos.pageV[page] || fixed) ? '' : 'none',
									zIndex: (data.pageObjs[page].hasClass('hard') ?
										pos.partZ[page] :
										pos.pageZ[page]
									) || (fixed ? -1 : 0)
								});

								if ((p = data.pages[page])) {

									p.flip('z', pos.partZ[page] || null);

									if (pos.pageV[page])
										p.flip('resize');

									if (data.tpage) { // Is it turning the page to `tpage`?

										p.flip('hover', false).
										flip('disable',
											$.inArray(parseInt(page, 10), data.pageMv) == -1 &&
											page != newView[0] &&
											page != newView[1]);

									} else {

										p.flip('hover', corner === false).
										flip('disable', page != actualView[0] && page != actualView[1]);

									}

								}

							}

						} else {

							// Update static pages

							for (page in data.pageWrap) {

								if (!has(page, data.pageWrap))
									continue;

								var pageLocation = turnMethods._setPageLoc.call(this, page);

								if (data.pages[page]) {
									data.pages[page].
									flip('disable', data.disabled || pageLocation != 1).
									flip('hover', true).
									flip('z', null);
								}
							}
						}

						return this;
					},

					// Updates the position and size of the flipbook's shadow

					_updateShadow: function() {

						var view, view2, shadow,
							data = this.data(),
							width = this.width(),
							height = this.height(),
							pageWidth = (data.display == 'single') ? width : width / 2;

						view = this.turn('view');

						if (!data.shadow) {
							data.shadow = $('<div />', {
								'class': 'shadow',
								'css': divAtt(0, 0, 0).css
							}).
							appendTo(this);
						}

						for (var i = 0; i < data.pageMv.length; i++) {
							if (!view[0] || !view[1])
								break;

							view = this.turn('view', data.pages[data.pageMv[i]].data().f.opts.next);
							view2 = this.turn('view', data.pageMv[i]);

							view[0] = view[0] && view2[0];
							view[1] = view[1] && view2[1];
						}

						if (!view[0]) shadow = (data.direction == 'ltr') ? 1 : 2;
						else if (!view[1]) shadow = (data.direction == 'ltr') ? 2 : 1;
						else shadow = 3;

						switch (shadow) {
							case 1:
								data.shadow.css({
									width: pageWidth,
									height: height,
									top: 0,
									left: pageWidth
								});
								break;
							case 2:
								data.shadow.css({
									width: pageWidth,
									height: height,
									top: 0,
									left: 0
								});
								break;
							case 3:
								data.shadow.css({
									width: width,
									height: height,
									top: 0,
									left: 0
								});
								break;
						}

					},

					// Sets the z-index and display property of a page
					// It depends on the current view

					_setPageLoc: function(page) {

						var data = this.data(),
							view = this.turn('view'),
							loc = 0;


						if (page == view[0] || page == view[1])
							loc = 1;
						else if (
							(data.display == 'single' && page == view[0] + 1) ||
							(data.display == 'double' && page == view[0] - 2 || page == view[1] + 2)
						)
							loc = 2;

						if (!this.turn('animating'))
							switch (loc) {
								case 1:
									data.pageWrap[page].css({
										zIndex: data.totalPages,
										display: ''
									});
									break;
								case 2:
									data.pageWrap[page].css({
										zIndex: data.totalPages - 1,
										display: ''
									});
									break;
								case 0:
									data.pageWrap[page].css({
										zIndex: 0,
										display: (data.pageObjs[page].hasClass('fixed')) ? '' : 'none'
									});
									break;
							}

						return loc;
					},

					// Gets and sets the options

					options: function(options) {

						if (options === undefined) {

							return this.data().opts;

						} else {

							var data = this.data();

							// Set new values

							$.extend(data.opts, options);

							// Set pages

							if (options.pages)
								this.turn('pages', options.pages);

							// Set page

							if (options.page)
								this.turn('page', options.page);

							// Set display

							if (options.display)
								this.turn('display', options.display);

							// Set direction

							if (options.direction)
								this.turn('direction', options.direction);

							// Set size

							if (options.width && options.height)
								this.turn('size', options.width, options.height);

							// Add event listeners

							if (options.when)
								for (var eventName in options.when)
									if (has(eventName, options.when)) {
										this.unbind(eventName).
										bind(eventName, options.when[eventName]);
									}

							return this;
						}

					},

					// Gets the current version

					version: function() {

						return version;

					}
				},

				// Methods and properties for the flip page effect

				flipMethods = {

					// Constructor

					init: function(opts) {

						this.data({
							f: {
								disabled: false,
								hover: false,
								effect: (this.hasClass('hard')) ? 'hard' : 'sheet'
							}
						});

						this.flip('options', opts);

						flipMethods._addPageWrapper.call(this);

						return this;
					},

					setData: function(d) {

						var data = this.data();

						data.f = $.extend(data.f, d);

						return this;
					},

					options: function(opts) {

						var data = this.data().f;

						if (opts) {
							flipMethods.setData.call(this, {
								opts: $.extend({}, data.opts || flipOptions, opts)
							});
							return this;
						} else
							return data.opts;

					},

					z: function(z) {

						var data = this.data().f;

						data.opts['z-index'] = z;

						if (data.fwrapper)
							data.fwrapper.css({
								zIndex: z || parseInt(data.parent.css('z-index'), 10) || 0
							});

						return this;
					},

					_cAllowed: function() {

						var data = this.data().f,
							page = data.opts.page,
							turnData = data.opts.turn.data(),
							odd = page % 2;

						if (data.effect == 'hard') {

							return (turnData.direction == 'ltr') ? [(odd) ? 'r' : 'l'] : [(odd) ? 'l' : 'r'];

						} else {

							if (turnData.display == 'single') {

								if (page == 1)
									return (turnData.direction == 'ltr') ?
										corners['forward'] : corners['backward'];
								else if (page == turnData.totalPages)
									return (turnData.direction == 'ltr') ?
										corners['backward'] : corners['forward'];
								else
									return corners['all'];

							} else {

								return (turnData.direction == 'ltr') ?
									corners[(odd) ? 'forward' : 'backward'] :
									corners[(odd) ? 'backward' : 'forward'];

							}

						}

					},

					_cornerActivated: function(p) {

						var data = this.data().f,
							width = this.width(),
							height = this.height(),
							point = {
								x: p.x,
								y: p.y,
								corner: ''
							},
							csz = data.opts.cornerSize;

						if (point.x <= 0 || point.y <= 0 || point.x >= width || point.y >= height)
							return false;

						var allowedCorners = flipMethods._cAllowed.call(this);

						switch (data.effect) {
							case 'hard':

								if (point.x > width - csz)
									point.corner = 'r';
								else if (point.x < csz)
									point.corner = 'l';
								else
									return false;

								break;

							case 'sheet':

								if (point.y < csz)
									point.corner += 't';
								else if (point.y >= height - csz)
									point.corner += 'b';
								else
									return false;

								if (point.x <= csz)
									point.corner += 'l';
								else if (point.x >= width - csz)
									point.corner += 'r';
								else
									return false;

								break;
						}

						return (!point.corner || $.inArray(point.corner, allowedCorners) == -1) ?
							false : point;

					},

					_isIArea: function(e) {

						var pos = this.data().f.parent.offset();

						e = (isTouch && e.originalEvent) ? e.originalEvent.touches[0] : e;

						return flipMethods._cornerActivated.call(this, {
							x: e.pageX - pos.left,
							y: e.pageY - pos.top
						});

					},

					_c: function(corner, opts) {

						opts = opts || 0;

						switch (corner) {
							case 'tl':
								return point2D(opts, opts);
							case 'tr':
								return point2D(this.width() - opts, opts);
							case 'bl':
								return point2D(opts, this.height() - opts);
							case 'br':
								return point2D(this.width() - opts, this.height() - opts);
							case 'l':
								return point2D(opts, 0);
							case 'r':
								return point2D(this.width() - opts, 0);
						}

					},

					_c2: function(corner) {

						switch (corner) {
							case 'tl':
								return point2D(this.width() * 2, 0);
							case 'tr':
								return point2D(-this.width(), 0);
							case 'bl':
								return point2D(this.width() * 2, this.height());
							case 'br':
								return point2D(-this.width(), this.height());
							case 'l':
								return point2D(this.width() * 2, 0);
							case 'r':
								return point2D(-this.width(), 0);
						}

					},

					_foldingPage: function() {

						var data = this.data().f;

						if (!data)
							return;

						var opts = data.opts;

						if (opts.turn) {
							data = opts.turn.data();
							if (data.display == 'single')
								return (opts.next > 1 || opts.page > 1) ? data.pageObjs[0] : null;
							else
								return data.pageObjs[opts.next];
						}

					},

					_backGradient: function() {

						var data = this.data().f,
							turnData = data.opts.turn.data(),
							gradient = turnData.opts.gradients && (turnData.display == 'single' ||
								(data.opts.page != 2 && data.opts.page != turnData.totalPages - 1));

						if (gradient && !data.bshadow)
							data.bshadow = $('<div/>', divAtt(0, 0, 1)).
						css({
							'position': '',
							width: this.width(),
							height: this.height()
						}).
						appendTo(data.parent);

						return gradient;

					},

					type: function() {

						return this.data().f.effect;

					},

					resize: function(full) {

						var data = this.data().f,
							turnData = data.opts.turn.data(),
							width = this.width(),
							height = this.height();

						switch (data.effect) {
							case 'hard':

								if (full) {
									data.wrapper.css({
										width: width,
										height: height
									});
									data.fpage.css({
										width: width,
										height: height
									});
									if (turnData.opts.gradients) {
										data.ashadow.css({
											width: width,
											height: height
										});
										data.bshadow.css({
											width: width,
											height: height
										});
									}
								}

								break;
							case 'sheet':

								if (full) {
									var size = Math.round(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));

									data.wrapper.css({
										width: size,
										height: size
									});
									data.fwrapper.css({
										width: size,
										height: size
									}).
									children(':first-child').
									css({
										width: width,
										height: height
									});

									data.fpage.css({
										width: width,
										height: height
									});

									if (turnData.opts.gradients)
										data.ashadow.css({
											width: width,
											height: height
										});

									if (flipMethods._backGradient.call(this))
										data.bshadow.css({
											width: width,
											height: height
										});
								}

								if (data.parent.is(':visible')) {
									var offset = findPos(data.parent[0]);

									data.fwrapper.css({
										top: offset.top,
										left: offset.left
									});

									//if (data.opts.turn) {
									offset = findPos(data.opts.turn[0]);
									data.fparent.css({
										top: -offset.top,
										left: -offset.left
									});
									//}
								}

								this.flip('z', data.opts['z-index']);

								break;
						}

					},

					// Prepares the page by adding a general wrapper and another objects

					_addPageWrapper: function() {

						var att,
							data = this.data().f,
							turnData = data.opts.turn.data(),
							parent = this.parent();

						data.parent = parent;

						if (!data.wrapper)
							switch (data.effect) {
								case 'hard':

									var cssProperties = {};
									cssProperties[vendor + 'transform-style'] = 'preserve-3d';
									cssProperties[vendor + 'backface-visibility'] = 'hidden';

									data.wrapper = $('<div/>', divAtt(0, 0, 2)).
									css(cssProperties).
									appendTo(parent).
									prepend(this);

									data.fpage = $('<div/>', divAtt(0, 0, 1)).
									css(cssProperties).
									appendTo(parent);

									if (turnData.opts.gradients) {
										data.ashadow = $('<div/>', divAtt(0, 0, 0)).
										hide().
										appendTo(parent);

										data.bshadow = $('<div/>', divAtt(0, 0, 0));
									}

									break;
								case 'sheet':

									var width = this.width(),
										height = this.height(),
										size = Math.round(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));

									data.fparent = data.opts.turn.data().fparent;

									if (!data.fparent) {
										var fparent = $('<div/>', {
											css: {
												'pointer-events': 'none'
											}
										}).hide();
										fparent.data().flips = 0;
										fparent.css(divAtt(0, 0, 'auto', 'visible').css).
										appendTo(data.opts.turn);

										data.opts.turn.data().fparent = fparent;
										data.fparent = fparent;
									}

									this.css({
										position: 'absolute',
										top: 0,
										left: 0,
										bottom: 'auto',
										right: 'auto'
									});

									data.wrapper = $('<div/>', divAtt(0, 0, this.css('z-index'))).
									appendTo(parent).
									prepend(this);

									data.fwrapper = $('<div/>', divAtt(parent.offset().top, parent.offset().left)).
									hide().
									appendTo(data.fparent);

									data.fpage = $('<div/>', divAtt(0, 0, 0, 'visible')).
									css({
										cursor: 'default'
									}).
									appendTo(data.fwrapper);

									if (turnData.opts.gradients)
										data.ashadow = $('<div/>', divAtt(0, 0, 1)).
									appendTo(data.fpage);

									flipMethods.setData.call(this, data);

									break;
							}

						// Set size
						flipMethods.resize.call(this, true);

					},

					// Takes a 2P point from the screen and applies the transformation

					_fold: function(point) {

						var data = this.data().f,
							turnData = data.opts.turn.data(),
							o = flipMethods._c.call(this, point.corner),
							width = this.width(),
							height = this.height();

						switch (data.effect) {

							case 'hard':

								if (point.corner == 'l')
									point.x = Math.min(Math.max(point.x, 0), width * 2);
								else
									point.x = Math.max(Math.min(point.x, width), -width);

								var leftPos,
									shadow,
									gradientX,
									fpageOrigin,
									parentOrigin,
									totalPages = turnData.totalPages,
									zIndex = data.opts['z-index'] || totalPages,
									parentCss = {
										'overflow': 'visible'
									},
									relX = (o.x) ? (o.x - point.x) / width : point.x / width,
									angle = relX * 90,
									half = angle < 90;

								switch (point.corner) {
									case 'l':

										fpageOrigin = '0% 50%';
										parentOrigin = '100% 50%';

										if (half) {
											leftPos = 0;
											shadow = data.opts.next - 1 > 0;
											gradientX = 1;
										} else {
											leftPos = '100%';
											shadow = data.opts.page + 1 < totalPages;
											gradientX = 0;
										}

										break;
									case 'r':

										fpageOrigin = '100% 50%';
										parentOrigin = '0% 50%';
										angle = -angle;
										width = -width;

										if (half) {
											leftPos = 0;
											shadow = data.opts.next + 1 < totalPages;
											gradientX = 0;
										} else {
											leftPos = '-100%';
											shadow = data.opts.page != 1;
											gradientX = 1;
										}

										break;
								}

								parentCss[vendor + 'perspective-origin'] = parentOrigin;

								data.wrapper.transform('rotateY(' + angle + 'deg)' +
									'translate3d(0px, 0px, ' + (this.attr('depth') || 0) + 'px)', parentOrigin);

								data.fpage.transform('translateX(' + width + 'px) rotateY(' + (180 + angle) + 'deg)', fpageOrigin);

								data.parent.css(parentCss);

								if (half) {
									relX = -relX + 1;
									data.wrapper.css({
										zIndex: zIndex + 1
									});
									data.fpage.css({
										zIndex: zIndex
									});
								} else {
									relX = relX - 1;
									data.wrapper.css({
										zIndex: zIndex
									});
									data.fpage.css({
										zIndex: zIndex + 1
									});
								}

								if (turnData.opts.gradients) {
									if (shadow)
										data.ashadow.css({
											display: '',
											left: leftPos,
											backgroundColor: 'rgba(255,255,255,' + (0.5 * relX) + ')'
										}).
									transform('rotateY(0deg)');
									else
										data.ashadow.hide();

									data.bshadow.css({
										opacity: -relX + 1
									});

									if (half) {
										if (data.bshadow.parent()[0] != data.wrapper[0]) {
											data.bshadow.appendTo(data.wrapper);
										}
									} else {
										if (data.bshadow.parent()[0] != data.fpage[0]) {
											data.bshadow.appendTo(data.fpage);
										}
									}
									/*data.bshadow.css({
									  backgroundColor: 'rgba(0,0,0,'+(0.1)+')'
									})*/
									gradient(data.bshadow, point2D(gradientX * 100, 0), point2D((-gradientX + 1) * 100, 0),
										[
											[0, 'rgba(255,255,255,0.3)'],
											[1, 'rgba(255,255,255,0)']
										], 2);

								}

								break;
							case 'sheet':

								var that = this,
									a = 0,
									alpha = 0,
									beta,
									px,
									gradientEndPointA,
									gradientEndPointB,
									gradientStartVal,
									gradientSize,
									gradientOpacity,
									shadowVal,
									mv = point2D(0, 0),
									df = point2D(0, 0),
									tr = point2D(0, 0),
									folding = flipMethods._foldingPage.call(this),
									tan = Math.tan(alpha),
									ac = turnData.opts.acceleration,
									h = data.wrapper.height(),
									top = point.corner.substr(0, 1) == 't',
									left = point.corner.substr(1, 1) == 'l',

									compute = function() {

										var rel = point2D(0, 0);
										var middle = point2D(0, 0);

										rel.x = (o.x) ? o.x - point.x : point.x;

										if (!hasRot) {
											rel.y = 0;
										} else {
											rel.y = (o.y) ? o.y - point.y : point.y;
										}

										middle.x = (left) ? width - rel.x / 2 : point.x + rel.x / 2;
										middle.y = rel.y / 2;

										var alpha = A90 - Math.atan2(rel.y, rel.x),
											gamma = alpha - Math.atan2(middle.y, middle.x),
											distance = Math.max(0, Math.sin(gamma) * Math.sqrt(Math.pow(middle.x, 2) + Math.pow(middle.y, 2)));

										a = deg(alpha);

										tr = point2D(distance * Math.sin(alpha), distance * Math.cos(alpha));

										if (alpha > A90) {
											tr.x = tr.x + Math.abs(tr.y * rel.y / rel.x);
											tr.y = 0;
											if (Math.round(tr.x * Math.tan(PI - alpha)) < height) {
												point.y = Math.sqrt(Math.pow(height, 2) + 2 * middle.x * rel.x);
												if (top) point.y = height - point.y;
												return compute();
											}
										}

										if (alpha > A90) {
											var beta = PI - alpha,
												dd = h - height / Math.sin(beta);
											mv = point2D(Math.round(dd * Math.cos(beta)), Math.round(dd * Math.sin(beta)));
											if (left) mv.x = -mv.x;
											if (top) mv.y = -mv.y;
										}

										px = Math.round(tr.y / Math.tan(alpha) + tr.x);

										var side = width - px,
											sideX = side * Math.cos(alpha * 2),
											sideY = side * Math.sin(alpha * 2);
										df = point2D(
											Math.round((left ? side - sideX : px + sideX)),
											Math.round((top) ? sideY : height - sideY));

										// Gradients
										if (turnData.opts.gradients) {

											gradientSize = side * Math.sin(alpha);

											var endingPoint = flipMethods._c2.call(that, point.corner),
												far = Math.sqrt(Math.pow(endingPoint.x - point.x, 2) + Math.pow(endingPoint.y - point.y, 2)) / width;

											shadowVal = Math.sin(A90 * ((far > 1) ? 2 - far : far));

											gradientOpacity = Math.min(far, 1);


											gradientStartVal = gradientSize > 100 ? (gradientSize - 100) / gradientSize : 0;

											gradientEndPointA = point2D(
												gradientSize * Math.sin(alpha) / width * 100,
												gradientSize * Math.cos(alpha) / height * 100);


											if (flipMethods._backGradient.call(that)) {

												gradientEndPointB = point2D(
													gradientSize * 1.2 * Math.sin(alpha) / width * 100,
													gradientSize * 1.2 * Math.cos(alpha) / height * 100);

												if (!left) gradientEndPointB.x = 100 - gradientEndPointB.x;
												if (!top) gradientEndPointB.y = 100 - gradientEndPointB.y;

											}

										}

										tr.x = Math.round(tr.x);
										tr.y = Math.round(tr.y);

										return true;
									},

									transform = function(tr, c, x, a) {

										var f = ['0', 'auto'],
											mvW = (width - h) * x[0] / 100,
											mvH = (height - h) * x[1] / 100,
											cssA = {
												left: f[c[0]],
												top: f[c[1]],
												right: f[c[2]],
												bottom: f[c[3]]
											},
											cssB = {},
											aliasingFk = (a != 90 && a != -90) ? (left ? -1 : 1) : 0,
											origin = x[0] + '% ' + x[1] + '%';

										that.css(cssA).
										transform(rotate(a) + translate(tr.x + aliasingFk, tr.y, ac), origin);

										data.fpage.css(cssA).transform(
											rotate(a) +
											translate(tr.x + df.x - mv.x - width * x[0] / 100, tr.y + df.y - mv.y - height * x[1] / 100, ac) +
											rotate((180 / a - 2) * a),
											origin);

										data.wrapper.transform(translate(-tr.x + mvW - aliasingFk, -tr.y + mvH, ac) + rotate(-a), origin);

										data.fwrapper.transform(translate(-tr.x + mv.x + mvW, -tr.y + mv.y + mvH, ac) + rotate(-a), origin);

										if (turnData.opts.gradients) {

											if (x[0])
												gradientEndPointA.x = 100 - gradientEndPointA.x;

											if (x[1])
												gradientEndPointA.y = (100 - gradientEndPointA.y);

											cssB['box-shadow'] = '0 0 20px rgba(0,0,0,' + (0.5 * shadowVal) + ')';
											folding.css(cssB);

											gradient(data.ashadow,
												point2D(left ? 100 : 0, top ? 0 : 100),
												point2D(gradientEndPointA.x, gradientEndPointA.y),
												[
													[gradientStartVal, 'rgba(0,0,0,0)'],
													[((1 - gradientStartVal) * 0.8) + gradientStartVal, 'rgba(255,255,255,' + (0.2 * gradientOpacity) + ')'],







													[1, 'rgba(255,255,255,' + (0.2 * gradientOpacity) + ')']
												],








												3,
												alpha);

											if (flipMethods._backGradient.call(that))
												gradient(data.bshadow,
													point2D(left ? 0 : 100, top ? 0 : 100),









													point2D(gradientEndPointB.x, gradientEndPointB.y),
													[
														[0.6, 'rgba(255,255,255,0)'],
														[0.8, 'rgba(255,255,255,' + (0.3 * gradientOpacity) + ')'],
														[1, 'rgba(255,255,255,255)']
													],









													3);
										}

									};

								switch (point.corner) {
									case 'l':


										break;
									case 'r':


										break;
									case 'tl':
										point.x = Math.max(point.x, 1);
										compute();
										transform(tr, [1, 0, 0, 1], [100, 0], a);
										break;
									case 'tr':
										point.x = Math.min(point.x, width - 1);
										compute();
										transform(point2D(-tr.x, tr.y), [0, 0, 0, 1], [0, 0], -a);
										break;
									case 'bl':
										point.x = Math.max(point.x, 1);
										compute();
										transform(point2D(tr.x, -tr.y), [1, 1, 0, 0], [100, 100], -a);
										break;
									case 'br':
										point.x = Math.min(point.x, width - 1);
										compute();
										transform(point2D(-tr.x, -tr.y), [0, 1, 1, 0], [0, 100], a);
										break;
								}

								break;
						}

						data.point = point;

					},

					_moveFoldingPage: function(move) {

						var data = this.data().f;

						if (!data)
							return;

						var turn = data.opts.turn,
							turnData = turn.data(),
							place = turnData.pagePlace;

						if (move) {

							var nextPage = data.opts.next;

							if (place[nextPage] != data.opts.page) {

								if (data.folding)
									flipMethods._moveFoldingPage.call(this, false);

								var folding = flipMethods._foldingPage.call(this);

								folding.appendTo(data.fpage);
								place[nextPage] = data.opts.page;
								data.folding = nextPage;
							}

							turn.turn('update');

						} else {

							if (data.folding) {

								if (turnData.pages[data.folding]) {

									// If we have flip available

									var flipData = turnData.pages[data.folding].data().f;

									turnData.pageObjs[data.folding].
									appendTo(flipData.wrapper);

								} else if (turnData.pageWrap[data.folding]) {

									// If we have the pageWrapper

									turnData.pageObjs[data.folding].
									appendTo(turnData.pageWrap[data.folding]);

								}

								if (data.folding in place) {
									place[data.folding] = data.folding;
								}

								delete data.folding;

							}
						}
					},

					_showFoldedPage: function(c, animate) {

						var folding = flipMethods._foldingPage.call(this),
							dd = this.data(),
							data = dd.f,
							visible = data.visible;

						if (folding) {

							if (!visible || !data.point || data.point.corner != c.corner) {

								var corner = (
										data.status == 'hover' ||
										data.status == 'peel' ||
										data.opts.turn.data().mouseAction) ?
									c.corner : null;

								visible = false;

								if (trigger('start', this, [data.opts, corner]) == 'prevented')
									return false;

							}

							if (animate) {

								var that = this,
									point = (data.point && data.point.corner == c.corner) ?
									data.point : flipMethods._c.call(this, c.corner, 1);

								this.animatef({
									from: [point.x, point.y],
									to: [c.x, c.y],
									duration: 500,
									frame: function(v) {
										c.x = Math.round(v[0]);
										c.y = Math.round(v[1]);
										flipMethods._fold.call(that, c);
									}
								});

							} else {

								flipMethods._fold.call(this, c);

								if (dd.effect && !dd.effect.turning)
									this.animatef(false);

							}

							if (!visible) {

								switch (data.effect) {
									case 'hard':

										data.visible = true;
										flipMethods._moveFoldingPage.call(this, true);
										data.fpage.show();
										if (data.opts.shadows)
											data.bshadow.show();

										break;
									case 'sheet':

										data.visible = true;
										data.fparent.show().data().flips++;
										flipMethods._moveFoldingPage.call(this, true);
										data.fwrapper.show();
										if (data.bshadow)
											data.bshadow.show();

										break;
								}

							}

							return true;

						}

						return false;
					},

					hide: function() {

						var data = this.data().f,
							turnData = data.opts.turn.data(),
							folding = flipMethods._foldingPage.call(this);

						switch (data.effect) {
							case 'hard':

								if (turnData.opts.gradients) {
									data.bshadowLoc = 0;
									data.bshadow.remove();
									data.ashadow.hide();
								}

								data.wrapper.transform('');
								data.fpage.hide();

								break;
							case 'sheet':

								if ((--data.fparent.data().flips) === 0)
									data.fparent.hide();

								this.css({
									left: 0,
									top: 0,
									right: 'auto',
									bottom: 'auto'
								}).
								transform('');

								data.wrapper.transform('');

								data.fwrapper.hide();

								if (data.bshadow)
									data.bshadow.hide();

								folding.transform('');

								break;
						}

						data.visible = false;

						return this;
					},

					hideFoldedPage: function(animate) {

						var data = this.data().f;

						if (!data.point) return;

						var that = this,
							p1 = data.point,
							hide = function() {
								data.point = null;
								data.status = '';
								that.flip('hide');
								that.trigger('end', [data.opts, false]);
							};

						if (animate) {

							var p4 = flipMethods._c.call(this, p1.corner),
								top = (p1.corner.substr(0, 1) == 't'),
								delta = (top) ? Math.min(0, p1.y - p4.y) / 2 : Math.max(0, p1.y - p4.y) / 2,
								p2 = point2D(p1.x, p1.y + delta),
								p3 = point2D(p4.x, p4.y - delta);

							this.animatef({
								from: 0,
								to: 1,
								frame: function(v) {
									var np = bezier(p1, p2, p3, p4, v);
									p1.x = np.x;
									p1.y = np.y;
									flipMethods._fold.call(that, p1);
								},
								complete: hide,
								duration: 800,
								hiding: true
							});

						} else {

							this.animatef(false);
							hide();

						}
					},

					turnPage: function(corner) {

						var that = this,
							data = this.data().f,
							turnData = data.opts.turn.data();

						corner = {
							corner: (data.corner) ?
								data.corner.corner : corner || flipMethods._cAllowed.call(this)[0]
						};

						var p1 = data.point ||
							flipMethods._c.call(this,
								corner.corner,
								(data.opts.turn) ? turnData.opts.elevation : 0),
							p4 = flipMethods._c2.call(this, corner.corner);

						this.trigger('flip').
						animatef({
							from: 0,
							to: 1,
							frame: function(v) {

								var np = bezier(p1, p1, p4, p4, v);
								corner.x = np.x;
								corner.y = np.y;
								flipMethods._showFoldedPage.call(that, corner);

							},
							complete: function() {

								that.trigger('end', [data.opts, true]);

							},
							duration: turnData.opts.duration,
							turning: true
						});

						data.corner = null;
					},

					moving: function() {

						return 'effect' in this.data();

					},

					isTurning: function() {

						return this.flip('moving') && this.data().effect.turning;

					},

					corner: function() {

						return this.data().f.corner;

					},

					_eventStart: function(e) {

						var data = this.data().f,
							turn = data.opts.turn;

						if (!data.corner && !data.disabled && !this.flip('isTurning') &&
							data.opts.page == turn.data().pagePlace[data.opts.page]) {

							data.corner = flipMethods._isIArea.call(this, e);

							if (data.corner && flipMethods._foldingPage.call(this)) {

								this.trigger('pressed', [data.point]);
								flipMethods._showFoldedPage.call(this, data.corner);

								return false;

							} else
								data.corner = null;

						}

					},

					_eventMove: function(e) {

						var data = this.data().f;

						if (!data.disabled) {

							e = (isTouch) ? e.originalEvent.touches : [e];

							if (data.corner) {

								var pos = data.parent.offset();
								data.corner.x = e[0].pageX - pos.left;
								data.corner.y = e[0].pageY - pos.top;
								flipMethods._showFoldedPage.call(this, data.corner);

							} else if (data.hover && !this.data().effect && this.is(':visible')) {

								var point = flipMethods._isIArea.call(this, e[0]);

								if (point) {

									if ((data.effect == 'sheet' && point.corner.length == 2) || data.effect == 'hard') {
										data.status = 'hover';
										var origin = flipMethods._c.call(this, point.corner, data.opts.cornerSize / 2);
										point.x = origin.x;
										point.y = origin.y;
										flipMethods._showFoldedPage.call(this, point, true);
									}

								} else {

									if (data.status == 'hover') {
										data.status = '';
										flipMethods.hideFoldedPage.call(this, true);
									}

								}

							}

						}

					},

					_eventEnd: function() {

						var data = this.data().f,
							corner = data.corner;

						if (!data.disabled && corner) {
							if (trigger('released', this, [data.point || corner]) != 'prevented') {
								flipMethods.hideFoldedPage.call(this, true);
							}
						}

						data.corner = null;

					},

					disable: function(disable) {

						flipMethods.setData.call(this, {
							'disabled': disable
						});
						return this;

					},

					hover: function(hover) {

						flipMethods.setData.call(this, {
							'hover': hover
						});
						return this;

					},

					peel: function(corner, animate) {

						var data = this.data().f;

						if (corner) {

							if ($.inArray(corner, corners.all) == -1)
								throw turnError('Corner ' + corner + ' is not permitted');

							if ($.inArray(corner, flipMethods._cAllowed.call(this)) != -1) {

								var point = flipMethods._c.call(this, corner, data.opts.cornerSize / 2);

								data.status = 'peel';

								flipMethods._showFoldedPage.call(this, {
									corner: corner,
									x: point.x,
									y: point.y
								}, animate);

							}


						} else {

							data.status = '';

							flipMethods.hideFoldedPage.call(this, animate);

						}

						return this;
					}
				};


			// Processes classes

			function dec(that, methods, args) {

				if (!args[0] || typeof(args[0]) == 'object')
					return methods.init.apply(that, args);

				else if (methods[args[0]])
					return methods[args[0]].apply(that, Array.prototype.slice.call(args, 1));

				else
					throw turnError(args[0] + ' is not a method or property');

			}


			// Attributes for a layer

			function divAtt(top, left, zIndex, overf) {

				return {
					'css': {
						position: 'absolute',
						top: top,
						left: left,
						'overflow': overf || 'hidden',
						zIndex: zIndex || 'auto'
					}
				};

			}

			// Gets a 2D point from a bezier curve of four points

			function bezier(p1, p2, p3, p4, t) {

				var a = 1 - t,
					b = a * a * a,
					c = t * t * t;

				return point2D(Math.round(b * p1.x + 3 * t * a * a * p2.x + 3 * t * t * a * p3.x + c * p4.x),
					Math.round(b * p1.y + 3 * t * a * a * p2.y + 3 * t * t * a * p3.y + c * p4.y));

			}

			// Converts an angle from degrees to radians

			function rad(degrees) {

				return degrees / 180 * PI;

			}

			// Converts an angle from radians to degrees

			function deg(radians) {

				return radians / PI * 180;

			}

			// Gets a 2D point

			function point2D(x, y) {

				return {
					x: x,
					y: y
				};

			}

			// Webkit 534.3 on Android wrongly repaints elements that use overflow:hidden + rotation

			function rotationAvailable() {
				var parts;

				if ((parts = /AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent))) {
					var webkitVersion = parseFloat(parts[1]);
					return (webkitVersion > 534.3);
				} else {
					return true;
				}
			}

			// Returns the traslate value

			function translate(x, y, use3d) {

				return (has3d && use3d) ? ' translate3d(' + x + 'px,' + y + 'px, 0px) ' :
					' translate(' + x + 'px, ' + y + 'px) ';

			}

			// Returns the rotation value

			function rotate(degrees) {

				return ' rotate(' + degrees + 'deg) ';

			}

			// Checks if a property belongs to an object

			function has(property, object) {

				return Object.prototype.hasOwnProperty.call(object, property);

			}

			// Gets the CSS3 vendor prefix

			function getPrefix() {

				var vendorPrefixes = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
					len = vendorPrefixes.length,
					vendor = '';

				while (len--)
					if ((vendorPrefixes[len] + 'Transform') in document.body.style)
						vendor = '-' + vendorPrefixes[len].toLowerCase() + '-';

				return vendor;

			}

			// Detects the transitionEnd Event

			function getTransitionEnd() {

				var t,
					el = document.createElement('fakeelement'),
					transitions = {
						'transition': 'transitionend',
						'OTransition': 'oTransitionEnd',
						'MSTransition': 'transitionend',
						'MozTransition': 'transitionend',
						'WebkitTransition': 'webkitTransitionEnd'
					};

				for (t in transitions) {
					if (el.style[t] !== undefined) {
						return transitions[t];
					}
				}
			}

			// Gradients

			function gradient(obj, p0, p1, colors, numColors) {

				var j, cols = [];

				if (vendor == '-webkit-') {

					for (j = 0; j < numColors; j++)
						cols.push('color-stop(' + colors[j][0] + ', ' + colors[j][1] + ')');

					obj.css({
						'background-image': '-webkit-gradient(linear, ' +
							p0.x + '% ' +
							p0.y + '%,' +
							p1.x + '% ' +
							p1.y + '%, ' +
							cols.join(',') + ' )'
					});
				} else {

					p0 = {
						x: p0.x / 100 * obj.width(),
						y: p0.y / 100 * obj.height()
					};
					p1 = {
						x: p1.x / 100 * obj.width(),
						y: p1.y / 100 * obj.height()
					};

					var dx = p1.x - p0.x,
						dy = p1.y - p0.y,
						angle = Math.atan2(dy, dx),
						angle2 = angle - Math.PI / 2,
						diagonal = Math.abs(obj.width() * Math.sin(angle2)) + Math.abs(obj.height() * Math.cos(angle2)),
						gradientDiagonal = Math.sqrt(dy * dy + dx * dx),
						corner = point2D((p1.x < p0.x) ? obj.width() : 0, (p1.y < p0.y) ? obj.height() : 0),
						slope = Math.tan(angle),
						inverse = -1 / slope,
						x = (inverse * corner.x - corner.y - slope * p0.x + p0.y) / (inverse - slope),
						c = {
							x: x,
							y: inverse * x - inverse * corner.x + corner.y
						},
						segA = (Math.sqrt(Math.pow(c.x - p0.x, 2) + Math.pow(c.y - p0.y, 2)));

					for (j = 0; j < numColors; j++)
						cols.push(' ' + colors[j][1] + ' ' + ((segA + gradientDiagonal * colors[j][0]) * 100 / diagonal) + '%');

					obj.css({
						'background-image': vendor + 'linear-gradient(' + (-angle) + 'rad,' + cols.join(',') + ')'
					});
				}
			}


			// Triggers an event

			function trigger(eventName, context, args) {

				var event = $.Event(eventName);
				context.trigger(event, args);
				if (event.isDefaultPrevented())
					return 'prevented';
				else if (event.isPropagationStopped())
					return 'stopped';
				else
					return '';
			}

			// JS Errors

			function turnError(message) {

				function TurnJsError(message) {
					this.name = "TurnJsError";
					this.message = message;
				}

				TurnJsError.prototype = new Error();
				TurnJsError.prototype.constructor = TurnJsError;
				return new TurnJsError(message);

			}

			// Find the offset of an element ignoring its transformation

			function findPos(obj) {

				var offset = {
					top: 0,
					left: 0
				};

				do {
					offset.left += obj.offsetLeft;
					offset.top += obj.offsetTop;
				} while ((obj = obj.offsetParent));

				return offset;

			}

			// Checks if there's hard page compatibility
			// IE9 is the only browser that does not support hard pages

			function hasHardPage() {
				return (navigator.userAgent.indexOf('MSIE 9.0') == -1);
			}

			// Request an animation

			window.requestAnim = (function() {
				return window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					function(callback) {
						window.setTimeout(callback, 1000 / 60);
					};

			})();

			// Extend $.fn

			$.extend($.fn, {

				flip: function() {
					return dec($(this[0]), flipMethods, arguments);
				},

				turn: function() {
					return dec($(this[0]), turnMethods, arguments);
				},

				transform: function(transform, origin) {

					var properties = {};

					if (origin)
						properties[vendor + 'transform-origin'] = origin;

					properties[vendor + 'transform'] = transform;

					return this.css(properties);

				},

				animatef: function(point) {

					var data = this.data();

					if (data.effect)
						data.effect.stop();

					if (point) {

						if (!point.to.length) point.to = [point.to];
						if (!point.from.length) point.from = [point.from];

						var diff = [],
							len = point.to.length,
							animating = true,
							that = this,
							time = (new Date()).getTime(),
							frame = function() {

								if (!data.effect || !animating)
									return;

								var v = [],
									timeDiff = Math.min(point.duration, (new Date()).getTime() - time);

								for (var i = 0; i < len; i++)
									v.push(data.effect.easing(1, timeDiff, point.from[i], diff[i], point.duration));

								point.frame((len == 1) ? v[0] : v);

								if (timeDiff == point.duration) {
									delete data['effect'];
									that.data(data);
									if (point.complete)
										point.complete();
								} else {
									window.requestAnim(frame);
								}
							};

						for (var i = 0; i < len; i++)
							diff.push(point.to[i] - point.from[i]);

						data.effect = $.extend({
							stop: function() {
								animating = false;
							},
							easing: function(x, t, b, c, data) {
								return c * Math.sqrt(1 - (t = t / data - 1) * t) + b;
							}
						}, point);

						this.data(data);

						frame();

					} else {

						delete data['effect'];

					}
				}
			});

			// Export some globals

			$.isTouch = isTouch;
			$.mouseEvents = mouseEvents;
			$.cssPrefix = getPrefix;
			$.cssTransitionEnd = getTransitionEnd;
			$.findPos = findPos;

			
			
			
			
			
			
			
//			right
			
			$(".head").on('click', function(e) {
				$(this).siblings().slideDown();
				$(this).parent().siblings().children('.body').slideUp();
			});
			$(".right-content .item").on('click', function(e) {
				e.preventDefault();
				$(this).addClass('activei');
				$(this).siblings().removeClass('activei');
			});
			
			
//			Book
			
			function next() {
				if (!($('.book-page:nth-child(1)').hasClass('flip'))) {
					$('.book-page:nth-child(1)').addClass('flip');
				}
			}
			$('.book-page:nth-child(1) .front').click(function(e) {
				e.preventDefault();
				$('.book-page:nth-child(1)').addClass('flip');
				$('#book').removeClass('flipbookclose');
				$('#book').addClass('flipbook');
				$('.black-bg').addClass('active');
			});
			$('.btn').click(function() {
				$('.book-page:nth-child(1)').removeClass('flip');
				$('#book').removeClass('flipbook');
			});
			
			
			var x = $('.cpbook').width();
			var y = $('.cpbook').height();
			var bottom = $(window).height() - $('.cpbook').height();
			var z = bottom - $('.cpbook').offset.top;
			$('#book').css({
				'width':x,
				'height':y,
			});
			
			$(window).resize(function(){
				var x = $('.cpbook').width();
				var y = $('.cpbook').height();
				var bottom = $(window).height() - $('.cpbook').height();
				var z = bottom - $('.cpbook').offset.top;
				$('#book').css({
					'width':x,
					'height':y,
				});
			});
//			
			
			
			$('#book').click(function(){
			var lw = $(window).width()-$('.cpbook').offset().left-$('.cpbook').width()+15;
				$(this).css({
					'right':lw,
				});
			});
		
			function getViewportOffset($e) {
			  var $window = $(window),
				scrollLeft = $window.scrollLeft(),
				scrollTop = $window.scrollTop(),
				offset = $e.offset(),
				rect1 = { x1: scrollLeft, y1: scrollTop, x2: scrollLeft + $window.width(), y2: scrollTop + $window.height() },
				rect2 = { x1: offset.left, y1: offset.top, x2: offset.left + $e.width(), y2: offset.top + $e.height() };
			  return {
				left: offset.left - scrollLeft,
				top: offset.top - scrollTop,
				insideViewport: rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1
			  };
			}
			   var viewportOffset = getViewportOffset($(".cpbook"));
				$('#book').click(function(){
			   var viewportOffset = getViewportOffset($(".cpbook"));
					var c =$(window).height()-viewportOffset.top - $('.cpbook').height() +20 ;
					$(this).css({
						'bottom':c,
					});
				});
			
//			close
			
			$(document).click(function(e) {
				e.preventDefault();
				if($(e.target).closest('#book').length === 0){
					$('.book-page:nth-child(1)').removeClass('flip');
					$('#book').removeClass('flipbook');
					$('#book').addClass('flipbookclose');
					$('.black-bg').removeClass('active');
				}
			});
			
			
			
			var lp = $(window).height() ;
			var	lh = (lp*.87);
			var lw = (lp*.69);
			$('.back .book-wrapper img').css({
				height:lh,
			});
			$('.pages').turn({
				
				duration: 1500,
				width:lw,
				height: lh,
				turnCorners: "bl,br",
				elevation: 300,
				when: {
					turned: function(e, page) {
						console.log('Current view: ', $(this).turn('view'));
					}
				}
			});
			
				
			
		})(jQuery);
