'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridInline = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _reactSizeme = require('react-sizeme');

var _reactSizeme2 = _interopRequireDefault(_reactSizeme);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _exenv = require('exenv');

var _exenv2 = _interopRequireDefault(_exenv);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _GridItem = require('./GridItem');

var _GridItem2 = _interopRequireDefault(_GridItem);

var _styleHelper = require('../utils/style-helper');

var _requestAnimationFrame = require('../animations/request-animation-frame');

var _easings = require('../animations/easings');

var easings = _interopRequireWildcard(_easings);

var _transitions = require('../animations/transitions/');

var transitions = _interopRequireWildcard(_transitions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imagesLoaded = _exenv2.default.canUseDOM ? require('imagesloaded') : null;

var isNumber = function isNumber(v) {
  return typeof v === 'number' && isFinite(v);
}; // eslint-disable-line no-restricted-globals
var isPercentageNumber = function isPercentageNumber(v) {
  return typeof v === 'string' && /^\d+(\.\d+)?%$/.test(v);
};

// eslint-disable-next-line arrow-parens
var createArray = function createArray(v, l) {
  var array = [];
  for (var i = 0; i < l; i += 1) {
    array.push(v);
  }return array;
};

/* eslint-disable consistent-return */
var getColumnLengthAndWidth = function getColumnLengthAndWidth(width, value, gutter) {
  if (isNumber(value)) {
    var _columnWidth = parseFloat(value);

    return [Math.floor((width - (width / _columnWidth - 1) * gutter) / _columnWidth), _columnWidth];
  } else if (isPercentageNumber(value)) {
    var columnPercentage = parseFloat(value) / 100;
    var maxColumn = Math.floor(1 / columnPercentage);
    var _columnWidth2 = (width - gutter * (maxColumn - 1)) / maxColumn;

    return [maxColumn, _columnWidth2];
  }

  (0, _invariant2.default)(false, 'Should be columnWidth is a number or percentage string.');
};
/* eslint-enable consistent-return */

/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  gridRef: _propTypes2.default.func,
  component: _propTypes2.default.string,
  itemComponent: _propTypes2.default.string,
  columnWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  gutterWidth: _propTypes2.default.number,
  gutterHeight: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  easing: _propTypes2.default.string,
  appearDelay: _propTypes2.default.number,
  appear: _propTypes2.default.func,
  appeared: _propTypes2.default.func,
  enter: _propTypes2.default.func,
  entered: _propTypes2.default.func,
  leaved: _propTypes2.default.func,
  units: _propTypes2.default.shape({
    length: _propTypes2.default.string,
    angle: _propTypes2.default.string
  }),
  monitorImagesLoaded: _propTypes2.default.bool,
  vendorPrefix: _propTypes2.default.bool,
  userAgent: _propTypes2.default.string,
  enableSSR: _propTypes2.default.bool,
  onLayout: _propTypes2.default.func,
  horizontal: _propTypes2.default.bool,
  rtl: _propTypes2.default.bool
};
/* eslint-enable react/no-unused-prop-types */

