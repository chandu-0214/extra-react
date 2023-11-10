# useEffect (callBack,dependency Array)
useEffect(() => {
    // Code for the side effect goes here
    console.log('Component mounted or updated');

    // Cleanup function (optional)
    return () => {
      // Code to clean up the side effect (e.g., unsubscribe from a subscription)
      console.log('Component will unmount');
    };
  }, []); // Dependency array

# HOOKS
  1. useState => in order yo maintain the state
  2. useReducer => in order yo maintain the so many states at once place 
  3. useRef => in order yo maintain the refrence of the JSX element
  4. useEffect => in order to maintain or perform the side-effect(API calls,setTimeout/setInterval,  localstorages,mounting state,unmounting state)
  main-effects => render or update UI 
