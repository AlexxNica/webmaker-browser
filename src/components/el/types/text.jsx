var React = require('react');
var assign = require('react/lib/Object.assign');

var Spec = require('../../../util/spec');

var spec = new Spec('text', assign({
  innerHTML: {
    category: 'attributes',
    validation: React.PropTypes.string,
    default: 'Hello world'
  },
  fontFamily: {
    category: 'styles',
    validation: React.PropTypes.string,
    default: 'sans-serif'
  },
  color: {
    category: 'styles',
    validation: React.PropTypes.string,
    default: '#333'
  },
  fontStyle: {
    category: 'styles',
    validation: React.PropTypes.string,
    default: 'normal'
  },
  fontWeight: {
    category: 'styles',
    validation: React.PropTypes.string,
    default: 'normal'
  },
  textDecoration: {
    category: 'styles',
    validation: React.PropTypes.string,
    default: 'none'
  },
  textAlign: {
    category: 'styles',
    validation: React.PropTypes.string,
    default: 'center'
  }
}, Spec.getPositionProps()));

module.exports = React.createClass({
  mixins: [
    require('./textedit')
  ],

  statics: {spec},

  propTypes: spec.getPropTypes(),

  getDefaultProps: function () {
    return spec.getDefaultProps();
  },

  render: function() {
    var props = this.props;
    var style = {
      whiteSpace: 'nowrap'
    };
    [
      'fontFamily',
      'color',
      'fontWeight',
      'fontStyle',
      'textDecoration',
      'textAlign'
    ].forEach(function (prop) {
      style[prop] = props[prop];
    });

    var content = this.makeEditable(props.innerHTML, style);
    var onPClick = this.activate;
    if (this.state.editing) {
      onPClick = false;
    }
    return <p ref="dims" style={style} onClick={onPClick}>{content}</p>;
  }
});
