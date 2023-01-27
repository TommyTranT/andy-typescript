This is notes on typescript based off Andys lecture.

# What is Typescript?
* Superset of Javascript
* All JS is valid TS
* JS with static typing

scss => sass transpiler => css

Node does not understand TS, so we need a compiler to turn it into JS
ts => typescript transpiler => js

# Benefits
* Only accepts what you tell it to accept. 
* Won't compile if what you input is not correct

# Download 
- npm i -g typescript
- tsc -v will check typescript version

# Changing the default language to ES6
- tsc 01_basics.ts --target es2016

# Creating a Typescript json file
- Make sure its on the top level floor
- type `tsc --init`

- `outDir` - determines where all of the js files will be outputed
- run `tsc` on any level to compile code

- Typically, gitignore the build files

# tsc --watch
This will automatically compile new js file when we save or make new tsc files

# Using in React
- `npx create-react-app my-app --template typescript` to create react app with typescript