// Livecoding time!

interface IFoo {}
interface IBar {}
interface IFooBar extends IFoo, IBar {}

type Foo = {};
type Bar = Foo & {};
type FooBar = Foo & Bar & {};

// Now define a type and interface that can be an A or a B but never both
type FooOrBar = any;
interface IFooOrBar {}
