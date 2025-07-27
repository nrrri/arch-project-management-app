import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import Header from './components/pages/Header';
import CreateProject from './components/pages/CreateProject';
import Projects from './components/pages/Projects';

Amplify.configure(awsconfig)

export default function App() {

  return (
    <Authenticator
      signUpAttributes={['email']}
      variation="modal"
      socialProviders={['apple', 'facebook', 'google']} className='flex items-center justify-center min-h-screen min-y-screen'>
      {({ signOut }) => {
        // todo: add custom username
        return (
          <div>
            {/* Heading */}
            <Header signOut={signOut}/>
            {/* Content */}
            <CreateProject />
            <Projects />
          </div>
        )
      }}
    </Authenticator>
  )
}
