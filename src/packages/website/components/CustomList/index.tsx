import { useState } from 'react'
import { v4 } from 'uuid'
import Link from 'next/link'
import { 
  Container, 
  TabHeader, 
  TabItem, 
  TabContent ,
  CustomLink
} from '@monorepo/components'

import { handleGetId } from '../../utils'

interface DataItem {
  name: string
  resourceURI: string
}

interface DataList {
  nameList: string
  items: DataItem[]
}

interface CustomList {
  data: DataList[]
  defaultActive: string
}

const CustomList = ({ data, defaultActive } : CustomList) => {
  const [active, setActive] = useState(defaultActive)

  return (
    <Container fxDirection="col">
      <TabHeader>
        {data.map(list => (
          <TabItem
            key={v4()}
            active={active === list.nameList} 
            onClick={() => setActive(list.nameList)}
          >
            {list.nameList}
          </TabItem>
        ))}
      </TabHeader>
      <TabContent>
        {data.map(list => {
          if (active === list.nameList && list.items.length < 1) {
            return <p key={v4()}>No records found.</p>
          }
          return (
            active === list.nameList && list.items.map(item => (
              <Container my="xs" key={v4()}>
                <Link href={handleGetId(item.resourceURI)} passHref>
                  <CustomLink>{item.name}</CustomLink>
                </Link>
              </Container>
            ))
          )
        })}
      </TabContent>
    </Container>
  );
}

export default CustomList;