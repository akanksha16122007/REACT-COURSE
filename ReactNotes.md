//React Element
//React.createElement => ReactElement(object) => HTMLElement(render)
// const heading = React.createElement("h1", {}, "i am an h1 tag!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX=>Babel transpiles it to => React.createElement => ReactElement(object) =>HTMLElement(render)
// const jsxheading = <h1 className="head">I AM AN H1 TAG FROM JSX</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

//React Functional Component:
// const Title = () => {
//   return <h1>Namaste React FROM TITLE</h1>;
// };
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       {Title()}
//       <Title />
//       <h1>Namaste React FROM Functional Component</h1>
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

// super power of jsx.
const elTitle = <h1>HI REACT ELEMENT TITLE</h1>;
const appTitle = "NAMASTE AKANKSHA";
const HeadingComponent = () => {
  return (
    <div id="container">
      {elTitle}
      <h3>{appTitle}</h3>
      <h1>Namaste React FROM Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
