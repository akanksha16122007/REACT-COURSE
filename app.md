//writing hello world in react.
// const heading = React.createElement(
// "h1",
// { id: "heading1", className: "headings" }, //attributes
// "hello world from react!!",
// );
// console.log(heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//nested type of structure in react.
/****\*\*****

- <div id="parent">
-      <div id="child">
-          <h1 id="heading1">I AM H1 TAG!</h1>
-      </div>
- </div>
  *ReactElement(object) => HTML (Browser Understands)
-
-
- \*/
  // const parent = React.createElement(
  // "div",
  // { id: "parent" },
  // React.createElement(
  // "div",
  // { id: "child" },
  // React.createElement("h1", { id: "heading1" }, "I AM H1 TAG!"),
  // ),
  // );

// console.log(parent); //returns an object.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//nested type of structure in react with siblings.
/**\*\*\***

-
- <div id="parent">
-      <div id="child">
-          <h1 id="heading1">I AM H1 TAG!</h1>
-          <h2 id="heading2">I AM H2 TAG!</h2>
-      </div>
- </div>
- \*/

// const parent = React.createElement(
// "div",
// { id: "parent" },
// React.createElement("div", { id: "child" }, [
// React.createElement("h1", { id: "heading1" }, "I AM AN H1 TAG!"),
// React.createElement("h2", { id: "heading2" }, "I AM AN H2 TAG!"),
// ]),
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//create something like this now:

/**\*\*\***

-
- <div id="parent">
-      <div id="child">
-          <h1 id="heading1">I AM H1 TAG!</h1>
-          <h2 id="heading2">I AM H2 TAG!</h2>
-      </div>
-      <div id="child2">
-          <h1 id="heading1">I AM H1 TAG!</h1>
-          <h2 id="heading2">I AM H2 TAG!</h2>
-      </div>
- </div>
- \*/

const parent = React.createElement("div", { id: "parent" }, [
React.createElement("div", { id: "child", key: "child" }, [
React.createElement("h1", { key: "h1" }, "I AM AN H1 TAG!"),
React.createElement("h2", { key: "h2" }, "I AM AN H2 TAG!"),
]),
React.createElement("div", { id: "child2", key: "child2" }, [
React.createElement(
"h1",
{ key: "h1-child2" },
"I AM AN H1 TAG FROM CHILD2",
),
React.createElement(
"h2",
{ key: "h2-child2" },
"I AM AN H2 TAG FROM CHILD2",
),
]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
