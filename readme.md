npm is a package manager which manage all the packages.

packages are dependencies.

package.json is a configuration for npm.

bundlers: it basically bundles/package our app so that it can be shifted to production.ex: parcel,webpack,wheat etc.

we will install parcel bundler.

npm install -D parcel

why -D??
-D : dev dependencies
dev dependencies??
--> it is basically used for development purposes--> to develop our app.
whereas normal dependencies are used in production also and dev dependencies are basically used for development purposes to develop our apps.
caret and tilde in parcel version

parcel is a functional dependency which can have more dependencies and those dependencies can also have their own dependencies this all thing is known as transitive dependency.

node-modules is a collection of dependencies.

npx means executing a package.
npm is for installation purposes of packages.

npx parcel index.html means we are not executing our bundler parcel to build our app using parcel.

to get react in our app through cdn links is one way which is not a gud way now we will get react into our app using npm.
why??

1. fetching from cdn is a costly operation.
   install react in the form of a package and save it in package.json and package-lock.json
   becoz using cdn links the version of the react will be constant and it is not gud and we will install it without -D becoz we need all the dependencies of react.

# parcel

-->dev build
-->local server
-->HMR => HOT MODULE REPLACEMENT
-->File Watching Algorithm--> written in c++
-->Caching => Faster Builds
--> Image Optimization
--> Minification
--> Bundling
--> compress files
--> Consitent hashing
--> Code splitting
--> differential bundling -> to support older browsers as well.
--> diagnostic --> beautiful error
--> error handling --> better error suggestions
--> it also gives you a way to host your app on https.
--> tree shaking --> remove unused code for you.
--> different dev and production bundles.

to make production ready app we use --> npx parcel build index.html

the things that can be regenerated like dist,parcel-cache,node_modules it should not be uploaded on github.

to support older versions of browsers using differential bundling we need to use browserslist and tell the list which browsers to support.

to run our app : npm run start ==> npm start

# React:

# React Element

React.createElement at the end of the day ==> is an object ==> after rendering it using root element on the dom it will become html element

# JSX

basically a merge of html and js code ==> javascript xml ==> javascript syntax extension ==> it is totally independent of react, react and jsx are not dependent and are two different things which can be used independently it is basically used to write html like or xml like syntax in js.

- IT IS NOT HTML IN JS
- JS ENGINES DON'T UNDERSTAND JSX. --> it understands ecmascript
- NOT A VALID PURE JS.
- camelCase is used to declare attributes in jsx like className and not class like in html.

# how it is working??

- PARCEL
- JSX IS transpiled(converted) before it reaches the JS engines. --> basically converted to the code which is understood by the browsers before it reaches the JS engines that's how the output is getting printed to us using jsx as js engines understands ecmascript not jsx and jsx is not purely js.
- transpiling is done by PARCEL --> babel(JS Compiler)

# React Component

- Everything is a component in react

* Types:
  - Class Based Components.-->OLD
  - Functional Components.-->NEW

# What is a react functional component?

--> it is just a normal javascript function which returns a piece of jsx/returns a react element.
--> it should always starts with a capital letter otherwise it will give us an error.
--> to render it we use <FunctionalComponent/>--> becoz of babel

# what is component composition??

--> rendering a react functional component inside another react functional component is nothing but component composition.

# # SUPERPOWER OF JSX:

- You can inject any piece of js inside your jsx using {} inside this curly braces anywhere between jsx. --> comes like an html in the browser inspect.
- EVEN REACT ELEMENTS CAN ALSO BE ADDED LIKE THIS AS AT THE END OF THE DAY REACT ELEMENT IS
  JAVASCRIPT OBJECT ONLY!

- it takes care of malcious data or attacks on our laptops by some apis or something.
- it will escape the malicious data from api or something and will not blindly run it first it will check it.--> it will sanitize it.

# Props => properties.

- passing a prop to a component is just like passing an argument to a function

# ConfigDriven UI

it basically means your ui is config driven, all the ui is driven by a config using json files and it is different according to different locations.

- using arrays indexes as keys of a map to uniquely identify it is a bad practice. {not recommended}
- always use key to uniquely identify things in map becoz it will just render that specific thing which is added and not others, others will remain same.

# unique key is best >>>>>>>>>>>>>>>>>>>>>> index as a key >>>>>>>>>>>>>>>>>> not using key(not acceptable)

# never keep the harcoded data of your app in the components folder. --> always keep it in utils folder

{good practice} --> not necessary

# TWO TYPES OF EXPORT AND IMPORT:

1. default --> export default <name of variable>
   --> import <name of variable> from <path>
2. named --> export <variable type> <variable name>
   --> import {<name of variable>} from <path>

# React Hooks

it is a normal javascript utility function at the end of the day which is given to us by react.

# Two important JS HOOKS:

1. useState() --> to generate superpowerful state variables in react.
2. useEffect()--> it takes 2 arguments, the first argument is a callback function and the second argument is a dependency array {functional dependencies}.
   --> if the dependency array is empty it will run the callback function after the component renders and only once as it is not dependent on anything it is an empty dependency array.

# whenever a state variable changes, react will re-render the component.

# this all algorithm of virtual dom is known as react fiber (reconciliation algorithm).

--> react fiber is a new way to find the diff and updating the dom.

--> whenever something changes on the ui is known as reconciliation.

# REACT IS GOOD AT DOM OPERATIONS.

- virtual dom is representation of actual dom. --> javascript object at the end of the day.

# diff algorithm

--> it finds out the difference between the previous virtual dom and the updated virtual dom.

# react fiber architecture read

# monolith architecture --> old time

--> api,ui,authentication code,database connectivity code,sending sms inside the same project is known as monolith architecture in old time.

# microservice architecture --> new time

--> we have different services for different jobs like api,ui,sending sms,email notifications,etc
--> all the services combine together and forms a big app.
--> not in same project.
--> different services different projects different jobs.
--> known as separation of concerns and single responsibility principles.
--> each and every service has its own job.

# how do these services interact with each other?

--> all the services run on its own specific ports.

# Conditional Rendering:

--> rendering on the basis of some condition is known as conditional rendering.

# why do we even need state variables?? if we can create normal variables.

//whenever we change the localstate variables, react will re-renders the component on every key press.

//whenever state variables update, react triggers a reconcilliation cycle(re-renders the component).

# useEffect hook

1. --> when there is no dependency array passed:
   --> every time our component renders the useEffect hook will be called.

2. --> when the dependency array is empty then:
   --> useEffect is called on only initial render and just once.

3. --> when you have something in the dependency array then:
   --> useEffect will be called only when that something changes that is present in the dependency array.(everytime)

# useState hook

1. never ever create your state variables outside your component.
2. it is used to make local state variables inside your functional component.
