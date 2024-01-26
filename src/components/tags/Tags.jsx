import './tags.css'

export default function TagsNames(tags) {
  const tabTxt = tags.scaleValue
  return (
    <ul className={tags.classNameTags}>
      {tabTxt.map((tag, index) => (
        <li key={index} className={tags.classNameList}>
          {tag}
        </li>
      ))}
    </ul>
  )
}
