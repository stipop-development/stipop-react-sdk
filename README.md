# STIPOP REACT SDK

> STIPOP REACT SDK



## Installation

stipop-react-sdk can be installed on Linux, Mac OS or Windows without any issues.

```node
npm install --save stipop-react-sdk
```



## Getting API Key

To use the React SDK you need your api key.

You can get the api key by signing up and creating an application in Stipop Dashboard.



## Get started

| Component                            |
| ------------------------------------ |
| [SearchComponent](#searchcomponent)  |
| [PickerComponent](#pickercomponent)  |
| [StoreComponent](#storecomponent)    |
| [UnifiedCompoent](#unifiedcomponent) |

------



### SearchComponent

> Sticker Search Component

- React

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

- Next.js

  ```react
  import dynamic from 'next/dynamic'
  
  const App = () => {
    const SearchComponent = dynamic(
      () => import('stipop-react-sdk/dist/SearchComponent'),
      {
        ssr: false,
      })
    
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

| Parameters                          | Type     |
| ----------------------------------- | -------- |
| [params](#params)                   | Object   |
| [size](#size)                       | Object   |
| [border](#border)                   | Object   |
| [input](#input)                     | Object   |
| [backgroundColor](#backgroundcolor) | String   |
| [column](#column)                   | Number   |
| [scroll](#scroll)                   | Boolean  |
| [scrollHover](#scrollhover)         | String   |
| [stickerClick](#stickerclick)       | Function |
| [preview](#preview)                 | Boolean  |
| [loadingColor](#loadingcolor)       | String   |
| [shadow](#shadow)                   | String   |
| [auth](#auth)                       | String   |
| [mainLanguage](#mainlanguage)       | String   |

- #### params

  ##### Parameters

  | Name        | Type   | Required             | Default                                                      |
  | ----------- | ------ | -------------------- | ------------------------------------------------------------ |
  | apikey      | string | required             | Stipop API Key for your app.<br />Visit developer dashboard for new API Key. |
  | userId      | string | required             |                                                              |
  | lang        | string | strongly recommended | en                                                           |
  | countryCode | string | strongly recommended | US                                                           |
  | pageNumber  | number | optional             | 1                                                            |
  | limit       | number | optional             | 20 (max: 50)                                                 |
  | default     | string | optional             | hi                                                           |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
          countryCode: 'US',
          pageNumber: 1,
          limit: 20,
          default: 'hi',
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
  | imgSize | number | optional | 60      |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
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

  | Name   | Type   | Required | Default                                                      |
  | ------ | ------ | -------- | ------------------------------------------------------------ |
  | border | string | optional | 1px solid lightgray                                          |
  | radius | object | optional | { **leftTop**: 10, **rightTop**: 10, **leftBottom**: 10, **rightBottom**: 10 }<br />**all** : This parameter preferentially applies the same value to all of the corners at once. |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        border={{
          border: '1px solid lightgray',
          radius: {leftTop: 10, rightTop: 10, leftBottom: 10, rightBottom: 10},
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
  | focus           | string | optional | lightgray           |
  | search          | string | optional | #d5d5d5             |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        input={{
          width: 100,
          height: 32,
          border: '2px solid lightgray',
          radius: 50,
          backgroundColor: '#fff',
          color: '#000',
          focus: 'lightgray',
          search: '#d5d5d5',
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

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
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

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
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

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
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




- #### scrollHover

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #6d7072 |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        scroll={true}
        scrollHover={'#6d7072'}
      />
    )
  }
  
  export default App
  ```
  
  
  
- #### stickerClick

  > Get Sticker URL Function

  | Type     | Required | Value                     |
  | -------- | -------- | ------------------------- |
  | Function | optional | url, stickerId, packageId |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        stickerClick={(info) => console.log(info)} // {url, stickerId, packageId}
      />
    )
  }
  
  export default App
  ```



- #### preview

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | boolean | optional | false   |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        preview={false}
      />
    )
  }
  
  export default App
  ```



- #### loadingColor

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #ff4500 |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        loadingColor={'#ff4500'}
      />
    )
  }
  
  export default App
  ```



- #### shadow

  | Type   | Required | Default                            |
  | ------ | -------- | ---------------------------------- |
  | string | optional | 0 10px 20px 6px rgba(0, 0, 0, 0.1) |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        shadow='0 10px 20px 6px rgba(0, 0, 0, 0.1)'
      />
    )
  }
  
  export default App
  ```



