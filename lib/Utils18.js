"use strict";
exports.__esModule = true;
exports.reactFormatter18 = void 0;
var React = require("react");
var client_1 = require("react-dom/client");
function reactFormatter18(JSX) {
    return function customFormatter(cell, formatterParams, onRendered) {
        // cell - the cell component
        // formatterParams - parameters set for the column
        // onRendered - function to call when the formatter has been rendered
        var renderFn = function () {
            var cellEl = cell.getElement();
            if (cellEl) {
                var formatterCell = cellEl.querySelector('.formatterCell');
                if (formatterCell) {
                    var CompWithMoreProps = React.cloneElement(JSX, { cell: cell });
                    var container = cellEl.querySelector('.formatterCell');
                    var root = (0, client_1.createRoot)(container);
                    root.render(CompWithMoreProps);
                }
            }
        };
        onRendered(renderFn); // initial render only.
        setTimeout(function () {
            renderFn(); // render every time cell value changed.
        }, 0);
        return '<div class="formatterCell"></div>';
    };
}
exports.reactFormatter18 = reactFormatter18;
