import classNames from 'classnames'

import styles from './Image.module.scss'

export function Image({
  src,
  alt,
  className,
  width,
  height,
  circle,
  ...attrs
}) {
  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`
  }

  const cn = classNames(className, { [styles.circle]: circle })

  return (
    // <div className={}>
    <img
      src={src}
      alt={alt}
      className={cn}
      width={width}
      height={height}
      {...attrs}
    />
    // {/* </div> */}
  )
}

Image.defaultProps = {
  src: 'https://via.placeholder.com/110x36',
  alt: 'image name',
  className: '',
  width: 100,
  height: 100,
  circle: false,
}
