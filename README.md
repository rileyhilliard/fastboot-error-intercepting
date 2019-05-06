# fastboot-error-intercepting
`yarn start`

This repo demonstrates various behaviors when errors are thrown in fastboot.

Throwing an error synchronously is caught in the `ember-cli-fastboot` Ember.onerror and is not rethrown. Forcing this to re-throw will allow the error to propagate all the way to the top of the node process, but still does not crash the node server. To do this, `ember-cli-fastboot` needs to be edited to remove the Ember.onerror assignment.

If Ember.onerror does not rethrow, the error ceases to propagate, even to process.on(‘uncaughtException’). This means all _synchronous_ errors are silenced via the Ember.onerror that does not re-throw within `ember-cli-fastboot`, however reassigning Ember.onerror will override the setting in `ember-cli-fastboot`.

If the error is re-thrown in a `process.on(‘uncaughtException’)`, the node process will crash. To enforce this, the error must be thrown in the function callback, and cannot defer to a wrapped promise rejection. In order for the `process` code in this example to work, `ember-cli-fastboot` needs to be yarn linkeded and edited to pass in `process` into `index.js` @:
```javascript
this.fastboot = new FastBoot({
  distPath: outputPath,
  sandboxGlobals: {
    process //  add this
  }
});
```
