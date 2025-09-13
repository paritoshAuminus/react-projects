# Topics that extended react knowledge:

> <code>defaultProps</code> and <code>PropTypes</code>
> <code>event</code> object

## <code>defaultProps</code> and <code>PropTypes</code>

Default props and prop types should be used in consideration as one of them is deprecated in the update after v19 and the other is also rarely used in production. Although while using vanilla js with react in a vite react app, default props is very useful for preventing the site from crashing in case there are no props provided to the component. Below is the syntax for the default props as seen in the video, please make sure to see the corrected version in case it was updated

<pre>
<code>
ComponentName.defaultProps = {
    propName1: value1 (string/Number)
    propName2: value2 (string/Number)
}
</code>
</pre>

## The <code>event</code> object

Event object is a built-in javascript object which has been used multiple times while using event delegation to target different html elements and to facilitate javascript interactions with the DOM.

To see the javascript <code>event</code> object, you can add an <code>event handler</code> like react's <code>OnClick</code> handler to capture the event during clicking the element and then logging the object on either the DOM or console to see all the available properties to be worked with, like <code>style</code>, <code>target</code>, <code>innerContent</code> to name a few.

> Example: <code>event.target.value</code>

> Source: BroCode react one shot video on youtube