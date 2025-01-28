# React Native: undefined is not an object (evaluating 'this.state.myValue')
This repository demonstrates a common React Native error: attempting to access state or props before the component has mounted.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

The error typically manifests as:
`undefined is not an object (evaluating 'this.state.myValue')`

This occurs because the component's state isn't yet initialized when the problematic code executes.  The solution involves ensuring all state accesses happen after the component has mounted.