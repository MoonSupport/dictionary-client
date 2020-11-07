---
title: Omit
label: [Common]
hashTag: [타입스크립트 - Omit,mocha -SYNCHRONOUS CODE Description]
slug: /O/Omit
---
일반적으로 Omit이란 <span style="color:#FFBF00; font-weight:bold;">생략하다</span> 하다는 의미를 지닌다.

기능을 스킵하거나 객체의 인자를 생략하다.

```ts

interface Todo {

title: string;

description: string;

completed: boolean;

}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {

title: "Clean room",

completed: false,

};

todo; // Correct Type

```

Todo 인터페이스의 description 속성을 생략시켰다.
