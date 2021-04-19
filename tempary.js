function Vue() {

}


Vue.prototype.$mount = function (el) {
  console.log(123);
  el = 'wocao'

  console.log(el);
}


const mount = Vue.prototype.$mount


Vue.prototype.$mount = function(el) {
  el = 'again fuck'
  console.log('456');

  console.log(el);

  return mount.call(this, el)
}

let vue = new Vue()


vue.$mount(123)


function h (a) {
  return 'vnode+'+ a
}


const render = (h) => h('hhhahahha')


let cetet = render.call(this, h)

console.log(cetet);

let abc = [1,2,3,[4,5,6],7,[8,9,0]]

function flatone(children) {
  for(let i=0;i < children.length;i++) {
    if(Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

console.log(flatone(abc));