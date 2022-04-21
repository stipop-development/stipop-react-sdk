# STIPOP SDK TEST

> STIPOP SDK TEST

## Installation

stipop-sdk-test can be installed on Linux, Mac OS or Windows without any issues.

```node
npm install --save stipop-sdk-test
```

## Getting API Key

To use the React SDK you need your api key.

You can get the api key by signing up and creating an application in Stipop Dashboard.

## Get started

```react
import { SearchComponent } from 'stipop-sdk-test'

const App = () => {
  return (
  	<SearchComponent 
      params={{
        apikey: 'apikey',
        userId: 'userId',
        lang: 'en',
      }}
    />
  )
}

export default App
```

## List of Params

- ### params

  #### Parameters

  | Name       | Type   | Required          | Default      |
  | ---------- | ------ | ----------------- | ------------ |
  | apikey     | String | required          |              |
  | userId     | String | required          |              |
  | lang       | String | strongly required | en           |
  | pageNumber | number | optional          | 1            |
  | limit      | Number | optional          | 20 (max: 50) |
  | default    | string | optional          | Hi           |

  #### Examples

  ```react
  import { SearchComponent } from 'stipop-sdk-test'
  
  const App = () => {
    return (
    	<SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
          pageNumber: 1,
          limit: 50,
          default: 'christmas',
        }}
      />
    )
  }
  
  export default App
  ```

  

- ### size

  #### Parameters

  | Name    | Type   | Required | Default |
  | ------- | ------ | -------- | ------- |
  | width   | number | optional | 360px   |
  | height  | number | optional | 300px   |
  | imgSize | number | optional | 60%     |

  #### Examples

  ```react
  import { SearchComponent } from 'stipop-sdk-test'
  
  const App = () => {
    return (
    	<SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        size={{
          width: 500,
          height: 600,
          imgSize: 80,
        }}
      />
    )
  }
  
  export default App
  ```

  

- ### border

  #### Parameters

  | Name   | Type   | Required | Default             |
  | ------ | ------ | -------- | ------------------- |
  | border | string | optional | 1px solid lightgray |
  | radius | number | optional | 10px                |

  #### Examples

  ```react
  import { SearchComponent } from 'stipop-sdk-test'
  
  const App = () => {
    return (
    	<SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        border={{
          border: '2px solid #000',
          radius: 30,
        }}
      />
    )
  }
  
  export default App
  ```

  

- ### input

  #### Parameters

  | Name            | Type   | Required | Default             |
  | --------------- | ------ | -------- | ------------------- |
  | width           | number | optional | 100% - 20px         |
  | height          | number | optional | 32px                |
  | border          | string | optional | 2px solid lightgray |
  | radius          | number | optional | 50px                |
  | backgroundColor | string | optional | #fff                |
  | color           | string | optional | #000                |

  #### Examples

  ```react
  import { SearchComponent } from 'stipop-sdk-test'
  
  const App = () => {
    return (
    	<SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        input={{
          width: 80,
          height: 40,
          border: '3px solid #000',
          radius: 30,
          backgroundColor: '#fff',
          color: '#000',
        }}
      />
    )
  }
  
  export default App
  ```

  

- ### backgroundColor

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #fff    |

  #### Examples

  ```react
  import { SearchComponent } from 'stipop-sdk-test'
  
  const App = () => {
    return (
    	<SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        backgroundColor={'#fff'}
      />
    )
  }
  
  export default App
  ```

  

- ### column

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | number | optional | 4       |

  #### Examples

  ```react
  import { SearchComponent } from 'stipop-sdk-test'
  
  const App = () => {
    return (
    	<SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        column={6}
      />
    )
  }
  
  export default App
  ```

  

- ### scroll

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | boolean | optional | true    |

  #### Examples

  ```react
  import { SearchComponent } from 'stipop-sdk-test'
  
  const App = () => {
    return (
    	<SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        scroll={false}
      />
    )
  }
  
  export default App
  ```

  

- ### stickerClick

  | Type     | Required | Default |
  | -------- | -------- | ------- |
  | Function | optional | Sticker |

  ```react
  import React, { useState } from 'react'
  import { SearchComponent } from 'stipop-sdk-test'
  
  const App = () => {
    const [stickerUrl, setStickerUrl] = useState('')
    
    return (
    	<SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        stickerClick={(sticker) => setStickerUrl(sticker)}
      />
    )
  }
  
  export default App
  ```

  