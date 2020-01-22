# scroll-sensor

## Introduction
Scroll Sensor simulate scroll bar on a not scrollable dom.It has features of mouse wheel, mouse down move, touch move and scroll inertia.

You can know user's scroll behavior by listening events.It is very useful in canvas animation and other field. 

Here is a [Demo](https://wangpengfeido.github.io/demos/scroll-sensor/index.html).

## Install and import
Scroll Sensor can be installed by npm or yarn.And it can be imported by ES6 import grammar,commonJs grammar or including by script tag.

### Install by NPM
````shell
npm install scroll-sensor
````

### Import by ES6
````javascript
import {ScrollSensor} from 'scroll-sensor';
````

### Include by script tag
````html
<script src="https://unpkg.com/scroll-sensor@latest/dist/scroll-sensor.min.js"><script>
````

## Simple usage
````javascript
const scrollSensor = new ScrollSensor({
  element: document.querySelector('.some-class'),
});
scrollSensor.on('scroll', event => {
  // do some thing by event.scrollTop, event.scrollLeft, event.scrollX, event.scrollY
})
````

## API
### ScrollSensor({element,options,initialScrollTop,initialScrollLeft})
Main class of scroll-sensor.Call it by "new" to create a scroll-sensor instance.
* **element** ````<HTMLElement>```` The dom element to create scroll-sensor instance.User's scroll behavior on it will be listened.
* **options** ````<OptionsInterface>```` Options.See detail of [options](#options) below.It is optional.
* **initialScrollTop** ````<number>```` Set the initial [scroll top](#scrollsensorscrolltopscrollsensorscrollleft).
* **initialScrollLeft** ````<number>```` Set the initial [scroll left](#scrollsensorscrolltopscrollsensorscrollleft).

### scrollSensor.scrollTop/scrollSensor.scrollLeft
* type:````<number>````

These two properties get or set total scroll distance vertically and horizontally.

They are like [Element.scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop) and [Element.scrollLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft)

### scrollSensor.setOptions(options)
Reset the options.
* **options** ````<OptionsInterface>```` [Options](#options).It is optional.

### scrollSensor.destroy()
Release the resources and no longer emit event.

It should be called when you no longer use this scroll sensor instance. 

## Event
You can add or remove event listener by methods in ["events"](https://www.npmjs.com/package/events) lib, such as on(), off(), etc.

### event:"scroll"
This event is emitted when user scroll on the element or inertia scroll.

A event object will pass to the event listener.It has for properties.
* **scrollTop/scrollLeft** ````<number>```` Current [scrollSensor.scrollTop/scrollSensor.scrollLeft](#scrollsensorscrolltopscrollsensorscrollleft) value.
* **scrollX/scrollY** ````<number>```` Pixel distance of this scroll on x-axis and y-axis.

## Options
Options of Scroll Sensor.It passed by [constructor](#scrollsensorelementoptionsinitialscrolltopinitialscrollleft) or [setOptions](#scrollsensorsetoptionsoptions) method.

### mouseWheelIsEnable/mouseMoveIsEnable/touchIsEnable
* type: ````<boolean>````
* default: ````true````

Whether the *mouse wheel/mouse down move/touch move* is enable.If it set to false, *mouse wheel/mouse down move/touch move* on the element will be no effect.

### mouseWheelXSpeed/mouseWheelYSpeed/mouseMoveXSpeed/mouseMoveYSpeed/touchXSpeed/touchYSpeed
* type: ````<number>````
* default: 1

Scroll speed when *mouse wheeling/mouse down moving/touch moving* on the x-axis and y-axis.It will multiply the actual moving pixel distance.

If it set to 1, scroll distance will same as the actual moving distance.

### mouseMoveInertiaXDeceleration/mouseMoveInertiaYDeceleration/touchInertiaXDeceleration/touchInertiaYDeceleration
* type: ````<number>````
* default: Infinity

The inertia deceleration after *mouse down moving/touch moving*.It's unit is pixels/s^2.

Scroll Sensor will auto calculate the end speed of *mouse down moving/touch moving*.When user end the move, it will keep scroll some distance and slow down with a deceleration until to 0.

If it set to Infinity, there will no inertia.It is suggests set to about 5000.

### mouseMoveInertiaXMaxSpeed/mouseMoveInertiaYMaxSpeed/touchInertiaXMaxSpeed/touchInertiaYMaxSpeed
* type: ````<number>````
* default: same as [mouseMoveInertiaXDeceleration/mouseMoveInertiaYDeceleration/touchInertiaXDeceleration/touchInertiaYDeceleration](#mousemoveinertiaxdecelerationmousemoveinertiaydecelerationtouchinertiaxdecelerationtouchinertiaydeceleration)

Scroll Sensor will auto calculate the end speed of *mouse down moving/touch moving* used to inertia move.If the end speed greater than this option, the end speed will set to this option.

### minScrollTop/minScrollLeft/maxScrollTop/maxScrollLeft
* type: ````<number>````
* default: minScrollTop:0; minScrollLeft:0; maxScrollTop:Infinity; maxScrollLeft:0;

The min/max value of [scrollTop/scrollLeft](#scrollsensorscrolltopscrollsensorscrollleft).The scrollTop/scrollLeft value can't scroll out of this range.

