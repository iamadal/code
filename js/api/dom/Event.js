/* The Event interface represents an event which takes place in the DOM.

An event can be triggered by the user action e.g.  clicking the mouse button
or tapping keyboard, or generated by APIs to represent the progress of an
asynchronous task. It can also be triggered programmatically, such as by
calling the HTMLElement.click()  method of an element, or by defining the
event, then sending  it to a specified target using
EventTarget.dispatchEvent().

There are many types of events, some of which use other interfaces based on
the main Event interface. Event itself contains the properties and methods
which are common to all events.

Many DOM elements can be set up to accept (or "listen" for) these events, and
execute code in response to process (or "handle")  them. Event-handlers are
usually connected (or "attached")  to various HTML elements (such as <button>,
<div>, <span>, etc.) using EventTarget.addEventListener(), and this generally
replaces  using the old HTML event handler attributes. Further, when properly
added, such handlers can also be disconnected if needed using 
removeEventListener(). */




/* Note: One element can have several such handlers, even for the exact same
event—particularly if separate, independent code modules attach them, each for
its own independent purposes. (For example, a webpage with an
advertising-module and statistics-module both monitoring video-watching.) */


/* When there are many nested elements, each with its own handler(s), event
processing can become very complicated—especially where a parent element
receives the very same event as its child elements because "spatially" they
overlap so the event technically occurs in both, and the processing order of
such events depends on the Event bubbling and capture settings of each handler
triggered. */


// Interfaces based on Event

/*
AnimationEvent
AudioProcessingEvent
BeforeInputEvent
BeforeUnloadEvent
BlobEvent
ClipboardEvent
CloseEvent
CompositionEvent
CSSFontFaceLoadEvent
CustomEvent
DeviceMotionEvent
DeviceOrientationEvent
DeviceProximityEvent
DOMTransactionEvent
DragEvent
EditingBeforeInputEvent
ErrorEvent
FetchEvent
FocusEvent
GamepadEvent
HashChangeEvent
IDBVersionChangeEvent
InputEvent
KeyboardEvent
MediaStreamEvent
MessageEvent
MouseEvent
MutationEvent
OfflineAudioCompletionEvent
OverconstrainedError
PageTransitionEvent
PaymentRequestUpdateEvent
PointerEvent
PopStateEvent
ProgressEvent
RelatedEvent
RTCDataChannelEvent
RTCPeerConnectionIceEvent
SensorEvent
StorageEvent
SVGEvent
SVGZoomEvent
TimeEvent
TouchEvent
TrackEvent
TransitionEvent
UIEvent
UserProximityEvent
WebGLContextEvent
WheelEvent
FetchEvent
FocusEvent
GamepadEvent
HashChangeEvent
IDBVersionChangeEvent
InputEvent
KeyboardEvent
MediaStreamEvent
MessageEvent
MouseEvent
MutationEvent
OfflineAudioCompletionEvent
OverconstrainedError
PageTransitionEvent
PaymentRequestUpdateEvent
PointerEvent
PopStateEvent
ProgressEvent
RelatedEvent
RTCDataChannelEvent
RTCPeerConnectionIceEvent
SensorEvent
StorageEvent
SVGEvent
SVGZoomEvent
TimeEvent
TouchEvent
TrackEvent
TransitionEvent
UIEvent
UserProximityEvent
WebGLContextEvent
WheelEvent

*/

// constructor Event() which will create an Event Object from the constructor and so on




// Properties

Event.bubbles  // Read only A boolean indicating whether or not the event bubbles up through the DOM.
Event.cancelBubble // A historical alias to Event.stopPropagation(). Setting its value to true before returning from an event handler prevents propagation of the event.
Event.cancelable //Read only A boolean indicating whether the event is cancelable.
Event.composed //Read only A boolean indicating whether or not the event can bubble across the boundary between the shadow DOM and the regular DOM.
Event.currentTarget //Read only A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. It's possible this has been changed along the way through retargeting.
Event.deepPath  //An Array of DOM Nodes through which the event has bubbled.
Event.defaultPrevented //Read only Indicates whether or not the call to event.preventDefault() canceled the event.
Event.eventPhase //Read only Indicates which phase of the event flow is being processed.
Event.explicitOriginalTarget  //Read only The explicit original target of the event (Mozilla-specific.)
Event.originalTarget  //Read only The original target of the event, before any retargetings. (Mozilla-specific.)
Event.returnValue  //A historical property introduced by Internet Explorer and eventually adopted into the DOM specification in order to ensure existing sites continue to work. Ideally, you should try to use Event.preventDefault() and Event.defaultPrevented instead, but you can use returnValue if you choose to do so.
Event.srcElement //A non-standard alias (from old versions of Microsoft Internet Explorer) for Event.target. Some other browsers are starting to support it for web compatibility purposes.
Event.target //Read only A reference to the target to which the event was originally dispatched.
Event.timeStamp //Read only The time at which the event was created (in milliseconds). By specification, this value is time since epoch—but in reality, browsers' definitions vary. In addition, work is underway to change this to be a DOMHighResTimeStamp instead.
Event.type //Read only The name of the event. Case-insensitive.
Event.isTrusted //Read only Indicates whether or not the event was initiated by the browser (after a user click, for instance) or by a script (using an event creation method, like Event.initEvent).


// Methods

Event.composedPath() //Returns the event’s path (objects on which listeners will be invoked). This does not include nodes in shadow trees if the shadow root was created with its ShadowRoot.mode closed.
Event.preventDefault() //Cancels the event (if it is cancelable).
Event.stopImmediatePropagation() //For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element as well as those attached to elements that will be traversed later (during the capture phase, for instance).
Event.stopPropagation() // Stops the propagation of events further along in the DOM.



// Deprecated methods

Event.initEvent() //Initializes the value of an Event created. If the event has already been dispatched, this method does nothing.
Event.getPreventDefault() // Returns the value of Event.defaultPrevented.
Event.preventBubble()  //Prevents the event from bubbling. Use event.stopPropagation instead.
Event.preventCapture()  //Prevents the event from bubbling. Use event.stopPropagation instead.


   


