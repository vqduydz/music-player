import classNames from 'classnames/bind';
import styles from './LogoOnly.module.scss';
import LeftSidebar from '../conponent/LeftSidebar';

const cx = classNames.bind(styles);

function LogoOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div>
                <LeftSidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default LogoOnly;
