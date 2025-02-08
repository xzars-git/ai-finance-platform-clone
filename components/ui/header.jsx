import { SignedIn, SignedOut , SignInButton, UserButton} from '@clerk/nextjs';

const Header = () => {
  return (
    <div>
      <nav></nav>
      
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  )
}

export default Header