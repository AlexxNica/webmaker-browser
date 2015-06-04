var React = require('react/addons');
var assign = require('react/lib/Object.assign');

var Spec = require('../../../util/spec');

var spec = new Spec('image', assign({
  src: {
    category: 'attributes',
    validation: React.PropTypes.string,
    default: '../../img/toucan.svg'
  },
  alt: {
    category: 'attributes',
    validation: React.PropTypes.string,
    default: ''
  },
  opacity: {
    category: 'styles',
    validation: React.PropTypes.number,
    default: 1
  },
  borderWidth: {
    category: 'styles',
    validation: React.PropTypes.number,
    default: 0
  },
  borderColor: {
    category: 'styles',
    validation: React.PropTypes.string,
    default: 'transparent'
  }
}, Spec.getPositionProps()));

module.exports = React.createClass({

  statics: {spec},

  propTypes: spec.getPropTypes(),

  getDefaultProps: function () {
    return spec.getDefaultProps();
  },

  render: function() {
    var props = this.props;
    var style = {
      opacity: props.opacity,
      borderStyle: 'solid',
      borderWidth: props.borderWidth,
      borderColor: props.borderColor
    };
    return <img style={style} src={this.props.src} alt={this.props.alt} />;
  }
});
