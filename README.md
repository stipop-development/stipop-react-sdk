# README

> STIPOP SDK TEST

## Installation

stipop-sdk-test

```node
npm install --save stipop-sdk-test
```

## Get started

```react
import { SearchComponent } from 'stipop-sdk-test'

const App = () => {
  return (
  	<SearchComponent 
      params={{
        apikey: 'apikey',
        userId: 'userId',
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



- ### size

  #### Parameters

  | Name    | Type   | Required | Default |
  | ------- | ------ | -------- | ------- |
  | width   | number | optional | 360px   |
  | height  | number | optional | 300px   |
  | imgSize | number | optional | 60%     |

  

- ### border

  #### Parameters

  | Name   | Type   | Required | Default             |
  | ------ | ------ | -------- | ------------------- |
  | border | string | optional | 1px solid lightgray |
  | radius | number | optional | 10px                |



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

  

- ### backgroundColor

  | Type   | Required | Default |
  | ------ | -------- | ------- |
  | string | optional | #fff    |

  

- ### column

- ### scroll

- ### stickerClick