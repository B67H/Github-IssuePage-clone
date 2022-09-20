import { Route, Routes } from "react-router-dom"
import Issue from "./pages/Issue"
import CreateIssue from "./pages/CreateIssue"
import Projects from "./pages/Projects"
import PullRequest from "./pages/PullRequest"
import Code from "./pages/Code"
import Security from "./pages/Security"
import Actions from "./pages/Actions"
import Nav from "./components/Nav"
import Header from "./Header"
import { QueryClient, QueryClientProvider } from "react-query"


const queryClient = new QueryClient()

function App() {
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issues" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pulls" element={<PullRequest />} />
        <Route path="/code" element={<Code />} />
        <Route path="/security" element={<Security />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
