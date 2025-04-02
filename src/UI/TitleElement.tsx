import { titleSelect } from "../features/blocks/blocks-slice"
import { useAppSelector } from "../utils/reduxHooks"

export const TitleElement = () => {

  const title = useAppSelector(titleSelect)

  if (!title) return null

  return (
    <div className="title">
      <p className="title__text">{title.titleText}</p>
    </div>
  )
}