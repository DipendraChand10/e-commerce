import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'

const Dashboard =lazy(()=>import("./pages/Dashboard"))
const Products =lazy(()=>import("./pages/Products"))
const Transction =lazy(()=>import("./pages/Transction"))
const Customers =lazy(()=>import("./pages/Customers"))
const App = () => {
  return (
    <Router>
    <Suspense fallback={<Loader/>}>
    <Routes>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/product' element={<Products/>}/>
        <Route path='/admin/transction' element={<Transction/>}/>
        <Route path='/admin/customers' element={<Customers/>}/>

        {/* Charts */}

        {/* Apps */}
      </Routes>
    </Suspense>
    </Router>
  )
}

export default App