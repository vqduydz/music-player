import styles from './LeftSidebar.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import Button from '../../../Button';

const cx = classNames.bind(styles);

function LeftSidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Button logo to="/">
                        <img src={images.logo} alt="music player" />
                    </Button>
                </div>
            </div>
        </aside>
    );
}

export default LeftSidebar;
