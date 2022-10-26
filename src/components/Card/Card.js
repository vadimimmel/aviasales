import { Image } from '../shared/Image'
import classes from './Card.module.scss' //prettrier must change it on single quotes and no semi

export function Card() {
  return (
    <div className={classes.Card}>
      <div className={classes['Card__price']}>13 400 р</div>
      <div className={classes['Card__logoWrapper']}>
        <Image
          src=""
          alt="s7"
          className={classes['Card__logo']}
          width={110}
          height={36}
        />
      </div>
      <div className={classes['Card__about']}>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>MOW – HKT</div>
          <div className={classes['Card__value']}>11:20 – 00:50</div>
        </div>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>В пути</div>
          <div className={classes['Card__value_length']}>13ч 30м</div>
        </div>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>2 пересадки</div>
          <div className={classes['Card__value']}>HKG, JNB</div>
        </div>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>MOW – HKT</div>
          <div className={classes['Card__value']}>11:20 – 00:50</div>
        </div>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>В пути</div>
          <div className={classes['Card__value_length']}>13ч 30м</div>
        </div>
        <div className={classes['Card__info']}>
          <div className={classes['Card__descr']}>2 пересадки</div>
          <div className={classes['Card__value']}>HKG, JNB</div>
        </div>
      </div>
    </div>
  )
}
