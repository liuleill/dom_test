window.dom = {
  style(node, object, value) {
    //修改样式
    let name = object;
    if (arguments.length === 3) {
      //dom.style(div,'color','red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        //dom.style(div,'color')
        return node.style[name];
      } else if (name instanceof Object) {
        //dom.style(div,{color:'red'})
        for (let key in name) {
          node.style[key] = name[key];
        }
      }
    }
  },

  find(selector, scope) {
    //限定一个范围
    //debugger;
    return (scope || document).querySelectorAll(selector);
  },

  //遍历
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};
