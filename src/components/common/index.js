// normally, we would do something like
// import Button....
// export Button...
// but here we do it in one line for all components so the statements
// below are esentially pass-through saying "Take everything from
// Button file and export it from index.js"

export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './Input';
export * from './Spinner';

// One side thing, I did not have it but instructor had lint error
// "No named exports found in module './Button'".  The downside of
// this approach is that if you want to use this pattern, you cannot
// use the default keyword in each of these components like in
// export default Button; etc.  Instead, you have to export an object
// with Button as key and value being actuall component like:
// export { Button: Button };
// Note that if you use key and value that are identical like above,
// you can use little bit of ES6 to condense it like:
// export { Button };
// Once you save file after this change, lint error should be gone for
// that file.  Again, I did not have these errors but instructor did, but
// if I tried running the app, it would error:
// “Invariant Violation: Element type is invalie: expected a string
// (four built-in components) or a class/function (for composite components)
// but got: undefined.  You likely forgot to export your component from the
// file it’s defined in.” like I documented in the lecture notes.
