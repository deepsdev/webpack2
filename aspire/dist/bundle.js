/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var oldtab = 'tab_1';
$(document).ready(function() {
	$("."+oldtab).slideDown();
	if($(document).width()< 765){
		$(".topBanner").css({'height':'auto'});
	}else {
		$(".topBanner").css({'height':$(window).height()});
	}
	/*if($(document).width()<= 1024){
		$('#cmn-video-demo3__container').css({'height':'auto'});
	}else {
		$('#cmn-video-demo3__container').css({'height':$(window).height()-170});
	}*/
	/*if($(document).width()> 990){
		$(".subNav").css({'height':$(window).height()});
	}else {
		$(".subNav").css({'height':'auto'});
	}*/
	$('.html5lightbox').click(function(){
		$("video").each(function(){
			$(this).get(0).pause();
		});
	});
	$(document).on("click","#html5-close img",function() {
		$("video").each(function(){
			$(this).get(0).play();
		});
    });
});

window.onload=function(){
	$('.pageDesc .pageDescWrap:last-child').css({'min-height':$(window).height()-100});
	//$("body").append("<div id='mobileLinks' class='mobileNav'>"+$("nav .navLinks").html()+"</div>" );
	//$( "#mobileLinks" ).prepend($(".userWrap").clone());
	
	
	/*$('html, body').stop().animate({
		scrollTop:0
	}, 1500,'easeInOutExpo',function(){
		
	});*/
	//$('.subNav li').eq(1).trigger('click');
//	$('.pageTab span:first-child').addClass('active');
	$('.subNav li').eq(1).addClass('active');
	$('.'+oldtab+' .setTab').each(function(index, element) {
		var offset = $(this).offset();
		$(this).attr('offsettop',(offset.top-100));
		$('.'+oldtab+' .pageTab span:first-child').addClass('active');
	});
	
	sliderInit();

};
$(window).resize(function() {
	
	$('.pageDesc .pageDescWrap:last-child').css({'min-height':$(window).height()-100});
	
	if($(document).width()< 765){
		$(".topBanner").css({'height':'auto'});
	}else {
		$(".topBanner").css({'height':$(window).height()});
	}
	/*if($(document).width()<= 1024){
		$('#cmn-video-demo3__container').css({'height':'auto'});
	}else {
		$('#cmn-video-demo3__container').css({'height':$(window).height()-170});
	}*/


	/*if($(document).width()> 990){
		$(".subNav").css({'height':$(window).height()});
	}else {
		$(".subNav").css({'height':'auto'});
	}*/

	/*if($(document).width()< 765){
	}else {
		if(!$(".menuIcon").hasClass('openNav')){
			$(".menuIcon").trigger('click');
		}
	}*/
	
	
	if($(window).scrollTop() > $(window).height()){
		$(".go_to_top").show();
	}else {
		$(".go_to_top").hide();
	}
	if($(window).scrollTop() >= $(window).height()){
		$(".subNav, .subTabWrap").addClass('sticky');
	}else {
		$(".subNav, .subTabWrap").removeClass('sticky');
	}
	
	$('.'+oldtab).slideDown(1000,function(){
		$('.'+oldtab+' .setTab').each(function(index, element) {
			var offset = $(this).offset();
			$(this).attr('offsettop',(offset.top-80));
		});
	});
	
	sliderInit();
	
});

$(".menuIcon").click(function(){
	var thisIcon = $(this);
	if($(document).width()< 765){
		if(thisIcon.hasClass('openNav')){
			$("body").css({'position':'absolute','width':$(document).width()});
			$("body").animate({
			right: 220,
			}, 200, function() {
			// Animation complete.
			});
			$("header").css({'width':'100%', 'left':'auto'});
			$("header").animate({
			paddingRight: 220,
			}, 200, function() {
			// Animation complete.
			});
			$(".go_to_top").animate({
			right: 235,
			}, 200, function() {
			// Animation complete.
			});
			$(".mobileNav").css({'display':'block'});
			$(".mobileNav").animate({
			right: 0,
			}, 200, function() {
			// Animation complete.
				$(".menuIcon").removeClass('openNav')
			});	
		}else {
			$("body").css({'position':'absolute','width':$(document).width()});
			$("body").animate({
			right: 0,
			}, 200, function() {
			// Animation complete.
				$(this).removeAttr('style');
			});
			$(".go_to_top").animate({
			right: 20,
			}, 200, function() {
			// Animation complete.
			});
			$("header").animate({
			paddingRight: 0,
			}, 200, function() {
			// Animation complete.
				$("header").css({'width':'auto', 'left':'0'});
			});
			$(".mobileNav").animate({
			right: '-220',
			}, 200, function() {
			// Animation complete.
				//$(this).css({'display':'none'});
				$(".menuIcon").addClass('openNav')
			});
				
					}
	}else {
		if(thisIcon.hasClass('openNav')){
			$('nav').animate({
				marginTop: 0,
			}, 500, function() {
			// Animation complete.
				$(".menuIcon").removeClass('openNav')
			});
		}else {
			$('nav').animate({
				marginTop: -71,
			}, 500, function() {
			// Animation complete.
				$(".menuIcon").addClass('openNav')
			});
		}
	}
});
//$(window).height()
$(window).scroll(function() {
	if($(window).scrollTop() > $(window).height()-10){
		$(".go_to_top").show();
	}else {
		$(".go_to_top").hide();
	}
	if($(window).scrollTop() > $(window).height()){
		$(".subNav, .subTabWrap").addClass('sticky');
	}else {
		$(".subNav, .subTabWrap").removeClass('sticky');
	}
	
	setTabAction();
	
});
$(".go_to_top").click(function(){
	$('html, body').stop().animate({
		scrollTop:0
	}, 1500,'easeInOutExpo',function(){
		$(".go_to_top").hide();
	});
});

$(".down_arrow").click(function(){
	$('html, body').stop().animate({
		scrollTop:$(window).height(),
	}, 1500,'easeInOutExpo',function(){
		
	});
});
$('.videoSmall').click(function(){
	$(".videoPlayerExpert").empty();
});
$(".videoThumb").click(function(){
	$(".videoPlayerExpert").empty();
	$(this).parents('.rightDesc').find('.videoPlayerExpert').html('<video controls loop autobuffer autoplay preload="auto" class="fullVideo margin_t_20" ><source src="'+$(this).attr('rel')+'" type="video/mp4" />  <p>THIS VIDEO IS NOT SUPPORTING IN YOUR BROWSER</p></video><div class="closeBtn">Close</div>');
	if($(document).width()< 765){
		$(this).parents('.rightDesc').find('.videoPlayerExpert').css({'bottom':0});
	}
});

$( document ).delegate( ".videoPlayerExpert .closeBtn", "click", function() {
	$(".videoPlayerExpert").empty().css({'bottom':'auto'});; 
});

$('.subNav li').click(function(){
	var thisRel = $(this).attr('rel');
	if(!$(this).hasClass('active') && !$(this).hasClass('homeSocial')){
		$('.subNav li').removeClass('active');
		$(this).addClass('active');
		$('.'+oldtab).slideUp(1000,function(){
			$('.'+oldtab+' .pageTab span').removeClass('active');
		});
		$('.'+thisRel).slideDown(1000,function(){
			$('.'+thisRel+' .setTab').each(function(index, element) {
				var offset = $(this).offset();
				$(this).attr('offsettop',(offset.top-100));
				$('.'+thisRel+' .pageTab span:first-child').trigger('click').addClass('active');
			});
			
			
		});
		//$('.'+thisRel+' .pageTab span').eq(0).trigger('click');
		/*$('html, body').stop().animate({
			scrollTop:$('.'+thisRel+' .pageTab span').attr('rel'),
		}, 1500,'easeInOutExpo',function(){
			
		});*/
		sliderInit();
		oldtab = $(this).attr('rel');
	}
});

$('.pageTab span').click(function(){
	//alert($(this).index());
	$('html, body').stop().animate({
		scrollTop:$("."+oldtab+" .setTab").eq($(this).index()).attr('offsettop'),	
	}, 1500,'easeInOutExpo',function(){
		
	});
	
});
function setTabAction(){
	var scrollEnd = ($('#mainWrap').height()-$(window).height());
	var setTop = $(window).scrollTop();
	$("."+oldtab+" .setTab").each(function(index, element) {
		if(setTop >= ($(this).attr('offsettop')-20)){
			$('.'+oldtab+' .pageTab span').removeClass('active');
			$('.'+oldtab+' .pageTab span').eq( $(this).attr('rel') ).addClass('active');
		}
		/*if(setTop >= scrollEnd){
			$('.'+oldtab+' .pageTab span').removeClass('active');
			$('.'+oldtab+' .pageTab span:last-child').addClass('active');
		}*/
	});
}

