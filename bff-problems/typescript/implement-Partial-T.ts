
// Problem Link https://bigfrontend.dev/typescript/implement-Partial-T
// Partial<T> returns a type whichs represents all subsets of type T.

// Please implement MyPartial<T> by yourself.

/*
type Foo = {  a: string  b: number  c: boolean}

below are all valid
const a: MyPartial<Foo> = {}
const b: MyPartial<Foo> = {  a: 'BFE.dev'}
const c: MyPartial<Foo> = {  b: 123}
const d: MyPartial<Foo> = {  b: 123,  c: true}
const e: MyPartial<Foo> = {  a: 'BFE.dev',  b: 123,  c: true}
*/

type MyPartial<T> = {[K in keyof T]? : T[K]}

