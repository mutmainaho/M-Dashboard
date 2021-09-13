

var m = require("mithril");




var login = require("./view/login");




m.mount(root, {
    view: function(vnode) {
        return m("main", m(login)          
        );
    },
});