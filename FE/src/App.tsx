import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { Button } from "@/components/ui/button"

Amplify.configure(awsconfig)


export default function App() {
  return <div>
    <Authenticator
      signUpAttributes={['email']}
      socialProviders={['apple', 'facebook', 'google']} className='flex items-center justify-center min-h-screen min-y-screen'>
      {({ signOut, user }) => {
        console.log(user)
        return (
          <div className='flex justify-between m-8'>
            <h1 className='bold text-2xl'>Architecture Project Log</h1>
            <Button onClick={signOut}>Sign out</Button>
          </div>
        )
      }}
    </Authenticator>
  </div>
}
