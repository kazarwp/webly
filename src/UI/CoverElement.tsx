import { coverSelect } from "../features/blocks/blocks-slice"
import { useAppSelector } from "../utils/reduxHooks"

export const CoverElement = () => {

  const coverElement = useAppSelector(coverSelect)

  if (!coverElement) return null

  const { width, height, src } = coverElement

  return (
    <div className="cover">
      <img src={src} alt="обложка" className="cover__img" style={{width: `${width}px`, height: `${height}px`}} />
    </div>
  )
}