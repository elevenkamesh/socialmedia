import logo from './logo.svg';
import './App.css';
// function Header(){
//   return (<h1>hi i am a component</h1>);
// }
function App() {
  return (<div>
<Job salary={9000} position="dev" company="google"  />

<Job salary={8000} position="jr dev" company="zoho" />
  
</div>
);
}

function Job(props){
return(
<div>
<h1>{props.salary}</h1>
<h1>{props.position}</h1>
<h1>{props.company}</h1>
</div>
)
}

export default App;
