import Header from './components/Header'
import Card from './components/Card'
import data from './data'

function App() {
  console.log(data)

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className='App'>
      <Header />
      {cards}
    </div>
  )
}

export default App
