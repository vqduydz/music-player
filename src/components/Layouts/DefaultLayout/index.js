import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../conponent/Header';
import LeftSidebar from '../conponent/LeftSidebar';
import RightSidebar from '../conponent/RightSidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('l-sidebar')}>
                <LeftSidebar />
            </div>
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>{children}</div>
            </div>
            <div hidden={true} className={cx('r-sidebar')}>
                <RightSidebar />
            </div>
        </div>
    );
}

export default DefaultLayout;