var GridInline = exports.GridInline = function (_Component) {
  _inherits(GridInline, _Component);

  function GridInline(props) {
    _classCallCheck(this, GridInline);

    var _this = _possibleConstructorReturn(this, (GridInline.__proto__ || Object.getPrototypeOf(GridInline)).call(this, props));

    _this.handleItemMounted = function () {
      return _this.__handleItemMounted__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleItemUnmount = function () {
      return _this.__handleItemUnmount__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRef = function () {
      return _this.__handleRef__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.items = {};
    _this.imgLoad = {};
    _this.mounted = false;
    _this.state = _this.doLayout(props);
    return _this;
  }

  _createClass(GridInline, [{
    key: '__handleRef__REACT_HOT_LOADER__',
    value: function __handleRef__REACT_HOT_LOADER__() {
      return this.__handleRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleItemUnmount__REACT_HOT_LOADER__',
    value: function __handleItemUnmount__REACT_HOT_LOADER__() {
      return this.__handleItemUnmount__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleItemMounted__REACT_HOT_LOADER__',
    value: function __handleItemMounted__REACT_HOT_LOADER__() {
      return this.__handleItemMounted__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
      this.updateLayout(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _shallowequal2.default)(nextProps, this.props)) {
        this.updateLayout(nextProps);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal2.default)(nextProps, this.props) || !(0, _shallowequal2.default)(nextState, this.state);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'setStateIfNeeded',
    value: function setStateIfNeeded(state) {
      if (this.mounted) {
        this.setState(state);
      }
    }
  }, {
    key: 'getItemHeight',
    value: function getItemHeight(item) {
      if (item.key && this.items.hasOwnProperty(item.key)) {
        var comp = this.items[item.key];
        var el = comp.node;
        var candidate = [el.scrollHeight, el.clientHeight, el.offsetHeight, 0].filter(isNumber);
        return Math.max.apply(Math, _toConsumableArray(candidate));
      }
      return 0;
    }
  }, {
    key: 'doLayout',
    value: function doLayout(props) {
      if (!_exenv2.default.canUseDOM) {
        return this.doLayoutForSSR(props);
      }

      var results = this.doLayoutForClient(props);

      if (this.mounted && typeof this.props.onLayout === 'function') {
        this.props.onLayout();
      }

      return results;
    }
  }, {
    key: 'doLayoutForClient',
    value: function doLayoutForClient(props) {
      var _this2 = this;

      var containerWidth = props.size.width,
          rawColumnWidth = props.columnWidth,
          gutterWidth = props.gutterWidth,
          gutterHeight = props.gutterHeight,
          horizontal = props.horizontal;


      var childArray = _react2.default.Children.toArray(props.children);

      var _getColumnLengthAndWi = getColumnLengthAndWidth(containerWidth, rawColumnWidth, gutterWidth),
          _getColumnLengthAndWi2 = _slicedToArray(_getColumnLengthAndWi, 2),
          maxColumn = _getColumnLengthAndWi2[0],
          columnWidth = _getColumnLengthAndWi2[1];

      var columnHeights = createArray(0, maxColumn);

      var rects = void 0;
      if (!horizontal) {
        rects = childArray.map(function (child) {
          var column = columnHeights.indexOf(Math.min.apply(Math, _toConsumableArray(columnHeights)));
          var height = _this2.getItemHeight(child);
          var left = column * columnWidth + column * gutterWidth;
          var top = columnHeights[column];

          columnHeights[column] += Math.round(height) + gutterHeight;

          return { top: top, left: left, width: columnWidth, height: height };
        });
      } else {
        var sumHeights = childArray.reduce(function (sum, child) {
          return sum + Math.round(_this2.getItemHeight(child)) + gutterHeight;
        }, 0);
        var maxHeight = sumHeights / maxColumn;

        var currentColumn = 0;
        rects = childArray.map(function (child) {
          var column = currentColumn >= maxColumn - 1 ? maxColumn - 1 : currentColumn;
          var height = _this2.getItemHeight(child);
          var left = column * columnWidth + column * gutterWidth;
          var top = columnHeights[column];

          columnHeights[column] += Math.round(height) + gutterHeight;
          if (columnHeights[column] >= maxHeight) {
            currentColumn += 1;
          }

          return { top: top, left: left, width: columnWidth, height: height };
        });
      }

      var width = maxColumn * columnWidth + (maxColumn - 1) * gutterWidth;
      var height = Math.max.apply(Math, _toConsumableArray(columnHeights)) - gutterHeight;
      var finalRects = rects.map(function (o) {
        return _extends({}, o, {
          left: o.left + (containerWidth - width) / 2
        });
      });

      return { rects: finalRects, actualWidth: width, height: height, columnWidth: columnWidth };
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'doLayoutForSSR',
    value: function doLayoutForSSR(props) {
      return {
        rects: _react2.default.Children.toArray(props.children).map(function () {
          return {
            top: 0, left: 0, width: 0, height: 0
          };
        }),
        actualWidth: 0,
        height: 0,
        columnWidth: 0
      };
    }
  }, {
    key: 'updateLayout',
    value: function updateLayout(props) {
      if (!props) {
        this.setStateIfNeeded(this.doLayout(this.props));
      } else {
        this.setStateIfNeeded(this.doLayout(props));
      }
    }
  }, {
    key: '__handleItemMounted__REACT_HOT_LOADER__',
    value: function __handleItemMounted__REACT_HOT_LOADER__(item) {
      var _this3 = this;

      var key = item.props.itemKey;

      this.items[key] = item;

      if (this.props.monitorImagesLoaded && typeof imagesLoaded === 'function') {
        var nodeRef = useRef(item);
        var node = nodeRef.current;
        var imgLoad = imagesLoaded(node);

        imgLoad.once('always', function () {
          return (0, _requestAnimationFrame.raf)(function () {
            _this3.updateLayout(_this3.props);
          });
        });

        this.imgLoad[key] = imgLoad;
      }

      this.updateLayout(this.props);
    }
  }, {
    key: '__handleItemUnmount__REACT_HOT_LOADER__',
    value: function __handleItemUnmount__REACT_HOT_LOADER__(item) {
      var key = item.props.itemKey;


      if (this.items.hasOwnProperty(key)) {
        delete this.items[key];
      }

      if (this.imgLoad.hasOwnProperty(key)) {
        this.imgLoad[key].off('always');
        delete this.imgLoad[key];
      }
    }
  }, {
    key: '__handleRef__REACT_HOT_LOADER__',
    value: function __handleRef__REACT_HOT_LOADER__() {
      this.props.refCallback(this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          gutterWidth = _props.gutterWidth,
          gutterHeight = _props.gutterHeight,
          rawColumnWidth = _props.columnWidth,
          monitorImagesLoaded = _props.monitorImagesLoaded,
          enableSSR = _props.enableSSR,
          onLayout = _props.onLayout,
          horizontal = _props.horizontal,
          rtl = _props.rtl,
          refCallback = _props.refCallback,
          className = _props.className,
          style = _props.style,
          size = _props.size,
          component = _props.component,
          itemComponent = _props.itemComponent,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['gutterWidth', 'gutterHeight', 'columnWidth', 'monitorImagesLoaded', 'enableSSR', 'onLayout', 'horizontal', 'rtl', 'refCallback', 'className', 'style', 'size', 'component', 'itemComponent', 'children']);

      var _state = this.state,
          rects = _state.rects,
          actualWidth = _state.actualWidth,
          height = _state.height;

      var containerSize = {
        actualWidth: actualWidth,
        width: size.width == null ? 0 : size.width,
        height: height
      };
      var validChildren = _react2.default.Children.toArray(children).filter(function (child) {
        return (0, _react.isValidElement)(child);
      });

      /* eslint-disable no-return-assign */
      return _react2.default.createElement(
        _TransitionGroup2.default,
        {
          component: component,
          className: className,
          style: _extends({}, style || {}, {
            position: 'relative',
            transition: (0, _styleHelper.transition)(['height'], rest.duration, easings.easeOut),
            height: height
          }),
          ref: this.handleRef
        },
        validChildren.map(function (child, i) {
          return _react2.default.createElement(
            _GridItem2.default,
            _extends({}, rest, {
              index: i,
              key: child.key,
              component: itemComponent,
              itemKey: child.key,
              rect: rects[i],
              rtl: rtl,
              containerSize: containerSize,
              onMounted: _this4.handleItemMounted,
              onUnmount: _this4.handleItemUnmount
            }),
            child
          );
        })
      );
      /* eslint-enable no-return-assign */
    }
  }]);

  return GridInline;
}(_react.Component);

GridInline.propTypes = _extends({}, propTypes, {
  size: _propTypes2.default.shape({
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  })
});


var SizeAwareGridInline = (0, _reactSizeme2.default)({
  monitorWidth: true,
  monitorHeight: false
})(GridInline);

var StackGrid = function (_Component2) {
  _inherits(StackGrid, _Component2);

  function StackGrid() {
    var _ref;

    var _temp, _this5, _ret;

    _classCallCheck(this, StackGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this5 = _possibleConstructorReturn(this, (_ref = StackGrid.__proto__ || Object.getPrototypeOf(StackGrid)).call.apply(_ref, [this].concat(args))), _this5), _this5.handleRef = function () {
      var _this6;

      return (_this6 = _this5).__handleRef__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _temp), _possibleConstructorReturn(_this5, _ret);
  }

  _createClass(StackGrid, [{
    key: '__handleRef__REACT_HOT_LOADER__',
    value: function __handleRef__REACT_HOT_LOADER__() {
      return this.__handleRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'updateLayout',
    value: function updateLayout() {
      this.grid.updateLayout();
    }
  }, {
    key: '__handleRef__REACT_HOT_LOADER__',
    value: function __handleRef__REACT_HOT_LOADER__(grid) {
      this.grid = grid;

      if (typeof this.props.gridRef === 'function') {
        this.props.gridRef(this);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          enableSSR = _props2.enableSSR,
          gridRef = _props2.gridRef,
          rest = _objectWithoutProperties(_props2, ['enableSSR', 'gridRef']);

      _reactSizeme2.default.enableSSRBehaviour = enableSSR;

      return _react2.default.createElement(SizeAwareGridInline, _extends({}, rest, {
        refCallback: this.handleRef
      }));
    }
  }]);

  return StackGrid;
}(_react.Component);

StackGrid.propTypes = propTypes;
StackGrid.defaultProps = {
  style: {},
  gridRef: null,
  component: 'div',
  itemComponent: 'span',
  columnWidth: 150,
  gutterWidth: 5,
  gutterHeight: 5,
  duration: 480,
  easing: easings.quartOut,
  appearDelay: 30,
  appear: transitions.fadeUp.appear,
  appeared: transitions.fadeUp.appeared,
  enter: transitions.fadeUp.enter,
  entered: transitions.fadeUp.entered,
  leaved: transitions.fadeUp.leaved,
  units: { length: 'px', angle: 'deg' },
  monitorImagesLoaded: false,
  vendorPrefix: true,
  userAgent: null,
  enableSSR: false,
  onLayout: null,
  horizontal: false,
  rtl: false
};
var _default = StackGrid;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(imagesLoaded, 'imagesLoaded', 'src/components/StackGrid.js');

  __REACT_HOT_LOADER__.register(isNumber, 'isNumber', 'src/components/StackGrid.js');

  __REACT_HOT_LOADER__.register(isPercentageNumber, 'isPercentageNumber', 'src/components/StackGrid.js');

  __REACT_HOT_LOADER__.register(createArray, 'createArray', 'src/components/StackGrid.js');

  __REACT_HOT_LOADER__.register(getColumnLengthAndWidth, 'getColumnLengthAndWidth', 'src/components/StackGrid.js');

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/components/StackGrid.js');

  __REACT_HOT_LOADER__.register(GridInline, 'GridInline', 'src/components/StackGrid.js');

  __REACT_HOT_LOADER__.register(SizeAwareGridInline, 'SizeAwareGridInline', 'src/components/StackGrid.js');

  __REACT_HOT_LOADER__.register(StackGrid, 'StackGrid', 'src/components/StackGrid.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/StackGrid.js');
}();

;