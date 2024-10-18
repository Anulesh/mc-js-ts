
// Problem Link https://bigfrontend.dev/typescript/implement-Partial-T
// As the opposite of Partial<T>, Required<T> sets all properties of T to required.

// Please implement MyRequired<T> by yourself.

/*
type Foo = {  a?: string  b?: number  c?: boolean}
const a: MyRequired<Foo> = {}
// Error
const b: MyRequired<Foo> = {  a: 'BFE.dev'}
// Error
const c: MyRequired<Foo> = {  b: 123}// Errorconst d: MyRequired<Foo> = {  b: 123,  c: true}
// Error
const e: MyRequired<Foo> = {  a: 'BFE.dev',  b: 123,  c: true}
// valid
*/

type MyRequired<T> = {[k in keyof T]-? : T[k]}



