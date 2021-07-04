import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiUsers, FiBook, FiBookOpen } from 'react-icons/fi'

import { 
  Header, 
  Container, 
  Aside, 
  Button
} from '@monorepo/components'

const Layout: React.FC =({ children }) => {
  return (
    <Container overflow="hidden" fullView>
      <Aside>
        <Container alignItems="center" pd="md" fxDirection="col" >
          <Link href="/" passHref>
            <a href="">
              <Image 
                src="/logo.svg" 
                alt="Logo Marvel" 
                width={120} 
                height={50} 
                layout="fixed"
                unoptimized={true}
              />
            </a>
          </Link>
        </Container>

        <Container alignItems="center" my="lg" pd="md" fxDirection="col" >
          <Link href="/" passHref>
            <a href="">
              <Button width={190} color="secundary">
                <FiUsers size="18" /> Characters
              </Button>
            </a>
          </Link>
          <Link href="/stories/show" passHref>
            <a href="">
              <Button width={190} color="secundary">
                <FiBook size="18" /> Stories
              </Button>
            </a>
          </Link>
          <Link href="/comics/show" passHref>
            <a href="">
              <Button width={190} color="secundary">
                <FiBookOpen size="18" /> Comics
              </Button>
            </a>
          </Link>
        </Container>
      </Aside>
      <Container fxDirection="col" fullWidth>
        <Header>
          Marvel Heroes
        </Header>
        {children}
      </Container>
    </Container>
  )
}

export default Layout;