const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  text: "Googleeee",
};

function renderElem(reactElement, container) {
  const elem = document.createElement(reactElement.type);
  elem.innerHTML = reactElement.text;
  for (const prop in reactElement.props) {
    console.log(prop, reactElement.props[prop]);
    elem.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(elem);
}

const root = document.querySelector("#root");

renderElem(reactElement, root);
