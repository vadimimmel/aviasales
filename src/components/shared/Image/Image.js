import classNames from 'classnames'

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

  const cn = classNames(className, { circle })

  return (
    <img
      src={src}
      alt={alt}
      className={cn}
      width={width}
      height={height}
      {...attrs}
    />
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
