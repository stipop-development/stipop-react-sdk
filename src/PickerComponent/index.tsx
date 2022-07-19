import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import _ from 'lodash'

import Stipop from 'stipop-js-sdk'

import { StoreProps } from './index.types'

import Icon from '../Icon'
import LoadingSpinner from '../LoadingSpinner'
import { FiX, FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const PickerComponent: React.FC<StoreProps> = ({
  params,
  size,
  border,
  backgroundColor,
  menu,
  column,
  scroll,
  scrollHover,
  stickerClick,
  storeClick,
  preview,
  loadingColor,
  shadow,
  useAuth,
  auth,
}) => {
  const [myStickers, setMyStickers] = useState([])
  const [stickers, setStickers] = useState([])
  const [showPackage, setShowPackage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [recentView, setRecentView] = useState(false)

  const [itemCnt, setItemCnt] = useState(0)
  const [itemNum, setItemNum] = useState(0)
  const [scrollX, setScrollX] = useState(0)
  const menuList = document.getElementById('picker-menu')
  const [scrolling, setScrolling] = useState(0)
  const [tempSticker, setTempSticker] = useState({
    url: '',
    stickerId: '',
    packageId: '',
  })
  const [init, setInit] = useState(false)
  const [accessToken, setAccessToken] = useState('')

  const client = new (Stipop as any)(params.apikey, 'v1')

  const dummies = []
  _.times(
    menu && menu.listCnt ? menu.listCnt - (2 + itemCnt) : 6 - (2 + itemCnt),
    n => dummies.push({ index: n.toString(36) })
  )

  const itemWidth =
    size && size.width
      ? menu && menu.listCnt
        ? size.width / (menu.listCnt + 2)
        : size.width / 6
      : menu && menu.listCnt
      ? 360 / (menu.listCnt + 2)
      : 45

  const getAccessToken = () => {
    axios
      .post('https://sandbox.stipop.com/v1/access', {
        ...auth,
        userId: params.userId,
      })
      .then(({ data }) => {
        setAccessToken(data.body.accessToken)
      })
  }

  useEffect(() => {
    if (useAuth) {
      if (!accessToken) {
        getAccessToken()
      }
    }
  }, [])

  useEffect(() => {
    if (init) {
      setIsLoading(true)
      if (useAuth && accessToken) {
        axios
          .post(
            'https://sandbox.stipop.com/v1/init',
            {
              userId: params.userId,
              lang: 'en',
            },
            {
              headers: {
                apikey: params.apikey,
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then(() => {
            axios
              .get(
                `https://sandbox.stipop.com/v1/mysticker/${encodeURIComponent(
                  params.userId
                )}`,
                {
                  params: {
                    userId: params.userId,
                  },
                  headers: {
                    apikey: params.apikey,
                    Authorization: `Bearer ${accessToken}`,
                    platform: 'react-sdk',
                    sdk_version: 'test-version',
                  },
                }
              )
              .then(({ data }) => {
                setInit(
                  data.body && data.body.packageList === null ? true : false
                )
                if (data.body && data.body.packageList) {
                  setItemCnt(
                    data.body.packageList.filter(
                      pack => pack.packageId !== null
                    ).length
                  )
                  setMyStickers(
                    data.body.packageList.filter(
                      pack => pack.packageId !== null
                    )
                  )
                }

                if (
                  data.body.packageList.filter(pack => pack.packageId !== null)
                    .length > 0
                ) {
                  axios
                    .get(
                      `https://sandbox.stipop.com/v1/package/${data.body.packageList[0].packageId}`,
                      {
                        params: {
                          userId: params.userId,
                        },
                        headers: {
                          apikey: params.apikey,
                          Authorization: `Bearer ${accessToken}`,
                          platform: 'react-sdk',
                          sdk_version: 'test-version',
                        },
                      }
                    )
                    .then(({ data }) => {
                      setStickers(
                        data.body &&
                          data.body.package &&
                          data.body.package.stickers
                          ? data.body.package.stickers
                          : []
                      )
                    })
                    .catch(() => {
                      getAccessToken()
                      setShowPackage(0)
                    })
                }
                setIsLoading(false)
              })
              .catch(() => {
                getAccessToken()
                setShowPackage(0)
              })
          })
          .catch(() => {
            getAccessToken()
            setShowPackage(0)
          })
      }
    } else if (!useAuth) {
      const initParams = {
        userId: params.userId,
        // userId: encodeURIComponent(params.userId),
        lang: 'en',
      }
      const initData = client.init(initParams)

      initData.then(() => {
        const pickerParams = {
          userId: encodeURIComponent(params.userId),
        }

        const data = client.mySticker(pickerParams)

        data.then(({ body }) => {
          setInit(body && body.packageList === null ? true : false)
          if (body && body.packageList) {
            setItemCnt(
              body.packageList.filter(pack => pack.packageId !== null).length
            )
            setMyStickers(
              body.packageList.filter(pack => pack.packageId !== null)
            )

            if (
              body.packageList.filter(pack => pack.packageId !== null).length >
              0
            ) {
              const packageParams = {
                userId: encodeURIComponent(params.userId),
                packId: body.packageList[0].packageId,
              }

              const packageData = client.getPackInfo(packageParams)
              packageData.then(({ body }) => {
                setStickers(
                  body && body.package && body.package.stickers
                    ? body.package.stickers
                    : []
                )
              })
            }
            setIsLoading(false)
          }
        })
      })
    }
  }, [init])

  // useEffect(() => {
  //   setIsLoading(true)
  //   const pickerParams = {
  //     // userId: params.userId,
  //     userId: encodeURIComponent(params.userId),
  //   }

  //   const data = client.mySticker(pickerParams)

  //   data.then(({ body }) => {
  //     setInit(body && body.packageList === null ? true : false)
  //     if (body && body.packageList) {
  //       setItemCnt(
  //         body.packageList.filter(pack => pack.packageId !== null).length
  //       )
  //       setMyStickers(body.packageList.filter(pack => pack.packageId !== null))

  //       if (
  //         body.packageList.filter(pack => pack.packageId !== null).length > 0
  //       ) {
  //         const packageParams = {
  //           userId: encodeURIComponent(params.userId),
  //           packId: body.packageList[0].packageId,
  //         }

  //         const packageData = client.getPackInfo(packageParams)
  //         packageData.then(({ body }) => {
  //           setStickers(
  //             body && body.package && body.package.stickers
  //               ? body.package.stickers
  //               : []
  //           )
  //         })
  //       }
  //       setIsLoading(false)
  //     }
  //   })
  // }, [])

  useEffect(() => {
    setIsLoading(true)

    if (useAuth && accessToken) {
      axios
        .get(
          `https://sandbox.stipop.com/v1/mysticker/${encodeURIComponent(
            params.userId
          )}`,
          {
            params: {
              userId: params.userId,
            },
            headers: {
              apikey: params.apikey,
              Authorization: `Bearer ${accessToken}`,
              platform: 'react-sdk',
              sdk_version: 'test-version',
            },
          }
        )
        .then(({ data }) => {
          setInit(data.body && data.body.packageList === null ? true : false)
          if (data.body && data.body.packageList) {
            setItemCnt(
              data.body.packageList.filter(pack => pack.packageId !== null)
                .length
            )
            setMyStickers(
              data.body.packageList.filter(pack => pack.packageId !== null)
            )
          }

          if (
            data.body.packageList.filter(pack => pack.packageId !== null)
              .length > 0
          ) {
            if (recentView) {
              axios
                .get(
                  `https://sandbox.stipop.com/v1/package/send/${encodeURIComponent(
                    params.userId
                  )}`,
                  {
                    params: {
                      userId: params.userId,
                      limit: 28,
                    },
                    headers: {
                      apikey: params.apikey,
                      Authorization: `Bearer ${accessToken}`,
                    },
                  }
                )
                .then(({ data }) => {
                  setStickers(
                    data && data.body && data.body.stickerList
                      ? data.body.stickerList
                      : []
                  )
                })
                .catch(() => {
                  getAccessToken()
                })
            } else {
              axios
                .get(
                  `https://sandbox.stipop.com/v1/package/${data.body.packageList[showPackage].packageId}`,
                  {
                    params: {
                      userId: params.userId,
                    },
                    headers: {
                      apikey: params.apikey,
                      Authorization: `Bearer ${accessToken}`,
                      platform: 'react-sdk',
                      sdk_version: 'test-version',
                    },
                  }
                )
                .then(({ data }) => {
                  setStickers(
                    data.body && data.body.package && data.body.package.stickers
                      ? data.body.package.stickers
                      : []
                  )
                })
                .catch(() => {
                  getAccessToken()
                })
            }
          }
          setTimeout(() => {
            setIsLoading(false)
          }, 500)
        })
        .catch(() => {
          getAccessToken()
        })
    } else if (!useAuth) {
      const pickerParams = {
        // userId: params.userId,
        userId: encodeURIComponent(params.userId),
      }

      const data = client.mySticker(pickerParams)

      data.then(({ body }) => {
        setInit(body && body.packageList === null ? true : false)
        if (body && body.packageList) {
          setItemCnt(
            body.packageList.filter(pack => pack.packageId !== null).length
          )
          setMyStickers(
            body.packageList.filter(pack => pack.packageId !== null)
          )

          if (
            body.packageList.filter(pack => pack.packageId !== null).length > 0
          ) {
            const packageParams = {
              userId: encodeURIComponent(params.userId),
              packId: body.packageList[0].packageId,
            }

            const packageData = client.getPackInfo(packageParams)
            packageData.then(({ body }) => {
              setStickers(
                body && body.package && body.package.stickers
                  ? body.package.stickers
                  : []
              )
            })
          }
          setIsLoading(false)
        }
      })
    }
  }, [accessToken])

  const clickPackage = async packageId => {
    await setIsLoading(true)
    await setRecentView(false)
    if (useAuth && accessToken) {
      axios
        .get(`https://sandbox.stipop.com/v1/package/${packageId}`, {
          params: {
            userId: params.userId,
          },
          headers: {
            apikey: params.apikey,
            Authorization: `Bearer ${accessToken}`,
            platform: 'react-sdk',
            sdk_version: 'test-version',
          },
        })
        .then(({ data }) => {
          setStickers(
            data.body && data.body.package && data.body.package.stickers
              ? data.body.package.stickers
              : []
          )
        })
        .catch(() => {
          getAccessToken()
        })
    } else if (!useAuth) {
      const packageParams = {
        userId: encodeURIComponent(params.userId),
        packId: packageId,
      }

      const data = client.getPackInfo(packageParams)

      await data.then(({ body }) => {
        setStickers(
          body && body.package && body.package.stickers
            ? body.package.stickers
            : []
        )
      })
    }
  }

  const clickSticker = (stickerId, stickerImg, packageId) => {
    if (useAuth && accessToken) {
      axios
        .post(
          `https://sandbox.stipop.com/v1/analytics/send/${stickerId}`,
          null,
          {
            params: {
              // userId: encodeURIComponent(params.userId),
              userId: params.userId,
            },
            headers: {
              apikey: params.apikey,
              Authorization: `Bearer ${accessToken}`,
              platform: 'react-sdk',
              sdk_version: 'test-version',
            },
          }
        )
        .then(() => {
          stickerClick({
            url: stickerImg,
            stickerId: stickerId,
            packageId: packageId,
          })
          if (preview) {
            setTempSticker({
              url: stickerImg,
              stickerId: stickerId,
              packageId: packageId,
            })
          }
        })
        .catch(() => {
          getAccessToken()
        })
    } else if (!useAuth) {
      axios
        .post(
          `https://messenger.stipop.io/v1/analytics/send/${stickerId}`,
          null,
          {
            params: {
              // userId: encodeURIComponent(params.userId),
              userId: params.userId,
            },
            headers: {
              apikey: params.apikey,
            },
          }
        )
        .then(() => {
          stickerClick({
            url: stickerImg,
            stickerId: stickerId,
            packageId: packageId,
          })
          if (preview) {
            setTempSticker({
              url: stickerImg,
              stickerId: stickerId,
              packageId: packageId,
            })
          }
        })
    }
  }

  const clickTime = () => {
    setIsLoading(true)
    setRecentView(true)
    if (useAuth && accessToken) {
      axios
        .get(
          `https://sandbox.stipop.com/v1/package/send/${encodeURIComponent(
            params.userId
          )}`,
          {
            params: {
              userId: params.userId,
              limit: 28,
            },
            headers: {
              apikey: params.apikey,
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(({ data }) => {
          setStickers(
            data && data.body && data.body.stickerList
              ? data.body.stickerList
              : []
          )
        })
        .catch(() => {
          getAccessToken()
        })
    } else if (!useAuth) {
      const requestUrl = `https://messenger.stipop.io/v1/package/send/${encodeURIComponent(
        params.userId
      )}?limit=28`
      axios
        .get(requestUrl, {
          headers: {
            apikey: params.apikey,
            'Content-Type': 'application/json',
          },
        })
        .then(({ data }) => {
          setRecentView(true)
          setStickers(
            data && data.body && data.body.stickerList
              ? data.body.stickerList
              : []
          )
        })
    }
  }

  useEffect(() => {
    if (stickers && stickers.length > 0) {
      setIsLoading(false)
    } else {
      if (recentView) {
        setIsLoading(false)
      } else {
        setIsLoading(true)
      }
    }
  }, [stickers])

  return (
    <PickerWrapper size={size} border={border} shadow={shadow}>
      {preview && tempSticker.url && (
        <PreviewWrapper>
          <FiX
            size={25}
            color={'#000'}
            style={{
              position: 'absolute',
              right: '15px',
              top: '15px',
              cursor: 'pointer',
            }}
            onClick={() => {
              setTempSticker({ url: '', stickerId: '', packageId: '' })
            }}
          />
          <ChatSticker src={tempSticker.url} />
        </PreviewWrapper>
      )}
      <MenuBox>
        <ArrowWrapper
          id={itemNum ? 'left-black' : 'left'}
          backgroundColor={backgroundColor}
          border={border}
          menu={menu}
          size={size}
          onClick={() => {
            menuList.scrollTo(
              scrollX -
                (menu && menu.listCnt
                  ? itemWidth * menu.listCnt
                  : itemWidth * 6),
              0
            )
          }}
        >
          {itemNum ? (
            <FiChevronLeft
              size={30}
              color={menu && menu.arrowColor ? menu.arrowColor : '#000'}
            />
          ) : (
            <FiChevronLeft size={30} color={'#c1c1c1'} />
          )}
        </ArrowWrapper>
        <PickerMenu
          id="picker-menu"
          backgroundColor={backgroundColor}
          border={border}
          menu={menu}
          size={size}
          onScroll={e => {
            setItemNum(
              Math.round(
                e.target.scrollLeft /
                  (size && size.width
                    ? menu && menu.listCnt
                      ? size.width / (menu.listCnt + 2)
                      : size.width / 6
                    : menu && menu.listCnt
                    ? 360 / (menu.listCnt + 2)
                    : 45)
              )
            )
            setScrollX(e.target.scrollLeft)
          }}
        >
          <IconWrapper
            backgroundColor={backgroundColor}
            border={border}
            menu={menu}
            size={size}
            onClick={() => {
              clickTime()
              setShowPackage(-1)
            }}
            show={showPackage === -1}
          >
            <Icon type="TIME" />
          </IconWrapper>
          <IconWrapper
            backgroundColor={backgroundColor}
            border={border}
            menu={menu}
            size={size}
          >
            <Icon type="STORE" onClick={() => storeClick(true)} />
          </IconWrapper>
          {myStickers.length > 0 ? (
            myStickers.length >
            (menu && menu.listCnt ? menu.listCnt - 2 : 4) ? (
              myStickers.map(
                (pack, index) =>
                  pack.packageId && (
                    <PackageImgWrapper
                      menu={menu}
                      size={size}
                      key={index}
                      onClick={() => {
                        clickPackage(pack.packageId)
                        setShowPackage(index)
                      }}
                      show={showPackage === index}
                    >
                      <PackageImg
                        size={size}
                        menu={menu}
                        src={`${pack.packageImg}?d=100x100`}
                        show={showPackage === index}
                      />
                    </PackageImgWrapper>
                  )
              )
            ) : (
              <>
                {myStickers.map(
                  (pack, index) =>
                    pack.packageId && (
                      <PackageImgWrapper
                        menu={menu}
                        size={size}
                        key={index}
                        onClick={() => {
                          clickPackage(pack.packageId)
                          setShowPackage(index)
                        }}
                        show={showPackage === index}
                      >
                        <PackageImg
                          size={size}
                          menu={menu}
                          src={`${pack.packageImg}?d=100x100`}
                          show={showPackage === index}
                        />
                      </PackageImgWrapper>
                    )
                )}
                {dummies.map((item, index) => (
                  <PackageImgWrapper
                    id="dummies"
                    menu={menu}
                    size={size}
                    key={index}
                  ></PackageImgWrapper>
                ))}
              </>
            )
          ) : (
            dummies.map((item, index) => (
              <PackageImgWrapper
                id="dummies"
                menu={menu}
                size={size}
                key={index}
              ></PackageImgWrapper>
            ))
          )}
        </PickerMenu>
        <ArrowWrapper
          id={
            itemCnt - (menu && menu.listCnt ? menu.listCnt - 2 : 4) <= itemNum
              ? 'right'
              : 'right-black'
          }
          backgroundColor={backgroundColor}
          border={border}
          menu={menu}
          size={size}
          onClick={() => {
            menuList.scrollTo(
              scrollX +
                (menu && menu.listCnt
                  ? itemWidth * menu.listCnt
                  : itemWidth * 6),
              0
            )
          }}
        >
          {itemCnt - (menu && menu.listCnt ? menu.listCnt - 2 : 4) <=
          itemNum ? (
            <FiChevronRight size={30} color={'#c1c1c1'} />
          ) : (
            <FiChevronRight
              size={30}
              color={menu && menu.arrowColor ? menu.arrowColor : '#000'}
            />
          )}
        </ArrowWrapper>
      </MenuBox>
      {!recentView ? (
        stickers && isLoading ? (
          <StickerWrapper
            backgroundColor={backgroundColor}
            border={border}
            column={column}
            scroll={scroll}
            scrollHover={scrollHover}
            size={size}
            isLoading={isLoading}
          >
            <LoadingSpinner color={loadingColor ? loadingColor : '#ff4500'} />
          </StickerWrapper>
        ) : (
          <StickerWrapper
            id="sticker-wrapper"
            backgroundColor={backgroundColor}
            border={border}
            column={column}
            scroll={scroll}
            scrollHover={scrollHover}
            scrolling={scrolling}
            // onScroll={e => setCurrentScrollTop(e.target.scrollTop)}
            onMouseEnter={() => setScrolling(1)}
            onMouseLeave={() => setScrolling(0)}
          >
            {stickers.map((sticker, index) => (
              <StickerImg
                size={size}
                src={`${sticker.stickerImg}?d=100x100`}
                alt=""
                key={index}
                onClick={() => {
                  // stickerClick({
                  //   url: sticker.stickerImg,
                  //   stickerId: sticker.stickerId,
                  //   packageId: sticker.packageId,
                  // })
                  clickSticker(
                    sticker.stickerId,
                    sticker.stickerImg,
                    sticker.packageId
                  )
                  // setTempSticker(sticker.stickerImg)
                }}
              />
            ))}
          </StickerWrapper>
        )
      ) : isLoading ? (
        <StickerWrapper
          backgroundColor={backgroundColor}
          border={border}
          column={column}
          scroll={scroll}
          scrollHover={scrollHover}
          isLoading={isLoading}
        >
          <LoadingSpinner color={loadingColor ? loadingColor : '#ff4500'} />
        </StickerWrapper>
      ) : stickers.length > 0 ? (
        <StickerWrapper
          backgroundColor={backgroundColor}
          border={border}
          column={column}
          scroll={scroll}
          scrollHover={scrollHover}
          isLoading={isLoading}
          onMouseEnter={() => setScrolling(1)}
          onMouseLeave={() => setScrolling(0)}
        >
          {stickers.map((sticker, index) => (
            <StickerImg
              size={size}
              src={`${sticker.stickerImg}?d=100x100`}
              alt=""
              key={index}
              onClick={() => {
                // stickerClick({
                //   url: sticker.stickerImg,
                //   stickerId: sticker.stickerId,
                //   packageId: sticker.packageId,
                // })
                clickSticker(
                  sticker.stickerId,
                  sticker.stickerImg,
                  sticker.packageId
                )
                // setTempSticker(sticker.stickerImg)
              }}
            />
          ))}
        </StickerWrapper>
      ) : (
        <StickerWrapper
          backgroundColor={backgroundColor}
          border={border}
          column={column}
          scroll={scroll}
          scrollHover={scrollHover}
          isLoading={recentView}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="https://img.stipop.io/image/sdk/no-sticker.png"
              className="no-sticker"
              style={{ width: '40%' }}
            ></img>
          </div>
        </StickerWrapper>
      )}
    </PickerWrapper>
  )
}

export default PickerComponent

const PickerWrapper = styled.div`
  width: ${props =>
    props.size && props.size.width ? `${props.size.width}px` : '360px'};
  height: ${props =>
    props.size && props.size.height ? `${props.size.height}px` : '300px'};
  border: ${props =>
    props.border && props.border.border
      ? props.border.border
      : '1px solid lightgray'};
  border-top-left-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.leftTop || props.border.radius.leftTop === 0)
      ? `${props.border.radius.leftTop}px`
      : '10px'};
  border-top-right-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.rightTop || props.border.radius.rightTop === 0)
      ? `${props.border.radius.rightTop}px`
      : '10px'};
  border-bottom-left-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.leftBottom || props.border.radius.leftBottom === 0)
      ? `${props.border.radius.leftBottom}px`
      : '10px'};
  border-bottom-right-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.rightBottom || props.border.radius.rightBottom === 0)
      ? `${props.border.radius.rightBottom}px`
      : '10px'};
  border-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.all || props.border.radius.all === 0) &&
    `${props.border.radius.all}px`};
  display: flex;
  flex-direction: column;
  box-shadow: ${props =>
    props.shadow ? props.shadow : '0 10px 20px 6px rgba(0, 0, 0, 0.1)'};
  position: relative;
`
const MenuBox = styled.div`
  width: 100%;
  display: flex;
`
const ArrowWrapper = styled.div`
  flex-basis: ${props =>
    props.size && props.size.width
      ? props.menu && props.menu.listCnt
        ? `${props.size.width / (props.menu.listCnt + 2)}px`
        : `${props.size.width / 8}px`
      : props.menu && props.menu.listCnt
      ? `${360 / (props.menu.listCnt + 2)}px`
      : '45px'};
  flex-shrink: 0;
  height: ${props =>
    props.menu && props.menu.height ? `${props.menu.height}px` : '45px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.menu && props.menu.backgroundColor
      ? props.menu.backgroundColor
      : '#fff'};
  border-top-left-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.all || props.border.radius.all === 0)
      ? `${props.border.radius.all}px`
      : props.border &&
        props.border.radius &&
        (props.border.radius.leftTop || props.border.radius.leftTop === 0)
      ? `${props.border.radius.leftTop}px`
      : '10px'};

  border-bottom: ${props =>
    props.menu && props.menu.bottomLine
      ? props.menu.bottomLine
      : '1px solid lightgray'};
  box-sizing: border-box;
  cursor: pointer;

  .stipop-icon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &#left {
    padding-left: 10px;
    cursor: initial;
  }
  &#left-black {
    padding-left: 10px;
    .stipop-icon {
      transform: rotateY(180deg);
    }
  }
  &#right-black {
    padding-right: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: ${props =>
      props.border &&
      props.border.radius &&
      (props.border.radius.all || props.border.radius.all === 0)
        ? `${props.border.radius.all}px`
        : props.border &&
          props.border.radius &&
          (props.border.radius.rightTop || props.border.radius.rightTop === 0)
        ? `${props.border.radius.rightTop}px`
        : '10px'};
  }
  &#right {
    padding-right: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: ${props =>
      props.border &&
      props.border.radius &&
      (props.border.radius.all || props.border.radius.all === 0)
        ? `${props.border.radius.all}px`
        : props.border &&
          props.border.radius &&
          (props.border.radius.rightTop || props.border.radius.rightTop === 0)
        ? `${props.border.radius.rightTop}px`
        : '10px'};
    cursor: initial;

    .stipop-icon {
      transform: rotateY(180deg);
    }
  }
`
const IconWrapper = styled.div`
  flex-basis: ${props =>
    props.size && props.size.width
      ? props.menu && props.menu.listCnt
        ? `${props.size.width / (props.menu.listCnt + 2)}px`
        : `${props.size.width / 8}px`
      : props.menu && props.menu.listCnt
      ? `${360 / (props.menu.listCnt + 2)}px`
      : '45px'};
  flex-shrink: 0;
  height: ${props =>
    props.menu && props.menu.height ? `${props.menu.height}px` : '45px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.menu && props.menu.backgroundColor
      ? props.menu.backgroundColor
      : '#fff'};

  .stipop-icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: ${props =>
      props.show
        ? props.menu && props.menu.selectedLine
          ? props.menu.selectedLine
          : '2px solid black'
        : props.menu && props.menu.bottomLine
        ? props.menu.bottomLine
        : '1px solid lightgray'};
    box-sizing: border-box;

    svg {
      transform: ${props =>
        props.menu && props.menu.imgSize
          ? `scale(calc(${props.menu.imgSize}/30))`
          : 'scale(1)'};
    }
  }
`
const PickerMenu = styled.div`
  width: ${props =>
    props.size && props.size.width ? `${props.size.width}px` : '360px'};
  height: ${props =>
    props.menu && props.menu.height ? `${props.menu.height}px` : '45px'};
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.menu && props.menu.backgroundColor
      ? props.menu.backgroundColor
      : '#fff'};
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`
const PackageImgWrapper = styled.div`
  /* flex-basis: ${props =>
    props.menu && props.menu.height ? `${props.menu.height}px` : '45px'}; */
  flex-basis: ${props =>
    props.size && props.size.width
      ? props.menu && props.menu.listCnt
        ? `${props.size.width / (props.menu.listCnt + 2)}px`
        : `${props.size.width / 8}px`
      : props.menu && props.menu.listCnt
      ? `${360 / (props.menu.listCnt + 2)}px`
      : '45px'};
  flex-shrink: 0;
  height: 100%;
  /* padding: 0 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${props =>
    props.show
      ? props.menu && props.menu.selectedLine
        ? props.menu.selectedLine
        : '2px solid black'
      : props.menu && props.menu.bottomLine
      ? props.menu.bottomLine
      : '1px solid lightgray'};
  box-sizing: border-box;
  cursor: pointer;

  &#dummies {
    cursor: initial;
  }
`
const PackageImg = styled.img`
  /* width: ${props =>
    props.size && props.size.width
      ? props.menu && props.menu.listCnt
        ? `calc(${props.size.width / (props.menu.listCnt + 2)}px * 0.6)`
        : `calc(${props.size.width / 8}px * 0.6)`
      : props.menu && props.menu.listCnt
      ? `calc(${360 / (props.menu.listCnt + 2)}px * 0.6)`
      : 'calc(45px * 0.6)'}; */
  width: ${props =>
    props.menu && props.menu.imgSize ? `${props.menu.imgSize}px` : '60%'};
  filter: ${props => (props.show ? '' : 'saturate(0%)')};
`
const StickerWrapper = styled.div`
  height: calc(100% - 45px);
  padding: 15px;
  display: ${props => (props.isLoading ? 'block' : 'grid')};
  grid-template-columns: ${props =>
    props.column ? `repeat(${props.column}, 1fr)` : 'repeat(4, 1fr)'};
  grid-template-rows: ${props =>
    props.column ? `repeat(${props.column}, 1fr)` : 'repeat(4, 1fr)'};
  row-gap: 8%;
  justify-items: center;
  overflow-y: scroll;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
  border-bottom-left-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.all || props.border.radius.all === 0)
      ? `${props.border.radius.all}px`
      : props.border &&
        props.border.radius &&
        (props.border.radius.leftBottom || props.border.radius.leftBottom === 0)
      ? `${props.border.radius.leftBottom}px`
      : '10px'};
  border-bottom-right-radius: ${props =>
    props.border &&
    props.border.radius &&
    (props.border.radius.all || props.border.radius.all === 0)
      ? `${props.border.radius.all}px`
      : props.border &&
        props.border.radius &&
        (props.border.radius.rightBottom ||
          props.border.radius.rightBottom === 0)
      ? `${props.border.radius.rightBottom}px`
      : '10px'};
  -ms-overflow-style: ${props => (props.scroll === false ? 'none' : '')};
  scrollbar-width: ${props => (props.scroll === false ? 'none' : '')};

  &::-webkit-scrollbar {
    display: ${props => (props.scroll === false ? 'none' : '')};
    /* display: ${props =>
      props.scroll === false ? 'none' : props.scrolling ? '' : 'none'}; */
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    /* background-color: ${props =>
      props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff'};
    border-bottom-right-radius: ${props =>
      props.border && (props.border.radius || props.border.radius == 0)
        ? `${props.border.radius}px`
        : '10px'}; */
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4;
    border-radius: 5px;
    &:hover {
      background: ${props =>
        props.scrollHover ? props.scrollHover : '#6d7072'};
    }
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`
const StickerImg = styled.img`
  width: ${props =>
    props.size && props.size.imgSize ? `${props.size.imgSize}%` : '70%'};
  cursor: pointer;
`
const PreviewWrapper = styled.div`
  width: 60%;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-left: 40%;
  margin-bottom: 5px;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100%;
`
const ChatSticker = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
`
