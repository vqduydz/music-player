import styles from './RightSidebar.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function RightSidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={images.logo} alt="music player" />
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default RightSidebar;
