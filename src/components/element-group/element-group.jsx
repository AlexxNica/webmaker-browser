var React = require('react');
var El = require('../../components/el/el.jsx');
var assign = require('react/lib/Object.assign');

var ElementGroup = React.createClass({
  getDefaultProps: function () {
    return {
      elements: {},
      currentElementId: -1,
      interactive: false
    };
  },
  render: function () {
    var elements = this.props.elements;
    return (
      <div className="element-group">
        <div className="deselector" onClick={this.props.onDeselect} />
        {Object.keys(elements).map(elementId => {

          var elProps = elements[elementId];

          if (!elProps || !elProps.type) {
            return false;
          }

          elProps = assign({}, elProps, {
            isCurrent: this.props.currentElementId === elementId,
            interactive: this.props.interactive
          });

          // Add callbacks for interactive mode
          if (this.props.onTouchEnd) {
            elProps.onTouchEnd = this.props.onTouchEnd(elementId);
          }

          if (this.props.onUpdate) {
            elProps.onUpdate = this.props.onUpdate(elementId);
          }

          return (
            <div key={'positionable' + elementId} className={'el-wrapper' + (elProps.isCurrent ? ' current' : '')}>
              <El {...elProps} />
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = ElementGroup;
