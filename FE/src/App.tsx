import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Project from './components/pages/Projects/ProjectCard';
import CreateProject from './components/pages/Home/CreateProject';
import Home from './components/pages/Home';
import Header from './components/pages/Home/Header';

Amplify.configure(awsconfig)

export default function App() {

  return (
    <Authenticator
      signUpAttributes={['email']}
      variation="modal"
      socialProviders={['apple', 'facebook', 'google']} className='flex items-center justify-center min-h-screen min-y-screen'>
      {({ signOut }) => {
        // todo: add custom username
        // console.log(user)
        return (
          <Router>
            <Routes>
              <Route path='/' element={<Header signOut={signOut} />} >
                <Route index element={<Home />} />
                <Route path='/create-project' element={<CreateProject />} />
                {/* todo: change id */}
                <Route path='/project/:prj-name' element={<Project />} />
              </Route>
            </Routes>
          </Router>

        )
      }}
    </Authenticator>
  )
}
