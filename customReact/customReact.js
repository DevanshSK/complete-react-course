// //  const element = <a href="https://www.linkedin.com/in/devanshsk/">Check my linkedin profile</a>
const reactElement = {
  type: "a",
  props: {
    href: "https://www.linkedin.com/in/devanshsk/",
    target: "_blank",
  },
  children: [
    {
      type: "span",
      props: {
        id: "social",
      },
      children: "Go to my linkedin",
    },
    {
      type: "span",
      props: {
        class: "hello",
      },
      children: "To kese ho aap log",
    },
  ],
};

// react renderer
function renderer(reactElement, container) {
  // create node
  const domElement = document.createElement(reactElement.type);

  // Setting props
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Recursively add components to react
  if (typeof reactElement.children === "string") {
    domElement.innerHTML = reactElement.children;
  } else if (typeof reactElement.children === "object") {
    reactElement.children.forEach((element) => {
      renderer(element, domElement);
    });
  }

  container.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");

renderer(reactElement, mainContainer);

// function jsxToJson(jsxElement) {
//   if (!jsxElement) {
//     return null;
//   }

//   if (typeof jsxElement === "string" || typeof jsxElement === "number") {
//     return jsxElement;
//   }

//   if (typeof jsxElement === "object") {
//     const jsonElement = {
//       type: jsxElement.type,
//       props: {},
//     };

//     for (const prop in jsxElement.props) {
//       if (prop !== "children") {
//         jsonElement.props[prop] = jsxToJson(jsxElement.props[prop]);
//       }
//     }

//     if (jsxElement.props.children) {
//       if (Array.isArray(jsxElement.props.children)) {
//         jsonElement.children = jsxElement.props.children.map((child) =>
//           jsxToJson(child)
//         );
//       } else {
//         jsonElement.children = [jsxToJson(jsxElement.props.children)];
//       }
//     }

//     return jsonElement;
//   }
// }

// // Example usage:
// const jsxElement = {
//   type: "div",
//   props: {
//     class: "hey there",
//     children: [
//       { type: "h1", props: { children: "Title" } },
//       { type: "p", props: { children: "Paragraph" } },
//     ],
//   },
// };

// const jsonTree = jsxToJson(jsxElement);
// console.log(JSON.stringify(jsonTree, null, 2));
