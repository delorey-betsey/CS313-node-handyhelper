exports.computeOperation = function(op, left, right) {
    op = op.toLowerCase();

    let result = 0;
    right = parseInt(right,10);
    left = parseInt(left,10);

    if (op == "+") {
      result = left + right;
    } else if (op == "-") {
      result = left - right;		
    } else if (op == "*") {
      result = left * right;
    } else if (op == "/") {
      if(right!=0){
        result = left / right;
	}
    } else {
      // It would be best here to redirect to an "unknown operation"
      // error page or something similar.
    }
    return result;
};
