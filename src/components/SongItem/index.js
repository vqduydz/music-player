import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SongItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('thumb')}
                src="https://i.scdn.co/image/ab67616d000048510e96dbfa97961513fcf37bd8"
                alt="Thumb"
            />
            <div className={cx('info')}>
                <h4 className={cx('song')}>Tình yêu hoa gió</h4>
                <a href="/" className={cx('artists')}>
                    Trương Thế Vinh
                </a>
            </div>
        </div>
    );
}

export default SongItem;
