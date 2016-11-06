"use strict";

const t = require('babel-types');

module.exports = function jsxClassNames() {
  // Convert "[a1, an...]" to "[a1, an...].join(' ')"
  function wrapArrayWithJoin(arrExpr) {
    return t.callExpression(
      t.memberExpression(
        arrExpr,
        t.identifier('join')
      ),
      [t.stringLiteral(' ')]
    );
  }

  return {
    visitor: {
      JSXAttribute: (path) => {
        // If path.node.name is not identifier, we don't care about
        // attribute.
        const node = path.node;
        if (!t.isJSXIdentifier(node.name)) {
          return;
        }

        const nodeNameIdentifier = node.name;

        const attrName = nodeNameIdentifier.name;

        // We only care about classNames attributes.
        if (attrName !== 'classNames') {
          return;
        }

        // Check that attrValue is an expression (e.g., classNames={...},
        // vs. classNames="hello world").
        if (!t.isJSXExpressionContainer(node.value)) {
          return;
        }

        const attrExpr = node.value.expression;

        if (t.isArrayExpression(attrExpr)) {
          node.name.name = 'className';
          node.value = t.jSXExpressionContainer(
            wrapArrayWithJoin(attrExpr)
          );
        }

        // If there are other scenarios we want to transform, they can
        // go here. For now, only handling cases where classNames={[...]}.
      },
    },
  };
};
