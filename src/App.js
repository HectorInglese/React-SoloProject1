import Header from './component/Header'
import TravelJournal from './component/TravelJournal'
import data from './data'

function App() {

  const page = data.map(item =>{
    return(
      <TravelJournal 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className='app-div'>
      <Header />
      {page}
    </div>
  );
}

export default App;