function sliderInit(){
	$('.blogSlider').cycle('destroy');
	$('.blogSlider li').removeAttr('style');
	$('.blogSlider li').each(function(index, element) {
		newWidth = $(this).parent().width();
		$(this).width(newWidth);
	});
	
	
	$('.blogSlider').each(function(){
        var nextBtn=$(this).parent().find('.blogSliderNext');
		var prevBtn=$(this).parent().find('.blogSliderPrev');
		if($(this).find('li').length == 1){
			$(this).parent().find('.blogSliderPrev').addClass('disable');
			$(this).parent().find('.blogSliderNext').addClass('disable');
			
			//console.log();
			$(this).animate({height: $(this).find('li').height()});
			$(this).parent().animate({height: $(this).find('li').height()});
		}
        $(this).cycle({ 
			fx:     'scrollHorz',
			timeout: 0, 
			nowrap: 1,
            next: nextBtn,
			prev: prevBtn,
			before: function(currSlideElement, nextSlideElement, options, forwardFlag) {
				var container = $(this).parent();
				container.css('height', Math.max(container.height(), $(nextSlideElement).height()));
				$(this).parent().animate({height: $(nextSlideElement).height()});
				$(this).parent().parent().animate({height: $(nextSlideElement).height()});
//				console.log(options.currSlide+'                        '+options.nextSlide);
				if(options.currSlide == 0){
					$(this).parent().parent().find('.blogSliderPrev').addClass('disable');
				}else {
					$(this).parent().parent().find('.blogSliderPrev').removeClass('disable');
				}
			},
			after: function(currSlideElement, nextSlideElement, options, forwardFlag) {
				if(options.currSlide == 0){
					$(this).parent().parent().find('.blogSliderPrev').addClass('disable');
				}else {
					$(this).parent().parent().find('.blogSliderPrev').removeClass('disable');
				}
				if(options.nextSlide == 0){
					$(this).parent().parent().find('.blogSliderNext').addClass('disable');
				}else {
					$(this).parent().parent().find('.blogSliderNext').removeClass('disable');
				}
			},
        });

    });
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?url=false!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?url=false!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);
__webpack_require__(1);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(3)
var ieee754 = __webpack_require__(7)
var isArray = __webpack_require__(8)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "\r\nhtml, body {\r\n\tmargin: 0px;\r\n\tpadding:0px; \r\n\theight:100%;\r\n\tmin-height:100%;\r\n\r\n}\r\nbody {\r\n\tfont-family:Arial, Helvetica, sans-serif;\r\n\tfont-family:\"ERASLGHT\";\r\n\tfont-family:\"ERASMD\";\r\n\tfont-weight:normal;\r\n\tfont-size:16px;\r\n\tbackground:#FFFFFF;\r\n\tcolor:#575757;\r\n\tcolor:#333333;\r\n\tfont-size:18px;\r\n\tline-height:28px;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6,p,a,em,span,ul,li,ol,img,form,div {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tlist-style:none;\r\n\tfont-style:normal;\r\n\tfont-weight:normal;\r\n\tborder:none;\r\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\r\n\t-webkit-tap-highlight-color: transparent; \r\n}\r\ninput, select, option, textarea {\r\n\toutline:none;\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n\tfont-family:\"SourceSansPro-Regular\";\r\n\tfont-size:13px;\r\n\t\tfont-size:15px;\r\n /* -webkit-appearance: none;\r\n  -webkit-border-radius: 0;*/\r\n\r\n}\r\ninput[type=\"text\"], input[type=\"password\"], input[type=\"button\"], input[type=\"submit\"], textarea, input[type=\"file\"], .upload  {\r\n\tbackground:#FFFFFF;\r\n\t-webkit-border-radius: 5px;\r\n\tborder-radius: 5px;\r\n\tresize:none;\r\n\tborder:none;\r\n\tpadding:0px 5px;\r\n}\r\nheader, nav, section, article, footer, address {   \r\n    display: block;   \r\n}\r\na {\r\n\ttext-decoration:none;\r\n}\r\na:focus { outline: none; }\r\na:hover {\r\n\ttext-decoration:none;\r\n}\r\n#mainWrap {\r\n\tmargin:0 auto;\r\n\tposition:relative;\r\n\twidth:100%;\r\n}\r\n.intro {\r\n\tbackground:#f5f5f5;\r\n}\r\n.innerWrap {\r\n/*\twidth:1004px;*/\r\n\tmargin:0 auto;\r\n\tposition:relative;\r\n}\r\n/* INTRO PAGE */\r\n.intro header {\r\n\tbackground:#FFFFFF;\r\n\theight:83px;\r\n\tborder-bottom:1px solid #ded4e6\t\r\n}\r\n.continue {\r\n\tfloat:right;\r\n\tbackground:#333333;\r\n\theight:53px;\r\n\topacity:0.8;\r\n\tline-height:53px;\r\n\tpadding:0px 20px;\r\n\tcolor:#ffffff;\r\n\tfont-family:\"ERASMD\";\r\n\tfont-size:20px;\r\n\tmargin-top:-150px;\r\n\ttext-transform:uppercase;\r\n}\r\n.continue a{\r\n\tcolor:#ffffff;\r\n}\r\n.overlay{\r\nposition:relative;\r\n    top:0;\r\n    left:0;\r\n    z-index:1;\r\n}\r\n.intro header .logo {\r\n\theight:83px;\r\n\tfloat:left;\r\n\tmargin-left:35px;\r\n}\r\n.intro header .logo img {\r\n\tmargin-top:6px;\r\n}\r\n.intro section {\r\n\tposition:fixed;\r\n\tleft:10px;\r\n\tright:10px;\r\n\ttop:94px;\r\n\tbottom:30px;\r\n\ttext-align:center;\t\r\n}\r\n.introVideo {\r\n\twidth:100%;\r\n\theight:auto;\r\n}\r\n\r\n/* HOME PAGE */\r\n.home section {\r\n\tposition:fixed;\r\n\tleft:0;\r\n\tright:0;\r\n\ttop:0;\r\n\tbottom:0;\r\n\tbackground-image:url(/images/menu-default.png);\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-size:cover;\r\n}\r\n.home .homeNav {\r\n\tposition:absolute;\r\n\tleft:200px;\r\n\ttop:0;\r\n\tbottom:0;\r\n\twidth:240px;\r\n}\r\n.home .homeNav .homeLogo {\r\n\theight:100px;\r\n\tline-height:100px;\r\n\ttext-align:center;\r\n\tbackground:#FFF;\r\n}\r\n.home .homeNav .homeLogo img {\r\n\tvertical-align:middle;\r\n}\r\n.home .homeNav .navList {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\tright:0;\r\n\ttop:50%;\r\n\tmargin-top:-150px;\r\n\theight:300px;\r\n}\r\n.home .homeNav .navList li {\r\n\tpadding:0px 30px;\r\n\tposition:relative;\r\n}\r\n.home .homeNav .navList a {\r\n\tfont-family:\"ERASMD\";\r\n\tfont-size:38px;\r\n\tcolor:#FFFFFF;\r\n\theight:60px;\r\n\tline-height:60px;\r\n\tdisplay:block;\r\n\tfont-weight:900;\r\n}\r\n.home .homeNav .navList li:hover a.hover {\r\n\twidth:100%;\r\n}\r\n.home .homeNav .navList a.hover {\r\n\tposition:absolute;\r\n\tleft:30px;\r\n\ttop:0;\r\n\tcolor:#771faf;\r\n\ttext-shadow: 0 0 1px #771faf;\r\n\twidth:0%;\r\n\twhite-space:nowrap;\r\n\toverflow:hidden;\r\n\t-moz-transition:all 1s cubic-bezier(0.77, 0, 0.175, 1);\r\n\t-o-transition:all 1s cubic-bezier(0.77, 0, 0.175, 1);\r\n\t-webkit-transition:all 1s cubic-bezier(0.77, 0, 0.175, 1);\r\n\ttransition:all 1s cubic-bezier(0.77, 0, 0.175, 1);\r\n}\r\n.home .homeNav .homeSocial {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\tright:0;\r\n\tbottom:0;\r\n\tpadding:20px 20px 10px;\r\n\tbackground:#fff;\r\n\ttext-align:center;\r\n}\r\n.home .homeNav .homeSocial a, .homeSocial_1 a {\r\n\tdisplay:inline-block;\r\n\twidth:30px;\r\n\theight:30px;\r\n\tbackground-image:url(images/social_icon.png);\r\n\tbackground-repeat:no-repeat;\r\n\tmargin:0px 5px;\r\n}\r\n.home .homeNav .homeSocial a.fb, .homeSocial_1 a.fb {\r\n\tbackground-position:0px 0px;\r\n}\r\n.home .homeNav .homeSocial a.tw, .homeSocial_1 a.tw {\r\n\tbackground-position:-30px 0px;\r\n}\r\n.home .homeNav .homeSocial a.li, .homeSocial_1 a.li {\r\n\tbackground-position:-60px 0px;\r\n}\r\n.home .homeNav .homeSocial a.yt, .homeSocial_1 a.yt {\r\n\tbackground-position:-90px 0px;\r\n}\r\n\r\n#menu-img-container {\r\n    height: 100%;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 0;\r\n}\r\n.menu-img{\r\n\tposition:absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n\tright:0;\r\n\tbottom:0;\r\n\topacity:0;\r\n\tz-index:1;\r\n\t\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-size:cover;\r\n\t-moz-transition:opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n\t-o-transition:opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n\t-webkit-transition:opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n\ttransition:opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)\r\n}\r\n\r\n.menu-img.show{\r\n\topacity:1;\r\n\t-moz-transition:opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n\t-o-transition:opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n\t-webkit-transition:opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n\ttransition:opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n\tz-index:2\r\n}\r\n.img-1 {\r\n\tbackground-image:url(images/menu-scene-1.jpg);\r\n}\r\n.img-2 {\r\n\tbackground-image:url(images/menu-scene-2.jpg);\r\n}\r\n.img-3 {\r\n\tbackground-image:url(images/menu-scene-3.jpg);\r\n}\r\n.img-4 {\r\n\tbackground-image:url(images/menu-scene-4.jpg);\r\n}\r\n.img-5 {\r\n\tbackground-image:url(images/menu-scene-5.jpg);\r\n}\r\n\r\n/* HEADER */\r\n\r\n\r\nheader {\r\n}\r\nnav {\r\n\tposition:fixed;\r\n\tleft:0px;\r\n\tright:0px;\r\n\ttop:0px;\r\n\theight:71px;\r\n\tbackground:#fdfdfd;\r\n\tz-index:100;\r\n\tborder-bottom:3px solid #ffdb0d;\r\n\ttext-align:center;\r\n\tmargin-top:-71px;\t\r\n}\r\nnav a {\r\n\tdisplay:inline-block;\r\n\theight:71px;\r\n\tline-height:71px;\r\n\tfont-family:\"ERASDEMI\";\r\n\tfont-size:21px;\r\n\tvertical-align:middle;\r\n\tpadding:0px 40px;\r\n\tcolor:#701eae;\r\n\r\n\r\n}\r\nnav a.active, nav a:hover {\r\n\tcolor:#fff;\r\n\tbackground: #701eae;\r\n\tbackground: -moz-linear-gradient(left, #701eae 0%, #a523a7 100%);\r\n\tbackground: -webkit-linear-gradient(left, #701eae 0%,#a523a7 100%);\r\n\tbackground: linear-gradient(to right, #701eae 0%,#a523a7 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#701eae', endColorstr='#a523a7',GradientType=1 );\t\r\n}\r\nnav a:first-child.active, nav a:first-child:hover {\r\n\tbackground:none;\r\n}\r\n.menuIcon {\r\n\t\r\n\tbackground:#ffdb0d;\r\n\tcursor:pointer;\r\n\tposition:absolute;\r\n\tright:10px;\r\n\t padding: 25px 0px;\r\n\ttext-align:center;\r\n\tline-height:normal;\r\n\twidth:50px;\r\n}\r\n\r\n.menuIcon .arrow {\r\n\tdisplay:inline-block;\r\n\twidth:20px;\r\n\theight:6px;\r\n\tbackground:none;\r\n\t transform: rotate(450deg);\r\n}\r\n\r\n.menuIcon .arrow:after {\r\n\tcontent:'';\t\r\n\twidth:20px;\r\n\theight:3px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\tfloat:left;\r\n\tmargin-top:-3px;\r\n\t\r\n\t-moz-transform: rotate(45deg);\r\n\t-webkit-transform: rotate(45deg);\r\n\t-o-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n\t\r\n}\r\n.menuIcon .arrow:before {\r\n\tcontent:'';\t\r\n\twidth:20px;\r\n\theight:3px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\tfloat:left;\r\n\t\r\n\t-moz-transform: rotate(-45deg);\r\n\t-webkit-transform: rotate(-45deg);\r\n\t-o-transform: rotate(-45deg);\r\n\t-ms-transform: rotate(-45deg);\r\n\ttransform: rotate(-45deg);\r\n\r\n}\r\n.menuIcon.openNav .arrow {\r\n\tdisplay:inline-block;\r\n\twidth:25px;\r\n\theight:2px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\t\r\n\t/*float:left;*/\r\n}\r\n\r\n.menuIcon.openNav .arrow:after {\r\n\tcontent:'';\t\r\n\twidth:25px;\r\n\theight:2px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\tfloat:left;\r\n\tmargin-top:7px;\r\n\t-moz-transform: rotate(0deg);\r\n\t-webkit-transform: rotate(0deg);\r\n\t-o-transform: rotate(0deg);\r\n\t-ms-transform: rotate(0deg);\r\n\ttransform: rotate(0deg);\r\n}\r\n.menuIcon.openNav .arrow:before {\r\n\tcontent:'';\t\r\n\twidth:25px;\r\n\theight:2px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\tfloat:left;\r\n\tmargin-top:-7px;\r\n\t\t-moz-transform: rotate(0deg);\r\n\t-webkit-transform: rotate(0deg);\r\n\t-o-transform: rotate(0deg);\r\n\t-ms-transform: rotate(0deg);\r\n\ttransform: rotate(0deg);\r\n\r\n}\r\n\r\n.mobileMenu {\r\n    height: 55px;\r\n    line-height: 55px;\r\n    padding: 5px 10px 5px 10px;\r\n    text-align: left;\r\n}\r\n\r\n.mobileMenu .homeLogo, .mobileMenu .homeLogo img {\r\n\theight:55px;\r\n\tposition:relative;\r\n}\r\n.mobileMenu .homeLogo .menuIcon {\r\n\theight:45px;\r\n\tline-height:41px;\r\n\ttop:5px;\r\n\tbottom:auto;\r\n}\r\n\r\n/**********************/\r\n\r\n.mobileNav {\r\n\tdisplay: none;\r\n    height: 100%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 220px;\r\n    z-index: 999999;\r\n\tright:-200px;\r\n\tbackground:#ffffff;\r\n\tborder-left:3px solid #701ead;\r\n}\r\n\r\n.mobileNav a {\r\n\tdisplay:block;\r\n\theight:48px;\r\n\tline-height:48px;\r\n\tcolor:#701eae;\r\n\ttext-align:center;\r\n\tborder-bottom:1px solid #ededed;\r\n\tcursor:pointer;\r\n\tfont-family:\"ERASDEMI\";\r\n\tfont-size:21px;\r\n}\r\n.mobileNav a.active, .mobileNav a:hover {\r\n\tcolor:#fff;\r\n\tbackground: #701eae;\r\n\tbackground: -moz-linear-gradient(left, #701eae 0%, #a523a7 100%);\r\n\tbackground: -webkit-linear-gradient(left, #701eae 0%,#a523a7 100%);\r\n\tbackground: linear-gradient(to right, #701eae 0%,#a523a7 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#701eae', endColorstr='#a523a7',GradientType=1 );\t\r\n}\r\n.mobileNav .socialIcons {\r\n\ttext-align:center;\r\n}\r\n.mobileNav .socialIcons a {\r\n\tdisplay:inline-block;\r\n\twidth:30px;\r\n\theight:30px;\r\n\tbackground-image:url(images/social_icon.png);\r\n\tbackground-repeat:no-repeat;\r\n\tmargin:15px 5px;\r\n\tborder-bottom:none;\r\n\r\n}\r\n.mobileNav .socialIcons a.fb {\r\n\tbackground-position:-120px 0px;\r\n}\r\n.mobileNav .socialIcons a.tw {\r\n\tbackground-position:-150px 0px;\r\n}\r\n.mobileNav .socialIcons a.li {\r\n\tbackground-position:-180px 0px;\r\n}\r\n.mobileNav .socialIcons a.yt {\r\n\tbackground-position:-210px 0px;\r\n}\r\n\r\n.mobileNav span {\r\n\tfont-size:14px;\r\n\tdisplay:block;\r\n\theight:48px;\r\n\tline-height:48px;\r\n\tcolor:#522d6d;\r\n\ttext-align:center;\r\n\tbackground:#ffda0c;\r\n\t\t\r\n}\r\n.mobileNav span img {\r\n\theight:20px;\r\n\tvertical-align:sub;\r\n\tmargin-right:5px;\r\n}\r\n/***********************/\t\r\n.topBanner {\r\n\tbackground: #a523a7;\r\n\tbackground: -moz-linear-gradient(top, #a523a7 0%, #701eae 100%);\r\n\tbackground: -webkit-linear-gradient(top, #a523a7 0%,#701eae 100%);\r\n\tbackground: linear-gradient(to bottom, #a523a7 0%,#701eae 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a523a7', endColorstr='#701eae',GradientType=0 );\r\n\tposition:relative;\r\n}\r\n.topBanner .leftNav {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n\tbottom:0;\r\n\twidth:84px;\r\n\tbackground:#ffffff;\r\n\ttext-align:center;\r\n}\r\n.topBanner .leftNav .logo {\r\n\tmargin-top:15px;\r\n\tdisplay:inline-block;\r\n}\r\n.topBanner .socialIcons {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\tright:0;\r\n\tbottom:10px;\r\n}\r\n.topBanner .socialIcons a {\r\n\tdisplay:block;\r\n\twidth:30px;\r\n\theight:30px;\r\n\tbackground-image:url(images/social_icon.png);\r\n\tbackground-repeat:no-repeat;\r\n\tmargin:10px auto;\r\n\r\n}\r\n.topBanner .socialIcons a.fb {\r\n\tbackground-position:-120px 0px;\r\n}\r\n.topBanner .socialIcons a.tw {\r\n\tbackground-position:-150px 0px;\r\n}\r\n.topBanner .socialIcons a.li {\r\n\tbackground-position:-180px 0px;\r\n}\r\n.topBanner .socialIcons a.yt {\r\n\tbackground-position:-210px 0px;\r\n}\r\n.topBanner .down_arrow {\r\n\twidth:90px;\r\n\theight:150px;\r\n\tposition:absolute;\r\n\tleft:50%;\r\n\tmargin-left:39px;\r\n\tbottom:0px;\r\n\tcursor:pointer;\r\n\tbackground:#ffdb0d url(images/down_arrow.png) no-repeat center;\r\n}\r\n.topBanner .whiteBg {\r\n\tposition:absolute;\r\n\tright:0;\r\n\ttop:0;\r\n\tbottom:0;\r\n\tleft:50%;\r\n\tbackground:#fff;\r\n\tmargin-left:129px;\r\n}\r\n.topBanner .whiteLine {\r\n\tposition:absolute;\r\n\tleft:40%;\r\n\tright:20px;\r\n\ttop:45px;\r\n\tbottom:90px;\r\n\tborder:1px solid #fff;\r\n}\r\n.topBanner .topBannerImgWrap {\r\n\tposition:absolute;\r\n\tleft:40%;\r\n\tright:20px;\r\n\ttop:45px;\r\n\tbottom:90px;\r\n}\r\n.topBanner .topBannerImgWrap .img {\r\n\tposition:absolute;\r\n\tleft:20px;\r\n\tright:-20px;\r\n\ttop:20px;\r\n\tbottom:-20px;\r\n\toverflow:hidden;\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-size:cover;\r\n\r\n\t\r\n}\r\n.topBanner .topBannerImgWrap .img.serviceImg {\r\n\tbackground-image:url(images/menu-default.png);\r\n\r\n}\r\n.topBanner .topBannerDesc {\r\n\tposition:absolute;\r\n\ttop:30%;\r\n\tleft:140px;\r\n\tright:50%;\r\n\r\n}\r\n.topBanner .topBannerDesc h1 {\r\n\tfont-size:150px;\r\n\tcolor:#FFF;\r\n\tfont-family:\"ERASDEMI\";\r\n}\r\n.topBanner .topBannerDesc .description {\r\n\tfont-size:22px;\r\n\tcolor:#FFF;\r\n\tfont-family:\"ERASLGHT\";\r\n\twidth:50%;\r\n\tpadding-left:65px;\r\n}\r\n.topBanner .topBannerDesc span {\r\n\tfont-size:46px;\r\n\tcolor:#ffdb0d;\r\n\tfont-family:\"ERASLGHT\";\r\n\tmargin-left:-65px;\r\n}\r\n.subNav {\r\n\tbackground:#fdfdfd;\r\n\twidth:198px;\r\n\tpadding-left:50px;\r\n\tpadding-right:20px;\r\n\tposition:fixed;\r\n\tleft:0px;\r\n\ttop:0px;\r\n\tbottom:0px;\r\n}\r\n.img-responsive{\r\nmax-width: 100%; height: auto;  display:block;\r\n}\r\n.subNav1 {\r\n    bottom: 0;\r\n    left: 0;\r\n\tpadding-left:23px;   \r\n        position: fixed;\r\n\t\tpadding-top:15px;\r\n    top: 0;\r\n    width: 5px;\r\n}\r\n.subNav.sticky {\r\n\tposition:fixed;\r\n\ttop:0;\r\n\tleft:0;\r\n\r\n}\r\n.subNav1.sticky {\r\n\tposition:fixed;\r\n\ttop:0;\r\n\tleft:0;\r\n\r\n}\r\n.subNav li {\r\n\tpadding:0px 10px;\r\n\theight:71px;\r\n\tline-height:71px;\r\n\tcolor:#999999;\r\n\tfont-family:\"ERASMD\";\r\n\tfont-size:19px;\r\n\tborder-bottom:2px solid #ebebeb;\r\n\tcursor:pointer;\r\n}\r\n.subNav1 li {\r\n\tpadding:0px 10px;\r\n\theight:71px;\r\n\tline-height:71px;\r\n\tcolor:#999999;\r\n\tfont-family:\"ERASMD\";\r\n\tfont-size:19px;\r\n\tborder-bottom:2px solid #ebebeb;\r\n\tcursor:pointer;\r\n}\r\n.subNav li:first-child {\r\n\tborder-bottom:none !important;\r\n\tbackground:#fff;\r\n\tmargin-left:-84px;\r\n\tpadding-left:94px;\r\n\tmargin-right:-20px;\r\n}\r\n.subNav1 li:first-child {\r\n\tborder-bottom:none !important;\r\n\tbackground:#fff;\r\n\tmargin-left:0px;\r\n\tpadding-left:0px;\r\n\tmargin-right:-20px;\r\n}\r\n.subNav li.active, .subNav li:hover {\r\n\tcolor:#701eae;\r\n\tfont-family:\"ERASDEMI\";\r\n\tborder-bottom:2px solid #ffdb0d;\r\n}\r\n.subNav1 li.active, .subNav1 li:hover {\r\n\tcolor:#701eae;\r\n\tfont-family:\"ERASDEMI\";\r\n\tborder-bottom:2px solid #ffdb0d;\r\n}\r\n.subNav li:last-child {\r\n\tbackground:#ffda0c;\r\n\ttext-align:center;\r\n\theight:auto;\r\n\tline-height:normal;\r\n\tpadding-top:11px;\r\n\t/*margin-left:-84px;\r\n\tmargin-right:-20px;\r\n\tmargin-top:40px;*/\r\n\tposition:absolute;\r\n\tbottom:0px;\r\n\tleft:0px;\r\n\tright:0px;\r\n\tborder-color:#ffda0c;\r\n}\r\n.subNav1 li:last-child {\r\n\tbackground:#ffda0c;\r\n\ttext-align:center;\r\n\theight:auto;\r\n\tline-height:normal;\r\n\tpadding-top:10px;\r\n\t/*margin-left:-84px;\r\n\tmargin-right:-20px;\r\n\tmargin-top:40px;*/\r\n\tposition:absolute;\r\n\tbottom:0px;\r\n\tleft:0px;\r\n\tright:0px;\r\n}\t\r\n.subNav li.homeSocial a, .subNav1 li.homeSocial a {\r\n\tdisplay:inline-block;\r\n\twidth:30px;\r\n\theight:30px;\r\n\tbackground-image:url(images/social_icon.png);\r\n\tbackground-repeat:no-repeat;\r\n\tmargin-right:10px;\r\n}\r\n.subNav li.homeSocial a.fb, .subNav1 li.homeSocial a.fb {\r\n\tbackground-position:0px 0px;\r\n}\r\n.subNav li.homeSocial a.tw, .subNav1 li.homeSocial a.tw {\r\n\tbackground-position:-30px 0px;\r\n}\r\n.subNav li.homeSocial a.li, .subNav1 li.homeSocial a.li {\r\n\tbackground-position:-60px 0px;\r\n}\r\n.subNav li.homeSocial a.yt, .subNav1 li.homeSocial a.yt {\r\n\tbackground-position:-90px 0px;\r\n}\t\r\n\r\n.subNav li.homeSocial span {\r\n\tfont-size:12px;\r\n\tdisplay:block;\r\n\theight:48px;\r\n\tline-height:48px;\r\n\tcolor:#522d6d;\r\n\ttext-align:center;\r\n\tbackground:#ffda0c;\r\n\theight:auto;\r\n\tline-height:30px;\r\n\t\t\r\n}\r\n.subNav li.homeSocial img {\r\n\theight:20px;\r\n\tvertical-align:sub;\r\n\tmargin-right:5px;\r\n}\t\r\n.sm{\r\n\ttext-align:right;\r\n\tpadding:10px 0px;\r\n\tmargin-right:15px;\r\n}\r\n.author{\r\n\tbackground-color:#6a2b8c;\r\n\t float: left;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 90%;\r\n\tmin-height:85px;\r\n}\r\n.author1{\r\n\tbackground-color:#12569f;\r\n\t float: left;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 90%;\r\n\tmin-height:85px;\r\n}\r\n.author2{\r\n\tbackground-color:#0b6a28;\r\n\t float: left;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 90%;\r\n\tmin-height:85px;\r\n}\r\n.author3{\r\n\tbackground-color:#831c32;\r\n\t float: left;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 90%;\r\n\tmin-height:85px;\r\n}\r\n.author4{\r\n\tbackground-color:#d44b0b;\r\n\t float: left;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 90%;\r\n\tmin-height:85px;\r\n}\r\n.author5{\r\n\tbackground-color:#637778;\r\n\t float: left;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 90%;\r\n\tmin-height:85px;\r\n}\r\n.author h3{\r\n\tfont-family:ERASMD;\r\n\tfont-size:24px;\r\n\tcolor:#ffffff;\r\n\tmargin-left:20px;\r\n\tpadding:10px 0px 0px 0px;\r\n}\r\n.author1 h3, .author3 h3, .author4 h3, .author5 h3{\r\n\tfont-family:ERASMD;\r\n\tfont-size:24px;\r\n\tcolor:#ffffff;\r\n\tmargin-left:20px;\r\n\tpadding:10px 0px 0px 0px;\r\n}\r\n.author2 h3{\r\n\tfont-family:ERASMD;\r\n\tfont-size:24px;\r\n\tcolor:#ffffff;\r\n\tmargin-left:20px;\r\n\tpadding:10px 0px 0px 0px;\r\n}\r\n.author em, .author1 em, .author2 em, .author3 em, .author4 em, .author5 em{\r\n\tfont-family:ERASMD;\r\n\tfont-size:15px;\r\n\tcolor:#ffffff;\r\n\tmargin-left:20px;\r\n\tpadding:0px 0px 10px 0px;\r\n}\r\n.pht{\r\n\tmargin-left:20px;\r\n\tfloat:left;\r\n}\r\n.video{\r\n\tfloat:left;\r\n\tmargin-left:20px;\r\n\tpadding-top:30px;\r\n}\r\n.subTabWrap {\r\n\tpadding-left:302px;\r\n}\r\n.tabWrap {\r\n\tdisplay:none;\r\n}\r\n\r\n.pageTab {\r\n\tmargin-top:1px;\r\n\theight:70px;\r\n\tbackground: #701eae;\r\n\tbackground: -moz-linear-gradient(left, #701eae 0%, #a523a7 100%);\r\n\tbackground: -webkit-linear-gradient(left, #701eae 0%,#a523a7 100%);\r\n\tbackground: linear-gradient(to right, #701eae 0%,#a523a7 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#701eae', endColorstr='#a523a7',GradientType=1 );\r\n\t\r\n\tposition:fixed;\r\n\ttop:0;\r\n\tleft:302px;\r\n\tright:0;\r\n\tz-index:1;\r\n\r\n}\r\n.subTabWrap.sticky .pageTab {\r\n\tposition:fixed;\r\n\ttop:0;\r\n\tleft:302px;\r\n\tright:0;\r\n\tz-index:1;\r\n}\r\n.pageTab span {\r\n\tfloat:left;\r\n\tfont-family:\"ERASDEMI\";\r\n\tfont-size:15px;\r\n\tcolor:#FFFFFF;\r\n\theight:70px;\r\n\tpadding:0px 20px;\r\n\tline-height:70px;\r\n\ttext-align:center;\r\n\tcursor:pointer;\r\n}\r\n.pageTab span.small {\r\n\tline-height:normal;\r\n\tpadding-top:15px;\r\n\theight:55px;\r\n}\r\n.pageTab span.active {\r\n\tbackground:#ffdb0d;\r\n\tcolor:#711dae;\r\n}\r\n.pageDesc {\r\n\tpadding:120px 100px 50px 50px;\r\n\tpadding:120px 50px 50px 50px;\r\n}\r\n.subTabWrap.sticky .pageDesc {\r\n\tpadding-top:120px;\r\n}\r\n.pageDescWrap {\r\n\tbackground:#f9f9f9 url(images/pageDescWrap.png) repeat-y 0px 0px;\r\n\tborder-bottom:1px solid #fff;\r\n\tpadding-left:290px;\r\n\tpadding-bottom:55px;\r\n\r\n}\r\n.leftDesc {\r\n\tfloat:left;\r\n\twidth:290px;\r\n\tmargin-left:-320px;\r\n}\r\n.leftSmallWrap {\r\n\twidth:250px;\r\n\tbackground:#ebebeb;\r\n}\r\n.rightDesc {\r\n\tpadding:55px 30px 0px 30px; \r\n}\r\n.fullVideo {\r\n\twidth:100%;\r\n}\r\nh2 {\r\n\tfont-family:\"ERASDEMI\";\r\n\tfont-size:20px;\r\n\tcolor:#701eae;\r\n}\r\nh3 {\r\n\tfont-family:\"ERASDEMI\";\r\n\tfont-size:18px;\r\n\tcolor:#701eae;\r\n}\r\nh4 {\r\n\tfont-family:\"ERASMD\";\r\n\tfont-size:18px;\r\n}\r\nh5 {\r\n\tfont-family:\"ERASDEMI\";\r\n\tfont-size:14px;\r\n\tcolor:#701eae;\r\n}\r\nh6 {\r\n\tfont-size:16px;\t\r\n}\r\nh4.bold {\r\n\tfont-family:\"ERASDEMI\";\r\n}\r\nul.list li {\r\n\tfont-size:13px;\r\n\tmargin:13px 0px;\r\n\t\r\n\tfont-family: \"ERASMD\";\r\n    font-size: 18px;\r\n}\r\n.pageDescWrap h2, .pageDescWrap p {\r\n\tmargin:20px 0px;\r\n}\r\n.pageDescWrap h3, .pageDescWrap h4 {\r\n\tmargin-bottom:20px;\r\n}\r\n.pageDescWrap h6 {\r\n\tmargin:13px 0px;\r\n}\r\n.leftSmallWrap h3 {\r\n\tmargin:0px;\r\n\tpadding:15px;\t\r\n}\r\n.leftSmallWrap p {\r\n\tfont-size:12px;\r\n\tpadding:15px;\r\n\tpadding-top:0px;\r\n\tmargin:0px;\r\n}\r\n\r\n.videoExpertWrap {\r\n\theight:99px;\r\n}\r\n.videoExpertWrap .videoThumb {\r\n\tfloat:left;\r\n\twidth:140px;\r\n\tposition:relative;\r\n\tcursor:pointer;\r\n\tz-index:0;\r\n\toverflow:hidden;\r\n}\r\n.videoExpertWrap .videoThumb .videoThumbImg {\r\n\twidth:100%;\r\n}\r\n.videoExpertWrap .videoThumb .playBtn {\r\n\tposition:absolute;\r\n\tleft:50%;\r\n\ttop:50%;\r\n\twidth:36px;\r\n\tmargin-left:-18px;\r\n\tmargin-top:-18px;\r\n}\r\n.videoExpertWrap .videoDivider {\r\n\tfloat:left;\r\n\twidth:2px;\r\n\theight:99px;\r\n\tbackground:#f16421;\r\n\tmargin:0px 8px;\r\n}\r\n.videoExpertWrap .videoDownload {\r\n\tfloat:right;\r\n\twidth:77px;\r\n\theight:99px;\r\n\tbackground:#ebebeb url(images/download_icon.png) no-repeat center;\r\n\tmargin-left:8px;\r\n\tposition:relative;\r\n}\r\n.videoExpertWrap .videoDownload:after {\r\n\tcontent:\"\";\r\n\twidth:8px;\r\n\theight:8px;\r\n\tbackground-color:#f9f9f9;\r\n\tbackground-image:url(images/corner.png);\r\n\tbackground-repeat:no-repeat;\r\n\tposition:absolute;\r\n\tbottom:0;\r\n\tright:0;\r\n}\r\n.videoExpertWrap .videoDesc {\r\n\toverflow:auto;\r\n\theight:99px;\r\n}\r\n.videoExpertWrap .videoDesc p {\r\n\tfont-size:13px;\r\n\tmargin:0px;\r\n\tpadding-top:13px;\r\n}\r\n.videoExpertWrap .videoDesc a h3 {\r\n\tcolor:#701eae;\r\n}\r\n.videoExpertWrap .videoDesc a p {\r\n\tcolor:#575757;\r\n}\r\n.expertLink {\r\n\tclear:both;\r\n\tfont-family:\"ERASDEMI\";\r\n\tfont-size:14px;\r\n\tcolor:#701eae;\r\n\tdisplay:block;\r\n\tmargin-top:10px;\r\n}\r\n.videoPlayerExpert {\r\n\tposition:relative;\r\n\tz-index:0;\r\n}\r\n.videoPlayerExpert .closeBtn {\r\n\theight:25px;\r\n\tline-height:25px;\r\n\tbackground:#ffdb0d;\r\n\tpadding:0px 15px;\r\n\tcursor:pointer;\r\n\tfont-family:\"ERASLGHT\";\r\n\tfont-size:16px;\r\n\tcolor:#701eae;\r\n\tposition:absolute;\r\n\tright:0px;\r\n\ttop:20px;\r\n\t\r\n}\r\n.pageLink {\r\n\tdisplay:inline-block;\r\n\theight:40px;\r\n\tline-height:40px;\r\n\tfont-family:\"ERASLGHT\";\r\n\tfont-size:16px;\r\n\tcolor:#FFF;\r\n\tpadding:0px 20px;\r\n\t\r\n\tbackground: #701eae;\r\n\tbackground: -moz-linear-gradient(left, #701eae 0%, #a523a7 100%);\r\n\tbackground: -webkit-linear-gradient(left, #701eae 0%,#a523a7 100%);\r\n\tbackground: linear-gradient(to right, #701eae 0%,#a523a7 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#701eae', endColorstr='#a523a7',GradientType=1 );\r\n}\r\n\r\n\r\n\r\n\r\n.go_to_top {\r\n    border-radius: 2px;\r\n    bottom: 20px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    height: 40px;\r\n    position: fixed !important;\r\n    right: 20px;\r\n    text-align: center;\r\n    width: 40px;\r\n    z-index: 9999;\r\n\tbackground-color:rgba(112,30,174,0.5);\r\n\tbackground-image:url(images/go_to_top.png);\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-position: center;\r\n\r\n\tdisplay:none;\r\n}\r\n/* FOOTER */\r\nfooter {\r\n\tclear:both;\r\n\tline-height:30px;\r\n\theight:30px;\r\n\t/*border-top:2px solid #b6b7b8;*/\r\n}\r\nfooter .copright {\r\n\tvertical-align:middle;\r\n\tmargin:0px 2px;\r\n}\r\n.clearfix:after {\r\n     visibility: hidden;\r\n     display: block;\r\n     font-size: 0;\r\n     content: \" \";\r\n     clear: both;\r\n     height: 0;\r\n     }\r\n\t .copyright-footer {\r\n    background: #ffda0c none repeat scroll 0 0;\r\n    color: #522d6d;\r\n    display: block;\r\n    float: right;\r\n    font-size: 14px;\r\n\tmargin-right:15px;\r\n    height: 48px;\r\n    line-height: 48px;\r\n    text-align: center;\r\n\t }\r\n\t .homeSocial_1 {\r\n\t\t float:left;\r\n\t\t padding-top:8px;\r\n\r\n\t }\r\n\t.copyright-footer img { height: 20px;\r\n    margin-right: 5px;\r\n    vertical-align: sub;\r\n\t}\r\n\t.rightDesc ul.list  li{\r\n\t\tlist-style:inside;\r\n\t}\r\n.clearfix { display: inline-block; }\r\n/* start commented backslash hack \\*/\r\n* html .clearfix { height: 1%; }\r\n.clearfix { display: block; }\r\n/* close commented backslash hack */\r\n.no_bg {\r\n\tbackground:none !important;\r\n}\r\n.margin_t_20 {\r\n\tmargin-top:20px;\r\n}\r\n.alignCenter {\r\n\ttext-align:center;\r\n}\r\n.desktop {\r\n\tdisplay:block;\r\n}\r\n.mobile {\r\n\tdisplay:none;\r\n}\r\n.responsiveImg {\r\n\twidth:100%;\r\n}\r\n\r\n/*icon box */\r\n\r\n.Icon_Box,.blogIcon_box{\r\n\tbackground: #454545 url(\"images/casestudy_download_icon.png\") no-repeat scroll left top;\r\n    color: #fff;\r\n    display:block;\r\n    height: 28px;\r\n\twidth:auto;\r\n\tmax-width:100px;\r\n    line-height: 28px;\r\n    margin-bottom: 2px;\r\n    padding-left:35px;\r\n}\r\n.blogIcon_box{\r\n\tbackground: #454545 url(\"images/blog_download_icon.png\") no-repeat scroll left top;\r\n\tmax-width:50px;\r\n}\r\n.videoFullWidth {\r\n/*\tmargin-left:-110px !important;\r\n\tmargin-right:-30px !important;*/\r\n}\r\n.blogSliderWrap {\r\n\theight:85px;\r\n\tmargin-top:20px;\r\n\tpadding:0px 42px;\r\n\tposition:relative;\r\n\tz-index:0;\r\n}\r\n\r\n.blogSliderPrev, .blogSliderNext {\r\n\twidth:32px;\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tbottom:0px;\r\n\tbackground-color:#e0e0e0;\r\n\tbackground-color:#ffdb0d;\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-position:center;\r\n\tcursor:pointer;\r\n\tz-index:1;\r\n}\r\n/*.blogSliderPrev:hover, .blogSliderNext:hover {\r\n\tbackground-color:#ffdb0d;\r\n}*/\r\n.blogSliderPrev.disable, .blogSliderNext.disable {\r\n\tbackground-color:#e0e0e0;\r\n\tcursor:default;\r\n}\r\n.blogSliderPrev {\r\n\tleft:0px;\r\n\tbackground-image:url(images/sliderPrev.png);\r\n}\r\n.blogSliderNext {\r\n\tright:0px;\r\n\tbackground-image:url(images/sliderNext.png);\r\n\r\n}\r\n.blogSlider {\r\n\theight:85px;\r\n\twidth:100% !important;\r\n\tposition:relative;\r\n\toverflow:hidden;\r\n\tz-index:0;\r\n}\r\n.blogSlider li {\r\n\t/*height:85px;*/\r\n\tpadding:0px 0px 0px 0px;\r\n\toverflow:hidden;\r\n\tfloat:left;\r\n\tmin-height:83px;\r\n}\r\n.blogSlider li .sliderDesc {\r\n\tpadding-left:140px;\r\n}\r\n.blogSlider li .sliderImgWrap {\r\n\twidth:130px;\r\n\tfloat:left;\r\n\tmargin-left:-140px;\r\n\toverflow:hidden;\r\n\ttext-align:center;\r\n}\r\n.blogSlider li .sliderImg {\r\n\twidth:130px;\r\n\theight:100px;\r\n\tdisplay:block;\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\n.blogSlider li .sliderDesc h5 {\r\n\tfont-family:\"ERASMD\";\r\n\tfont-size:17px;\r\n\tline-height:normal;\r\n}\r\n\r\n.blogSlider li .sliderDesc a {\r\n\tcolor:#3378a9;\t\r\n\tfont-family:\"ERASDEMI\";\r\n\tfont-size:12px;\r\n}\r\n.blueLink {\r\n\tcolor:#3378a9;\t\r\n\tfont-family:\"ERASDEMI\";\r\n\t/*font-size:14px;*/\r\n}\r\n.col-fixed {\r\n    /* custom width */\r\n    width:30%;\r\n}\r\n\r\n#cmn-video-demo3__container {\r\n  position: relative;\r\n  margin: 0 0 20px 0;\r\n/*  height: 600px;*/\r\n  background-color: #282828;\r\n  overflow: hidden;\r\n}\r\n\r\n.cmn-video-demo3__video {\r\n/*  position: absolute;\r\n  top: 25%;\r\n  left: 50%;*/\r\n  z-index: 0;\r\n  width: 100%;\r\n  height: auto;\r\n/*  transform: translate(-50%, -25%);*/\r\n}\r\n.video1 {\r\n\tdisplay:block;\r\n}\r\n.video2 {\r\n\tdisplay:none;\r\n}\r\n.subTabWrap2, .subTabWrap3 {\r\n\tpadding-left:85px;\r\n}\r\n.subTabWrap2-heading {\r\n\ttext-align: center; \r\n\tfont-variant: small-caps; \r\n\tfont-size: 36px; color:#333333; \r\n\tmargin: 0px 0px 30px 0px;\r\n\tpadding-left:20px;\r\n\twidth:90%;\t\r\n}\r\n.subTabWrap2 .col-fixed {\r\n\tmin-height:300px;\r\n\twidth:30%;\r\n\tmargin-right:20px;\r\n\tmargin-bottom:20px;\r\n\tdisplay:inline-block;\r\n}\r\n.footer1 {\r\n\tbackground-color:#ffda0c;\r\n\tclear:both;\r\n\theight:48px;\r\n\r\n}\r\n.tech_bg_wrap {\r\n\tpadding-top:70px;\r\n}\r\n.tech_bg, .tech_bg_mobile {\r\n\twidth:100%;\r\n}\r\n.tech_bg {\r\n\tdisplay:block;\r\n}\r\n.tech_bg_mobile {\r\n\tdisplay:none;\r\n}\r\n\r\n@media (max-width: 1279px){\r\n\t.subNav {\r\n\t\tpadding-left:10px;\r\n\t\tpadding-right:10px;\r\n\t}\r\n\t.pageTab, .subTabWrap.sticky .pageTab {\r\n\t\tleft:218px;\r\n\t}\r\n\t.subTabWrap {\r\n    \tpadding-left: 218px;\r\n\t}\r\n\t.subNav li:last-child {\r\n\t\tpadding:13px 0px 0px 0px;\r\n\t\tborder-bottom:0px;\r\n\t}\r\n\t.subTabWrap2, .subTabWrap3 {\r\n\t\tpadding-left:85px;\r\n\t}\r\n}\r\n@media (max-width: 1024px){\r\n\t#cmn-video-demo3__container {\r\n\t\t  background-color:inherit;\r\n\t\t}\r\n\t\r\n\t.cmn-video-demo3__video {\r\n\t  position:static;\r\n\t  top: 0;\r\n\t  left: 0%;\r\n\t  z-index: 0;\r\n\t  width: 100%;\r\n\t  height: auto;\r\n\t  transform:none;\r\n\t}\r\n\t.video1 {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.video2 {\r\n\t\tdisplay:block;\r\n\t}\r\n\r\n\t.tech_bg {\r\n\t\tdisplay:none;\r\n\t}\r\n\r\n\t.tech_bg_mobile {\r\n\t\tdisplay:block;\r\n\t}\r\n\tnav a {\r\n\t\tfont-size:18px;\r\n\t\tpadding:0px 25px;\r\n\t}\r\n\t.pageTab span {\r\n\t\tpadding:0px 10px;\r\n\t}\r\n\t/*.pageDesc {\r\n\t\tpadding:50px;\r\n\t}*/\r\n\t.pageDescWrap {\r\n\t\tpadding-left:190px;\r\n\t\tbackground-position:-100px 0px;\r\n\t}\r\n\t.leftDesc {\r\n\t\twidth:190px;\r\n\t\tmargin-left:-220px;\r\n\t}\r\n\t.leftDesc img {\r\n\t\twidth:100%;\r\n\t}\r\n\t.leftSmallWrap {\r\n\t    width: 190px;\r\n\t}\r\n\t.home section {\r\n\t\r\n\t\tbackground-image:url(images/services.jpg);\r\n\t\r\n\t}\r\n\t\r\n\t.img-1 {\r\n\t\tbackground-image:url(images/services.jpg);\r\n\t}\r\n\t.img-2 {\r\n\t\tbackground-image:url(images/insights.jpg);\r\n\t}\r\n\t.img-3 {\r\n\t\tbackground-image:url(images/experts.jpg);\r\n\t}\r\n\t.img-4 {\r\n\t\tbackground-image:url(images/partners.jpg);\r\n\t}\r\n\t.img-5 {\r\n\t\tbackground-image:url(images/reachus.jpg);\r\n\t}\r\n\t.topBanner .topBannerImgWrap .img.serviceImg {\r\n\t\tbackground-image:url(images/services.jpg);\r\n\r\n\t}\r\n\t.blogSlider li .sliderDesc {\r\n\t\tpadding-left: 95px;\r\n\t}\r\n\t.blogSlider li .sliderImgWrap {\r\n\t\twidth:85px;\r\n\t\tmargin-left:-95px;\r\n\t}\r\n\t.blogSlider li .sliderImg {\r\n\t\tmargin-left:-23px;\r\n\t}\r\n\t.col-fixed {\r\n    /* custom width */\r\n    width:290px;\r\n}\r\n\t.subTabWrap2 .col-fixed {\r\n\t\tmin-height:300px;\r\n\t\twidth:47%;\r\n\t}\r\n}\r\n@media(max-width: 980px) {\r\n\t.col-fixed {\r\n    /* custom width */\r\n    width:250px;\r\n}\r\n\t.subTabWrap2 .col-fixed {\r\n\t\tmin-height:300px;\r\n\t\twidth:100%;\r\n\t\tmargin-right:0px;\r\n\t}\r\n\t.subTabWrap2-heading {\r\n\t\tpadding-left:0px;\r\n\t\twidth:100%;\t\r\n\t}\r\n}\r\n@media screen and (orientation:landscape){\r\n}\r\n@media screen and (orientation:portrait){\r\n}\r\n@media(max-width: 980px) {\r\n\t\r\n}\r\n@media (max-width: 960px){\r\n\t.innerWrap {\r\n\t\twidth:auto;\r\n\t\tmargin:0px 10px;\r\n\t}\r\n\t.pageTab {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.subNav li:first-child, .subNav li:last-child {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.subNav, .subNav.sticky {\r\n\t\tposition:static;\r\n\t\twidth:auto;\r\n\t\tpadding:0px;\r\n\t\tmargin-left:-10px;\r\n\t\tmargin-right:-10px;\r\n\t\theight:146px !important;\r\n\t}\r\n\t.subNav li {\r\n\t\tfloat:left;\r\n\t\twidth:46%;\r\n\t\tvertical-align:top;\r\n\t\tpadding:0px;\r\n\t\tmargin:0 2%;\r\n\t}\r\n\t.subTabWrap.sticky .pageDesc {\r\n\t\tpadding-top:0px;\r\n\t}\r\n\t.subTabWrap {\r\n\t\tpadding-left:0px;\r\n\t}\r\n\t.topBanner .topBannerDesc h1 {\r\n\t\tfont-size:120px;\r\n\t}\r\n\t.home .homeNav {\r\n\t\tleft:90px;\t\r\n\t}\r\n\t.home section {\r\n\t\r\n\tbackground-image:url(images/services.jpg);\r\n\t\r\n\t}\r\n\t\r\n\t.img-1 {\r\n\t\tbackground-image:url(images/services.jpg);\r\n\t}\r\n\t.img-2 {\r\n\t\tbackground-image:url(images/insights.jpg);\r\n\t}\r\n\t.img-3 {\r\n\t\tbackground-image:url(images/experts.jpg);\r\n\t}\r\n\t.img-4 {\r\n\t\tbackground-image:url(images/partners.jpg);\r\n\t}\r\n\t.img-5 {\r\n\t\tbackground-image:url(images/reachus.jpg);\r\n\t}\r\n\tnav a {\r\n\t\tpadding:0px 10px;\r\n\t}\r\n\t.subTabWrap2, .subTabWrap3 {\r\n\t\tpadding-left:85px;\r\n\t}\r\n}\r\n@media (max-width: 780px){\r\n\t.pageDesc {\r\n    \tpadding: 50px;\r\n\t}\r\n}\r\n@media(max-width: 768px) {\r\n\t.col-fixed {\r\n    /* custom width */\r\n  \r\n}\r\n}\r\n@media (max-width: 765px){\r\n\t.homeSocial_1 {\r\n\t\tdisplay:none;\r\n\r\n\t }\r\n\t.menuIcon {\r\n\t\twidth:46px;\t\r\n\t}\r\n\r\n\t.menuIcon .arrow {\r\n\tdisplay:inline-block;\r\n\twidth:28px;\r\n\theight:6px;\r\n\tbackground:none;\r\n}\r\n\r\n.menuIcon .arrow:after {\r\n\tcontent:'';\t\r\n\twidth:28px;\r\n\theight:4px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\tfloat:left;\r\n\tmargin-top:-4px;\r\n\t\r\n\t-moz-transform: rotate(45deg);\r\n\t-webkit-transform: rotate(45deg);\r\n\t-o-transform: rotate(45deg);\r\n\t-ms-transform: rotate(45deg);\r\n\ttransform: rotate(45deg);\r\n\t\r\n}\r\n.menuIcon .arrow:before {\r\n\tcontent:'';\t\r\n\twidth:28px;\r\n\theight:4px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\tfloat:left;\r\n\tmargin-top:0px;\r\n\r\n\t-moz-transform: rotate(-45deg);\r\n\t-webkit-transform: rotate(-45deg);\r\n\t-o-transform: rotate(-45deg);\r\n\t-ms-transform: rotate(-45deg);\r\n\ttransform: rotate(-45deg);\r\n\r\n}\r\n\t.menuIcon.openNav .arrow {\r\n\tdisplay:inline-block;\r\n\twidth:28px;\r\n\theight:4px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\tmargin-top:13px;\r\n\tmargin-left:9px;\r\n\tfloat:left;\r\n\t-moz-transform: rotate(0deg) !im;\r\n\t-webkit-transform: rotate(0deg);\r\n\t-o-transform: rotate(0deg);\r\n\t-ms-transform: rotate(0deg);\r\n\ttransform: rotate(0deg);\r\n}\r\n\r\n.menuIcon.openNav .arrow:after {\r\n\tcontent:'';\t\r\n\twidth:28px;\r\n\theight:4px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\tfloat:left;\r\n\tmargin-top:7px;\r\n\t-moz-transform: rotate(0deg) !im;\r\n\t-webkit-transform: rotate(0deg);\r\n\t-o-transform: rotate(0deg);\r\n\t-ms-transform: rotate(0deg);\r\n\ttransform: rotate(0deg);\r\n}\r\n.menuIcon.openNav .arrow:before {\r\n\tcontent:'';\t\r\n\twidth:28px;\r\n\theight:4px;\r\n\tbackground:#a423a7;\r\n\tbackground:#fff;\r\n\tfloat:left;\r\n\tmargin-top:-7px;\r\n\t\t-moz-transform: rotate(0deg);\r\n\t-webkit-transform: rotate(0deg);\r\n\t-o-transform: rotate(0deg);\r\n\t-ms-transform: rotate(0deg);\r\n\ttransform: rotate(0deg);\r\n\r\n}\r\n\t\r\n\t.menuIcon {\r\n\t\tpadding:0px;\r\n\t}\r\n\t.mobileMenu .homeLogo .menuIcon.openNav {\r\n\t\tline-height:34px;\r\n\t}\r\n\t.tech_bg_wrap {\r\n\t\tpadding-top:0px;\r\n\t}\r\n/*\t.footer1 {\r\n\t\tmargin-left:-10px;\r\n\t\tmargin-right:-10px;\r\n\t}*/\r\n\t\tnav a {\r\n\t\tfont-size:18px;\r\n\t\tpadding:0px 20px;\r\n\t\tdisplay: block;\r\n\t\tbackground-color: rgba(255,255,255,0.9);\r\n\t}\r\n\r\n\t.subNav1 {\r\n\t\tdisplay:none;\r\n\t}\r\n\t/*.menuIcon {\r\n\t\tdisplay:block;\r\n\t}\r\n\tnav .navLinks {\r\n\t\tdisplay:none;\r\n\t}\r\n\r\n\tfooter {\r\n\t\ttext-align:center;\r\n\t}*/\r\n\t#mainWrap {\r\n\t\tpadding-top:65px;\r\n\t}\r\n\theader {\r\n\t\tposition:fixed;\r\n\t\tleft:0;\r\n\t\tright:0;\r\n\t\ttop:0;\r\n\t\theight:65px;\r\n\t\tz-index:10;\r\n\t\tbackground:#FFFFFF;\r\n\t\t-webkit-box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);\r\n\t\tbox-shadow: 0 0 10px 0 rgba(0,0,0,0.2);\r\n\r\n\t}\r\n\t.desktop {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.mobile {\r\n\t\tdisplay:block;\r\n\t}\r\n\t.home .homeNav {\r\n\t\tleft:0;\r\n\t\tright:0;\r\n\t\twidth:auto;\r\n\t}\r\n\t.home .homeNav .homeLogo {\r\n\t\tpadding:5px 0px 5px 30px;\r\n\t\theight:55px;\r\n\t\tline-height:55px;\r\n\t\ttext-align:left;\r\n\t}\r\n\t.home .homeNav .homeLogo img {\r\n\t\theight:55px;\r\n\t}\r\n\t.home .homeNav .navList a {\r\n\t\tfont-size:25px;\r\n\t\theight:35px;\r\n\t\tline-height:35px;\r\n\t}\r\n\t.home .homeNav .homeSocial {\r\n\t\tleft:auto;\r\n\t\tbottom:auto;\r\n\t\ttop:0;\r\n\t\tpadding:15px 0px 12px 0px;\r\n\t\t\t\r\n\t}\r\n\t.home .homeNav .navList {\r\n\t\theight:175px;\r\n\t\tmargin-top:-55px;\r\n\t}\r\n\t.topBanner .leftNav {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.pageDesc {\r\n\t\tpadding:50px;\r\n\t}\r\n\t.subNav li:first-child, .subNav li:last-child {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.subNav, .subNav.sticky {\r\n\t\tposition:static;\r\n\t\twidth:auto;\r\n\t\tpadding:0px;\r\n\t\tmargin-left:-10px;\r\n\t\tmargin-right:-10px;\r\n\t\theight:146px !important;\r\n\t}\r\n\t.subNav li {\r\n\t\tfloat:left;\r\n\t\twidth:46%;\r\n\t\tvertical-align:top;\r\n\t\tpadding:0px;\r\n\t\tmargin:0 2%;\r\n\t}\r\n\t.subTabWrap {\r\n\t\tpadding-left:0;\r\n\t\tbackground:#fff;\r\n\t}\r\n\t.pageTab, .whiteBg, .whiteLine {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.pageDesc, .rightDesc, .pageDescWrap {\r\n\t\tpadding:0;\r\n\t\tbackground:none;\r\n\t}\r\n\t.pageDescWrap {\r\n\t\tpadding-bottom:20px;\r\n\t}\r\n\t.leftDesc {\r\n\t\tfloat:none;\r\n\t\tmargin-left:0px;\r\n\t\twidth:100%;\r\n\t}\r\n\t.leftDesc img {\r\n\t\twidth:100%;\r\n\t}\r\n\t.topBanner .topBannerImgWrap {\r\n\t\tposition:static;\r\n\t\theight:110px;\r\n\t\tpadding:10px;\r\n\t}\r\n\t.topBanner .topBannerImgWrap .img {\r\n\t\tposition:static;\r\n\t\theight:110px;\r\n\t}\r\n\t.topBanner .topBannerDesc {\r\n\t\tposition:static;\r\n\t\tpadding:0px 10px 10px 10px;\r\n\t}\r\n\t.topBanner .topBannerDesc h1 {\r\n\t\tfont-size:40px;\r\n\t}\r\n\t.topBanner .topBannerDesc .description {\r\n\t\tfont-size:16px;\r\n\t\tpadding-left:35px;\r\n\t}\r\n\t.topBanner .topBannerDesc span {\r\n\t\tfont-size:26px;\r\n\t\tmargin-left:-35px;\r\n\t}\r\n\t.down_arrow {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.subTabWrap.sticky .pageDesc {\r\n\t\tpadding-top:0px;\r\n\t}\r\n\t.pageDescWrap h2 {\r\n\t\ttext-align:center;\r\n\t}\r\n\t.leftSmallWrap {\r\n\t\twidth:auto;\r\n\t}\r\n\t.pageDescWrap h3, .pageDescWrap h4 {\r\n\t\tmargin-top:20px;\r\n\t}\r\n\t.videoExpertWrap .videoThumb {\r\n\t\tfloat:none;\r\n\t\twidth:auto;\r\n\t\ttext-align:center;\r\n\t\tmargin-bottom:20px;\r\n\t}\r\n\t.videoExpertWrap .videoDivider {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.videoExpertWrap .videoDesc {\r\n\t\tfloat:none;\r\n\t\theight:auto;\r\n\t}\r\n\t.videoExpertWrap .videoDownload {\r\n\t\twidth:100%;\r\n\t\theight:35px;\r\n\t\tmargin-left:0px;\r\n\t\tposition:relative;\r\n\t}\r\n\t.videoExpertWrap .videoDownload:after {\r\n\t\tbackground-color:#ffffff;\r\n\t}\r\n\t.videoExpertWrap .videoDesc p {\r\n\t\tpadding-bottom:13px;\r\n\t}\r\n\t.videoPlayerExpert {\r\n\t\tposition:fixed;\r\n\t\tleft:0;\r\n\t\tright:0;\r\n\t\ttop:0;\r\n\t\tbackground:#ebebeb;\r\n\t\tz-index:10001;\r\n\t}\r\n\t.videoPlayerExpert .closeBtn {\r\n\t\ttop:0;\r\n\t}\r\n\t.fullVideo {\r\n\t\theight:100%;\r\n\t\tmargin-top:0px !important;\r\n\t}\r\n\t.blogSlider li .sliderDesc {\r\n\t\tpadding-left: 140px;\r\n\t}\r\n\t.blogSlider li .sliderImgWrap {\r\n\t\twidth:130px;\r\n\t\tmargin-left:-140px;\r\n\t}\r\n\t.blogSlider li .sliderImg {\r\n\t\tmargin-left:0px;\r\n\t}\r\n\t.mobile.videoFullWidth {\r\n\t\tmargin-top:20px;\r\n\t}\r\n\t.menuIcon.openNav .arrow {\r\n\t\tmargin-top:20px;\r\n\t}\r\n}\r\n@media (max-width: 800px){\r\n\t.expertscss{\r\n\tpadding-left: 5px;\t\r\n\t}\r\n\t.col-fixed{\r\n\t\twidth:29%;\r\n\t}\r\n}\r\n@media (max-width: 630px){\r\n\t\r\n\t.blogSlider li .sliderDesc {\r\n\t\tpadding-left: 0px;\r\n\t}\r\n\t.blogSlider li .sliderImgWrap {\r\n\t\tfloat:none;\r\n\t\twidth:auto;\r\n\t\tmargin-left:0px;\r\n\t}\r\n\t.blogSlider li .sliderDesc {\r\n\t\ttext-align:center;\r\n\t}\r\n\t.blogSlider li .sliderImg {\r\n\t\tmargin:0 auto 15px auto;\r\n\t}\r\n}\r\n@media (max-width: 479px){\r\n\t.intro header .continue {\r\n\t\tpadding:0px 10px;\r\n\t\tfont-size:16px;\r\n\t}\r\n\t.intro header .logo {\r\n\t\tmargin-left:10px;\r\n\t}\t\r\n}\r\n\r\n@media (max-width: 320px){\r\n\t\r\n}\r\n/*maginfying popup*/\r\n.expertscss{\r\n\tmargin: 0 auto;\r\n\tpadding-left: 75px;\r\n    position:relative;\r\n   }\r\n.sub-head{\r\n\tpadding: 10px 0px;\r\n\r\n\t\r\n}\r\n.sub-head h2{\r\n\tpadding-bottom: 25px;\r\n}\r\n.subTabWrap1{\r\n\tmargin-top: 70px;\r\n}\r\n.subTabWrap1 video{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.videoContainer \r\n{\r\n    position:absolute;\r\n    height:100%;\r\n    width:100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.videoContainer video \r\n{\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n   .finny{\r\n\t   background-color:#9b59b6;\r\n\t    margin:0 auto; padding:0;\r\n\t\t margin-right:25px;\r\n\t\t  min-height:300px;\r\n\t\t  float:left;\r\n   }\r\n   .kamal{\r\n\t   background-color:#3498db; margin:0 auto; padding:0; min-height:300px; margin-right:25px;  float:left;\r\n   }\r\n   .sudhakar{\r\n\t   background-color:#d8466c; margin:0 auto; padding:0; margin-right:25px; min-height:300px; float:left; \r\n   }\r\n   .janaki{\r\n\t   background-color:#2ecc71; margin:0 auto; padding:0; min-height:300px; margin-right:25px; float:left;\r\n   }\r\n   .jothi{\r\n\t   background-color:#e67e22; margin:0 auto; padding:0; min-height:300px; margin-right:25px;  float:left;\r\n   }\r\n   .mythili{\r\n\t   background-color:#95a5a6; margin:0 auto; padding:0;margin-right:25px; float:left;\r\n   }\r\n   @media only screen and (max-device-width: 480px) {\r\n.expertscss{\r\n\tmargin-top:100px;\r\n    padding-left: 60px;\r\n    position:relative;\r\n   }\r\n   .col-fixed{\r\n\t   margin-bottom:20px;\r\n\t   width: 80%;\r\n   }\r\n\t   .author em, .author1 em, .author2 em, .author3 em, .author4 em, .author5 em{\r\n\t\t   font-size: 10px;\r\n\t   }\r\n\t}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);