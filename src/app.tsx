import React from "react";
import { HelloWorld } from './components/HelloWorld';

interface App {}


function App({ data }: { data: Object }) {
  return <HelloWorld data={data}/>;
}


export default App;
