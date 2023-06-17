# next-js-starter
Initial study with next.js react framework

## Personal notes and observations
- Next.js is a combination of two worlds, enabling the development team to deliver server side and client side rendering.
- Why to choose server side rendering, you may ask:
    - Data fetching closer to your database.
    - Smaller client side bundle.
    - Faster first rendering.
    - New router is loaded, it's initial HTML is loaded on the server
- All components inside the APP Router are server rendered by default.
- Components that are interactible are client-side rendered and is declared by the type of ```bash use client ``` instruction.
- I can't import a server component inside a client component. That's why Tree management is required.
- Props from server side to client side needs to be serialized. 
- Usage of the <b>server-only</b> with ```bash npm install server-only ```
- Server side components have no state, since they aren't interactive.

### Next.js recommendations about server/client component usage:
- fetch data = server
- backend access = server
- sensitive information = server
- large dependencies = server
- interactivity and event listeners = client
- component's life cycle methods = client
- Browser only API = client
- custom hooks = client
- React class based components = client

## Objectives
1 - Get hands on Next.js with the simplest project possible.
2 - 