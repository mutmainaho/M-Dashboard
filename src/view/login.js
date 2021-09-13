var m = require('mithril')
var logo = require("../asset/logo.svg")





var input = {
      view: function (vnode) {
        return m(".input-wrapper", [
          m(`label.input-label`, { for: vnode.attrs.for }, vnode.attrs.label),
          m("input.input-field", {
            id: vnode.attrs.id,
            placeholder: vnode.attrs.placeholder,
            type: vnode.attrs.type,
            name: vnode.attrs.name,
          }),
        ]);
      },
    };


var form = {
      view: function (vnode) {
        return m(
          ".form-container",
          m("form", [
            m(input, {
              for: "email",
              label: "EMAIL",
              placeholder: "Email address",
              name: "email",
              type: "email",
              id: "email",
            }), // input => Email
            m(input, {
              for: "password",
              label: "PASSWORD",
              placeholder: "Password",
              name: "password",
              type: "password",
              id: "password",
            }), // input => Password
            m("button.form-button", "Log In"), // button
          ])
        );
      },
    };




var login = {
    view: function(vnode) {
        return m(".login-container",[
            m(".logo-container",[
                m("img.logo",{
                    src:logo.default,
                    alt:"dashboard-logo"
                }),
                m("h3.faded-text faded-text-large" ,"Dashbord Kit")
            ]),
            m(".header-container",[
                m("h2.header-text","Log In to Dashbord Kit"), m("p.faded-text faded-text-header","Enter your email and address below")
            ]),
            m(form),

            m(".signup-link",
            m("p.faded-text",[
            "Don't have an account?",
            m("span.blue-text", m("a", "signup")),
        ])

         ),
       
        ]);
    },
};

module.exports = login;