- #### auth

  > If you need access token to use Service Authentication, please contact us through [tech-support@stipop.io](mailto: tech-support@stipop.io)

  | Type   | Required | Default             |
  | ------ | -------- | ------------------- |
  | string | optional | Stipop accessToken. |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        auth='accessToken'
      />
    )
  }
  
  export default App
  ```




- #### mainLanguage

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | en      |

  ##### Example

  ```react
  import { SearchComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <SearchComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        mainLanguage={'en'}
      />
    )
  }
  
  export default App
  ```




------



### PickerComponent

> Sticker Picker Component

- React

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

- Next.js

  ```react
  import dynamic from 'next/dynamic'
  
  const App = () => {
    const PickerComponent = dynamic(
      () => import('stipop-react-sdk/dist/PickerComponent'),
      {
        ssr: false,
      })
    
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

| Parameters                            | Type     |
| ------------------------------------- | -------- |
| [params](#params-1)                   | Object   |
| [size](#size-1)                       | Object   |
| [border](#border-1)                   | Object   |
| [menu](#menu)                         | Object   |
| [backgroundColor](#backgroundcolor-1) | String   |
| [column](#column-1)                   | Number   |
| [scroll](#scroll-1)                   | Boolean  |
| [scrollHover](#scrollhover-1)         | String   |
| [stickerClick](#stickerclick-1)       | Function |
| [storeClick](#storeclick)             | Function |
| [preview](#preview-1)                 | Boolean  |
| [loadingColor](#loadingcolor-1)       | String   |
| [shadow](#shadow-1)                   | String   |
| [auth](#auth-1)                       | String   |
| [mainLanguage](#mainlanguage-1)       | String   |
| [store](#store)                       | Boolean  |

- #### params

  ##### Parameters

  | Name   | Type   | Required | Default                                                      |
  | ------ | ------ | -------- | ------------------------------------------------------------ |
  | apikey | string | required | Stipop API Key for your app.<br />Visit developer dashboard for new API Key. |
  | userId | string | required |                                                              |

  ##### Example

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

  ##### Example

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

  | Name   | Type   | Required | Default                                                      |
  | ------ | ------ | -------- | ------------------------------------------------------------ |
  | border | string | optional | 1px solid lightgray                                          |
  | radius | object | optional | { **leftTop**: 10, **rightTop**: 10, **leftBottom**: 10, **rightBottom**: 10 }<br />**all** : This parameter preferentially applies the same value to all of the corners at once. |

  ##### Example

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
          radius: {leftTop: 10, rightTop: 10, leftBottom: 10, rightBottom: 10},
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
  | listCnt         | number | optional | 6                   |
  | arrowColor      | string | optional | #000                |
  | imgSize         | number | optional | 60                  |

  ##### Example

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
          listCnt: 6,
          arrowColor: '#000',
          imgSize: 60,
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

  ##### Example

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

  ##### Example

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

  ##### Example

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




- #### scrollHover

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #6d7072 |

  ##### Example

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
        scrollHover={'#6d7072'}
      />
    )
  }
  
  export default App
  ```




- #### stickerClick

  > Get Sticker URL Function

  | Type     | Required | Value                     |
  | -------- | -------- | ------------------------- |
  | Function | optional | url, stickerId, packageId |

  ##### Example

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        stickerClick={(info) => console.log(info)} // {url, stickerId, packageId}
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

  ##### Example

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



- #### preview

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | boolean | optional | false   |
  
  ##### Example

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        preview={false}
      />
    )
  }
  
  export default App
  ```



- #### loadingColor

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #ff4500 |

  ##### Example

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        loadingColor={'#ff4500'}
      />
    )
  }
  
  export default App
  ```



- #### shadow

  | Type   | Required | Default                            |
  | ------ | -------- | ---------------------------------- |
  | string | optional | 0 10px 20px 6px rgba(0, 0, 0, 0.1) |

  ##### Example

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        shadow='0 10px 20px 6px rgba(0, 0, 0, 0.1)'
      />
    )
  }
  
  export default App
  ```



- #### auth

  > If you need access token to use Service Authentication, please contact us through [tech-support@stipop.io](mailto: tech-support@stipop.io)

  | Type   | Required | Default             |
  | ------ | -------- | ------------------- |
  | string | optional | Stipop accessToken. |

  ##### Example

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        auth='accessToken'
      />
    )
  }
  
  export default App
  ```




- #### mainLanguage

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | en      |

  ##### Example

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        mainLanguage={'en'}
      />
    )
  }
  
  export default App
  ```



- #### store

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | boolean | optional | True    |

  ##### Example

  ```react
  import { PickerComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <PickerComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        store={true}
      />
    )
  }
  
  export default App
  ```



-------



### StoreComponent

> Sticker Store Component

- React

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

- Next.js

  ```react
  import dynamic from 'next/dynamic'
  
  const App = () => {
    const StoreComponent = dynamic(
      () => import('stipop-react-sdk/dist/StoreComponent'),
      {
        ssr: false,
      })
    
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

  

#### List of Params

| Parameters                        | Type     |
| --------------------------------- | -------- |
| [params](#params-2)               | Object   |
| [downloadParams](#downloadparams) | Object   |
| [color](#color)                   | Object   |
| [size](#size-2)                   | Object   |
| [border](#border-2)               | Object   |
| [scroll](#scroll-2)               | Boolean  |
| [onClose](#onclose)               | Function |
| [shadow](#shadow-2)               | String   |
| [auth](#auth-2)                   | String   |
| [mainLangauge](#mainlanguage-2)   | String   |

- #### params

  ##### Parameters

  | Name        | Type   | Required             | Default                                                      |
  | ----------- | ------ | -------------------- | ------------------------------------------------------------ |
  | apikey      | string | required             | Stipop API Key for your app.<br />Visit developer dashboard for new API Key. |
  | userId      | string | required             |                                                              |
  | lang        | string | strongly recommended | en                                                           |
  | countryCode | string | strongly recommended | US                                                           |
  | animated    | string | optional             | **Y**: Look for premium stickers only<br />**N**: Look for free stickers only<br />**Empty parameter**: Look for all stickers |
  | pageNumber  | number | optional             | 1                                                            |
  | limit       | number | optional             | 20 (max: 50)                                                 |

  ##### Example

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

  

- #### downloadParams

  ##### Parameters

  | Name        | Type   | Required | Default                                                      |
  | ----------- | ------ | -------- | ------------------------------------------------------------ |
  | isPurchase  | string | required | **N**: Free Sticker Store <br />**Y**: Paid Sticker Store<br />**S**: Sticker Subscription |
  | lang        | string | optional | en                                                           |
  | countryCode | string | optional | US                                                           |
  | price       | string | optional | if **isPurchase** is **Y**, the default price is set for stickers.<br />**Defualt Price**: Still Stickers [$0.99], Animated Stickers [$1.99] |

  ##### Example

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
  | loadingColor         | string | optional | #ff4500 |
  | scrollHover          | string | optional | #6d7072 |

  ##### Example

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
          recoveryBtnHover: '#ff4500',
          loadingColor: '#ff4500',
          scrollHover: '#6d7072',
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### size

  ##### Parameters

  | Name              | Type   | Required | Default |
  | ----------------- | ------ | -------- | ------- |
  | width             | number | optional | 600     |
  | height            | number | optional | 400     |
  | previewImg        | number | optional | 70      |
  | detailImg         | number | optional | 70      |
  | mainImg           | number | optional | 100     |
  | packageListHeight | number | optional | 33      |

  ##### Example

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
          packageListHeight: 33,
        }}
      />
    )
  }
  
  export default App
  ```

  

- #### border

  ##### Parameters

  | Name   | Type   | Required | Default                                                      |
  | ------ | ------ | -------- | ------------------------------------------------------------ |
  | border | string | optional | 1px solid lightgray                                          |
  | radius | object | optional | { **leftTop**: 10, **rightTop**: 10, **leftBottom**: 10, **rightBottom**: 10 }<br />**all** : This parameter preferentially applies the same value to all of the corners at once. |

  ##### Example

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
          radius: {leftTop: 10, rightTop: 10, leftBottom: 10, rightBottom: 10},
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

  ##### Example

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

  ##### Example

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



- #### shadow

  | Type   | Required | Default                            |
  | ------ | -------- | ---------------------------------- |
  | string | optional | 0 10px 20px 6px rgba(0, 0, 0, 0.1) |

  ##### Example

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
        shadow='0 10px 20px 6px rgba(0, 0, 0, 0.1)'
      />
    )
  }
  
  export default App
  ```




- #### auth

  > If you need access token to use Service Authentication, please contact us through [tech-support@stipop.io](mailto: tech-support@stipop.io)

  | Type   | Required | Default             |
  | ------ | -------- | ------------------- |
  | string | optional | Stipop accessToken. |

  ##### Example

  ```react
  import { StoreComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <StoreComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        downloadParmas={{
          isPurchase: 'N'
        }}
        auth='accessToken'
      />
    )
  }
  
  export default App
  ```




- #### mainLanguage

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | en      |

  ##### Example

  ```react
  import { StoreComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <StoreComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        downloadParmas={{
          isPurchase: 'N'
        }}
        mainLanguage={'en'}
      />
    )
  }
  
  export default App
  ```




------



### UnifiedComponent

> Sticker Unified Component (Search + Picker Component)

- React

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
      />
    )
  }
  
  export default App
  ```

- Next.js

  ```react
  import dynamic from 'next/dynamic'
  
  const App = () => {
    const UnifiedComponent = dynamic(
      () => import('stipop-react-sdk/dist/UnifiedComponent'),
      {
        ssr: false,
      })
    
    return (
      <UnifiedComponent 
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

| Parameters                            | Type     |
| ------------------------------------- | -------- |
| [params](#params-3)                   | Object   |
| [size](#size-3)                       | Object   |
| [border](#border-3)                   | Object   |
| [input](#input-1)                     | Object   |
| [menu](#menu-1)                       | Object   |
| [backgroundColor](#backgroundcolor-2) | String   |
| [column](#column-2)                   | Number   |
| [scroll](#scroll-3)                   | Boolean  |
| [scrollHover](#scrollhover-2)         | Boolean  |
| [stickerClick](#stickerclick-2)       | Function |
| [storeClick](#storeclick-1)           | Function |
| [preview](#preview-2)                 | Boolean  |
| [loadingColor](#loadingcolor-2)       | String   |
| [shadow](#shadow-3)                   | String   |
| [auth](#auth-3)                       | String   |
| [mainLanguage](#mainlanguage-3)       | String   |
| [store](#store-1)                     | Boolean  |

- #### params

  ##### Parameters

  | Name        | Type   | Required             | Default                                                      |
  | ----------- | ------ | -------------------- | ------------------------------------------------------------ |
  | apikey      | string | required             | Stipop API Key for your app.<br />Visit developer dashboard for new API Key. |
  | userId      | string | required             |                                                              |
  | lang        | string | strongly recommended | en                                                           |
  | countryCode | string | strongly recommended | US                                                           |
  | pageNumber  | number | optional             | 1                                                            |
  | limit       | number | optional             | 20 (max: 50)                                                 |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
          lang: 'en',
          countryCode: 'US',
          pageNumber: 1,
          limit: 20,
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
  | imgSize | number | optional | 60      |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
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

  | Name   | Type   | Required | Default                                                      |
  | ------ | ------ | -------- | ------------------------------------------------------------ |
  | border | string | optional | 1px solid lightgray                                          |
  | radius | object | optional | { **leftTop**: 10, **rightTop**: 10, **leftBottom**: 10, **rightBottom**: 10 }<br />**all** : This parameter preferentially applies the same value to all of the corners at once. |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        border={{
          border: '1px solid lightgray',
          radius: {leftTop: 10, rightTop: 10, leftBottom: 10, rightBottom: 10},
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
  | focus           | string | optional | lightgray           |
  | search          | string | optional | #d5d5d5             |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        input={{
          width: 100,
          height: 32,
          border: '2px solid lightgray',
          radius: 50,
          backgroundColor: '#fff',
          color: '#000',
          focus: 'lightgray',
          search: '#d5d5d5',
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
  | backgroundColor | string | optional | #fff                |
  | bottomLine      | string | optional | 1px solid lightgray |
  | selectedLine    | string | optional | 2px solid black     |
  | height          | number | optional | 45                  |
  | listCnt         | number | optional | 6                   |
  | arrowColor      | string | optional | #000                |
  | imgSize         | number | optional | 60                  |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        menu={{
          backgroundColor: '#fff',
          bottomLine: '1px solid lightgray',
          selectedLine: '2px solid black',
          height: 45,
          listCnt: 6,
          arrowColor: '#000',
          imgSize: 60,
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

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
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

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
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

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
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

  

- #### scrollHover

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #6d7072 |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        scrollHover={'#6d7072'}
      />
    )
  }
  
  export default App
  ```




- #### stickerClick

  > Get Sticker URL Function

  | Type     | Required | Value                     |
  | -------- | -------- | ------------------------- |
  | Function | optional | url, stickerId, packageId |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        stickerClick={(info) => console.log(info)} // {url, stickerId, packageId}
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

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
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



- #### preview

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | boolean | optional | false   |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        preview={false}
      />
    )
  }
  
  export default App
  ```



- #### loadingColor

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #ff4500 |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        loadingColor={'#ff4500'}
      />
    )
  }
  
  export default App
  ```



- #### shadow

  | Type   | Required | Default                            |
  | ------ | -------- | ---------------------------------- |
  | string | optional | 0 10px 20px 6px rgba(0, 0, 0, 0.1) |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        shadow='0 10px 20px 6px rgba(0, 0, 0, 0.1)'
      />
    )
  }
  
  export default App
  ```



- #### auth

  > If you need access token to use Service Authentication, please contact us through [tech-support@stipop.io](mailto: tech-support@stipop.io)

  | Type   | Required | Default             |
  | ------ | -------- | ------------------- |
  | string | optional | Stipop accessToken. |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        auth='accessToken'
      />
    )
  }
  
  export default App
  ```



- #### mainLanguage

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | en      |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        mainLanguage={'en'}
      />
    )
  }
  
  export default App
  ```



- #### store

  | Type    | Required | Default |
  | ------- | -------- | ------- |
  | boolean | optional | True    |

  ##### Example

  ```react
  import { UnifiedComponent } from 'stipop-react-sdk'
  
  const App = () => {
    return (
      <UnifiedComponent 
        params={{
          apikey: 'apikey',
          userId: 'userId',
        }}
        store={true}
      />
    )
  }
  
  export default App
  ```

