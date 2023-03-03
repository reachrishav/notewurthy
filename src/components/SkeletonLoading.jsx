import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { useTheme } from "../ThemeContext"
import "react-loading-skeleton/dist/skeleton.css"

const SkeletonLoading = () => {
  const darkTheme = useTheme()
  return (
    <SkeletonTheme
      baseColor={darkTheme ? "#313131" : "#e3e3e3"}
      highlightColor={darkTheme ? "#525252" : "#f0f2f5"}
    >
      <div className='blog'>
        <div className='light-font-weight date-font light-text-color'>
          <Skeleton width={70} />
        </div>
        <div>
          <h2 className='blog-list-title medium-font-weight word-wrap-anywhere left-aligned-text'>
            <Skeleton />
          </h2>
        </div>
        <div className='light-font-weight light-text-color'>
          <p className='blog-list-description'>
            <Skeleton />
          </p>
        </div>
        <p>
          <Skeleton />
        </p>
      </div>
    </SkeletonTheme>
  )
}

export default SkeletonLoading
