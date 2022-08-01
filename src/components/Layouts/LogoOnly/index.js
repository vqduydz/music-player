import classNames from 'classnames/bind';
import styles from './LogoOnly.module.scss';
import Sidebar from '../conponent/Sidebar';

const cx = classNames.bind(styles);

function LogoOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default LogoOnly;
