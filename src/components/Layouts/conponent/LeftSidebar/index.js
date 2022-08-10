import { Link } from 'react-router-dom';

import styles from './LeftSidebar.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function LeftSidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={'/'} className={cx('logo-btn')}>
                        <img className={cx('icon')} src={images.logo} alt="music player" />
                        <img className={cx('text')} src={images.logof} alt="" />
                    </Link>
                </div>
            </div>
        </aside>
    );
}

export default LeftSidebar;
