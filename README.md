# STIPOP SDK TEST

> STIPOP SDK TEST

## Installation

stipop-react-sdk can be installed on Linux, Mac OS or Windows without any issues.

```node
npm install --save stipop-react-sdk
```

## Getting API Key

To use the React SDK you need your api key.

You can get the api key by signing up and creating an application in Stipop Dashboard.

## Get started

### SearchComponent

> Sticker Search Component

```react
import { SearchComponent } from 'stipop-react-sdk'

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

#### List of Params

------

| Parameters        | Type |
| ----------------- | ---- |
| [params](#params) |      |
| [size](#size)     |      |
|                   |      |

-------

#### Params

##### Parameters

| Name       | Type   | Required             | Default      |
| ---------- | ------ | -------------------- | ------------ |
| apikey     | String | required             |              |
| userId     | String | required             |              |
| lang       | String | strongly recommended | en           |
| pageNumber | number | optional             | 1            |
| limit      | Number | optional             | 20 (max: 50) |
| default    | string | optional             | hi           |

##### Examples

```react
import { SearchComponent } from 'stipop-react-sdk'

const App = () => {
  return (
    <SearchComponent 
      params={{
        apikey: 'apikey',
        userId: 'userId',
        lang: 'en',
        pageNumber: 1,
        limit: 20,
        default: 'hi',
      }}
    />
  )
}

export default App
```



#### size

##### Parameters

| Name    | Type   | Required | Default |
| ------- | ------ | -------- | ------- |
| width   | number | optional | 360     |
| height  | number | optional | 300     |
| imgSize | number | optional | 60      |

##### Examples

```react
import { SearchComponent } from 'stipop-react-sdk'

const App = () => {
  return (
    <SearchComponent 
      params={{
        apikey: 'apikey',
        userId: 'userId',
        lang: 'en',
      }}
      size={{
        width: 360,
        height: 300,
        imgSize: 60,
      }}
    />
  )
}

export default App
```



- #### border

  ##### Parameters

  | Name   | Type   | Required | Default             |
  | ------ | ------ | -------- | ------------------- |
  | border | string | optional | 1px solid lightgray |
  | radius | number | optional | 10                  |

  ##### Examples

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        border={{
          border: '1px solid lightgray',
          radius: 10,
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### input

  ##### Parameters

  | Name            | Type   | Required | Default             |
  | --------------- | ------ | -------- | ------------------- |
  | width           | number | optional | 100                 |
  | height          | number | optional | 32                  |
  | border          | string | optional | 2px solid lightgray |
  | radius          | number | optional | 50                  |
  | backgroundColor | string | optional | #fff                |
  | color           | string | optional | #000                |

  ##### Examples

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        input={{
          width: 100,
          height: 32,
          border: '2px solid lightgray',
          radius: 50,
          backgroundColor: '#fff',
          color: '#000',
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### backgroundColor

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #fff    |

  ##### Examples

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
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

  

- #### column

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | number | optional | 4       |

  ##### Examples

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        column={4}
      />
    )
  }
  
  export default App
  ```

  

- #### scroll

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | boolean | optional | true    |

  ##### Examples

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        scroll={true}
      />
    )
  }
  
  export default App
  ```

  

- #### stickerClick

  > Get Sticker URL Function

  | Type     | Required | Value       |
  | -------- | -------- | ----------- |
  | Function | optional | sticker URL |

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
        }}
        stickerClick={url => console.log(url)}
      />
    )
  }
  
  export default App
  ```



### PickerComponent

> Sticker Picker Component

```react
import { PickerComponent } from 'stipop-react-sdk'

const App = () => {
  return (
  	<PickerComponent 
      params={{
        apikey: 'apikey',
        userId: 'userId',
      }}
    />
  )
}

export default App
```

#### List of Params

- #### params

  ##### Parameters

  | Name   | Type   | Required | Default |
  | ------ | ------ | -------- | ------- |
  | apikey | string | required |         |
  | userId | string | required |         |

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### size

  ##### Parameters

  | Name    | Type   | Required | Default |
  | ------- | ------ | -------- | ------- |
  | width   | number | optional | 360     |
  | height  | number | optional | 300     |
  | imgSize | number | optional | 70      |

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        size={{
          width: 360,
          height: 300,
          imgSize: 70,
        }}
      />
    )
  }
  
  export default App
  ```



- #### border

  ##### Parameters

  | Name   | Type   | Required | Default             |
  | ------ | ------ | -------- | ------------------- |
  | border | string | optional | 1px solid lightgray |
  | radius | number | optional | 10                  |

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        border={{
          border: '1px solid lightgray',
          radius: 10,
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### menu

  ##### Parameters

  | Name            | Type   | Required | Default             |
  | --------------- | ------ | -------- | ------------------- |
  | height          | number | optional | 45                  |
  | backgroundColor | string | optional | #fff                |
  | bottomLine      | string | optional | 1px solid lightgray |
  | selectedLine    | string | optional | 2px solid black     |

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        menu={{
          height: 45,
          backgroundColor: '#fff',
          bottomLine: '1px solid lightgray',
          selectedLine: '2px solid black',
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### backgroundColor

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #fff    |

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        backgroundColor={'#fff'}
      />
    )
  }
  
  export default App
  ```

  

- #### column

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | number | optional | 4       |

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        column={4}
      />
    )
  }
  
  export default App
  ```

  

- #### scroll

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | boolean | optional | true    |

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        scroll={true}
      />
    )
  }
  
  export default App
  ```

  

