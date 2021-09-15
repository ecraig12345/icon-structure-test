(function () {
	'use strict';

	var react = {exports: {}};

	var react_development = {};

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var printWarning = function() {};

	{
	  var ReactPropTypesSecret = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  {
	    loggedTypeFailures = {};
	  }
	};

	var checkPropTypes_1 = checkPropTypes;

	/** @license React v16.14.0
	 * react.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */



	{
	  (function() {

	var _assign = objectAssign;
	var checkPropTypes = checkPropTypes_1;

	var ReactVersion = '16.14.0';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
	var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	/**
	 * Keeps track of the current dispatcher.
	 */
	var ReactCurrentDispatcher = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	/**
	 * Keeps track of the current batch's configuration such as how long an update
	 * should suspend for if it needs to.
	 */
	var ReactCurrentBatchConfig = {
	  suspense: null
	};

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
	function describeComponentFrame (name, source, ownerName) {
	  var sourceInfo = '';

	  if (source) {
	    var path = source.fileName;
	    var fileName = path.replace(BEFORE_SLASH_RE, '');

	    {
	      // In DEV, include code for a common special case:
	      // prefer "folder/index.js" instead of just "index.js".
	      if (/^index\./.test(fileName)) {
	        var match = path.match(BEFORE_SLASH_RE);

	        if (match) {
	          var pathBeforeSlash = match[1];

	          if (pathBeforeSlash) {
	            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
	            fileName = folderName + '/' + fileName;
	          }
	        }
	      }
	    }

	    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
	  } else if (ownerName) {
	    sourceInfo = ' (created by ' + ownerName + ')';
	  }

	  return '\n    in ' + (name || 'Unknown') + sourceInfo;
	}

	var Resolved = 1;
	function refineResolvedLazyComponent(lazyComponent) {
	  return lazyComponent._status === Resolved ? lazyComponent._result : null;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var functionName = innerType.displayName || innerType.name || '';
	  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
	}

	function getComponentName(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return "Profiler";

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        return 'Context.Consumer';

	      case REACT_PROVIDER_TYPE:
	        return 'Context.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        return getComponentName(type.type);

	      case REACT_BLOCK_TYPE:
	        return getComponentName(type.render);

	      case REACT_LAZY_TYPE:
	        {
	          var thenable = type;
	          var resolvedThenable = refineResolvedLazyComponent(thenable);

	          if (resolvedThenable) {
	            return getComponentName(resolvedThenable);
	          }

	          break;
	        }
	    }
	  }

	  return null;
	}

	var ReactDebugCurrentFrame = {};
	var currentlyValidatingElement = null;
	function setCurrentlyValidatingElement(element) {
	  {
	    currentlyValidatingElement = element;
	  }
	}

	{
	  // Stack implementation injected by the current renderer.
	  ReactDebugCurrentFrame.getCurrentStack = null;

	  ReactDebugCurrentFrame.getStackAddendum = function () {
	    var stack = ''; // Add an extra top frame while an element is being validated

	    if (currentlyValidatingElement) {
	      var name = getComponentName(currentlyValidatingElement.type);
	      var owner = currentlyValidatingElement._owner;
	      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
	    } // Delegate to the injected renderer-specific implementation


	    var impl = ReactDebugCurrentFrame.getCurrentStack;

	    if (impl) {
	      stack += impl() || '';
	    }

	    return stack;
	  };
	}

	/**
	 * Used by act() to track whether you're inside an act() scope.
	 */
	var IsSomeRendererActing = {
	  current: false
	};

	var ReactSharedInternals = {
	  ReactCurrentDispatcher: ReactCurrentDispatcher,
	  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
	  ReactCurrentOwner: ReactCurrentOwner,
	  IsSomeRendererActing: IsSomeRendererActing,
	  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
	  assign: _assign
	};

	{
	  _assign(ReactSharedInternals, {
	    // These should not be included in production.
	    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
	    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
	    // TODO: remove in React 17.0.
	    ReactComponentTreeHook: {}
	  });
	}

	// by calls to these methods by a Babel plugin.
	//
	// In PROD (or in packages without access to React internals),
	// they are left as they are instead.

	function warn(format) {
	  {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    printWarning('warn', format, args);
	  }
	}
	function error(format) {
	  {
	    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    printWarning('error', format, args);
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

	    if (!hasExistingStack) {
	      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	      var stack = ReactDebugCurrentFrame.getStackAddendum();

	      if (stack !== '') {
	        format += '%s';
	        args = args.concat([stack]);
	      }
	    }

	    var argsWithFormat = args.map(function (item) {
	      return '' + item;
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);

	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      throw new Error(message);
	    } catch (x) {}
	  }
	}

	var didWarnStateUpdateForUnmountedComponent = {};

	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
	    var warningKey = componentName + "." + callerName;

	    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	      return;
	    }

	    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

	    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	  }
	}
	/**
	 * This is the abstract API for an update queue.
	 */


	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	var emptyObject = {};

	{
	  Object.freeze(emptyObject);
	}
	/**
	 * Base class helpers for the updating state of a component.
	 */


	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context; // If a component has string refs, we will assign a different object later.

	  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
	  // renderer.

	  this.updater = updater || ReactNoopUpdateQueue;
	}

	Component.prototype.isReactComponent = {};
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */

	Component.prototype.setState = function (partialState, callback) {
	  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
	    {
	      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
	    }
	  }

	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */


	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */


	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };

	  var defineDeprecationWarning = function (methodName, info) {
	    Object.defineProperty(Component.prototype, methodName, {
	      get: function () {
	        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

	        return undefined;
	      }
	    });
	  };

	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	function ComponentDummy() {}

	ComponentDummy.prototype = Component.prototype;
	/**
	 * Convenience component with default shallow equality check for sCU.
	 */

	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context; // If a component has string refs, we will assign a different object later.

	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

	_assign(pureComponentPrototype, Component.prototype);

	pureComponentPrototype.isPureReactComponent = true;

	// an immutable object with a single mutable value
	function createRef() {
	  var refObject = {
	    current: null
	  };

	  {
	    Object.seal(refObject);
	  }

	  return refObject;
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	      }
	    }
	  };

	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	      }
	    }
	  };

	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	function warnIfStringRefCannotBeAutoConverted(config) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
	      var componentName = getComponentName(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://reactjs.org/docs/react-api.html#createelement
	 */

	function createElement(type, config, children) {
	  var propName; // Reserved names are extracted

	  var props = {};
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;

	      {
	        warnIfStringRefCannotBeAutoConverted(config);
	      }
	    }

	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  } // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.


	  var childrenLength = arguments.length - 2;

	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);

	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }

	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }

	    props.children = childArray;
	  } // Resolve default props


	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;

	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  {
	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }
	  }

	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	  return newElement;
	}
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://reactjs.org/docs/react-api.html#cloneelement
	 */

	function cloneElement(element, config, children) {
	  if (!!(element === null || element === undefined)) {
	    {
	      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
	    }
	  }

	  var propName; // Original props are copied

	  var props = _assign({}, element.props); // Reserved names are extracted


	  var key = element.key;
	  var ref = element.ref; // Self is preserved since the owner is preserved.

	  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.

	  var source = element._source; // Owner will be preserved, unless ref is overridden

	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }

	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    } // Remaining properties override existing props


	    var defaultProps;

	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }

	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  } // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.


	  var childrenLength = arguments.length - 2;

	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);

	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }

	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */

	function isValidElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	  return '$' + escapedString;
	}
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */


	var didWarnAboutMaps = false;
	var userProvidedKeyEscapeRegex = /\/+/g;

	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	var POOL_SIZE = 10;
	var traverseContextPool = [];

	function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
	  if (traverseContextPool.length) {
	    var traverseContext = traverseContextPool.pop();
	    traverseContext.result = mapResult;
	    traverseContext.keyPrefix = keyPrefix;
	    traverseContext.func = mapFunction;
	    traverseContext.context = mapContext;
	    traverseContext.count = 0;
	    return traverseContext;
	  } else {
	    return {
	      result: mapResult,
	      keyPrefix: keyPrefix,
	      func: mapFunction,
	      context: mapContext,
	      count: 0
	    };
	  }
	}

	function releaseTraverseContext(traverseContext) {
	  traverseContext.result = null;
	  traverseContext.keyPrefix = null;
	  traverseContext.func = null;
	  traverseContext.context = null;
	  traverseContext.count = 0;

	  if (traverseContextPool.length < POOL_SIZE) {
	    traverseContextPool.push(traverseContext);
	  }
	}
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */


	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  var invokeCallback = false;

	  if (children === null) {
	    invokeCallback = true;
	  } else {
	    switch (type) {
	      case 'string':
	      case 'number':
	        invokeCallback = true;
	        break;

	      case 'object':
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	        }

	    }
	  }

	  if (invokeCallback) {
	    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.

	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);

	    if (typeof iteratorFn === 'function') {

	      {
	        // Warn about using Maps as children
	        if (iteratorFn === children.entries) {
	          if (!didWarnAboutMaps) {
	            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
	          }

	          didWarnAboutMaps = true;
	        }
	      }

	      var iterator = iteratorFn.call(children);
	      var step;
	      var ii = 0;

	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getComponentKey(child, ii++);
	        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	      }
	    } else if (type === 'object') {
	      var addendum = '';

	      {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
	      }

	      var childrenString = '' + children;

	      {
	        {
	          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
	        }
	      }
	    }
	  }

	  return subtreeCount;
	}
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */


	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */


	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (typeof component === 'object' && component !== null && component.key != null) {
	    // Explicit key
	    return escape(component.key);
	  } // Implicit key determined by the index in the set


	  return index.toString(36);
	}

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;
	  func.call(context, child, bookKeeping.count++);
	}
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */


	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }

	  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  releaseTraverseContext(traverseContext);
	}

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;
	  var mappedChild = func.call(context, child, bookKeeping.count++);

	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
	      return c;
	    });
	  } else if (mappedChild != null) {
	    if (isValidElement(mappedChild)) {
	      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }

	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';

	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }

	  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  releaseTraverseContext(traverseContext);
	}
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */


	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }

	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrencount
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */


	function countChildren(children) {
	  return traverseAllChildren(children, function () {
	    return null;
	  }, null);
	}
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
	 */


	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
	    return child;
	  });
	  return result;
	}
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */


	function onlyChild(children) {
	  if (!isValidElement(children)) {
	    {
	      throw Error( "React.Children.only expected to receive a single React element child." );
	    }
	  }

	  return children;
	}

	function createContext(defaultValue, calculateChangedBits) {
	  if (calculateChangedBits === undefined) {
	    calculateChangedBits = null;
	  } else {
	    {
	      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
	        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
	      }
	    }
	  }

	  var context = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _calculateChangedBits: calculateChangedBits,
	    // As a workaround to support multiple concurrent renderers, we categorize
	    // some renderers as primary and others as secondary. We only expect
	    // there to be two concurrent renderers at most: React Native (primary) and
	    // Fabric (secondary); React DOM (primary) and React ART (secondary).
	    // Secondary renderers store their context values on separate fields.
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    // Used to track how many concurrent renderers this context currently
	    // supports within in a single renderer. Such as parallel server rendering.
	    _threadCount: 0,
	    // These are circular
	    Provider: null,
	    Consumer: null
	  };
	  context.Provider = {
	    $$typeof: REACT_PROVIDER_TYPE,
	    _context: context
	  };
	  var hasWarnedAboutUsingNestedContextConsumers = false;
	  var hasWarnedAboutUsingConsumerProvider = false;

	  {
	    // A separate object, but proxies back to the original context object for
	    // backwards compatibility. It has a different $$typeof, so we can properly
	    // warn for the incorrect usage of Context as a Consumer.
	    var Consumer = {
	      $$typeof: REACT_CONTEXT_TYPE,
	      _context: context,
	      _calculateChangedBits: context._calculateChangedBits
	    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

	    Object.defineProperties(Consumer, {
	      Provider: {
	        get: function () {
	          if (!hasWarnedAboutUsingConsumerProvider) {
	            hasWarnedAboutUsingConsumerProvider = true;

	            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
	          }

	          return context.Provider;
	        },
	        set: function (_Provider) {
	          context.Provider = _Provider;
	        }
	      },
	      _currentValue: {
	        get: function () {
	          return context._currentValue;
	        },
	        set: function (_currentValue) {
	          context._currentValue = _currentValue;
	        }
	      },
	      _currentValue2: {
	        get: function () {
	          return context._currentValue2;
	        },
	        set: function (_currentValue2) {
	          context._currentValue2 = _currentValue2;
	        }
	      },
	      _threadCount: {
	        get: function () {
	          return context._threadCount;
	        },
	        set: function (_threadCount) {
	          context._threadCount = _threadCount;
	        }
	      },
	      Consumer: {
	        get: function () {
	          if (!hasWarnedAboutUsingNestedContextConsumers) {
	            hasWarnedAboutUsingNestedContextConsumers = true;

	            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	          }

	          return context.Consumer;
	        }
	      }
	    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

	    context.Consumer = Consumer;
	  }

	  {
	    context._currentRenderer = null;
	    context._currentRenderer2 = null;
	  }

	  return context;
	}

	function lazy(ctor) {
	  var lazyType = {
	    $$typeof: REACT_LAZY_TYPE,
	    _ctor: ctor,
	    // React uses these fields to store the result.
	    _status: -1,
	    _result: null
	  };

	  {
	    // In production, this would just set it on the object.
	    var defaultProps;
	    var propTypes;
	    Object.defineProperties(lazyType, {
	      defaultProps: {
	        configurable: true,
	        get: function () {
	          return defaultProps;
	        },
	        set: function (newDefaultProps) {
	          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

	          defaultProps = newDefaultProps; // Match production behavior more closely:

	          Object.defineProperty(lazyType, 'defaultProps', {
	            enumerable: true
	          });
	        }
	      },
	      propTypes: {
	        configurable: true,
	        get: function () {
	          return propTypes;
	        },
	        set: function (newPropTypes) {
	          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

	          propTypes = newPropTypes; // Match production behavior more closely:

	          Object.defineProperty(lazyType, 'propTypes', {
	            enumerable: true
	          });
	        }
	      }
	    });
	  }

	  return lazyType;
	}

	function forwardRef(render) {
	  {
	    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
	      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
	    } else if (typeof render !== 'function') {
	      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
	    } else {
	      if (render.length !== 0 && render.length !== 2) {
	        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
	      }
	    }

	    if (render != null) {
	      if (render.defaultProps != null || render.propTypes != null) {
	        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
	      }
	    }
	  }

	  return {
	    $$typeof: REACT_FORWARD_REF_TYPE,
	    render: render
	  };
	}

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function memo(type, compare) {
	  {
	    if (!isValidElementType(type)) {
	      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
	    }
	  }

	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: compare === undefined ? null : compare
	  };
	}

	function resolveDispatcher() {
	  var dispatcher = ReactCurrentDispatcher.current;

	  if (!(dispatcher !== null)) {
	    {
	      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
	    }
	  }

	  return dispatcher;
	}

	function useContext(Context, unstable_observedBits) {
	  var dispatcher = resolveDispatcher();

	  {
	    if (unstable_observedBits !== undefined) {
	      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
	    } // TODO: add a more generic warning for invalid values.


	    if (Context._context !== undefined) {
	      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
	      // and nobody should be using this in existing code.

	      if (realContext.Consumer === Context) {
	        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
	      } else if (realContext.Provider === Context) {
	        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
	      }
	    }
	  }

	  return dispatcher.useContext(Context, unstable_observedBits);
	}
	function useState(initialState) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useState(initialState);
	}
	function useReducer(reducer, initialArg, init) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useReducer(reducer, initialArg, init);
	}
	function useRef(initialValue) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useRef(initialValue);
	}
	function useEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useEffect(create, deps);
	}
	function useLayoutEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useLayoutEffect(create, deps);
	}
	function useCallback(callback, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useCallback(callback, deps);
	}
	function useMemo(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useMemo(create, deps);
	}
	function useImperativeHandle(ref, create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useImperativeHandle(ref, create, deps);
	}
	function useDebugValue(value, formatterFn) {
	  {
	    var dispatcher = resolveDispatcher();
	    return dispatcher.useDebugValue(value, formatterFn);
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = getComponentName(ReactCurrentOwner.current.type);

	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }

	  return '';
	}

	function getSourceInfoErrorAddendum(source) {
	  if (source !== undefined) {
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }

	  return '';
	}

	function getSourceInfoErrorAddendumForProps(elementProps) {
	  if (elementProps !== null && elementProps !== undefined) {
	    return getSourceInfoErrorAddendum(elementProps.__source);
	  }

	  return '';
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	    if (parentName) {
	      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	    }
	  }

	  return info;
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }

	  element._store.validated = true;
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	    return;
	  }

	  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.

	  var childOwner = '';

	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
	  }

	  setCurrentlyValidatingElement(element);

	  {
	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
	  }

	  setCurrentlyValidatingElement(null);
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }

	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];

	      if (isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);

	    if (typeof iteratorFn === 'function') {
	      // Entry iterators used to provide implicit keys,
	      // but now we print a separate warning for them later.
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;

	        while (!(step = iterator.next()).done) {
	          if (isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var name = getComponentName(type);
	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      setCurrentlyValidatingElement(element);
	      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
	      setCurrentlyValidatingElement(null);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true;

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    setCurrentlyValidatingElement(fragment);
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      error('Invalid attribute `ref` supplied to `React.Fragment`.');
	    }

	    setCurrentlyValidatingElement(null);
	  }
	}
	function createElementWithValidation(type, props, children) {
	  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	  // succeed and there will likely be errors in render.

	  if (!validType) {
	    var info = '';

	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	    }

	    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

	    if (sourceInfo) {
	      info += sourceInfo;
	    } else {
	      info += getDeclarationErrorAddendum();
	    }

	    var typeString;

	    if (type === null) {
	      typeString = 'null';
	    } else if (Array.isArray(type)) {
	      typeString = 'array';
	    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
	      info = ' Did you accidentally export a JSX literal instead of a component?';
	    } else {
	      typeString = typeof type;
	    }

	    {
	      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }
	  }

	  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
	  // TODO: Drop this when these are no longer allowed as the type argument.

	  if (element == null) {
	    return element;
	  } // Skip key warning if the type isn't valid since our key validation logic
	  // doesn't expect a non-string/function type and can throw confusing errors.
	  // We don't want exception behavior to differ between dev and prod.
	  // (Rendering will throw with a helpful message and as soon as the type is
	  // fixed, the key warnings will appear.)


	  if (validType) {
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }
	  }

	  if (type === REACT_FRAGMENT_TYPE) {
	    validateFragmentProps(element);
	  } else {
	    validatePropTypes(element);
	  }

	  return element;
	}
	var didWarnAboutDeprecatedCreateFactory = false;
	function createFactoryWithValidation(type) {
	  var validatedFactory = createElementWithValidation.bind(null, type);
	  validatedFactory.type = type;

	  {
	    if (!didWarnAboutDeprecatedCreateFactory) {
	      didWarnAboutDeprecatedCreateFactory = true;

	      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
	    } // Legacy hook: remove it


	    Object.defineProperty(validatedFactory, 'type', {
	      enumerable: false,
	      get: function () {
	        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

	        Object.defineProperty(this, 'type', {
	          value: type
	        });
	        return type;
	      }
	    });
	  }

	  return validatedFactory;
	}
	function cloneElementWithValidation(element, props, children) {
	  var newElement = cloneElement.apply(this, arguments);

	  for (var i = 2; i < arguments.length; i++) {
	    validateChildKeys(arguments[i], newElement.type);
	  }

	  validatePropTypes(newElement);
	  return newElement;
	}

	{

	  try {
	    var frozenObject = Object.freeze({});
	    var testMap = new Map([[frozenObject, null]]);
	    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
	    // https://github.com/rollup/rollup/issues/1771
	    // TODO: we can remove these if Rollup fixes the bug.

	    testMap.set(0, 0);
	    testSet.add(0);
	  } catch (e) {
	  }
	}

	var createElement$1 =  createElementWithValidation ;
	var cloneElement$1 =  cloneElementWithValidation ;
	var createFactory =  createFactoryWithValidation ;
	var Children = {
	  map: mapChildren,
	  forEach: forEachChildren,
	  count: countChildren,
	  toArray: toArray,
	  only: onlyChild
	};

	react_development.Children = Children;
	react_development.Component = Component;
	react_development.Fragment = REACT_FRAGMENT_TYPE;
	react_development.Profiler = REACT_PROFILER_TYPE;
	react_development.PureComponent = PureComponent;
	react_development.StrictMode = REACT_STRICT_MODE_TYPE;
	react_development.Suspense = REACT_SUSPENSE_TYPE;
	react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
	react_development.cloneElement = cloneElement$1;
	react_development.createContext = createContext;
	react_development.createElement = createElement$1;
	react_development.createFactory = createFactory;
	react_development.createRef = createRef;
	react_development.forwardRef = forwardRef;
	react_development.isValidElement = isValidElement;
	react_development.lazy = lazy;
	react_development.memo = memo;
	react_development.useCallback = useCallback;
	react_development.useContext = useContext;
	react_development.useDebugValue = useDebugValue;
	react_development.useEffect = useEffect;
	react_development.useImperativeHandle = useImperativeHandle;
	react_development.useLayoutEffect = useLayoutEffect;
	react_development.useMemo = useMemo;
	react_development.useReducer = useReducer;
	react_development.useRef = useRef;
	react_development.useState = useState;
	react_development.version = ReactVersion;
	  })();
	}

	{
	  react.exports = react_development;
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	/**
	 * Concatination helper, which can merge class names together. Skips over falsey values.
	 *
	 * @public
	 */
	function css(...args) {
	    const classes = [];
	    for (const arg of args) {
	        if (arg) {
	            if (typeof arg === 'string') {
	                classes.push(arg);
	            }
	            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
	                classes.push(arg.toString());
	            }
	        }
	    }
	    return classes.join(' ');
	}

	const wrapIcon$1 = (icon, displayName) => {
	    const Component = (_a) => {
	        var { primaryFill = 'currentColor' } = _a, props = __rest(_a, ["primaryFill"]);
	        const { className } = props;
	        const containerProps = props['aria-label'] || props['aria-labelledby'] || props.title
	            ? {
	                role: 'img',
	            }
	            : {
	                ['aria-hidden']: true,
	            };
	        return (react.exports.createElement("span", Object.assign({}, props, containerProps, { className: css('root-span', className) }), react.exports.cloneElement(icon, {
	            className: 'svg',
	            fill: primaryFill,
	        })));
	    };
	    Component.displayName = displayName;
	    return Component;
	};
	var wrapIcon$2 = wrapIcon$1;

	const rawSvgAlert16Filled = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M3.5 6.5a4.5 4.5 0 019 0v1.9l.96 2.41a.5.5 0 01-.46.69H3a.5.5 0 01-.46-.69l.96-2.4V6.5z", fill: primaryFill }),
	        react.exports.createElement("path", { d: "M6.06 12.5a2 2 0 003.88 0H6.06z", fill: primaryFill }));
	};
	wrapIcon$2(rawSvgAlert16Filled({}), 'Alert16Filled');
	const rawSvgAlert16Regular = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M8 2a4.5 4.5 0 00-4.5 4.5v2.4l-.96 2.41A.5.5 0 003 12h3a2 2 0 104 0h3a.5.5 0 00.46-.69l-.96-2.4V6.5A4.5 4.5 0 008 2zm1 10a1 1 0 01-1 1 1 1 0 01-1-1h2zM4.5 6.5a3.5 3.5 0 117 0V9c0 .06.01.12.04.18l.72 1.82H3.74l.72-1.82A.5.5 0 004.5 9V6.5z", fill: primaryFill }));
	};
	wrapIcon$2(rawSvgAlert16Regular({}), 'Alert16Regular');
	const rawSvgAlert20Filled = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M12.45 16a2.5 2.5 0 01-4.9 0h4.9zM10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 01-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0110 2z", fill: primaryFill }));
	};
	wrapIcon$2(rawSvgAlert20Filled({}), 'Alert20Filled');
	const rawSvgAlert20Regular = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z", fill: primaryFill }));
	};
	wrapIcon$2(rawSvgAlert20Regular({}), 'Alert20Regular');
	const rawSvgAlert24Filled = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M9.04 19h5.92a3 3 0 01-5.92 0zM12 2a7.5 7.5 0 017.5 7.5v4l1.42 3.16a.95.95 0 01-.87 1.34H3.95a.95.95 0 01-.86-1.34L4.5 13.5V9.24A7.5 7.5 0 0112 2z", fill: primaryFill }));
	};
	const Alert24Filled = wrapIcon$2(rawSvgAlert24Filled({}), 'Alert24Filled');
	const rawSvgAlert24Regular = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M12 2a7.5 7.5 0 017.5 7.25v4.35l1.38 3.15a1.25 1.25 0 01-1.15 1.75H15a3 3 0 01-6 .18v-.18H4.27a1.25 1.25 0 01-1.14-1.75L4.5 13.6V9.5C4.5 5.35 7.85 2 12 2zm1.5 16.5h-3a1.5 1.5 0 003 .15v-.15zM12 3.5c-3.32 0-6 2.67-6 6v4.4L4.66 17h14.7L18 13.9V9.29a5.99 5.99 0 00-6-5.78z", fill: primaryFill }));
	};
	const Alert24Regular = wrapIcon$2(rawSvgAlert24Regular({}), 'Alert24Regular');
	const rawSvgAlert28Filled = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 28, height: 28, viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M17.47 22a3.5 3.5 0 01-6.94 0h6.94zM14 3a8.5 8.5 0 018.5 8.25v4.36l1.41 3.65c.04.1.07.2.08.3l.01.16c0 .66-.5 1.2-1.15 1.27l-.13.01H5.27a1.28 1.28 0 01-1.23-1.62l.04-.12L5.5 15.6v-4.1C5.5 6.8 9.3 3 14 3z", fill: primaryFill }));
	};
	wrapIcon$2(rawSvgAlert28Filled({}), 'Alert28Filled');
	const rawSvgAlert28Regular = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 28, height: 28, viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M14 3a8.5 8.5 0 018.5 8.25v4.86l1.41 3.65c.04.1.07.2.08.3l.01.16c0 .66-.5 1.2-1.15 1.27l-.13.01H17.5a3.5 3.5 0 01-7 .2v-.2H5.27a1.28 1.28 0 01-1.23-1.62l.04-.12L5.5 16.1v-4.6C5.5 6.8 9.3 3 14 3zm2 18.65v-.15h-4a2 2 0 004 .15zM14 4.5a7 7 0 00-7 6.76v4.99c0 .07 0 .13-.02.19l-.03.09L5.6 20h16.8l-1.35-3.48a.75.75 0 01-.04-.17V11.5a7 7 0 00-7.01-7z", fill: primaryFill }));
	};
	wrapIcon$2(rawSvgAlert28Regular({}), 'Alert28Regular');
	const rawSvgAlert32Filled = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M7 13a9 9 0 0118 0v3.8l1.93 4.83A1 1 0 0126 23H6a1 1 0 01-.93-1.37L7 16.8V13zm5.12 12a3.99 3.99 0 007.76 0h-7.76z", fill: primaryFill }));
	};
	wrapIcon$2(rawSvgAlert32Filled({}), 'Alert32Filled');
	const rawSvg = (iconProps) => {
	    const { className, primaryFill } = iconProps;
	    return react.exports.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", className: className },
	        react.exports.createElement("path", { d: "M16 4a9 9 0 00-9 9v4.8l-1.93 4.83A1 1 0 006 24h6a3.99 3.99 0 108 0h6a1 1 0 00.93-1.37L25 17.8V13a9 9 0 00-9-9zm2 20c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2h4zM9 13a7 7 0 1114 0v5a1 1 0 00.07.37L24.52 22H7.48l1.45-3.63A1 1 0 009 18v-5z", fill: primaryFill }));
	};
	wrapIcon$2(rawSvg({}), 'Alert32Regular');

	const wrapIcon = (icon, displayName) => {
	    const Component = (_a) => {
	        var { primaryFill = 'currentColor' } = _a, props = __rest(_a, ["primaryFill"]);
	        return (react.exports.createElement("span", Object.assign({}, props, { className: "root-span" }), react.exports.cloneElement(icon, { className: 'svg', fill: primaryFill })));
	    };
	    Component.displayName = displayName;
	    return Component;
	};
	// these are referenced in ./combined.ts and obviously should be in the output
	const importantThing = 'this is used and WILL be in the minified output';
	const importantFunc = () => console.log('this is also used and WILL be in the minified output');
	// these are NOT referenced in ./combined.ts but will be included even in the minified output due to side effects
	const doStuff = (stuff) => console.log(stuff);
	doStuff('this WILL be in the minified output due to possible side effect');
	wrapIcon(react.exports.createElement("svg", null), 'Fake icon side effect which WILL BE BUNDLED');

	console.log(Alert24Filled);
	console.log(Alert24Regular);
	console.log(importantThing);
	console.log(importantFunc());

}());