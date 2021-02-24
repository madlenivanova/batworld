const arrLength = arr.length;
const [elRefs, setElRefs] = React.useState([]);

React.useEffect(() => {
  // add or remove refs
  setElRefs(elRefs =>
    Array(arrLength)
      .fill()
      .map((_, i) => elRefs[i] || createRef())
  );
}, [arrLength]);