- #### stickerClick

  > Get Sticker URL Function

  | Type     | Required | Value       |
  | -------- | -------- | ----------- |
  | Function | optional | sticker URL |

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        stickerClick={(url) => console.log(url)} //sticker URL
      />
    )
  }
  
  export default App
  ```



- #### storeClick

  > Get Store Icon Click Status

  | Type     | Required | Value |
  | -------- | -------- | ----- |
  | Function | optional | true  |

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        storeClick={(e) => console.log(e)} //true
      />
    )
  }
  
  export default App
  ```

  

### StoreComponent

> Sticker Store Component

```react
import { StoreComponent } from 'stipop-react-sdk'

const App = () => {
  return (
  	<StoreComponent 
      params={{
        apikey: 'apikey',
        userId: 'userId',
      }}
      downloadParams={{
        isPurchase: 'N'
      }}
    />
  )
}

export default App
```



- #### params

  ##### Parameters

  | Name        | Type   | Required             | Default                                                      |
  | ----------- | ------ | -------------------- | ------------------------------------------------------------ |
  | apikey      | string | required             |                                                              |
  | userId      | string | required             |                                                              |
  | lang        | string | strongly recommended | en                                                           |
  | countryCode | string | strongly recommended | US                                                           |
  | animated    | string | optional             | **Y**: Look for premium stickers only<br />**N**: Look for free stickers only<br />**Empty parameter**: Look for all stickers |
  | pageNumber  | number | optional             | 1                                                            |
  | limit       | number | optional             | 20 (max: 50)                                                 |

  ```react
  import { StoreComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<StoreComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
          countryCode: 'US',
          animated: 'N',
          pageNumber: 1,
          limit: 20,
        }}
        downloadParams={{
          isPurchase: 'N'
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### DownloadParams

  ##### Parameters

  | Name        | Type   | Required | Default                                                      |
  | ----------- | ------ | -------- | ------------------------------------------------------------ |
  | isPurchase  | string | required | **N**: Free Sticker Store <br />**Y**: Paid Sticker Store<br />**S**: Sticker Subscription |
  | lang        | string | optional | en                                                           |
  | countryCode | string | optional | US                                                           |
  | price       | string | optional | if **isPurchase** is **Y**, the default price is set for stickers.<br />**Defualt Price**: Still Stickers [$0.99], Animated Stickers [$1.99] |

  ```react
  import { StoreComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<StoreComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        downloadParams={{
          isPurchase: 'N',
          lang: 'en',
          countryCode: 'US',
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### color

  ##### Parameters

  | Name                 | Type   | Required | Default |
  | -------------------- | ------ | -------- | ------- |
  | backgroundColor      | stirng | optional | #fff    |
  | packageHoverColor    | string | optional | #fff    |
  | downloadedColor      | string | optional | #f5f6f6 |
  | downloadedHoverColor | string | optional | #f5f6f6 |
  | downloadBtn          | string | optional | #ff4500 |
  | downloadBtnHover     | string | optional | #ff4500 |
  | deleteBtn            | string | optional | #b3b3b3 |
  | deleteBtnHover       | string | optional | #b3b3b3 |
  | recoveryBtn          | string | optional | #ff4500 |
  | recoveryBtnHover     | string | optional | #ff4500 |

  ```react
  import { StoreComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<StoreComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        downloadParams={{
          isPurchase: 'N'
        }}
        color={{
          backgroundColor: '#fff',
          packageHoverColor: '#fff',
          downloadedColor: '#f5f6f6',
          downloadedHoverColor: '#f5f6f6',
          downloadBtn: '#ff4500',
          downloadBtnHober: '#ff4500',
          deleteBtn: '#b3b3b3',
          deleteBtnHover: '#b3b3b3',
          recoveryBtn: '#ff4500',
          recoveryBtnHover: '#ff4500'
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### size

  ##### Parameters

  | Name       | Type   | Required | Default |
  | ---------- | ------ | -------- | ------- |
  | width      | number | optional | 600     |
  | height     | number | optional | 400     |
  | previewImg | number | optional | 70      |
  | detailImg  | number | optional | 70      |
  | mainImg    | number | optional | 100     |

  ```react
  import { StoreComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<StoreComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        downloadParams={{
          isPurchase: 'N'
        }}
        size={{
          width: 600,
          height: 400,
          previewImg: 70,
          detailImg: 70,
          mainImg: 100,
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### border

  ##### Parameters

  | Name   | Type   | Required | Default             |
  | ------ | ------ | -------- | ------------------- |
  | border | string | optional | 1px solid lightgray |
  | radius | number | optional | 8                   |

  ```react
  import { StoreComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<StoreComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        downloadParams={{
          isPurchase: 'N'
        }}
        border={{
          border: '1px solid lightgray',
          radius: 8,
        }}
      />
    )
  }
  
  export default App
  ```



- #### scroll

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | boolean | optional | true    |

  ```react
  import { StoreComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<StoreComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        downloadParams={{
          isPurchase: 'N'
        }}
        scroll={true}
      />
    )
  }
  
  export default App
  ```

  

- #### onClose

  > Get Close Button Click Status

  | Type     | Required | Value |
  | -------- | -------- | ----- |
  | Function | optional | true  |

  ```react
  import { StoreComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
    	<StoreComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        downloadParams={{
          isPurchase: 'N'
        }}
        onClose={(e) => console.log(e)} // true
      />
    )
  }
  
  export default App
  ```

  