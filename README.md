#Browserify-shim Test Case

Test case for https://github.com/thlorenz/browserify-shim/issues/110

###Steps for Reproduction

- Clone this repo
- `npm install`
- `gulp "compile js"` (or just `gulp`)
- Check the contents of `./compiled/index.js`. The problem should be clearly visible on lines 7-8 and 108-114.