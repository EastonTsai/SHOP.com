import "components/main/banner.scss"
import { ReactComponent as RightIcon } from "picture/icon/🦆 icon _nav arrow right_.svg"
import { ReactComponent as LeftIcon } from "picture/icon/🦆 icon _nav arrow left_.svg"
import Picture from "components/sharedComponents/Picture"
import { useState, useEffect, useRef } from "react"

const Banner = ({ pictures }) => {
  const [activePicture, setActivePicture] = useState(0)
  const translate = Number(activePicture) * 100
  const firstRender = useRef(true)
  const isAuto = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    setTimeout(() => {
      handleControlRight()
    }, 3000)
  }, [activePicture])

  const handleControlLeft = () => {
    if (activePicture <= 0) {
      setActivePicture(() => pictures?.length - 1)
      return
    }
    setActivePicture(prev => prev - 1)
  }
  const handleControlRight = () => {
    if (activePicture >= pictures.length - 1) {
      setActivePicture(0)
      return
    }
    setActivePicture(prev => prev + 1)
  }
  const handleControlBottom = (e) => {
    const translate = Number(e.target.dataset.index)
    setActivePicture(translate)
  }

  return (
    <div
      className="banner">
      <div
        className="banner_pictures"
        style={{ transform: `translateX(-${translate}%)` }}
      >
        {pictures?.map(pt => <Picture key={pt.id} url={pt.url} alt={pt.alt} />)}
      </div>
      <div className="banner_control">
        <div onClick={handleControlLeft} className="banner_control_left">
          <LeftIcon />
        </div>
        <div className="banner_control_bottom">
          {pictures?.map((pt, index) =>
            <div
              className={activePicture === index ? "active" : null}
              key={pt.id}
              data-index={index}
              onClick={handleControlBottom}
            />
          )}
        </div>
        <div onClick={handleControlRight} className="banner_control_right">
          <RightIcon />
        </div>
      </div>

    </div>
  )
}
export default Banner
