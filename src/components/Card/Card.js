import { Image } from '../shared/Image'

import classes from './Card.module.scss'

export function Card({ ticketData }) {
  const {
    price,
    iconLink,
    route,
    backRoute,
    duration,
    backDuration,
    layovers,
    backLayovers,
    stops,
    backStops,
    date,
    backDate,
  } = ticketData

  return (
    <div className={classes.Card}>
      <div className={classes['Card__price']}>{price} р</div>
      <div className={classes['Card__logoWrapper']}>
        <Image
          src={iconLink}
          alt="s7"
          className={classes['Card__logo']}
          width={110}
          height={36}
        />
      </div>
      <div className={classes['Card__about']}>
        {/* информацию о рейсе "туда" */}
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>{route}</div>
          <div className={classes['Card__value']}>{date}</div>
        </div>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>в пути</div>
          <div className={classes['Card__value_length']}>{duration}</div>
        </div>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>{layovers}</div>
          <div className={classes['Card__value']}>{stops}</div>
        </div>
        {/* информация о рейсе "обратно" */}
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>{backRoute}</div>
          <div className={classes['Card__value']}>{backDate}</div>
        </div>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>в пути</div>
          <div className={classes['Card__value_length']}>{backDuration}</div>
        </div>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>{backLayovers}</div>
          <div className={classes['Card__value']}>{backStops}</div>
        </div>
      </div>
    </div>
  )
}
